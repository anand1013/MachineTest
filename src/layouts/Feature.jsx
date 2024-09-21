import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import cong from "../configuration";

// FeatureImage Component
const FeatureImage = ({ imgSrc, altText }) => (
  <img
    className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
    src={imgSrc}
    alt={altText}
  />
);

// FeatureText Component
const FeatureText = ({ title, description, demoLink, infoLink }) => (
  <div className="text-start text-gray-500 sm:text-lg flex flex-col justify-between">
    <div>
      <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mb-8 lg:text-xl">{description}</p>
    </div>
    <div>
      <a
        href={demoLink}
        className="text-white bg-orange-500 font-medium rounded-full text-sm px-4 md:px-5 lg:px-5 py-2 lg:py-2.5 mr-2 lg:mr-4"
      >
        Launch Demo
      </a>
      <a
        href={infoLink}
        className="text-black bg-white font-medium rounded-full text-sm px-4 md:px-5 lg:px-5 py-2 lg:py-2.5 mr-2 lg:mr-0 border-2 border-black"
      >
        More Info
      </a>
    </div>
  </div>
);

// FeatureSection Component
const FeatureSection = ({ imgSrc, title, description, demoLink, infoLink, reverse }) => (
  <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
    {reverse ? (
      <>
        <FeatureText title={title} description={description} demoLink={demoLink} infoLink={infoLink} />
        <FeatureImage imgSrc={imgSrc} altText="feature" />
      </>
    ) : (
      <>
        <FeatureImage imgSrc={imgSrc} altText="feature" />
        <FeatureText title={title} description={description} demoLink={demoLink} infoLink={infoLink} />
      </>
    )}
  </div>
);

// Main Feature component
const Feature = () => {
  const [features, setFeatures] = useState([]);
  const database = getDatabase(cong);

  useEffect(() => {
    const fetchData = () => {
      const collectionRef = ref(database, "feature");
      onValue(collectionRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setFeatures(Object.values(data));
        }
      });
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-14 lg:px-6">
        <h1 className="text-start max-w-3xl mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          Complementary features <br />
          for your business needs
        </h1>

        {features.map(({ imgSrc, title, description, demoLink, infoLink, reverse }, idx) => (
          <FeatureSection
            key={idx}
            imgSrc={imgSrc}
            title={title}
            description={description}
            demoLink={demoLink}
            infoLink={infoLink}
            reverse={reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
