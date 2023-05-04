import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Wilder, { IWilderProps } from "./components/Wilder/Wilder";

function App() {
  const [wilders, setWilders] = useState<IWilderProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const wilders = await axios.get("http://localhost:5000/api/wilder");
      console.log(wilders.data);
      setWilders(wilders.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <main className="container">
        <h2>Wilders</h2>
        {/* <AddWilder /> */}
        <section className="card-row">
          {wilders.map((wilder) => {
            return (
              <Wilder
                key={wilder.id + Date.now()}
                id={wilder.id}
                name={wilder.name}
                city={wilder.city}
                // skills={wilder.skills}
              />
            );
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022: Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
