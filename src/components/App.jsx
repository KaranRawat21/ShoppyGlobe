import { Outlet } from "react-router-dom";
import Test from "../Test";
import Header from "./Header";
import BottonRoutes from "./BottonRoutes";


export default function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1800px] flex flex-col items-center relative">
        {/* <Test /> */}
        <Header />
        <Outlet />
        <BottonRoutes />
      </div>
    </div>
  )
}
