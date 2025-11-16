"use client";
import "./about.scss";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import Image from "next/image";

// import { useRouter } from "next/navigation";
// console.log(window.location.pathname);

export default function Home() {
  // const route = useRouter();
  const [visibility, setVisibility] = useState(false);

  const handleToggle = () => {
    if (visibility === true) {
      setVisibility(false);
    } else {
      setVisibility(true);
    }
  };
  return (
    <div className="haqida">
      <Header handleToggle={handleToggle} />
      <div className="about1 flex relative w-full">
        <div>
          <Sidebar visibility={visibility} />
        </div>
        {/* <div className="w-100"> */}
        <div className="about2">
          <Image
            width={200}
            height={100}
            className="img1"
            src="/Frame18.svg"
            alt=""
          />
          <p
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "rgba(255, 255, 255, 0.7)",
              marginTop: "24px",
              lineHeight: "150%",
              width: "100%",
              maxWidth: "900px",
            }}
          >
            Men Roziqov Faridbek veb dasturchisiman. Yoshim 18 da, Buxoro
            viloyati Romitan tumanida tug'ilganman. Qiziqarli, ko’p
            funksionallika ega bo’lgan va kuchli dizaynga ega bo’lgan dasturlar
            yaratishga qiziqaman.
            <br />
            <br /> Mening vazifam veb saytni foydalanuvchilarga qulay, sayt
            dizayni foydalanuvchilarga jalb qiluvchi lekin ayni paytda tezkor
            bo'lishini taminlashdir va saytni moslashuvchan kodlar bilan
            yaratishdir! Mening maqsadim veb sayt foydalanuvchilariga barcha
            qismlarini intuitiv va qulay bo'lishga harakat qilishga qaratilgan.
            Agar sizga men yaratgan loyihalarim qiziq bo’lsa
            <Link href={"/projects"} className="text-decoration-none">
              <span style={{ color: "rgba(57, 150, 95, 1)" }}>
                {"  "}Loyihalar{"  "}
              </span>{" "}
            </Link>
            sahifasiga tashrif buyurishingiz mumkin
          </p>
          <Link href={"/contact"}>
            <img src="/Frame 14.svg" alt="" style={{ marginTop: "30px" }} />
          </Link>
          <Image
            width={200}
            height={100}
            src="/title wrapper.svg"
            alt=""
            style={{ marginTop: "60px" }}
          />
          <div
            style={{
              // padding: "40px",
              marginTop: "40px",
              width: "100%",
              minHeight: "300px",
              display: "flex",
              gap: "10px",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image width={80} height={80} src="/html-5 1.svg" alt="" />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image width={80} height={80} src="/css 1.svg" alt="" />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image width={80} height={80} src="/js 1.svg" alt="" />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image width={80} height={80} src="/figma 1.svg" alt="" />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image width={80} height={80} src="/react 1.svg" alt="" />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image width={80} height={80} src="/tailwind 1.svg" alt="" />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image width={80} height={80} src="/swiper-logo 1.svg" alt="" />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image
                width={80}
                height={80}
                src="/KDpgvguMpGfqaHPjicRK 1.svg"
                alt=""
              />
            </div>
          </div>
          <Image
            width={300}
            height={100}
            src="/title wrapper (1).svg"
            alt=""
            style={{ marginTop: "100px" }}
          />
          <Image
            width={1000}
            height={100}
            src="/cards.svg"
            alt=""
            style={{ marginTop: "30px" }}
          />
          <Image
            width={100}
            height={100}
            src="/title wrapper (2).svg"
            alt=""
            style={{ marginTop: "70px" }}
          />
          <div
            style={{
              width: "100%",
              minHeight: "150px",
              // padding: "0 40px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: "30px",
              gap: "10px",
            }}
          >
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image
                width={100}
                height={100}
                src="/photo_2023-07-24_11-12-01-removebg-preview 1.svg"
                alt=""
              />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            >
              <Image width={100} height={100} src="/download 1.svg" alt="" />
            </div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            ></div>
            <div
              style={{
                // border: "1px",
                borderRadius: "12px",
                height: "140px",
                width: "270px",
                backgroundColor: "rgba(27, 27, 27, 1)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="border-1 border-amber-50"
            ></div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
