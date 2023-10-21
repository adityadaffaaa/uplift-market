"use client";

import React, { useState, useRef } from "react";
import {
  FileInput,
  useSkeletons,
  Toast,
} from "@/app/components";
import { Input } from "@nextui-org/react";
import { AsyncPaginate } from "react-select-async-paginate";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
} from "@react-google-maps/api";
import { useAddress } from "@/app/hooks/address";

export const SecondStep = ({ formData, error }) => {
  const { getSearchLocation } = useAddress();

  const [map, setMap] = useState(
    /** @type google.maps.Map */ (null)
  );

  const [marker, setMarker] = useState(
    /** @type google.maps.Marker */ (null)
  );

  const [center, setCenter] = useState({
    lat: -7.311596,
    lng: 112.781621,
  });

  const [alerts, setAlerts] = useState([]);

  const { GoogleMapsSkeleton } = useSkeletons();

  const addressLoadOptions = async (value) => {
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

    return {
      options: res.data.results.map(
        ({ formatted_address, geometry }) => ({
          value: `${geometry.location.lat} ${geometry.location.lng}`,
          label: formatted_address,
        })
      ),
    };
  };

  const handleChange = async (data) => {
    if (data.value !== null) {
      const [lat, lng] = data.value.split(" ");

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

  return (
    <>
      <Toast start duration={2000} alerts={alerts} />
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
      {/* <FileInput
        title={"Upload Logo"}
        id={"businessLogo"}
        name={"businessLogo"}
        htmlFor={"businessLogo"}
        {...formData("businessLogo", {
          required: {
            value: true,
          },
        })}
      /> */}
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
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Format email bisnis tidak valid!",
          },
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
        // {...formData("businessPhoneNumber", {
        //   required: {
        //     value: true,
        //     message: "No hp bisnis wajib diisi!",
        //   },
        //   valueAsNumber: {
        //     value: true,
        //     message: "No hp bisnis wajib berisi angka!",
        //   },
        //   pattern: {
        //     value: /^[1-9][0-9]{9,15}$/,
        //     message: "Format no hp tidak valid!",
        //   },
        // })}
        isRequired
      />

      {/* <AsyncPaginate
        loadOptions={provinceLoadOptions}
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
          option: (provided) => ({
            ...provided,
            backgroundColor: "white",
          }),
        }}
      />
      <div className="gap-4 md:flex md:space-y-0 space-y-4">
        <AsyncPaginate
          className="flex-1"
          loadOptions={cityLoadOptions}
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
            option: (provided) => ({
              ...provided,
              backgroundColor: "white",
              cursor: "pointer",
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
      </div> */}

      <AsyncPaginate
        loadOptions={addressLoadOptions}
        onChange={handleChange}
        placeholder={"Ketik alamat mu disini!"}
        debounceTimeout={1000}
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderRadius: "8px",
            borderColor: state.isFocused ? "#078F6E" : null,
            padding: "8px",
            cursor: "pointer",
          }),
          option: (provided) => ({
            ...provided,
            backgroundColor: "white",
          }),
        }}
      />
      {isLoaded ? (
        <Map
          center={center}
          setMap={setMap}
          setMarker={setMarker}
        />
      ) : (
        <GoogleMapsSkeleton />
      )}
      <Input
        id="completeAddress"
        className="text-paragraph"
        radius="sm"
        variant="bordered"
        color="primary"
        labelPlacement="inside"
        label="Nama Jalan, Gedung, No. Rumah"
        {...formData("completeAddress", {
          required: {
            value: true,
            message: "Alamat lengkap bisnis wajib diisi!",
          },
        })}
        isRequired
      />
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

const Map = ({ center }) => {
  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="w-full h-[500px] rounded-lg"
      // onLoad={(map) => setMap(map)}
    >
      <MarkerF
        title="Alamat Bisnis Anda"
        position={center}
        // onLoad={(marker) => setMarker(marker)}
      />
    </GoogleMap>
  );
};

export default SecondStep;
