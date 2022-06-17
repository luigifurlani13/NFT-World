import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Children } from "../component/children";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <Children />
    </div>
  );
};
