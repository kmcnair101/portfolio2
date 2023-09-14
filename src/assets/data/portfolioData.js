import portfolioImg01 from "../images/portfolio-01.png";
import portfolioImg02 from "../images/portfolio-02.png";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Web",
    title: "The Goose Financial",
    description:
      "Fintech start up aimed at making credit more accessible to people migrating to the United States!",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.thegoosefinancial.com/",
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
  },
  {
    id: "03",
    imgUrl: portfolioImg01,
    category: "Web",
    title: "Travel Site",
    description:
      "Travel itinerary website.",
    technologies: ["HTML", "CSS"],
    siteUrl: "https://travel-site-self.vercel.app/index.html",
  },
];

export default portfolios;
