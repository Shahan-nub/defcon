import Image from "next/image";
import {Defcon} from "./components/Defcon";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <div className="">
      <Defcon></Defcon>   
      <Achievements></Achievements>
    </div>
  );
}
