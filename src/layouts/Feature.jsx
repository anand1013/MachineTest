import React from "react";
import featureframe from "../assets/feature-frame.png"; // Replace with actual path

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
      <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      <p className="mb-8 lg:text-xl">{description}</p>
    </div>
    <div>
      <a
        href={demoLink}
        className="text-white bg-orange-500 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-4"
      >
        Launch Demo
      </a>
      <a
        href={infoLink}
        className="text-black bg-white font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 border-2 border-black"
      >
        More Info
      </a>
    </div>
  </div>
);

// FeatureSection Component
const FeatureSection = ({
  imgSrc,
  title,
  description,
  demoLink,
  infoLink,
  reverse = false,
}) => (
  <div className="gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
    {reverse ? (
      <>
        {/* Render Text First when reverse is true */}
        <FeatureText
          title={title}
          description={description}
          demoLink={demoLink}
          infoLink={infoLink}
        />
        <FeatureImage imgSrc={imgSrc} altText="feature" />
      </>
    ) : (
      <>
        {/* Render Image First when reverse is false */}
        <FeatureImage imgSrc={imgSrc} altText="feature" />
        <FeatureText
          title={title}
          description={description}
          demoLink={demoLink}
          infoLink={infoLink}
        />
      </>
    )}
  </div>
);

// Main Feature component
const Feature = () => {
  const featuresData = [
    {
      imgSrc: featureframe,
      title: "Dashboard to monitor your business sales from anywhere",
      description:
        "Dashboard provides in-depth insight into the performance menu items. You can see popular and unsold menus, helping you to monitor your restaurant business sales.",
      demoLink: "#",
      infoLink: "#",
    },
    {
      imgSrc: featureframe,
      title: "Easier and better Desk Management",
      description:
        "Desk management becomes smoother with interactive table visualizations. You can manage orders, allocate tables and maximize restaurant capacity.",
      demoLink: "#",
      infoLink: "#",
      reverse: true,
    },
    {
      imgSrc: featureframe,
      title: "More efficient customer recording and monitoring",
      description:
        "Monitor order records to tailor orders to customer preferences, such as options to add or remove ingredients for a more personalized experience and better service.",
      demoLink: "#",
      infoLink: "#",
    },
    // Add more feature objects as needed
  ];

  return (
    <div>
      <section className="bg-gray-50">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-14 lg:px-6">
          <h1 className="text-start max-w-3xl mb-4 text-6xl font-semibold">
            Complementary features <br />
            for your business needs
          </h1>

          {featuresData.map((feature, index) => (
            <FeatureSection
              key={index}
              imgSrc={feature.imgSrc}
              title={feature.title}
              description={feature.description}
              demoLink={feature.demoLink}
              infoLink={feature.infoLink}
              reverse={feature.reverse}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feature;
