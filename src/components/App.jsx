import { Outlet } from "react-router-dom";
import Test from "../Test";
import Header from "./Header";


export default function App() {
  return (
    <div>
      {/* <Test /> */}
      <Header />
      <Outlet />
    </div>
  )
}
