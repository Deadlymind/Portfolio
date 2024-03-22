'use client'

import {
  RiYoutubeFill,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramFill,
  RiFacebookFill,
  RiDiscordFill,
}  from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/@DeadlyMindTv",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://github.com/Deadlymind",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/deadlymind/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://twitter.com/Deadlymind_Tn",
    name: <RiTwitterFill />,
  },
  {
    path: "https://www.instagram.com/oussama.deadly.x",
    name: <RiInstagramFill />,
  },
  {
    path: "https://www.facebook.com/Deadlymind.x/",
    name: <RiFacebookFill />,
  },
  {
    path: "https://discord.gg/yeJzaV88wV",
    name: <RiDiscordFill />,
  },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
        <Link key={index} href={icon.path} target="_blank" rel="noopener noreferrer">
          <div className={`${iconStyles}`} >{icon.name}</div>
        </Link>
        );
      })}
    </div>
  )
}

export default Socials