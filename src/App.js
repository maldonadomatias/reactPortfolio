import About from './components/Layout/About';
import Banner from './components/Layout/Banner';
import Navbar from './components/Layout/Navbar';
import Myself from './components/Layout/Myself';
import Background from './components/UI/Background';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

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
    description: "I do not submit a job until the smallest detail is up to perfection.",
  },
  {
    id: "4",
    icon: faRocket,
    title: "Dinamic",
    description: "I like movement in my websites so them aren't so static.",
  },
];

function App() {
  return (
    <div>
      <header>
        <Navbar/>
        <Banner/>
      </header>
      <About items={ABOUT_INFO}/>
      <Myself/>
      <Background/>
    </div>
  );
}

export default App;
