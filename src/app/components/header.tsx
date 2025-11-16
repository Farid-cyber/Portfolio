"use client";

import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
type InitialProps = {
  handleToggle: (val: boolean) => void;
};

import "./header.scss";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "next/image";
import { redirect } from "next/navigation";
export default function Header({ handleToggle }: InitialProps) {
  // const route = useRouter();

  const [selected, setSelected] = useState("/");
  useEffect(() => {
    if (window.location.pathname === "/") {
      setSelected("/");
    } else if (window.location.pathname === "/about") {
      setSelected("/about");
    } else if (window.location.pathname === "/projects") {
      setSelected("/projects");
    } else if (window.location.pathname === "/contact") {
      setSelected("/contact");
    }
  }, [selected]);

  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="left-side-header">
          <Image
            onClick={() => handleToggle(true)}
            src="/hamburger.svg"
            alt=""
            width={100}
            height={100}
          />
          <Link href={"/"} className="text-decoration-none mt-3">
            <p className="left-side-header-children2">
              FARID
              <span>.UZ</span>
            </p>
          </Link>
        </div>
        <div className="right-side-header">
          <Dropdown className="three-dots mb-2">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Bosh sahifa</Dropdown.Item>
              <Dropdown.Item href="/about">Haqida</Dropdown.Item>
              <Dropdown.Item href="/projects">Projects</Dropdown.Item>
              <Dropdown.Item href="/contact">Bog’lanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <ul className="">
            <Link href={"/"} className="text-decoration-none  text-white">
              <li
                onClick={() => setSelected("/")}
                className={`hover:text-green-400 cursor-pointer ${
                  selected === "/" ? "text-green-400" : ""
                } `}
              >
                Bosh sahifa
              </li>
            </Link>
            <Link href={"/about"} className="text-decoration-none  text-white">
              <li
                onClick={() => setSelected("/about")}
                className={`hover:text-green-400 cursor-pointer ${
                  selected === "/about" ? "text-green-400" : ""
                } text-decoration-none`}
              >
                Haqida
              </li>
            </Link>
            <Link
              href={"/projects"}
              className="text-decoration-none  text-white"
            >
              <li
                onClick={() => setSelected("/projects")}
                className={`hover:text-green-400 cursor-pointer ${
                  selected === "/projects" ? "text-green-400" : ""
                } text-decoration-none`}
              >
                Projects
              </li>
            </Link>
            <Link href={"/contact"} className="text-decoration-none text-white">
              <li
                onClick={() => setSelected("/contact")}
                className={`hover:text-green-400 cursor-pointer ${
                  selected === "/contact" ? "text-green-400" : ""
                } text-decoration-none`}
              >
                Bog’lanish
              </li>
            </Link>
          </ul>
          <Link href={"https://github.com/Farid-cyber"}>
            {/* <a onClick={() => redirect("")}> */}
              <Image
                src="/github.svg"
                alt=""
                width={50}
                height={50}
                style={{
                  marginLeft: "20px",
                  // marginBottom: "90px",
                  marginTop: "-12px",
                  // width: "90px",
                  height: "50px",
                }}
              />
            {/* </a> */}
          </Link>
        </div>
      </div>
    </div>
  );
}
