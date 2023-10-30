"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import icons from "@/app/utils/icons";
import { DashboardMainLayout } from "../../layouts";
import DataTable from "react-data-table-component";
import { Checkbox } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import { ModalDelete } from "../../components";
import { useDisclosure } from "@nextui-org/react";
import { useProduct } from "@/app/hooks/vendor/product";
import { Toast } from "@/app/components";
import {
  CurrencyConverter,
  DateConverter,
} from "@/app/utils/extensions";
const {
  SearchIcon,
  VisibilityIcon,
  ShoppingBagOutlineIcon,
  EditOutlineIcon,
  DeleteIcon,
} = icons.vendorDashboard.productListVendor;

const ProductListVendor = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [alerts, setAlerts] = useState([]);

  const [data, setData] = useState([]);

  const [pending, setPending] = useState(false);

  const { getListProduct } = useProduct();

  const getProducts = async () => {
    try {
      setPending(true);
      const res = await getListProduct({
        setAlerts,
        token:
          "1|4hJdLHUy8n3Di3GDWm436G9oN0pKH4aohAO3FTGu98153b14",
      });

      if (res?.status === 200) {
        setPending(false);
        return res.data.data;
      }
    } catch (error) {
      console.error("Something wrong", error);
    }
  };

  useEffect(() => {
    getProducts().then((res) => handleProductData(res));
  }, []);

  const handleProductData = (res) => {
    res.map(({ id, relevant, attributes }) => {
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
          title: <TitleItem name={name} />,
          category: "Fotografi",
          price: <CurrencyConverter amount={price} />,
          date: <DateConverter isoDate={created_at} />,
          status: <Switch color="primary" />,
          action: <ActionItem onOpen={onOpen} />,
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
      width: "15%",
    },
  ];

  return (
    <DashboardMainLayout>
      <Toast duration={2000} alerts={alerts} start />
      <ModalDelete
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <div className="h-full overflow-y-auto custom-scrollbar rounded-xl">
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
    </DashboardMainLayout>
  );
};

const TitleItem = ({ name }) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={"/assets/images/productVendorDashboard.png"}
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

const ActionItem = ({ onOpen }) => {
  return (
    <div className="flex gap-2">
      <Button
        isIconOnly
        radius="sm"
        variant="bordered"
        color="primary"
        aria-label="Edit"
      >
        <EditOutlineIcon />
      </Button>
      <Button
        onClick={() => onOpen()}
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
