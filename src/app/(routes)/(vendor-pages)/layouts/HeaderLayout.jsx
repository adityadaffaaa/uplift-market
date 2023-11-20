import React from "react";
export const HeaderLayout = ({
  title,
  tabs,
  moreAction,
}) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex flex-col gap-4">
        <p className="text-paragraph3 lg:text-heading1Res">
          {title}
        </p>
        {tabs && tabs}
      </div>
      {moreAction && moreAction}
    </div>
  );
};

export default HeaderLayout;
