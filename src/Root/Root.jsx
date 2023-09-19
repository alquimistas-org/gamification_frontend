import {
  Outlet,
  // useNavigation,
} from "react-router-dom";
import { Navbar } from "../componets/Navbar/Navbar";

function Root() {
  // const navigation = useNavigation(); // returns "idle", "submitting", "loading"
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export { Root };
