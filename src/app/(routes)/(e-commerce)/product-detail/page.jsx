"use client";

import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Indicator from "@/app/components/Indicator";
import Button from "@/app/components/CustomButton";
import TextInput from "@/app/components/TextInput";
import ProductList from "../../components/ProductList";
import { _api, Icon } from "@iconify/react";
import fetch from "cross-fetch";
import { useRouter } from "next/navigation";

_api.setFetch(fetch);

const ProductDetail = () => {
  const router = useRouter();
  const [click, setClick] = useState(1);

  const toggle = (index) => setClick(index);
  return (
    <div className="w-full px-5 flex flex-row max-w-md mx-auto mb-8 lg:max-w-6xl ">
      <div className="flex flex-row">
        <div className="w-full px-5 flex flex-col gap-9 mt-16 max-w-md mx-auto md:max-w-2xl">
          <article className="text-textBlack flex flex-col items-center md:mt-20">
            <h1 className="text-heading4 lg:text-heading3">
              Jasa Foto Produk Berkualitas, Professional,
              dan Cepat 15 Foto
            </h1>
          </article>
          <div className="flex justify-between lg:justify-start">
            <div className="flex items-center">
              <Image
                src={"/assets/images/studio.png"}
                alt="Studio"
                width={24}
                height={24}
              />
              <p className="text-paragraph9 ml-[6px]">
                Metrofa Photography
              </p>
            </div>
            <div className="hidden lg:flex divider divider-horizontal"></div>
            <div className="flex items-center">
              <Icon
                icon="material-symbols:star-rounded"
                className="text-amber-300"
              />
              <p className="text-paragraph9 ml-[2px]">
                4.7
              </p>
              <p className="text-paragraph9 text-grey2">
                {" "}
                (233 reviews)
              </p>
            </div>
          </div>
          <div className="carousel carousel-center max-w-[335px] max-h-[168px] md:max-w-full space-x-1 bg-white lg:w-full">
            {[1, 2, 3, 4, 5].map((value) => (
              <div key={value} className="carousel-item">
                <img
                  src={`/assets/images/produk${
                    value + 1
                  }.png`}
                  className="rounded-box"
                />
              </div>
            ))}
          </div>
          <p className="text-paragraph3 lg:text-heading3">
            Detail
          </p>
          <p className="text-paragraph10 mb-9 lg:text-paragraph5">
            Kami menyediakan layanan video editing
            profesional dan motion graphics yang memadukan
            kreativitas tinggi dengan kecepatan pengerjaan
            yang luar biasa dan hasil berkualitas. Dengan
            tim ahli kami, kami mampu mengubah ide Anda
            menjadi video yang menakjubkan dan menarik. Baik
            Anda seorang content creator, perusahaan, atau
            individu yang membutuhkan video berkualitas
            tinggi, kami siap membantu Anda mencapai visi
            Anda.<br></br>
            <br></br>
            Video jadi durasi maksimal 1 menit Revisi minor
            maksimal 3 Pengiriman bahan video melalui e-mail
            atau Google Drive
          </p>
          <div className="flex justify-between">
            <p className="text-paragraph3 lg:text-heading3">
              Ulasan
            </p>
            <div className="hidden lg:block">
              <p className="text-paragraph8">Urutkan</p>
            </div>
          </div>

          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <p className="text-heading3">5.0</p>
              <div className="flex">
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
              </div>
              <p className="text-paragraph10">234 Ulasan</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <p className="text-paragraph9">5</p>
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <progress
                  className="progress progress-success w-[77px]"
                  value={100}
                  max="100"
                ></progress>
              </div>
              <div className="flex items-center">
                <p className="text-paragraph9">5</p>
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <progress
                  className="progress progress-success w-[77px]"
                  value={70}
                  max="100"
                ></progress>
              </div>
              <div className="flex items-center">
                <p className="text-paragraph9">5</p>
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <progress
                  className="progress progress-success w-[77px]"
                  value={50}
                  max="100"
                ></progress>
              </div>
              <div className="flex items-center">
                <p className="text-paragraph9">5</p>
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <progress
                  className="progress progress-success w-[77px]"
                  value={30}
                  max="100"
                ></progress>
              </div>
              <div className="flex items-center">
                <p className="text-paragraph9">1</p>
                <Icon
                  icon="material-symbols:star-rounded"
                  className="text-amber-300"
                />
                <progress
                  className="progress progress-success w-[77px]"
                  value={10}
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
          <div className="flex-col pt-4">
            <div className="flex items-center">
              <Image
                src={"/assets/images/user-dummy.png"}
                alt="User"
                width={24}
                height={24}
              />
              <div className="flex-col">
                <p className="text-paragraph9 ml-[6px]">
                  Alexander Nirwan
                </p>
                <div className="flex ml-[6px]">
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                </div>
              </div>
            </div>
            <p className="text-paragraph8 pt-4 lg:text-paragraph5">
              Direkomendasikan vendor ini sama temen karena
              katanya hasilnya bagus dan ternyata beneran
              sebagus ini. Pelayanannya sangat ramah mulai
              dari diskusi sampai akhir. Rumah saya jadi
              keliatan bagus banget.! Happy! Terima kasih
              dan sukses terus Pak!
            </p>
            <p className="text-paragraph8Res pt-4 pb-4">
              21 September 2022
            </p>
          </div>
          <div className="flex-col pt-4">
            <div className="flex items-center">
              <Image
                src={"/assets/images/user-dummy.png"}
                alt="User"
                width={24}
                height={24}
              />
              <div className="flex-col">
                <p className="text-paragraph9 ml-[6px]">
                  Alexander Nirwan
                </p>
                <div className="flex ml-[6px]">
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                </div>
              </div>
            </div>
            <p className="text-paragraph8 pt-4 lg:text-paragraph5">
              Direkomendasikan vendor ini sama temen karena
              katanya hasilnya bagus dan ternyata beneran
              sebagus ini. Pelayanannya sangat ramah mulai
              dari diskusi sampai akhir. Rumah saya jadi
              keliatan bagus banget.! Happy! Terima kasih
              dan sukses terus Pak!
            </p>
            <p className="text-paragraph8Res pt-4 pb-4">
              21 September 2022
            </p>
          </div>
          <div className="flex-col pt-4">
            <div className="flex items-center">
              <Image
                src={"/assets/images/user-dummy.png"}
                alt="User"
                width={24}
                height={24}
              />
              <div className="flex-col">
                <p className="text-paragraph9 ml-[6px]">
                  Alexander Nirwan
                </p>
                <div className="flex ml-[6px]">
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                  <Icon
                    icon="material-symbols:star-rounded"
                    className="text-amber-300"
                  />
                </div>
              </div>
            </div>
            <p className="text-paragraph8 pt-4 lg:text-paragraph5">
              Direkomendasikan vendor ini sama temen karena
              katanya hasilnya bagus dan ternyata beneran
              sebagus ini. Pelayanannya sangat ramah mulai
              dari diskusi sampai akhir. Rumah saya jadi
              keliatan bagus banget.! Happy! Terima kasih
              dan sukses terus Pak!
            </p>
            <p className="text-paragraph8Res pt-4 pb-4">
              21 September 2022
            </p>
          </div>
          <div className="flex justify-center ">
            <Button
              customClassName="rounded-full text-paragraph8Res h-[20px] w-[190px] border border-[#D2D5DA]"
              rightIcon={
                <Icon
                  icon="material-symbols:keyboard-arrow-down"
                  className="text-[20px]"
                />
              }
              title="Lihat Selengkapnya"
            ></Button>
          </div>
          <div className="border border-[#D2D5DA] rounded-xl ">
            <div className="p-6">
              <div className="flex justify-between items-center pb-3">
                <div>
                  <Image
                    src={"/assets/images/studio.png"}
                    alt="User"
                    width={54}
                    height={54}
                  />
                </div>

                <Button
                  title="Lihat Profile"
                  customClassName="bg-primary text-white h-[38px]"
                ></Button>
              </div>
              <p className="text-paragraphBold">
                Metafora Photography
              </p>
              <p className="text-paragraph10 pt-[6px]">
                Metrofa adalah vendor studio video
                profesional yang menyediakan layanan edit
                video berkualitas tinggi
              </p>
              <div className="flex flex-col lg:flex-row pt-6 space-y-3 lg:space-y-0 lg:justify-between">
                <div className="flex lg:flex-col justify-between items-center">
                  <p className="text-paragraph10">
                    Bergabung
                  </p>
                  <p className="text-paragraphBold">
                    Maret 2023
                  </p>
                </div>
                <div className="flex lg:flex-col justify-between lg:justify-center items-center">
                  <p className="text-paragraph10">Lokasi</p>
                  <p className="text-paragraphBold">
                    Yogyakarta
                  </p>
                </div>
                <div className="flex lg:flex-col justify-between lg:justify-center items-center">
                  <p className="text-paragraph10">Rating</p>
                  <p className="text-paragraphBold">4.3</p>
                </div>
                <div className="flex lg:flex-col justify-between lg:justify-center items-center">
                  <p className="text-paragraph10">Produk</p>
                  <p className="text-paragraphBold">132</p>
                </div>
                <div className="flex lg:flex-col justify-between lg:justify-center items-center">
                  <p className="text-paragraph10">
                    Project Diselesaikan
                  </p>
                  <p className="text-paragraphBold">20</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-heading4Res">
              Produk Lain dari Toko Ini
            </p>
            <p className="text-paragraph8Res text-primary">
              Lihat Semua
            </p>
          </div>
          <div className="">
            <ProductList categoryNumber={click} />
          </div>

          <div className="bg-[#DDF1EC]">
            <div className="flex items-center justify-between">
              <p className="text-heading4Res">
                Produk yang <br className="lg:hidden" />
                Mungkin Kamu Suka
              </p>
              <p className="text-paragraph8Res text-primary">
                Lihat Semua
              </p>
            </div>
            <ProductList categoryNumber={click} />
          </div>
        </div>
      </div>
      <div className="flex-col hidden lg:flex w-[370px] border border-[#D9D9D9] rounded-xl p-6 mt-36 h-80">
        <div className="flex flex-col w-full justify-between pb-5">
          <p className="text-paragraph">Subtotal</p>
          <p className="text-paragraph6">Rp.500.000</p>
        </div>
        <div className="flex flex-col w-full justify-between">
          <Button
            title="Pesan"
            customClassName="bg-primary text-white w-full mb-4"
            leftIcon={
              <Icon
                icon="material-symbols:arrow-forward"
                className="text-[20px]"
              />
            }
          ></Button>
          <Button
            title="Chat"
            leftIcon={
              <Icon
                icon="material-symbols:sms-outline"
                className="text-[20px]"
              />
            }
            customClassName="border border-black w-full"
          ></Button>
          <div className="flex flex-row pt-5 justify-center items-center">
            <Button
              title="Wishlist"
              leftIcon={
                <Icon
                  icon="material-symbols:favorite-outline"
                  className="text-[20px] h-6"
                />
              }
              customClassName="w-lg"
            ></Button>
            <div className="divider divider-horizontal mt-3 mb-3 place-items-center"></div>
            <Button
              title="Share"
              leftIcon={
                <Icon
                  icon="material-symbols:share-outline"
                  className="text-[20px] h-6"
                />
              }
              customClassName="w-lg"
            ></Button>
          </div>
        </div>
      </div>

      <div className="btm-nav flex h-28 p-5 lg:hidden flex-col">
        <div className="flex flex-row w-full justify-between">
          <p className="text-paragraph">Subtotal</p>
          <p className="text-paragraph6">Rp.500.000</p>
        </div>
        <div className="flex flex-row w-full justify-between">
          <Button
            leftIcon={
              <Icon
                icon="material-symbols:sms-outline"
                className="text-[20px]"
              />
            }
            customClassName="border border-black w-[88px]"
          ></Button>
          <Button
            title="Pesan"
            customClassName="bg-primary text-white w-[231px]"
            rightIcon={
              <Icon
                icon="material-symbols:arrow-forward"
                className="text-[20px]"
              />
            }
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
