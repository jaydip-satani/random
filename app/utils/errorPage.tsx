"use client";

import Image from "next/image";
import Link from "next/link";

/* ---------------------------------------
   React Component Version (For Frontend)
----------------------------------------*/

interface Props {
  status: number;
  message: string;
  url?: string;
  appName?: string; // dynamic app name
}

export function ErrorPage({
  status,
  message,
  url = "",
  appName = "MyApp",
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "80px",
          marginTop: "-50px",
        }}
      >
        {/* LEFT TEXT */}
        <div style={{ maxWidth: "420px" }}>
          <Link href={"/"}>
            <div
              style={{
                fontSize: "38px",
                fontWeight: 600,
                marginBottom: "20px",
                color: "#878383",
              }}
            >
              {appName}
            </div>
          </Link>

          <div
            style={{ fontSize: "22px", fontWeight: 600, marginBottom: "12px" }}
          >
            {status}. <span style={{ fontWeight: 400 }}>That’s an error.</span>
          </div>

          <div
            style={{
              fontSize: "14px",
              lineHeight: "1.6",
              color: "#555",
              maxWidth: "380px",
            }}
          >
            The requested URL <b>{url}</b> was not found on this server.{" "}
            <span style={{ color: "#999" }}>That’s all we know.</span>
          </div>
        </div>

        {/* RIGHT ROBOT */}
        <Image
          src="/robot.png"
          width={250}
          height={250}
          alt="Error Robot"
          style={{ opacity: 0.95, marginTop: "-30px" }}
          priority
        />
      </div>
    </div>
  );
}

/* ---------------------------------------
   HTML Generator Version (For API routes)
----------------------------------------*/

export function renderErrorHTML(
  status: number,
  message: string,
  url: string,
  appName: string = "MyApp"
) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${status} – Error</title>
      <style>
        body {
          background: #fff;
          font-family: Arial, sans-serif;
          color: #222;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          display: flex;
          gap: 80px;
          align-items: flex-start;
          margin-top: -50px;
        }
        .left {
          max-width: 420px;
        }
        .logo-text {
          font-size: 38px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #878383;
        }
        .status {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 12px;
        }
        .status span {
          font-weight: 400;
        }
        .text {
          font-size: 14px;
          line-height: 1.6;
          color: #555;
          max-width: 380px;
        }
        .small {
          color: #999;
        }
        .robot {
          width: 250px;
          opacity: 0.95;
          margin-top: -30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        
        <div class="left">
        <a href="/" class="logo-text">${appName}</a>

          <div class="status">${status}. <span>That’s an error.</span></div>

          <div class="text">
            The requested URL <b>${url}</b> was not found on this server.
            <span class="small">That’s all we know.</span>
          </div>
        </div>

        <img src="/robot.png" class="robot" />
      </div>
    </body>
  </html>`;
}
