import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import cong from "../configuration";

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
  const [data, setData] = useState([]);
  const database = getDatabase(cong);
  const collectionRef = ref(database, "partners");

  useEffect(() => {
    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if (dataItem) {
          const displayItem = Object.values(dataItem);
          setData(displayItem);
        }
      });
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 text-center">
          <span className="text-base text-lg font-semibold leading-tight text-gray-900 mb-40">
            Trusted by over 50 thousand restaurants in 10+ countries
          </span>
          <div className="mt-8 flex space-x-8 overflow-x-auto sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:gap-12 text-gray-500">
            {data.map((sponsor) => (
              <PartnersCard key={sponsor.name} {...sponsor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
