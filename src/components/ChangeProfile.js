import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

export const ChangeProfile = () => {
  const { setUsername } = useContext(AppContext);
  const [newUsername, setNewUsername] = useState("");
  const handleChange = (event) => {
    setNewUsername(event.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change UserName
      </button>
    </div>
  );
};
