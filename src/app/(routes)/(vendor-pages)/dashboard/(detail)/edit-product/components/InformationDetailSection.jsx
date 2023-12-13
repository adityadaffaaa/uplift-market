"use client";
import React, { useEffect, useState } from "react";
import {
  Input,
  Select,
  SelectItem,
  Textarea,
  Button,
  RadioGroup,
  Radio,
  useDisclosure,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { Toast } from "@/app/components";
import icons from "@/app/utils/icons";
import { useForm, Controller } from "react-hook-form";
import { useCategory } from "@/app/hooks/user/category";
import { createSlug } from "@/app/utils/extensions";
import { useProduct } from "@/app/hooks/vendor/product";
import { useSession } from "next-auth/react";
import { Cookies } from "react-cookie";
import { useSnackbar } from "notistack";
import { animateScroll as scroll } from "react-scroll";
import EditProductModal from "./EditProductModal";

const { AddPhotoAlternateIcon, AddIcon, DeleteIcon } =
  icons.vendorDashboard.addProductVendor;

const InformationDetailSection = ({ slug }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data: session } = useSession();
  const { getOneProduct, editProduct } = useProduct();
  const [alerts, setAlerts] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const cookies = new Cookies();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
    setValue,
    trigger,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      photoProduct: [],
      slug: "",
    },
  });

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 0,
    });
  };

  const getUserSession = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const resJson = await res?.json();
      const token = await resJson.user.token;
      return token;
    } catch (error) {
      console.log("Fetch user session failed!", error);
    }
  };

  // const fetchImageBetter = async () => {
  //   try {
  //     const res = await fetch(
  //       `/api/vendor/product/${slug}`
  //     );
  //     if (res.ok) {
  //     }
  //   } catch (error) {}
  // };

  const fetchOneProduct = async (token) => {
    try {
      const res = await getOneProduct({
        setAlerts,
        token,
        slug,
      });

      if (res.status === 200) {
        const productData = res.data.data;
        const fileImg = [];

        if (productData?.attributes?.image.length) {
          productData?.attributes?.image.map(
            ({ attributes: { image_url } }) =>
              fileImg.push(handleImgUrlToFile(image_url))
          );
        }

        setValue(
          "category",
          productData?.relevant?.category?.attributes?.id
        );
        setValue(
          "description",
          productData?.attributes?.description
        );
        setValue("name", productData?.attributes?.name);
        setValue("photoProduct", fileImg);
        setValue("price", productData?.attributes?.price);
        setValue(
          "slug",
          productData?.relevant?.atributes?.slug
        );
        setIsFetch(true);
      }
    } catch (error) {
      console.log("Fetch one product failed!", error);
    }
  };

  const handleImgUrlToFile = (imgUrl) => {
    const fileName = imgUrl.substring(
      imgUrl.lastIndexOf("/") + 1
    );

    const fileFormat = new File(
      ["File content"],
      fileName,
      { type: "image/png" }
    );

    return fileFormat;
  };

  useEffect(() => {
    getUserSession().then((token) =>
      fetchOneProduct(token)
    );
  }, []);

  useEffect(() => {
    const resMessage = cookies.get("resMessage");

    if (resMessage) {
      enqueueSnackbar({
        message: resMessage,
        variant: "success",
        autoHideDuration: 2000,
      });
      cookies.remove("resMessage");
    }
  }, [scrollToTop]);

  useEffect(() => {
    const nameValue = watch("name");

    if (nameValue) {
      const slugName = createSlug(nameValue);
      setValue("slug", slugName);
    }
  }, [watch("name")]);

  const handleClick = async () => {
    const result = await trigger();
    if (result) {
      onOpen();
    }
  };

  const onSubmit = async (data) => {
    console.log(data);

    const token = await session.user.token;
    try {
      setIsLoading(true);
      const {
        name,
        category,
        description,
        price,
        photoProduct,
      } = data;

      const res = await editProduct({
        category_id: category,
        name,
        description,
        price,
        slug,
        "photo-product[]": photoProduct,
        setAlerts,
        token,
      });

      if (res.status === 200) {
        const resMessage = res.data.message;
        console.log(res);
        cookies.set("resMessage", resMessage);
        setIsLoading(false);
        // scrollToTop();
        router.replace(
          `/dashboard/edit-product/${res.data.data.attributes.slug}`
        );
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("Add product failed!", error);
    }
  };

  return (
    <>
      <Toast duration={2000} alerts={alerts} start />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-[1_1_70%] flex flex-col items-end gap-5"
        encType="multipart/form-data"
      >
        <EditProductModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isConfirm
          onAction={handleSubmit(onSubmit)}
        />
        <InformasiProduct
          formData={register}
          control={control}
          errors={errors}
          getValues={getValues}
        />
        <Media
          control={control}
          errors={errors}
          getValues={getValues}
          setValue={setValue}
          isFetch={isFetch}
        />
        <InformasiPengerjaan formData={register} />
        <Button
          isLoading={isLoading}
          color="primary"
          className="w-full lg:w-auto"
          radius="sm"
          onClick={handleClick}
        >
          Edit Produk
        </Button>
      </form>
    </>
  );
};

const InformasiProduct = ({
  formData,
  control,
  errors,
  getValues,
}) => {
  const [alerts, setAlerts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryVal, setCategoryVal] = useState();

  const cookies = new Cookies();
  const resMessage = cookies.get("resMessage");
  useEffect(() => {
    if (resMessage) {
      setCategoryVal(null);
    }
  }, [resMessage]);

  const fetchCategory = async () => {
    const { getCategories } = useCategory();
    try {
      setIsLoading(true);
      const res = await getCategories({
        setAlerts,
      });
      if (res.status === 200) {
        const data = res.data.data;
        setCategories(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Fetch category failed!", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <Toast alerts={alerts} start duration={2000} />

      <div
        id="informasiProduct"
        className="p-6 bg-white rounded-lg flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col gap-2">
          <h4 className="text-neutral-800 text-heading4">
            Informasi Produk
          </h4>
          <p className="text-paragraph10">
            Format gambar .jpg .jpeg .png dan ukuran minimum
            300 x 300px (Untuk gambar optimal gunakan ukuran
            minimum 700 x 700 px).Pilih foto produk atau
            tarik dan letakkan hingga 5 foto sekaligus di
            sini. Upload min. 3 foto yang menarik dan
            berbeda satu sama lain untuk menarik perhatian
            pembeli.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h6 className="text-paragraph9">Nama Produk</h6>
            <Input
              placeholder="Masukkan nama produk"
              variant="bordered"
              radius="sm"
              color="primary"
              {...formData("name", {
                required: {
                  value: true,
                  message: "Nama produk wajib diisi!",
                },
              })}
              errorMessage={errors?.name?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-paragraph9">
              Kategori Produk
            </h6>
            <Controller
              name="category"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Kategori wajib diisi!",
                },
              }}
              render={({ field }) => (
                <Select
                  id="category"
                  name="category"
                  isLoading={isLoading}
                  variant="bordered"
                  color="primary"
                  radius="sm"
                  selectedKeys={categoryVal}
                  isDisabled
                  onSelectionChange={(value) => {
                    setCategoryVal(value);
                    field.onChange(value);
                  }}
                  classNames={{ value: "capitalize" }}
                  items={categories}
                  defaultValue={getValues("category")}
                  placeholder="Pilih Kategori Produk"
                >
                  {({ id, name }, index) => (
                    <SelectItem
                      color="primary"
                      classNames={{ title: "capitalize" }}
                      key={index}
                      value={id}
                    >
                      {name}
                    </SelectItem>
                  )}
                </Select>
              )}
            />
            <p className="text-danger-500 text-xs">
              {errors?.category?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-paragraph9">
              Deskripsi Produk
            </h6>
            <Textarea
              placeholder="Enter your description"
              variant="bordered"
              radius="sm"
              isDisabled
              color="primary"
              rows={10}
              {...formData("description", {
                required: {
                  value: true,
                  message: "Deskripsi wajib diisi!",
                },
              })}
              errorMessage={errors?.description?.message}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-paragraph9">
              Harga Produk
            </h6>
            <Input
              placeholder="Masukkan Harga Produk"
              variant="bordered"
              type="number"
              radius="sm"
              color="primary"
              {...formData("price", {
                required: {
                  value: true,
                  message: "Harga produk wajib diisi!",
                },
              })}
              classNames={{
                inputWrapper: "px-0 overflow-hidden",
              }}
              startContent={
                <div className="bg-neutral-100 border-r-2 border-r-neutral-200 p-4 text-paragraph9 text-neutral-800">
                  Rp
                </div>
              }
              errorMessage={errors?.price?.message}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Media = ({
  control,
  errors,
  getValues,
  setValue,
  isFetch,
}) => {
  const [fileRendered, setFileRendered] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAll, setIsAll] = useState(null);
  const [images, setImages] = useState([]);
  const cookies = new Cookies();
  const resMessage = cookies.get("resMessage");

  useEffect(() => {
    if (resMessage) {
      setFileRendered([]);
    }
  }, [resMessage]);

  useEffect(() => {
    if (isFetch) {
      handleRender(getValues("photoProduct"));
      // getValues("photoProduct").map((value) => {
      //   fileRendered.push(value?.attributes?.image_url);
      // });
    }
  }, [isFetch]);

  const handleRender = (files = []) => {
    if (files.length) {
      try {
        files.forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            setFileRendered((values) => [
              ...values,
              e.target.result,
            ]);
          };
          reader.readAsDataURL(file);
        });
      } catch (error) {
        console.log("Render image failed!", error);
      }
    }
  };

  return (
    <>
      <EditProductModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isAllImage={isAll}
        onAction={() => {
          const valueForm = getValues("photoProduct");
          const newValueForm = [...valueForm];

          if (isAll) {
            setFileRendered([]);
            setImages([]);
            newValueForm.splice(0, 5);
            setValue("photoProduct", newValueForm);
          } else {
            const value = [...fileRendered];
            const valImages = [...images];
            value.splice(selectedIndex, 1);
            valImages.splice(selectedIndex, 1);
            setImages(valImages);
            setFileRendered(value);
            newValueForm.splice(selectedIndex, 1);
            setValue("photoProduct", newValueForm);
          }
        }}
      />
      <div
        id="media"
        className="p-6 bg-white rounded-lg flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col gap-2">
          <h4 className="text-neutral-800 text-heading4">
            Media
          </h4>
          <p className="text-paragraph10">
            Format gambar .jpg .jpeg .png dan ukuran minimum
            300 x 300px (Untuk gambar optimal gunakan ukuran
            minimum 700 x 700 px).Pilih foto produk atau
            tarik dan letakkan hingga 5 foto sekaligus di
            sini. Upload min. 3 foto yang menarik dan
            berbeda satu sama lain untuk menarik perhatian
            pembeli.
          </p>
        </div>

        <Controller
          name="photoProduct"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Foto produk wajib diisi!",
            },
            validate: {
              validLength: () => {
                const imageLen =
                  getValues("photoProduct").length;
                return imageLen <= 5 || "Maksimal 5 Foto";
              },
              validFormat: () => {
                const values = getValues(
                  "photoProduct"
                ).map(({ type }) => type);
                if (!values)
                  return "Format file wajib ada!";

                const allowedFormats = [
                  "image/png",
                  "image/jpeg",
                  "image/jpg",
                ];

                return (
                  values.map((value) =>
                    allowedFormats.includes(value)
                  ) || "Format file invalid!"
                );
              },
            },
          }}
          render={({ field }) => (
            <label className="flex flex-wrap lg:flex lg:justify-between gap-2">
              <input
                id="photoProduct"
                type={
                  fileRendered.length === 5 ? "" : "file"
                }
                className="sr-only"
                multiple
                accept=".png, .jpg, .jpeg"
                onChange={(value) => {
                  field.onChange([
                    ...field.value,
                    ...value?.target?.files,
                  ]);
                  handleRender([...value.target.files]);
                }}
              />
              {[1, 2, 3, 4, 5].map((_, index) => {
                const rendered = fileRendered[index];
                console.log(rendered);
                return (
                  <UploadFoto
                    key={index}
                    isInput
                    image={rendered}
                    onDelete={() => {
                      onOpen();
                      setIsAll(false);
                      setSelectedIndex(index);
                    }}
                  />
                );
              })}
            </label>
          )}
        />
        <p className="text-danger-500 text-xs">
          {errors?.photoProduct?.message}
        </p>
        {fileRendered.length ||
        getValues("photoProduct").length ? (
          <div className="flex justify-end">
            <Button
              onClick={() => {
                onOpen();
                setIsAll(true);
              }}
              radius="sm"
              color="danger"
            >
              Hapus Semua
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

const InformasiPengerjaan = ({ formData }) => {
  return (
    <div
      id="informasiPengerjaan"
      className="p-6 bg-white rounded-lg flex flex-col gap-6 w-full"
    >
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Informasi Pengerjaan
        </h4>
        <p className="text-paragraph10">
          Masukkan jumlah revisi untuk pengerjaan produk ini
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Waktu Pengerjaan
        </h4>
        <div className="flex gap-2">
          <Select
            className="max-w-xs"
            variant="bordered"
            color="primary"
            radius="sm"
            placeholder="Masukkan Waktu Proses"
          >
            <SelectItem color="primary" value="fotografi">
              Fotografi
            </SelectItem>
            <SelectItem color="primary" value="videografi">
              Videografi
            </SelectItem>
          </Select>
          <Select
            className="max-w-xs"
            variant="bordered"
            color="primary"
            radius="sm"
            placeholder="Hari"
          >
            <SelectItem color="primary" value="fotografi">
              Fotografi
            </SelectItem>
            <SelectItem color="primary" value="videografi">
              Videografi
            </SelectItem>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Jumlah Revisi
        </h4>
        <Select
          variant="bordered"
          color="primary"
          radius="sm"
          placeholder="Pilih Jumlah Batas Revisi"
        >
          <SelectItem color="primary" value="fotografi">
            Fotografi
          </SelectItem>
          <SelectItem color="primary" value="videografi">
            Videografi
          </SelectItem>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-neutral-800 text-heading4">
          Apakah perlu mengirimkan barang ke lokasi?
        </h4>
        <p className="text-paragraph10">
          Jika Ya, maka pembeli akan mengirim ke lokasi
          sesuai ada yang di{" "}
          <span className="font-bold">pengaturan</span>
        </p>
      </div>
      <RadioGroup>
        <div className="flex gap-4">
          <Radio value="buenos-aires">Ya</Radio>
          <Radio value="sydney">Tidak</Radio>
        </div>
      </RadioGroup>
    </div>
  );
};

const UploadFotoMobile = () => {
  return (
    <div className="p-3 bg-neutral-100 rounded-lg lg:hidden">
      <AddIcon />
    </div>
  );
};

const UploadFoto = ({
  isInput,
  image,
  onDelete = () => {},
  ref,
}) => {
  return (
    <div className="relative">
      {image && (
        <Button
          isIconOnly
          radius="full"
          color="danger"
          size="md"
          className="absolute -top-1 -right-1 z-30"
          onClick={onDelete}
          ref={ref}
        >
          <DeleteIcon
            className={"text-white text-[18px]"}
          />
        </Button>
      )}
      <div
        className={`cursor-pointer rounded-xl border-2 border-dotted gap-3 flex flex-col text-neutral-400 items-center justify-center overflow-hidden w-[150px] h-[150px] aspect-square  ${
          !isInput && "bg-neutral-100"
        } ${!image ? " p-6" : "p-0"}`}
      >
        {!image ? (
          <>
            <AddPhotoAlternateIcon />
            <p className="text-paragraph10 text-center">
              Foto Utama
            </p>
          </>
        ) : (
          <img
            className="h-full w-full object-cover"
            src={image}
            alt="img"
          />
        )}
      </div>
    </div>
  );
};

export default InformationDetailSection;
