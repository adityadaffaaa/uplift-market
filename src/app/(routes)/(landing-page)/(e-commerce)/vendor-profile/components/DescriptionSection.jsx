"use client";

import React, { useEffect, useState } from "react";
import icons from "@/app/utils/icons";
import { Button, Avatar } from "@nextui-org/react";
import { useVendor } from "@/app/hooks/user/vendor";
import { Toast } from "@/app/components";
import { VendorDescSkeleton } from "@/app/components";
import Link from "next/link";
const { LinkIcon, LocationIcon, SmsIcon } =
  icons.vendorProfileIcon;

export const DescriptionSection = ({ slug }) => {
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [vendorProfile, setVendorProfile] = useState(null);
  const { getVendorProfile } = useVendor();

  const fetchUserToken = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const session = await res?.json();
      const token = session.user.token;
      return token;
    } catch (error) {
      console.log("Fetch user session failed!", error);
    }
  };

  const fetchVendorProfile = async (token) => {
    setIsLoading(true);
    try {
      const res = await getVendorProfile({
        setAlerts,
        slug,
        token,
      });

      if (res.status === 200) {
        setVendorProfile(res.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Fetch vendor profile failed!", error);
    }
  };

  useEffect(() => {
    fetchUserToken().then((token) =>
      fetchVendorProfile(token)
    );
  }, []);

  return (
    <>
      <Toast duration={2000} alerts={alerts} start />
      {!isLoading ? (
        <aside className="w-full flex flex-col items-center lg:flex-[1_1_30%] gap-4 lg:border-2 lg:p-8 rounded-2xl">
          <Avatar
            isBordered
            src={
              vendorProfile.logo.length
                ? vendorProfile.logo[0]
                : "/assets/images/pp-vendor.png"
            }
            classNames={{ base: "h-32 w-32" }}
          />
          <div>
            <p className="w-full text-heading2Res">
              {vendorProfile.business_name}
            </p>
          </div>
          <div className="flex border border-[#D2D5DA] rounded-full items-center px-4 py-2">
            <LocationIcon />
            <p className="text-paragraph pl-2">
              {vendorProfile.city}
            </p>
          </div>
          <p className="text-paragraph8 text-[#686868] text-center">
            Metrofa Studio adalah salah satu vendor
            <br />
            yang bergerak dibidang video. Menyediakan
            <br className="lg:hidden" />
            banyak layanan seperti editing video,
            <br className="lg:hidden" />
            effects,dll.
          </p>
          <div className="flex gap-x-3 items-center">
            <img
              src={"/assets/images/instagram-icon.png"}
              alt="instagram"
              className="w-9 h-9"
            />
            <img
              src={"/assets/images/facebook-icon.png"}
              alt="facebook"
              className="w-9 h-9"
            />
            <LinkIcon />
            <p className="text-paragraph">
              {vendorProfile.email_business}
            </p>
          </div>
          <Link
            href={`https://wa.me/${vendorProfile.phone_business}`}
            className="w-full"
          >
            <Button
              color="primary"
              fullWidth
              radius="sm"
              startContent={<SmsIcon />}
            >
              Chat
            </Button>
          </Link>
        </aside>
      ) : (
        <VendorDescSkeleton />
      )}
    </>
  );
};

export default DescriptionSection;
