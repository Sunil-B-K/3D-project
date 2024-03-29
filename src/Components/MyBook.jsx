import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

import coverImg from "../assets/cover.png";
import EndImg from "../assets/last-page.png";


import FirstPage from "./Pages/Hero/FirstPage.jsx";

import Services from "./Pages/Services/Services.jsx";
import About from "./Pages/About/About.jsx";
import Projects from "./Pages/Projects/Projects.jsx";

import ProjectImg1 from "../assets/Projects/car-rental.jpg";
import ProjectImg2 from "../assets/Projects/restaurant.jpg";
import ProjectImg3 from "../assets/Projects/ecommerce.jpg";
import ProjectImg4 from "../assets/Projects/travel-website.jpg";
import Second from "./Second/Second.jsx";
// import Skills from "./pages/Skills/Skills.jsx";
import Skill from "./Pages/Skills/Skill.jsx";



const ProjectData = [
    {
      name: "Car Rental website",
      description: "Complete Responsive website using React js and Tailwind CSS",
      image: ProjectImg1,
      previewLink: "https://car-rental-tcj.netlify.app/",
    },
    {
      name: "Restaurant website",
      description: "Complete Responsive website using React js and Tailwind CSS",
      image: ProjectImg2,
      previewLink: "https://foodies-zone.netlify.app/",
    },
  ];

  const ProjectData2 = [
    {
      name: "Ecommerce website",
      description: "Complete Responsive website using React js and Tailwind CSS",
      image: ProjectImg3,
      previewLink: "https://shopsy-tcj.netlify.app/",
    },
    {
      name: "Travel website",
      description: "Complete Responsive website using React js and Tailwind CSS",
      image: ProjectImg4,
      previewLink: "https://travel-tcj.netlify.app/",
    },
  ];
  


  function MyBook(props) {
    return (
        <HTMLFlipBook width={600} height={700} showCover={true}>
            <Page number={1}>
                <Second coverImg={coverImg} title="MyPortfolio" />
            </Page>
            <Page number={2}><FirstPage /></Page>
            <Page number={3}><Skill /></Page>
            <Page number={4}><Services /></Page>
            <Page number={5}><About /></Page>
            <Page number={6}><Projects ProjectData={ProjectData} /></Page>
            <Page number={7}><Projects ProjectData={ProjectData2} /></Page>
            <Page number={8}><Second coverImg={EndImg} title="Thanks" /></Page>
        </HTMLFlipBook>
    );
}

export default MyBook
