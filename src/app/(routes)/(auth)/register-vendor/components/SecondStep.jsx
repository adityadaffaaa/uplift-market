"use client";

import React, { useState, useEffect } from "react";
import {
  FileInput,
  useSkeletons,
  Toast,
} from "@/app/components";
import { Input } from "@nextui-org/react";
import { AsyncPaginate } from "react-select-async-paginate";
import AsyncSelect from "react-select/async";
import debounce from "lodash.debounce";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
} from "@react-google-maps/api";
import { useAddress } from "@/app/hooks/user/address";

export const SecondStep = ({
  formData,
  control,
  Controller,
  watch,
  getValues,
  setValue,
  errors,
  fileDefaultValue,
}) => {
  const { getProvince, getCity, getSearchLocation } =
    useAddress();

  const [map, setMap] = useState(
    /** @type google.maps.Map */ (null)
  );

  const [provinceCode, setProvinceCode] = useState(null);

  const [center, setCenter] = useState({
    lat: -7.311596,
    lng: 112.781621,
  });

  const [alerts, setAlerts] = useState([]);

  const { GoogleMapsSkeleton } = useSkeletons();

  useEffect(() => {
    const provCodeStorage =
      localStorage.getItem("provinceCode");

    const latLngStorage = localStorage.getItem("valLatLng");

    if (provCodeStorage) {
      setProvinceCode(provCodeStorage);
    }

    if (latLngStorage) {
      const [lat, lng] = latLngStorage.split(" ");

      setCenter({
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      });
    }
  }, []);

  useEffect(() => {
    const businessNameValue = watch("businessName");

    if (businessNameValue) {
      const slugBusinessName = createSlug(
        businessNameValue
      );
      setValue("slug", slugBusinessName);
    }
  }, [watch("businessName")]);

  const provinceLoadOptions = async (value) => {
    try {
      const res = await getProvince({
        setAlerts,
        name: value,
      });

      if (res?.status === 200) {
        return {
          options: res.data.data.map(({ code, name }) => ({
            value: code,
            label: name.toLowerCase(),
          })),
        };
      }

      return {
        options: [],
      };
    } catch (error) {
      console.error("Something wrong", error);
      return {
        options: [],
      };
    }
  };

  const cityLoadOptions = debounce(
    async (value, callback) => {
      try {
        if (!provinceCode && provinceCode === null) {
          const options = [
            {
              value: null,
              label: "Isi provinsi terlebih dahulu!",
            },
          ];

          callback(options);
        } else {
          const res = await getCity({
            setAlerts,
            name: value,
            province_code: provinceCode,
          });

          // return {
          //   options:
          //     res?.data?.data?.length > 0
          //       ? res.data.data.map(({ code, name }) => ({
          //           value: code,
          //           label: name,
          //         }))
          //       : [],
          // };

          const options =
            res?.data?.data?.length > 0
              ? res.data.data.map(({ code, name }) => ({
                  value: code,
                  label: name.toLowerCase(),
                }))
              : [];

          callback(options);
        }
      } catch (error) {
        console.error("Something wrong", error);
      }
    },
    1000
  );

  const addressLoadOptions = async (value) => {
    try {
      if (value.length <= 0) {
        return {
          options: [
            { value: null, label: "Belum ada hasil!" },
          ],
        };
      }
      const res = await getSearchLocation({
        setAlerts,
        address: value,
      });

      if (res?.status === 200) {
        return {
          options: res.data.data.map(
            ({ address, location }) => ({
              value: `${location.latitude} ${location.longitude}`,
              label: address,
            })
          ),
        };
      }

      return {
        options: [],
      };
    } catch (error) {
      console.error("Something wrong", error);
    }
  };

  const provinceHandleChange = (data) => {
    setProvinceCode(data.value);
  };

  const cityHandleChange = (data) => {};

  const addressHandleChange = (data) => {
    if (data.value !== null) {
      const [lat, lng] = data.value.split(" ");

      setValue("latitude", lat);
      setValue("longitude", lng);
      setValue("address", data.label);

      setCenter({
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      });
    }
  };

  const { isLoaded } = useLoadScript({
    language: "ID",
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const createSlug = (text) => {
    text = text.toLowerCase();
    text = text.replace(/ /g, "-");
    text = text.replace(/[^a-z0-9-]/g, "");
    return text;
  };

  return (
    <>
      <Toast start duration={2000} alerts={alerts} />
      <Input
        id="businessName"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        defaultValue={getValues("businessName")}
        color="primary"
        labelPlacement="inside"
        label="Nama Bisnis"
        {...formData("businessName", {
          required: {
            value: true,
            message: "Nama bisnis wajib diisi!",
          },
        })}
        errorMessage={errors?.businessName?.message}
        isRequired
      />

      <Controller
        name="businessLogo"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Logo bisnis wajib diisi!",
          },
          validate: {
            validFormat: () => {
              const value = getValues("businessLogo");
              if (!value) return "Format file wajib ada!";
              const allowedFormats = [
                "image/png",
                "image/jpeg",
                "image/jpg",
              ];
              return (
                allowedFormats.includes(value.type) ||
                "Format file invalid!"
              );
            },
            validSize: () => {
              const value = getValues("businessLogo");
              if (!value) return "Ukuran file wajib ada!";
              return (
                value.size <= 2097152 ||
                "Ukuran file terlalu besar!"
              );
            },
          },
        }}
        render={({ field }) => (
          <FileInput
            title={"Upload Logo"}
            id={"businessLogo"}
            name={"businessLogo"}
            htmlFor={"businessLogo"}
            defaultValue={fileDefaultValue.businessLogo}
            setFile={(data) => field.onChange(data)}
            nameItem={"businessLogo"}
            errorMessage={errors?.businessLogo?.message}
          />
        )}
      />
      <Input
        id="businessEmail"
        type="email"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        defaultValue={getValues("businessEmail")}
        color="primary"
        labelPlacement="inside"
        label="Email Bisnis"
        {...formData("businessEmail", {
          required: {
            value: true,
            message: "Email bisnis wajib diisi!",
          },
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Format email bisnis tidak valid!",
          },
        })}
        errorMessage={errors?.businessEmail?.message}
        isRequired
      />
      <Input
        id="businessPhoneNumber"
        type="number"
        className="text-paragraph "
        radius="sm"
        defaultValue={getValues("businessPhoneNumber")}
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="No. Handphone Bisnis"
        {...formData("businessPhoneNumber", {
          required: {
            value: true,
            message: "No hp bisnis wajib diisi!",
          },
          pattern: {
            value: /^[0-9][0-9]{9,15}$/,
            message: "Format no hp tidak valid!",
          },
        })}
        errorMessage={errors?.businessPhoneNumber?.message}
        isRequired
      />
      <div className="flex flex-col gap-1">
        <Controller
          name="province"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Provinsi wajib diisi!",
            },
          }}
          render={({ field }) => (
            <AsyncPaginate
              defaultValue={getValues("province")}
              id="province"
              name="province"
              loadOptions={provinceLoadOptions}
              onChange={(data) => {
                provinceHandleChange(data);
                field.onChange(data.label);
                localStorage.setItem(
                  "provinceCode",
                  data.value
                );
              }}
              placeholder={
                getValues("province")
                  ? getValues("province")
                  : "Provinsi"
              }
              debounceTimeout={1000}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  borderRadius: "8px",
                  padding: "8px",
                  border: "2px solid rgb(229,229,229)",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: state.isFocused
                      ? "#1C9275"
                      : "#A8A9B0",
                  },
                  cursor: "text",
                  textTransform: "capitalize",
                }),
                option: (provided, state) => ({
                  ...provided,
                  cursor: "pointer",
                  padding: "12px",
                  color: "black",
                  borderBottomWidth: "1px",
                  backgroundColor: state.isSelected
                    ? "rgb(225,225,225)"
                    : "white",
                  textTransform: "capitalize",
                }),
              }}
            />
          )}
        />
        {errors?.province?.message && (
          <p className="text-danger-500 text-xs">
            {errors?.province?.message}
          </p>
        )}
      </div>
      <div className="gap-4 md:flex md:space-y-0 space-y-4">
        <div className="flex flex-col gap-1 flex-1">
          <Controller
            name="city"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Kota/kabupaten wajib diisi!",
              },
            }}
            render={({ field }) => (
              <AsyncSelect
                id="city"
                loadOptions={cityLoadOptions}
                onChange={(data) => {
                  cityHandleChange(data);
                  field.onChange(data.label.toLowerCase());
                }}
                placeholder={
                  getValues("city")
                    ? getValues("city")
                    : "Kota/Kabupaten"
                }
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    borderRadius: "8px",
                    padding: "8px",
                    border: "2px solid rgb(229,229,229)",
                    boxShadow: "none",
                    "&:hover": {
                      borderColor: state.isFocused
                        ? "#1C9275"
                        : "#A8A9B0",
                    },
                    cursor: "text",
                    textTransform: "capitalize",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    cursor: "pointer",
                    padding: "12px",
                    color: "black",
                    borderBottomWidth: "1px",
                    backgroundColor: state.isSelected
                      ? "rgb(225,225,225)"
                      : "white",
                    textTransform: "capitalize",
                  }),
                }}
                isDisabled={
                  !provinceCode && provinceCode === null
                }
              />
            )}
          />
          {errors?.city?.message && (
            <p className="text-danger-500 text-xs">
              {errors?.city?.message}
            </p>
          )}
        </div>
        <Input
          id="postalCode"
          type="number"
          className="text-paragraph flex-1 "
          classNames={{
            inputWrapper: "h-full",
          }}
          radius="sm"
          variant="bordered"
          errorMessage={errors?.postalCode?.message}
          color="primary"
          placeholder="Kode Pos"
          {...formData("postalCode", {
            required: {
              value: true,
              message: "Kode pos wajib diisi!",
            },
            validate: {
              maxLength: (value) =>
                value.length <= 5 ||
                "Kode pos maksimal 5 digit!",
            },
          })}
          isRequired
        />
      </div>
      <div className="flex flex-col gap-1">
        <Controller
          name="point"
          control={control}
          rules={{
            required: {
              value: true,
              message:
                "Pencarian titik alamat wajib diisi!",
            },
          }}
          render={({ field }) => (
            <AsyncPaginate
              id="point"
              name="point"
              loadOptions={addressLoadOptions}
              onChange={(data) => {
                addressHandleChange(data);
                localStorage.setItem(
                  "valLatLng",
                  data.value
                );
                field.onChange(data.label);
              }}
              placeholder={
                getValues("point")
                  ? getValues("point")
                  : "Ketik alamat mu disini..."
              }
              debounceTimeout={1000}
              styles={{
                control: (provided, state) => ({
                  ...provided,
                  borderRadius: "8px",
                  padding: "8px",
                  border: "2px solid rgb(229,229,229)",
                  boxShadow: "none",
                  "&:hover": {
                    borderColor: state.isFocused
                      ? "#1C9275"
                      : "#A8A9B0",
                  },
                  cursor: "text",
                }),
                option: (provided, state) => ({
                  ...provided,
                  cursor: "pointer",
                  padding: "12px",
                  color: "black",
                  borderBottomWidth: "1px",
                  backgroundColor: state.isSelected
                    ? "rgb(225,225,225)"
                    : "white",
                }),
              }}
            />
          )}
        />
        {errors?.point?.message && (
          <p className="text-danger-500 text-xs">
            {errors?.point?.message}
          </p>
        )}
      </div>
      {isLoaded ? (
        <Map
          center={center}
          setCenter={setCenter}
          setMap={setMap}
          map={map}
        />
      ) : (
        <GoogleMapsSkeleton />
      )}
      <Input
        id="address"
        className="text-paragraph "
        radius="sm"
        classNames={{
          base: "h-14",
          inputWrapper: "h-full",
        }}
        defaultValue={getValues("address")}
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        placeholder="Nama Jalan, Gedung, No. Rumah"
        {...formData("address", {
          required: {
            value: true,
            message: "Alamat lengkap bisnis wajib diisi!",
          },
        })}
        errorMessage={errors?.name?.message}
        isRequired
      />

      <div className="gap-4 md:flex md:space-y-0 space-y-4">
        <Input
          id="websiteUrl"
          type="url"
          defaultValue={getValues("websiteUrl")}
          className="text-paragraph"
          radius="sm"
          variant="bordered"
          color="primary"
          labelPlacement="inside"
          label="Website"
          {...formData("websiteUrl", {
            required: {
              value: true,
              message: "Website url wajib diisi!",
            },
          })}
          errorMessage={errors?.websiteUrl?.message}
        />
        <Input
          id="instagram"
          type="text"
          className="text-paragraph"
          defaultValue={getValues("instagram")}
          radius="sm"
          variant="bordered"
          color="primary"
          labelPlacement="inside"
          label="Instagram"
          {...formData("instagram", {
            required: {
              true: true,
              message: "Instagram wajib diisi!",
            },
          })}
          errorMessage={errors?.instagram?.message}
        />
      </div>
    </>
  );
};

const Map = ({ center, setCenter, setMap, map }) => {
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="w-full h-[500px] rounded-lg"
      onDragEnd={() => {
        const lat = map.getCenter().lat();
        const lng = map.getCenter().lng();
        setCenter({
          lat,
          lng,
        });
      }}
      onLoad={(map) => setMap(map)}
    >
      <MarkerF
        title="Alamat Bisnis Anda"
        position={center}
        draggable
        onLoad={(marker) => {
          marker.addListener("drag", () => {
            const lat = marker.getPosition().lat();
            const lng = marker.getPosition().lng();
            setCenter({
              lat,
              lng,
            });
          });
        }}
      />
    </GoogleMap>
  );
};

export default SecondStep;
