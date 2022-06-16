import "./App.css";
import { CatList } from "./components/CatList";
import { DogList } from "./components/DogList";

const CatData = [
  {
    name: "Whiskers",
    chipNumber: "13579",
  },
  {
    name: "Fang",
    chipNumber: "82672",
  },
  {
    name: "Beetle",
    chipNumber: "02468",
  },
  {
    name: "Elvis",
    chipNumber: "",
  },
];

const DogData = [
  {
    name: "Wishbone",
    favoriteToy: "Squeaker",
    chipNumber: "82373",
  },
  {
    name: "Appa",
    favoriteToy: "Ball",
    chipNumber: "29238",
  },
  {
    name: "Jimminy",
    favoriteToy: "Bone",
    chipNumber: "72902",
  },
];

function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList cats={CatData}></CatList>
      <h1>The Pup Parade</h1>
      <DogList dogs={DogData}></DogList>
    </main>
  );
}

export default App;
