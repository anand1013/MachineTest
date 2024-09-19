import React from "react";
import NavBar from "../layouts/NavBar";
import Title from "../layouts/Title";
import Partners from "../layouts/Partners";
import Feature from "../layouts/Feature";

import logo from "../assets/logo.png";
import Pricing from "../layouts/Pricing";

const Home = () => {
  const menuItems = [
    { label: "Home", href: "/", current: true },
    { label: "Features", href: "/features", current: false },
    { label: "Pricing", href: "/pricing", current: false },
    { label: "Blog", href: "/blog", current: false },
    { label: "Resources", href: "/resources", current: false },
  ];

  const handleSignIn = () => {
    console.log("Sign in clicked!");
  };

  return (
    <div>
      <header>
        <NavBar
          logoSrc={logo}
          brandName="Coca"
          menuItems={menuItems}
          signInLabel="Sign in"
          onSignIn={handleSignIn}
        />
      </header>
      <body>
        <Title></Title>
        <Partners></Partners>
        <Feature></Feature>
        <Pricing></Pricing>
      </body>
    </div>
  );
};

export default Home;
