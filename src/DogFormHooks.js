import { useState } from "react";

const DogFormHooks = () => {
  const [name, setName] = useState("");

  const inputChangeHandler = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return (
    <div>
      <input type="text" value={name} onChange={inputChangeHandler} />
    </div>
  );
};

export default DogFormHooks;
