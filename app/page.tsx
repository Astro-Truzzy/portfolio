import React from "react";
import Hero from "./Components/Hero";
import { FloatingNav } from "./Components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./Components/Grid";



export default function Home() {
  return (
    <main className="relative bg-black-100 text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={[
          {name: "Home", link:'home', icon:<FaHome/>}
        ]}/>
        <Hero/>
        <Grid/>
      </div>
    </main>
  );
}
