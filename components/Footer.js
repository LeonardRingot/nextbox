import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from '../styles/Footer.module.css' 

export default function Footer() {
  return (
    <>
    <div className={Style.myFooter}>
      <footer>
        <a
          href="https://github.com/LeonardRingot/nextbox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>{" "}
          Brief Nextbox réalisé par Léonard Ringot  Concepteur Développeur d'Applications - Simplon
        </a>
        
        
      </footer>
      </div>
    </>
  );
}