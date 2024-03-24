import Image from "next/image";
import {Defcon} from "./components/defcon/Defcon";
import Achievements from "./components/achievements/Achievements";

export default function Home() {
  return (
    <div className="">
      <Defcon></Defcon>   
      <Achievements></Achievements>
    </div>
  );
}
