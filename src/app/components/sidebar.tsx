import { log } from "console";
import "./sidebar.scss";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
type InitialProps = {
  visibility: boolean;
};
export default function Sidebar({ visibility }: InitialProps) {
  console.log(visibility);

  return (
    <>
      {" "}
      <div
        className={`${
          visibility === true
            ? "sidebar2 h-vh border-r-amber-50"
            : "sidebar h-vh border-r-amber-50"
        }`}
      >
        <div className="m-4">
          <Image
            width={240}
            height={100}
            className="img"
            src="/profileimage.svg"
            alt=""
          />
          <p
            style={{
              fontSize: "30px",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 1)",
              marginTop: "15px",
            }}
          >
            Faridbek.R
          </p>
          <Image
            width={200}
            height={100}
            className="img"
            src="/Frame5.svg"
            alt=""
            style={{ marginTop: "10px" }}
          />
        </div>
        <div className="pastgi">
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "10px",
              width: "100%",
              marginTop: "7px",
              padding: "4px",
              // border:"1px solid white"
            }}
            className="li"
          >
            {/* <div> */}
            <Image src="/Frame11.svg" alt="" width={50} height={50}/>
            {/* </div> */}
            <div>
              <h5
                style={{
                  fontSize: "15px",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                E-pochta
              </h5>
              <h5
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "5px",
                  cursor: "pointer",
                }}
                className="cursor-pointer"
              >
                <a href="faridroziqov68@gmail.com">faridroziqov68@gmail.com</a>
              </h5>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "10px",
              width: "100%",
              marginTop: "10px",
              padding: "4px",
            }}
            className="li"
          >
            <Image src="/Frame12.svg" alt="" width={50} height={50}/>
            <div>
              <h5
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Github
              </h5>
              <a
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "5px",
                }}
              >
                github.com/yaxyobekuz
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "10px",
              width: "100%",
              marginTop: "10px",
            }}
            className="li"
          >
            <Image width={50} height={50} src="/Frame13.svg" alt="" />
            <div>
              <h5
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Telegram
              </h5>
              <a
                href="https://t.me/fariduser_03"
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "5px",
                }}
              >
                https://t.me/fariduser_03
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "10px",
              width: "100%",
              marginTop: "10px",
            }}
            className="li"
          >
            <Image src="/Frame14.svg" alt="" width={50} height={50}/>
            <div>
              <h5
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 1)",
                }}
              >
                Telefon raqam
              </h5>
              <a
                href="+998335363116"
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.7)",
                  marginTop: "5px",
                }}
              >
                +998335363116
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
