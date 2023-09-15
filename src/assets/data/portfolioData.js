import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";
import portfolioImg03 from "../images/portfolio-03.png"


const portfolios = [
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Web",
    title: "Portfolio",
    description:
      "The code to my portfolio website",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://mcnairkris.com/",
    codeUrl: "https://github.com/kmcnair101/portfolio2",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Web",
    title: "Bandsite",
    description:
      "A website for the Bees Knees rockband",
    technologies: ["HTML", "CSS", "JavaScript"],
    siteUrl: "https://bandsite-xi.vercel.app/",
    codeUrl:"https://github.com/kmcnair101/kristinn-mcnair-bandsite",
  },
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web",
    title: "Travel Site",
    description:
      "Travel itinerary website.",
    technologies: ["HTML", "CSS"],
    siteUrl: "https://travel-site-self.vercel.app/index.html",
    codeUrl: "https://github.com/kmcnair101/kristin-mcnair-travel-site",
  },
];

export default portfolios;
