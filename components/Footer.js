import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from '../styles/Footer.module.css' 
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <>
    <div className={Style.myFooter}>
      <footer>
        
        <h2>Brief Nextbox réalisé par Léonard Ringot  Concepteur Développeur d'Applications - Simplon</h2>
        <a className={Style.ecarteToiStp} href="https://www.linkedin.com/in/leonard-ringot/"><BsLinkedin ></BsLinkedin></a>
        <a href="https://github.com/LeonardRingot/nextbox"><BsGithub></BsGithub></a>
      </footer>
      </div>
    </>
  );
}