"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";
import DataTable from "react-data-table-component";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { ModalDelete } from "../../../components";
import { useDisclosure } from "@nextui-org/react";
import { useProduct } from "@/app/hooks/vendor/product";
import { Toast } from "@/app/components";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  CurrencyConverter,
  DateConverter,
} from "@/app/utils/extensions";

import { useSnackbar } from "notistack";

const {
  SearchIcon,
  VisibilityIcon,
  ShoppingBagOutlineIcon,
  EditOutlineIcon,
  DeleteIcon,
} = icons.vendorDashboard.productListVendor;

const ProductListVendor = () => {
  const { data: session } = useSession();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { enqueueSnackbar } = useSnackbar();

  const [alerts, setAlerts] = useState([]);

  const [slug, setSlug] = useState("");

  const [rowId, setRowId] = useState(null);

  const [data, setData] = useState([]);

  const [pending, setPending] = useState(false);

  const [isFetching, setIsFetching] = useState(false);

  const { getListProduct, deleteProduct } = useProduct();

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

  const getProducts = async (token) => {
    if (token) {
      try {
        setPending(true);
        const res = await getListProduct({
          setAlerts,
          token,
        });

        if (res?.status === 200) {
          setPending(false);

          return res?.data?.data;
        }
      } catch (error) {
        setPending(false);
        console.error("Something wrong", error);
      }
    }
  };

  useEffect(() => {
    setIsFetching(true);
  }, []);

  useEffect(() => {
    if (isFetching) {
      getUserSession().then((token) =>
        getProducts(token).then((res) =>
          handleProductData(res)
        )
      );
    }
  }, [isFetching]);

  const handleProductData = (res) => {
    res?.map(({ id, relevant, attributes }) => {
      const {
        name,
        slug,
        description,
        price,
        image,
        rating,
        created_at,
      } = attributes;

      setData((values) => [
        ...values,
        {
          id: id,
          title: <TitleItem image={image} name={name} />,
          category: "Fotografi",
          price: <CurrencyConverter amount={price} />,
          date: <DateConverter isoDate={created_at} />,
          status: <Switch color="primary" />,
          slug: slug,
        },
      ]);
    });
  };

  const selectProps = {
    indeterminate: (isIndeterminate) => isIndeterminate,
  };

  const customStyles = {
    table: {
      style: {
        borderRadius: "0px 0px 12px 12px",
        overflow: "hidden",
        padding: "12px",
      },
    },
    subHeader: {
      style: {
        borderRadius: "12px 12px 0px 0px",
        overflow: "hidden",
        padding: "0px",
        margin: "0px",
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        padding: "16px",
      },
    },
  };
  // const handleDeleteRow = (rowId) => {

  // };

  const columns = [
    {
      name: "Produk",
      selector: (row) => row.title,
      sortable: true,
      width: "30%",
    },
    {
      name: "Kategori",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Harga",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Tgl. Ditambahkan",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      width: "10%",
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
      cell: (row) => {
        return (
          <ActionItem
            slug={row.slug}
            onOpen={onOpen}
            setSlug={setSlug}
            rowId={row.id}
            setRowId={setRowId}
          />
        );
      },
      width: "15%",
    },
  ];

  // const [filterText, setFilterText] = useState("");

  // const subHeaderComponentMemo = React.useMemo(() => {
  //   const handleClear = () => {
  //     if (filterText) {
  //       setResetPaginationToggle(!resetPaginationToggle);
  //       setFilterText("");
  //     }
  //   };

  //   return (
  //     <div className="flex flex-col items-start gap-3 md:gap-0 md:flex-row justify-between w-full md:items-center lg:p-4">
  //       <h1 className="text-heading6">List Produk Saya</h1>
  //       <div className="w-full md:w-auto">
  //         <Input
  //           onClear={handleClear}
  //           variant="bordered"
  //           color="primary"
  //           placeholder="Cari produk disini..."
  //           radius="sm"
  //           endContent={<SearchIcon />}
  //         />
  //       </div>
  //     </div>
  // <FilterComponent
  //   onFilter={(e) => setFilterText(e.target.value)}
  //   onClear={handleClear}
  //   filterText={filterText}
  // />
  //   );
  // }, [filterText, resetPaginationToggle]);

  // const filterData = (data, filterText) => {
  //   return data.filter((value) => {
  //     return value.item
  //       .toLowerCase()
  //       .includes(filterText.toLowerCase());
  //   });
  // };

  // const handleFilterChange = (event) => {
  //   setFilterText(event.target.value);
  // };

  const onDelete = async () => {
    const token = session?.user.token;
    console.log(token);
    try {
      const res = await deleteProduct({
        setAlerts,
        slug,
        token,
      });

      console.log(res);
      if (res.status === 200) {
        const newData = data.filter(
          (row) => row.id !== rowId
        );
        setData(newData);
        const resMessage = res.data.message;
        enqueueSnackbar({
          message: resMessage,
          variant: "success",
          autoHideDuration: 2000,
        });
      }
    } catch (error) {
      console.log("Delete Product Failed!", error);
    }
  };

  return (
    <>
      <Toast du ration={2000} alerts={alerts} start />
      <ModalDelete
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onAction={onDelete}
      />
      <div>
        <DataTable
          columns={columns}
          className="custom-scrollbar"
          data={data}
          subHeader
          progressPending={pending}
          progressComponent={
            <span className="loading loading-dots loading-lg text-primary"></span>
          }
          subHeaderComponent={
            <div className="flex flex-col items-start gap-3 md:gap-0 md:flex-row justify-between w-full md:items-center lg:p-4">
              <h1 className="text-heading6">
                List Produk Saya
              </h1>
              <div className="w-full md:w-auto">
                <Input
                  variant="bordered"
                  color="primary"
                  placeholder="Cari produk disini..."
                  radius="sm"
                  endContent={<SearchIcon />}
                />
              </div>
            </div>
          }
          // fixedHeader
          // fixedHeaderScrollHeight="350px"
          selectableRows
          pagination
          customStyles={customStyles}
          selectableRowsComponent={Checkbox}
          selectableRowsComponentProps={selectProps}
          highlightOnHover
        />
      </div>
    </>
  );
};

const TitleItem = ({ name, image = [] }) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={
          image.length
            ? image[0].attributes.image_url
            : "/assets/images/productVendorDashboard.png"
        }
        alt="porto"
        className="w-20 lg:w-14 aspect-square rounded-lg object-cover"
      />
      <div className="flex flex-col gap-1">
        <p className="text-paragraph9 ">{name}</p>
        <div className="flex flex-row justify-between">
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-1">
              <VisibilityIcon />
              <p className="text-paragraph9 text-textGrey">
                129
              </p>
            </div>
            <div className="flex items-center gap-x-1">
              <ShoppingBagOutlineIcon />
              <p className="text-paragraph9 text-textGrey">
                20
              </p>
            </div>
          </div>

          <Button
            radius="full"
            size="sm"
            variant="bordered"
            className="lg:hidden"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

const ActionItem = ({
  onOpen,
  slug = "",
  setSlug,
  rowId,
  setRowId,
}) => {
  return (
    <div className="flex gap-2">
      <Link href={`/dashboard/edit-product/${slug}`}>
        <Button
          isIconOnly
          radius="sm"
          variant="bordered"
          color="primary"
          aria-label="Edit"
        >
          <EditOutlineIcon />
        </Button>
      </Link>
      <Button
        onClick={() => {
          setSlug(slug);
          setRowId(rowId);
          onOpen();
        }}
        isIconOnly
        radius="sm"
        variant="bordered"
        color="danger"
        aria-label="Delete"
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default ProductListVendor;
