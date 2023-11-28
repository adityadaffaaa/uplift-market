import React from "react";
import { Avatar } from "@nextui-org/react";

const ProjectCard = () => {
  return (
    <div className="p-6 bg-white shadow-defaultShadow flex rounded-lg">
      <div className="flex gap-3">
        <Avatar
          src="/assets/images/img-activity.png"
          radius="sm"
        />
        <div className="flex flex-col">
          <p className="text-paragraph4Res">
            Lays’co Ads Video
          </p>
          <p className="text-paragraph10 text-neutral-400">
            Edit Video Professional 5 Menit
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
