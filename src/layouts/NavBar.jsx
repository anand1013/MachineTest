import React from "react";

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
  <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    {items.map((item, index) => (
      <li key={index}>
        <a
          href={item.href}
          className={`${
            item.current ? "bg-black text-white" : "bg-white text-black"
          } font-medium rounded-full text-base px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 
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
    {/* Hamburger icon */}
    {!isOpen ? (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ) : (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    )}
  </button>
);

const NavBar = ({ logoSrc, brandName, menuItems, signInLabel, onSignIn }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section className="w-full">
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Logo logoSrc={logoSrc} brandName={brandName} />

          <section
            className={`items-center justify-between ${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <MenuItems items={menuItems} />
          </section>

          <section className="flex items-center lg:order-2">
            <NavButton label={signInLabel} onClick={onSignIn} />

            <HamburgerToggle isOpen={isMenuOpen} onToggle={handleToggleMenu} />
          </section>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
