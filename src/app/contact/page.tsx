"use client";

// import { log } from "console";
// import { wrap } from "module";
// import { log } from "console";
import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { useState } from "react";
// import { useRouter } from "next/navigation";
// console.log(window.location.pathname);
// const pathname=usePathname();
// console.log(pathname);
import "./contact.scss";
import Image from "next/image";

export default function Contact() {
  // const route = useRouter();
  const [visibility, setVisibility] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const handleSave = () => {
    alert("your message sent!");
    setName("");
    setEmail("");
    setText("");
  };

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
      <div className="contact flex relative ">
        <div>
          <Sidebar visibility={visibility} />
        </div>
        <div className="w-100">
          <div className="contact2">
            <Image
              width={200}
              height={100}
              src="/title wrapper (4).svg"
              alt=""
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginTop: "30px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: "320px",
                  display: "flex",
                  flex: "wrap",
                  // justifyContent: "space-between",
                  flexDirection: "column",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "12px",
                  backgroundColor: "rgba(27, 27, 27, 1)",
                  height: "190px",
                  alignItems: "center",
                }}
              >
                <Image
                  width={80}
                  height={100}
                  style={{ marginTop: "28px" }}
                  src="/Frame 11 (4).svg"
                  alt=""
                />
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "rgba(255, 255, 255, 1)",
                    margin: "0 auto",
                    // border: "1px solid white",
                    marginTop: "8px",
                  }}
                >
                  E-pochta
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.7)",
                    margin: "0 auto",
                    // border: "1px solid white",
                    marginTop: "8px",
                  }}
                >
                  <a
                    href="
                faridroziqov68@gmail.com"
                  >
                    faridroziqov68@gmail.com
                  </a>
                </p>
              </div>
              <div
                style={{
                  width: "320px",
                  display: "flex",
                  flex: "wrap",
                  // justifyContent: "space-between",
                  flexDirection: "column",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "12px",
                  backgroundColor: "rgba(27, 27, 27, 1)",
                  height: "190px",
                  alignItems: "center",
                }}
              >
                <Image
                  width={80}
                  height={100}
                  style={{ marginTop: "28px" }}
                  src="/Frame 11 (5).svg"
                  alt=""
                />
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "rgba(255, 255, 255, 1)",
                    margin: "0 auto",
                    // border: "1px solid white",
                    marginTop: "8px",
                  }}
                >
                  Telegram
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.7)",
                    margin: "0 auto",
                    // border: "1px solid white",
                    marginTop: "8px",
                  }}
                >
                  <a
                    href="
                 https://t.me/fariduser_03"
                  >
                    https://t.me/fariduser_03
                  </a>
                </p>
              </div>
              <div
                style={{
                  width: "320px",
                  display: "flex",
                  flex: "wrap",
                  // justifyContent: "space-between",
                  flexDirection: "column",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "12px",
                  backgroundColor: "rgba(27, 27, 27, 1)",
                  height: "190px",
                  alignItems: "center",
                }}
              >
                <Image
                  width={80}
                  height={100}
                  style={{ marginTop: "28px" }}
                  src="/Frame 11 (6).svg"
                  alt=""
                />
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "rgba(255, 255, 255, 1)",
                    margin: "0 auto",
                    // border: "1px solid white",
                    marginTop: "8px",
                  }}
                >
                  Telefon raqam
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.7)",
                    margin: "0 auto",
                    // border: "1px solid white",
                    marginTop: "8px",
                  }}
                >
                  <a
                    href="
                 https://t.me/fariduser_03"
                  >
                    +998335363116
                  </a>
                </p>
              </div>
            </div>
            <Image
              width={280}
              height={100}
              style={{ marginTop: "65px" }}
              src="/title wrapper (5).svg"
              alt=""
            />
            <div
              style={{
                width: "100%",
                // minHeight: "470px",
                // height: "100%",
                backgroundColor: "rgba(27, 27, 27, 1)",
                borderRadius: "12px",
                padding: "20px",
                marginTop: "24px",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  // height: "80px",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    maxWidth: "640px",
                    width: "100%",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Ismingiz*
                  </h1>
                  <input
                    placeholder="Falonchiyev Falonchi"
                    type="text"
                    style={{
                      maxWidth: "640px",
                      width: "100%",
                      height: "50px",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "rgba(255, 255, 255, 0.5)",
                      padding: "10px 0 10px 20px",
                      marginTop: "10px",
                    }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    maxWidth: "640px",
                    width: "100%",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "16px",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    Email Manzilingiz
                  </h1>
                  <input
                    placeholder="misol@gmail.com"
                    type="text"
                    style={{
                      maxWidth: "640px",
                      width: "100%",
                      height: "50px",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "rgba(255, 255, 255, 0.5)",
                      padding: "10px 0 10px 20px",
                      marginTop: "10px",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="last-child w-100">
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 1)",
                  }}
                >
                  Izohingiz*
                </h1>
                <textarea
                  style={{
                    width: "100%",
                    height: "192px",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "rgba(255, 255, 255, 0.5)",
                    padding: "10px 0 10px 20px",
                    marginTop: "8px",
                  }}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="O’z izohingizni yozing..."
                ></textarea>
              </div>
              <Image
                onClick={handleSave}
                width={170}
                height={100}
                style={{
                  marginTop: "40px",
                  cursor: "pointer",
                }}
                src="/Frame 14 (1).svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
