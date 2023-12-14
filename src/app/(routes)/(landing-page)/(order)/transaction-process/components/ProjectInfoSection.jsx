"use client";

import React, { useEffect, useState } from "react";
import { useOrder } from "@/app/hooks/user/order";
import { Toast } from "@/app/components";
import { ProjectInfoSkeleton } from "@/app/components";
import {
  dateConverterWithFormat,
  formatRupiah,
} from "@/app/utils/extensions";

export const ProjectInfoSection = ({ id }) => {
  const [alerts, setAlerts] = useState([]);
  const [projectInfo, setProjectInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserToken = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const session = await res?.json();
      const token = session.user.token;
      return token;
    } catch (error) {
      console.log(
        "Fetch user session token failed!",
        error
      );
    }
  };

  const fetchProjectInfo = async (token) => {
    const { getProjectInfo } = useOrder();
    setIsLoading(true);
    try {
      const res = await getProjectInfo({
        setAlerts,
        id,
        token,
      });

      if (res.status === 200) {
        setProjectInfo(res.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Fetch project info failed!", error);
    }
  };

  useEffect(() => {
    fetchUserToken().then((token) =>
      fetchProjectInfo(token)
    );
  }, []);

  return (
    <>
      <Toast duration={2000} alerts={alerts} start />
      <aside className="flex flex-col gap-6 flex-[1_1_40%]">
        {!isLoading ? (
          <div className="flex flex-col gap-6 md:bg-white rounded-lg p-6 border-2">
            <h4 className="text-heading4Res lg:text-heading4">
              Project Info
            </h4>
            <div className="flex flex-col gap-4">
              <figure className="flex gap-2 items-center">
                <img
                  className="rounded-lg flex-[1_1_20%] w-[90px] h-[54px]"
                  src={
                    projectInfo?.project_info.image
                      ? projectInfo?.project_info.image
                          ?.attributes.image_url
                      : "/assets/images/img-summary-product.png"
                  }
                  alt="img"
                  loading="lazy"
                />
                <figcaption className="text-paragraph9  flex-[1_1_80%]">
                  {projectInfo?.project_info.name}
                </figcaption>
              </figure>
              <div className="flex justify-between">
                <p className="text-paragraph7 text-neutral-500">
                  {
                    projectInfo?.project_info
                      .transaction_number
                  }
                </p>
                <p className="text-paragraph7">
                  X923HSD8273
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-paragraph7 text-neutral-500">
                  Total Harga
                </p>
                <p className="text-paragraph7">
                  Rp
                  {formatRupiah(
                    projectInfo?.project_info.total
                  )}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-paragraph7 text-neutral-500">
                  Tgl. Pesanan
                </p>
                <p className="text-paragraph7">
                  {dateConverterWithFormat(
                    projectInfo?.project_info.order_date
                  )}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-paragraph7 text-neutral-500">
                  Estimasi Selesai
                </p>
                <p className="text-paragraph7">
                  {dateConverterWithFormat(
                    projectInfo?.project_info.estimated_date
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <ProjectInfoSkeleton />
        )}
        <div className="p-6 bg-green-100 flex flex-col rounded-lg text-neutral-600 gap-2">
          <h6 className="text-paragraph3">
            Butuh bantuan?
          </h6>
          <p className="text-paragraph8">
            Cari jawabannya disini atau hubungi kami di
            uplift@market.com
          </p>
        </div>
      </aside>
    </>
  );
};

export default ProjectInfoSection;
