import React from "react";
import NavBar from "./componets/NavBar";
import EmployeInfoCall from "./componets/EmployeInfoCall";

import "./App.css";

export default function App() {
  return (
    <div>
      <NavBar />
      Employee Directory
      <EmployeInfoCall />
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       {data.content.body.map(block => Components(block))}
//     </div>
//   );
// }
// export default App;
