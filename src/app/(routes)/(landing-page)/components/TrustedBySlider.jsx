import React from "react";
export const TrustedBySlider = ({
  reverse,
  imgUrlData,
}) => {
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
    <div className="slider w-full overflow-hidden ">
      <div
        style={{ width: 260 * imgDataLength }}
        className={`${
          reverse
            ? "animate-sliderTrackReverse"
            : "animate-sliderTrack"
        }`}
      >
        <div className="slide flex gap-2 w-full">
          <ImageList />
        </div>
      </div>
    </div>
  );
};

const ImageItem = ({ imgUrl }) => {
  return (
    <div className="flex w-[250px] h-[100px] items-center justify-center border-2 rounded-lg">
      <img
        src={imgUrl}
        alt="img"
        loading="lazy"
        className="w-[130px]"
      />
    </div>
  );
};

export default TrustedBySlider;
