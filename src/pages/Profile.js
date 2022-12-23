import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App";
import { useContext } from "react";

export const Profile = () => {
  const { username } = useContext(AppContext);

  return (
    <div>
      PROFILE, user is {username}
      <ChangeProfile />
    </div>
  );
};
