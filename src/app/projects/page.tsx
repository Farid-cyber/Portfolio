"use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import { useRouter } from "next/navigation";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./project.scss";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { useState } from "react";
import Image from "next/image";
export default function Projects() {
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
    <div className="projects">
      <Header handleToggle={handleToggle} />
      <div className="project1">
        <Sidebar visibility={visibility} />
        <div className="w-100">
          <div className="project2">
            <Image width={200} height={100}
              src="/title wrapper (3).svg"
              alt=""
              style={{ marginTop: "60px" }}
            />
            {/* <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                // padding: "40px",
                marginTop: "40px",
                gap: "10px",
                flexWrap: "wrap",
              }}
              className="d-flex w-100 justify-content-between"
            >
              <button
                style={{
                  width: "144px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "17px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 1)",
                  justifyContent: "center",
                  backgroundColor: "rgba(27, 27, 27, 1)",
                }}
                className="border-1 border-amber-50 rounded d-flex align-items-center gap-2"
              >
                <h4>Filter</h4> <Image width={30} height={80} src="/filter 1.svg" alt="" />
              </button>
              <div
                style={{
                  maxWidth: "480px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                  // border:"1px solid whit"
                }}
                // className="d-flex gap-2 justify-content-between"
              >
                <select
                  style={{
                    width: "144px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 1)",
                    justifyContent: "center",
                    backgroundColor: "rgba(27, 27, 27, 1)",
                    border: "1px solid white",
                    borderRadius: "10px",
                  }}
                  className="form-select"
                >
                  <option defaultValue={""} value="">
                    Barchasi
                  </option>
                </select>
                <select
                  style={{
                    width: "144px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 1)",
                    justifyContent: "center",
                    backgroundColor: "rgba(27, 27, 27, 1)",
                    border: "1px solid white",
                    borderRadius: "10px",
                  }}
                  className="form-select"
                >
                  <option defaultValue={""} value="">
                    Barchasi
                  </option>
                </select>
                <select
                  style={{
                    width: "144px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 1)",
                    justifyContent: "center",
                    backgroundColor: "rgba(27, 27, 27, 1)",
                    border: "1px solid white",
                    borderRadius: "10px",
                  }}
                  className="form-select"
                >
                  <option defaultValue={""} value="">
                    Barchasi
                  </option>
                </select>
              </div>
            </div> */}
            <div
              style={{
                width: "100%",
                // padding: "0 40px 0 40px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                gap: "10px",
                marginTop: "40px",
              }}
            >
              <div className="project">
                <div className="project-top">
                  <Image width={80} height={80}
                    className="project-top-child1"
                    style={{ width: "100%" }}
                    src="/image 1.svg"
                    alt=""
                  />
                  <div className="cursor-pointer  project-top-child2">
                    <Image width={35} height={80} src="/Frame 34.svg" alt="" />
                    <Image width={35} height={80} src="/Frame 35.svg" alt="" />
                    <Image width={35} height={80} src="/Frame 36.svg" alt="" />
                  </div>
                </div>
                <Image width={500} height={80} className="middle" src="/Frame 26.svg" alt="" />
                <Image width={500} height={80}  className="tags" src="/tags.svg" alt="" />
              </div>
              <div className="project">
                <div className="project-top">
                  <Image width={80} height={80}
                    className="project-top-child1"
                    style={{ width: "100%" }}
                    src="/image 1.svg"
                    alt=""
                  />
                  <div className=" cursor-pointer  project-top-child2">
                    <Image width={35} height={80} src="/Frame 34.svg" alt="" />
                    <Image width={35} height={80} src="/Frame 35.svg" alt="" />
                    <Image width={35} height={80} src="/Frame 36.svg" alt="" />
                  </div>
                </div>
                <Image width={500} height={80}  className="mt-3" src="/Frame 26.svg" alt="" />
                <Image width={500} height={80}  className="tags" src="/tags.svg" alt="" />
              </div>
              <div className="project">
                <div className="project-top">
                  <Image width={80} height={80}
                    className="project-top-child1"
                    style={{ width: "100%" }}
                    src="/image 1.svg"
                    alt=""
                  />
                  <div className=" cursor-pointer  project-top-child2">
                    <Image width={35} height={80} src="/Frame 34.svg" alt="" />
                    <Image width={35} height={80} src="/Frame 35.svg" alt="" />
                    <Image width={35} height={80} src="/Frame 36.svg" alt="" />
                  </div>
                </div>
                <Image width={500} height={80}  className="mt-3" src="/Frame 26.svg" alt="" />
                <Image width={500} height={80}  className="tags" src="/tags.svg" alt="" />
              </div>
            </div>
            <div className="mx-auto">
              <a href="https://t.me/fariduser_03">
                <Image width={500} height={80} 
                  style={{ width: "95%", marginTop: "64px" }}
                  src="/tg.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
