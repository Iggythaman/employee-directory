import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function EmployeInfoCall() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=50").then(res =>
      setData(res.data)
    );
  }, []);
  //this was within the render function

  <div>
    {JSON.stringify(data)}
    {data && <img alt="" src={data} />}
  </div>;

  return (
    <ul>
      <li></li>
    </ul>
  );
}

// const userdata = {
//   content: {
//     body: [
//       {
//         _uid: "",
//         name: {
//           title: "",
//           first: "",
//           last: ""
//         }
//       }
//     ]
//   }
// };
