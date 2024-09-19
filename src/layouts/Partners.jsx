import React from "react";
import kfc from "../assets/kfc-logo.png";
import pizza from "../assets/pizza-hut-logo.png";
import starbucks from "../assets/starbucks-logo.png";
import burger from "../assets/burger-king-logo.png";
import jcorun from "../assets/jco-run-logo.png";
import mcdonalds from "../assets/mcdonalds-logo.png";

const partnersData = [
  { name: "KFC", img: kfc, url: "https://www.kfc.com/" },
  { name: "Pizza Hut", img: pizza, url: "https://www.pizzahut.co.in/" },
  { name: "Starbucks", img: starbucks, url: "https://www.starbucks.com/" },
  { name: "Burger King", img: burger, url: "https://www.bk.com/" },
  { name: "Jco Run", img: jcorun, url: "https://jco.run/" },
  { name: "McDonald's", img: mcdonalds, url: "https://www.mcdonalds.com/" },
];

const PartnersCard = ({ name, img, url }) => (
  <a
    href={url}
    className="flex items-center lg:justify-center"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={img}
      alt={`Logo of ${name}`}
      className="max-w-full h-auto"
      loading="lazy"
    />
  </a>
);

const Partners = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 text-center">
          <span className="text-base text-lg font-semibold leading-tight text-gray-900 mb-40">
            Trusted by over 50 thousand restaurants in 10+ countries
          </span>
          <div className="mt-8 grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6">
            {partnersData.map((sponsor) => (
              <PartnersCard key={sponsor.name} {...sponsor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
