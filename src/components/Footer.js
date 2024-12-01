import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        // backgroundColor: "#f8f9fa",
        // color: "#333",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <a href="/" style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Smit K Panchal
      </a>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          margin: "15px 0",
          flexWrap: "wrap", // Optional: allows wrapping if the content exceeds available space.
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Icon icon="line-md:phone-call-loop" width="24" height="24" />
          <span>+91 94281&nbsp;92357</span>
        </div>
        <span> | </span>
        <div style={{ fontSize: "1.2rem", margin: "0" }}>
          Creative Full-Stack Developer | Data Analyst
        </div>
        <span> | </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <a
            href="https://www.linkedin.com/in/smitkpanchal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mingcute:linkedin-line" width="24" height="24" />
          </a>
          <a
            href="mailto:smitkp03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="line-md:email-twotone" width="24" height="24" />
          </a>
          <a
            href="https://github.com/Smiiit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="line-md:github-loop" width="24" height="24" />
          </a>
        </div>
      </div>

      <div style={{ fontSize: "0.9rem", color: "#666" }}>
        © 2024 Smit K Panchal | All rights reserved.
      </div>
    </div>
  );
}
