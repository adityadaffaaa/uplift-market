import React from "react";
import Image from "next/image";
const TrustedBySlider = ({ reverse, imgUrlData }) => {
  const imgDataLength = 14;

  const ImageList = () => {
    let image = [];
    for (let index = 0; index < imgDataLength; index++) {
      image.push(
        <ImageItem
          key={index}
          imgUrl={"/assets/images/img-garuda-logo.png"}
        />
      );
    }
    return image;
  };

  return (
    <div className="slider w-full overflow-hidden">
      <div
        className={`${
          reverse
            ? "animate-sliderTrackReverse"
            : "animate-sliderTrack"
        } w-[calc(266px*${imgDataLength})] `}
      >
        <div className="slide flex gap-2">
          <ImageList />
        </div>
      </div>
    </div>
  );
};

const ImageItem = ({ imgUrl }) => {
  return (
    <div className="h-[100px] w-[250px] grid place-items-center border-2 rounded-lg">
      <Image
        src={imgUrl}
        height={250}
        width={250}
        alt="img"
      />
    </div>
  );
};

export default TrustedBySlider;
