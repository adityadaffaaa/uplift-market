"use client";

import React, { useMemo } from "react";

import {
  TextInput,
  FileInput,
  useSkeletons,
} from "@/app/components";
import { Input } from "@nextui-org/react";
import { AsyncPaginate } from "react-select-async-paginate";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

export const SecondStep = ({ formData, error }) => {
  const { GoogleMapsSkeleton } = useSkeletons();

  const loadOptions = () => {
    return {
      options: {},
    };
  };

  const handleChange = () => {};

  const { isLoaded } = useLoadScript({
    language: "ID",
    region: "ID",
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    <>
      <Input
        id="businessName"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="Nama Bisnis"
        {...formData("businessName", {
          required: {
            value: true,
            message: "Nama bisnis wajib diisi!",
          },
        })}
        isRequired
      />
      <FileInput
        title={"Upload Logo"}
        id={"businessLogo"}
        name={"businessLogo"}
        htmlFor={"businessLogo"}
        {...formData("businessLogo", {
          required: {
            value: true,
          },
        })}
      />
      <Input
        id="businessEmail"
        type="email"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="Email Bisnis"
        {...formData("businessEmail", {
          required: {
            value: true,
            message: "Email bisnis wajib diisi!",
          },
          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        })}
        isRequired
      />
      <Input
        id="businessPhoneNumber"
        type="number"
        className="text-paragraph "
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="No. Handphone Bisnis"
        {...formData("businessPhoneNumber", {
          required: {
            value: true,
            message: "No hp bisnis wajib diisi!",
          },
          valueAsNumber: true,
          pattern: /^[1-9][0-9]{9,15}$/,
        })}
        isRequired
      />
      <Input
        id="completeAddress"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="Alamat Lengkap"
        {...formData("completeAddress", {
          required: {
            value: true,
            message: "Alamat lengkap bisnis wajib diisi!",
          },
        })}
        isRequired
      />

      <AsyncPaginate
        loadOptions={loadOptions}
        onChange={handleChange}
        placeholder={"Provinsi"}
        debounceTimeout={600}
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderRadius: "8px",
            borderColor: state.isFocused ? "#078F6E" : null,
            padding: "8px",
            cursor: "pointer",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: "white",
          }),
        }}
      />
      <div className="gap-4 md:flex md:space-y-0 space-y-4">
        <AsyncPaginate
          className="flex-1"
          loadOptions={loadOptions}
          onChange={handleChange}
          placeholder={"Kota/Kabupaten"}
          debounceTimeout={600}
          styles={{
            control: (provided, state) => ({
              ...provided,
              borderRadius: "8px",
              borderColor: state.isFocused
                ? "#078F6E"
                : null,
              padding: "8px",
              cursor: "pointer",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: "white",
            }),
          }}
        />
        <Input
          id="postalCode"
          type="number"
          className="text-paragraph flex-1"
          radius="sm"
          variant="bordered"
          color="primary"
          labelPlacement="inside"
          label="Kode Pos"
          {...formData("postalCode", {
            required: {
              value: true,
              message: "Kode pos wajib diisi!",
            },
          })}
          isRequired
        />
      </div>
      {isLoaded ? <Map /> : <GoogleMapsSkeleton />}
      <div className="gap-4 md:flex md:space-y-0 space-y-4">
        <Input
          id="websiteUrl"
          type="url"
          className="text-paragraph"
          radius="sm"
          variant="bordered"
          color="primary"
          labelPlacement="inside"
          label="Website (optional)"
          {...formData("websiteUrl", {
            required: false,
          })}
        />
        <Input
          id="instagram"
          type="text"
          className="text-paragraph"
          radius="sm"
          variant="bordered"
          color="primary"
          labelPlacement="inside"
          label="Instagram"
          {...formData("instagram", {
            required: false,
          })}
        />
      </div>
    </>
  );
};

const Map = () => {
  const center = { lat: -7.311596, lng: 112.781621 };
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="w-full h-[500px] rounded-lg"
    >
      <Marker
        title="Alamat Bisnis Anda"
        position={center}
      />
    </GoogleMap>
  );
};

export default SecondStep;
