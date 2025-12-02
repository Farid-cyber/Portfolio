"use client";

import { log } from "console";
// import { log } from "console";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useState } from "react";
// import { useRouter } from "next/navigation";
// console.log(window.location.pathname);
// const pathname=usePathname();
// console.log(pathname);
import "./page.scss";

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
    <div>
      <Header handleToggle={handleToggle} />
      <div className="about" >
        <div>
          <Sidebar visibility={visibility} />
        </div> 
        <div className="life">
          <div className="w-100">
            <div
              style={{
                maxWidth: "633px",
                height: "265px",
                // display: "flex",
                // justifyContent: "flex-column",
                margin: "270px auto",
                padding: "10px",
              }}
            >
              <h1>
                Assalomu alaykum, Men
                <span style={{ color: "rgba(57, 150, 95, 1)" }}>
                  {""} Roziqov Faridbek {""}
                </span>
                man
              </h1>
              <p>
                Veb dasturchi va dizayner sifatida natijaga yo'naltirilgan
                ishchi. Veb-saytlar va veb-ilovalarni yaratish va boshqarish
                orqali umumiy mahsulot muvaffaqiyatiga erishish maqsadimdir.
              </p>
              <Link href={"/projects"} className="text-decoration-none">
                <button>
                  <p
                    style={{ color: "rgba(255, 255, 255, 1)" }}
                    className="mt-3"
                  >
                    Loyihalar
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
