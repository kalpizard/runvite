import { useState } from "react";

const Registration = () => {
  const [currUser, setCurrUser] = useState(null);
  console.log(currUser);
  const storedData = localStorage.getItem("data");
  setCurrUser(storedData);

  return (
    <fieldset>
      <div className="App">
        <User currUser={currUser} setCurrUser={setCurrUser} />
      </div>
    </fieldset>
  );
};

export default Registration;
