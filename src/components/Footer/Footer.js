import React, { useEffect, useState, useRef } from "react";
import { ethers } from "ethers";
import './Footer.css';
import logoUrl from './logo.svg';



const discord_link = "https://discord.com";
const twitter_link = "";
const reddit_link = "";
const opensea_link = "";

const open_discord = async() => {window.open(discord_link, '_blank')};

const connectWallet = async  () => {
  await window.ethereum.enable()
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

};

const Footer = () => (
  <div className="header">


    <button className = "discordbotton"  onClick = { open_discord } > </button>

    <button className = "twitterbotton" > </button>

    <button className = "instagrambotton1" > </button>

    <button className = "openseabotton" > </button>
  </div>

)
export default Footer;
