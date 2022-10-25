import { MainTypes } from "./Main.types";

import "./Main.css";

export const MainLayout = (props: MainTypes) => {
  const { children } = props;

  return <div className="main">{children}</div>;
};
