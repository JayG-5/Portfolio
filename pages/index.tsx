import Seo from "@/components/seo";
import HomeTitle from "@/components/homeTitle";
import HomeProfile from "@/components/homeProfile";
import HomeStacks from "@/components/homeStacks";
import HomeProjects from "@/components/homeProjects";
import HomeKmong from "@/components/homeKmong";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    setIsMobile(window.innerWidth<720);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <div className={isMobile? "w-fit snap-y":"snap-y"}>
      <Seo subtitle="Home"/>
      <HomeTitle />
      <HomeProfile />
      <HomeStacks />
      <HomeProjects />
      <HomeKmong />
    </div>
  );
}
