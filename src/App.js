import "./App.css";
import { CatList } from "./components/CatList";
import { DogList } from "./components/DogList";

const cat_data = [
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
];

function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList cats={cat_data}></CatList>
      <h1>The Pup Parade</h1>
      <DogList></DogList>
    </main>
  );
}

export default App;
