import "./App.css";
import { Paginada } from "./Paginada";
import datos from "./datos.json";
import { COLUMNS } from "./Column.js";

export default function App() {

  return <Paginada data={datos} columns={COLUMNS} />;

 
}
