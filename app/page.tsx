import React from "react";
import Hero from "./Components/Hero";
import { FloatingNav } from "./Components/ui/FloatingNav";
import Grid from "./Components/Grid";
import RecentProjects from "./Components/RecentProjects";
import { navItems } from "@/data";
import Clients from "./Components/Clients";
import Experience from "./Components/Experience";
import Approach from "./Components/Approach";



export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
      </div>
    </main>
  );
}
