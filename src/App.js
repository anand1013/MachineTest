import logo from "./assets/logo.png";
import "./App.css";
import NavBar from "./layouts/NavBar";
import Title from "./layouts/Title";
import Partners from "./layouts/Partners";
import Feature from "./layouts/Feature";

function App() {
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
    <div className="App">
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
      </body>
    </div>
  );
}

export default App;
