// Components
import About from "./components/Layout/About";
import Banner from "./components/Layout/Banner";
import Navbar from "./components/Layout/Navbar";
import Myself from "./components/Layout/Myself";
import Background from "./components/UI/Background";
import Portfolio from "./components/Layout/Portfolio";

// Icons
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";

// Images
import newsImage from "./assets/news-report.png";
import golfImage from "./assets/campo-de-golf.png";
import gameImage from "./assets/consola-de-juego.png";
import compassImage from "./assets/brujula.png";
import diceImage from "./assets/dado.png";
import portfolioImage from "./assets/professional-portfolio.png";
import challengeImage from "./assets/challenges.png";
import shoppingImage from "./assets/shopping.png";
import Skills from "./components/Layout/Skills";
import Contact from "./components/Layout/Contact";

const ABOUT_INFO = [
  {
    id: "1",
    icon: faMobile,
    title: "Responsive",
    description: "My layouts work on all devices, desktop or mobile.",
  },
  {
    id: "2",
    icon: faLightbulb,
    title: "Intuitive",
    description: "Strong preference for friendly user experience.",
  },
  {
    id: "3",
    icon: faPenFancy,
    title: "Details",
    description:
      "I do not submit a job until the smallest detail is up to perfection.",
  },
  {
    id: "4",
    icon: faRocket,
    title: "Dinamic",
    description: "I like movement in my websites so them aren't so static.",
  },
];

const PORTFOLIO_PROJECTS = [
  {
    id: "7",
    image: newsImage,
    title: "News & Roll",
    description:
      "Create an account, write an article, post it, read it! Database included.",
    link: "https://newsandroll.herokuapp.com/",
  },
  {
    id: "8",
    image: gameImage,
    title: "Games",
    description: "Bunch of simple games created on Reactjs.",
    link: "https://github.com/maldonadomatias/react-games/",
  },
  {
    id: "1",
    image: diceImage,
    title: "Dado Vuelta",
    description:
      "Game between two players. The first to reach 100 points wins.",
    link: "https://dado-vuelta.herokuapp.com/",
  },
  {
    id: "2",
    image: compassImage,
    title: "Rumbo Sur",
    description:
      "Interactive travel guide for Southern Argentina. Users can add destinations and rated them",
    link: "https://rumbosur.herokuapp.com/",
  },
  {
    id: "3",
    image: golfImage,
    title: "Golf Scorecard",
    description:
      "Customizable golf scorecard for each course. Suitable for 2 players.",
    link: "https://aramayo.herokuapp.com/",
  },
  {
    id: "4",
    image: portfolioImage,
    title: "My Portfolio",
    description: "This website was developed 100% by me.",
    link: "",
  },
  {
    id: "5",
    image: shoppingImage,
    title: "Gorrafy",
    description:
      "Integrating project for Digital-House. An e-commerce of hats.",
    link: "",
  },
  {
    id: "6",
    image: challengeImage,
    title: "Krak Miami",
    description:
      'This is a landing page challenge of "Krak Miami" created in 4 days. ',
    link: "https://github.com/maldonadomatias/krakmiami/",
  },
];

console.log("App running");

function App() {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <About items={ABOUT_INFO} />
      <Myself />
      <Portfolio items={PORTFOLIO_PROJECTS} />
      <Skills />
      <footer>
        <Contact />
      </footer>
      <Background />
    </div>
  );
}

export default App;
