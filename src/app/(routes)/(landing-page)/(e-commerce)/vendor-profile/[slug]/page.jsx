import React from "react";
import {
  ContentSection,
  DescriptionSection,
  MainSection,
} from "../components";

const VendorProfile = ({ params }) => {
  return (
    <ContentSection>
      <DescriptionSection slug={params.slug} />
      <MainSection />
    </ContentSection>
  );
};
export default VendorProfile;
