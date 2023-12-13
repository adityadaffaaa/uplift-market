"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import { Toast, ShipmentSkeleton } from "@/app/components";
import { useShipment } from "@/app/hooks/user/shipment";
import { useSession } from "next-auth/react";

const ProjectSaya = () => {
  const [shipments, setShipments] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const token = session?.user.token;

  const fetchShipment = async () => {
    const { getOrderShipment } = useShipment();
    if (token) {
      setIsLoading(true);
      try {
        const res = await getOrderShipment({
          setAlerts,
          token,
        });

        if (res.status === 200) {
          setShipments(res.data.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Fetch shipment failed", error);
      }
    }
  };

  useEffect(() => {
    fetchShipment();
  }, [token]);

  return (
    <>
      <Toast alerts={alerts} duration={2000} start />
      <section className="flex flex-col gap-4">
        {isLoading ? (
          <ShipmentSkeleton />
        ) : shipments.length ? (
          shipments.map(
            (
              {
                id,
                image,
                title,
                brief,
                vendor,
                price,
                date,
                status,
              },
              index
            ) => (
              <ProjectCard
                id={id}
                image={
                  image
                    ? image.attributes.image_url
                    : "/assets/images/img-activity.png"
                }
                key={index}
                title={title}
                brief={brief}
                vendor={vendor}
                price={price}
                date={date}
                status={status}
              />
            )
          )
        ) : (
          <div className="h-[50vh] grid place-items-center">
            <h6 className="text-heading6">
              Belum ada project
            </h6>
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectSaya;
