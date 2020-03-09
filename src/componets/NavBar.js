import React from "react";
import apiCalls from "../utilities/apiCalls";

export default function NavBar({ search }) {
  // eslint-disable-next-line
  var users = apiCalls.getUsers();

  return (
    <nav>
      <div>
        <>
          <input
            className="form-control"
            type="search"
            onChange={e => search(e)}
          />
          <button onclick="users">Search</button>
        </>
      </div>
    </nav>
  );
}
