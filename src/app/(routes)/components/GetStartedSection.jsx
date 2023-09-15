import React from "react";
import LinkRoundedButton from "@/app/components/LinkRoundedButton";
import Image from "next/image";
const GetStartedSection = () => {
  return (
    <section className="py-20 px-5 flex justify-center">
      <div className="container px-6 bg-[#066A69] py-20 rounded-xl flex flex-col gap-4 items-center text-white relative overflow-hidden">
        <Image
          className="absolute -top-6 -left-16"
          src={"/assets/images/img-get-started-2.png"}
          height={150}
          width={150}
          alt="img"
        />
        <Image
          className="absolute -bottom-6 -right-16"
          src={"/assets/images/img-get-started-1.png"}
          height={150}
          width={150}
          alt="img"
        />
        <h2 className=" text-heading2Res text-center">
          Get Started with Digicrest Now!
        </h2>
        <p className="text-paragraph3Res text-center">
          Bergabunglah dengan lebih 1.000+ cliet dan 200+
          vendor untuk memajukan UMKM Indonesia
        </p>
        <div className="flex gap-2">
          <LinkRoundedButton
            title="Daftar Akun"
            url="/register"
            customClassName="flex-1 bg-white text-textBlack"
          />
          <LinkRoundedButton
            title="Daftar Vendor"
            url="#"
            customClassName="flex-1 border-white text-white"
            bordered
          />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
