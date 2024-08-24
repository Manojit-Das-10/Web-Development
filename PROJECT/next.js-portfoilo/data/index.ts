import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  // { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently crafting the frontend for an innovative Ed-Tech platform.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/Java Script.svg",
      "/three.svg",
      "/gsap.svg",
    ],
    link: "https://manojit-das-iphone-ui.netlify.app/",
  },
  {
    id: 2,
    title: "CaraCart - An Ecommerce Website",
    des: "Developed an e-commerce frontend with responsive design, intuitive navigation, and secure checkout.",
    img: "/caracart.png",
    iconLists: ["/HTML.png", "/tail.svg", "/CSS.png", "/Java Script.svg"],
    link: "https://caracart-manojit-das.netlify.app/",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    des: "Created an interactive Tic-Tac-Toe game with a smooth UI and real-time gameplay.",
    img: "/ttt.png",
    iconLists: ["/HTML.png", "/tail.svg", "/CSS.png", "/Java Script.svg"],
    link: "https://manojit-tic-tac-toe.netlify.app/",
  },
  {
    id: 4,
    title: "Discord UI- clone",
    des: "Create a Discord UI clone by replicating its layout, styling, and interactive features.",
    img: "discord.png",
    iconLists: ["HTML.png", "/tail.svg", "/CSS.png", "/Java Script.svg"],
    link: "https://manojit-discord-clone.netlify.app/",
  },
];

export const skills = [
  {
    name: "Programming Language",
    images: ["C_logo.png", "cpp_logo.png", "Java Script.svg"],
  },

  {
    name: "Frontend Development",
    images: [
      "HTML.png",
      "CSS.png",
      "tail.svg",
      "three.svg",
      "re.svg",
      "next.svg",
      "gsap.svg",
      "Chart.js.svg"
    ],
  },
  {
    name: "Backend Developmnet",
    images: ["Node.js.svg", "Express.png", "Mongodb.svg"],
  },
  
  {
    name: "Others",
    images: ["figma logo.png", "git.svg"],
  },
];

export const companies = [
  {
    id: 1,
    name: "LeetCode",
    img: "/leetcode.svg",
    // nameImg: "/cloudName.svg",
    link: "https://leetcode.com/madboy_10/",
  },
  {
    id: 2,
    name: "GeeksforGeeks",
    img: "/geeksforgeeks.svg",
    // nameImg: "/appName.svg",
    link: "https://auth.geeksforgeeks.org/user/madboy_10",
  },
  {
    id: 3,
    name: "Linkedin",
    img: "/linkedin.png",
    // nameImg: "/hostName.svg",
    link: "https://www.linkedin.com/in/manojit-das-10-/",
  },
  {
    id: 4,
    name: "Youtube",
    img: "/youtube.svg",
    // nameImg: "/streamName.svg",
    link: "https://youtube.com/@Code_with_Manojit?si=iWwBN2INuNMOAPnd",
  },
  {
    id: 5,
    // nameImg: "/dockerName.svg",
    name: "Medium",
    img: "/medium-logo.png",
    link: "https://medium.com/@manojitdas180306",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Open Source Contributor",
    desc: "Reimagined and enhanced the functionality of websites through innovative design and development.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Campus Ambassador",
    desc: "Represented the college at various events and activities as a Campus Ambassador.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Manojit-Das-10",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/Manojit_Das_10",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/manojit-das-10-/",
  },
];
