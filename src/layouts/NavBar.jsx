import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { LOGO_SRC, HAMBURGER_ICON, CLOSE_ICON } from "../assets"; //

const baseURL = process.env.REACT_APP_GOOGLE_API_BASE_URL;
// Logo Component
const Logo = ({ logoSrc, brandName }) => (
  <a href="/" className="flex items-center">
    <img src={logoSrc} alt="Logo" />
    <h1 className="font-bold self-center text-4xl whitespace-nowrap ml-2">
      {brandName}
    </h1>
  </a>
);

// MenuItems Component
const MenuItems = ({ items }) => (
  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8">
    {items.map((item, index) => (
      <li key={index} className="h-12">
        <a
          href={item.href}
          className={`${
            item.current ? "bg-black text-white" : "bg-white text-black"
          } font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 
          hover:bg-black hover:text-white`}
          aria-current={item.current ? "page" : undefined}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

// NavButton Component
const NavButton = ({ label, onClick }) => (
  <button
    className="text-orange-500 bg-white font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 border-2 border-orange-500"
    aria-label={label}
    onClick={onClick}
  >
    {label}
  </button>
);

// HamburgerToggle Component
const HamburgerToggle = ({ isOpen, onToggle }) => (
  <button
    data-collapse-toggle="mobile-menu-2"
    type="button"
    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
    aria-controls="mobile-menu-2"
    aria-expanded={isOpen}
    aria-label="Toggle navigation menu"
    onClick={onToggle}
  >
    <span className="sr-only">Open main menu</span>
    {/* Render Hamburger or Close icon based on state */}
    {!isOpen ? HAMBURGER_ICON : CLOSE_ICON}
  </button>
);

const NavBar = ({ logoSrc, brandName, menuItems, onSignIn }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (response) => {
      setUser(response);
      setShowAlert(true);
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  const handleLogOut = () => {
    googleLogout();
    setProfile(null);
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`${baseURL}/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        })
        .then((response) => setProfile(response.data))
        .catch((error) => console.error(error));
    }
  }, [user]);

  const CustomAlert = ({ onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Hi, <span className="text-orange-500">{profile?.name}</span> 😁
          <br />
          Welcome to <span className="font-ebold text-orange-600">Coca</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          All the features you need in one app for{" "}
          <span className="font-semibold">any kind of your business</span> 🚀.
        </p>
        <p className="mt-2 text-gray-600">
          Manage your restaurant business with{" "}
          <span className="font-semibold text-orange-500">advanced</span> tools
          and services.
        </p>
        <button
          className="text-orange-500 bg-white font-medium rounded-full text-base px-6 py-2 border-2 border-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {showAlert && <CustomAlert onClose={() => setShowAlert(false)} />}
      <nav className="bg-white border-gray-200 py-2.5 w-full">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Logo logoSrc={LOGO_SRC} brandName={brandName} />

          <div
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
          >
            <MenuItems items={menuItems} />
          </div>

          <div className="flex items-center lg:order-2">
            <NavButton
              label={user ? "Sign Out" : "Sign In"}
              onClick={user ? handleLogOut : handleGoogleLogin}
            />
            <HamburgerToggle isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
