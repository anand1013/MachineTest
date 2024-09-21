import React from "react";
import NavBar from "../layouts/NavBar";
import Title from "../layouts/Title";
import Partners from "../layouts/Partners";
import Feature from "../layouts/Feature";
import { LOGO_SRC } from "../assets.js";
import Pricing from "../layouts/Pricing";
import AdvantageTestimonials from "../layouts/AdvantageTestimonials";

const Home = () => {
  const menuItems = [
    { label: "Home", current: true },
    { label: "Features", current: false },
    { label: "Pricing", current: false },
    { label: "Blog", current: false },
    { label: "Resources", current: false },
  ];

  const handleSignIn = () => {
    console.log("Sign in clicked!");
  };

  return (
    <div>
      <header>
        <NavBar
          logoSrc={LOGO_SRC}
          brandName="Coca"
          menuItems={menuItems}
          onSignIn={handleSignIn}
        />
      </header>
      <main>
        <Title />
        <Partners />
        <Feature />
        <Pricing />
        <AdvantageTestimonials />
      </main>
    </div>
  );
};

export default Home;
