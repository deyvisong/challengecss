import "./App.css";
import Car from "./components/Car";

function App() {
  const myCars = [
    { name: "Ferrari", km: 5000, color: "Red" },
    { name: "Lamborghini", km: 0, color: "Orange" },
    { name: "Maserati", km: 25000, color: "Red" },
  ];

  return (
    <div className="App">
      <h1>Showroom Cars</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    </div>
  );
}
export default App;
