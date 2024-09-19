import React from "react";
import FeatureCard from "../components/molecules/FeatureCard";
import { Testimonial } from "../components/molecules/Testimonial";
import jcorun from "../assets/jco-run-logo.png";

// TestimonialList Component
const TestimonialList = ({ testimonials }) => {
  return (
    <div className="col-span-2 mb-8">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          text={testimonial.text}
          author={testimonial.author}
          position={testimonial.position}
          image={testimonial.image}
          fontSize="text-lg"
          color={testimonial.color}
          background={testimonial.background}
        />
      ))}
    </div>
  );
};

const AdvantageTestimonials = () => {
  const features = [
    {
      icon: "M42.8 28.293C40.3867 28.293 39.4 26.5863 40.6 24.493C41.2933 23.2796 40.88 21.733 39.6667 21.0396L37.36 19.7196C36.3067 19.093 34.9467 19.4663 34.32 20.5196L34.1733 20.773C32.9733 22.8663 31 22.8663 29.7867 20.773L29.64 20.5196C29.04 19.4663 27.68 19.093 26.6267 19.7196L24.32 21.0396C23.1067 21.733 22.6933 23.293 23.3867 24.5063C24.6 26.5863 23.6133 28.293 21.2 28.293C19.8133 28.293 18.6667 29.4263 18.6667 30.8263V33.173C18.6667 34.5596 19.8 35.7063 21.2 35.7063C23.6133 35.7063 24.6 37.413 23.3867 39.5063C22.6933 40.7196 23.1067 42.2663 24.32 42.9596L26.6267 44.2796C27.68 44.9063 29.04 44.533 29.6667 43.4796L29.8133 43.2263C31.0133 41.133 32.9867 41.133 34.2 43.2263L34.3467 43.4796C34.9733 44.533 36.3333 44.9063 37.3867 44.2796L39.6933 42.9596C40.9067 42.2663 41.32 40.7063 40.6267 39.5063C39.4133 37.413 40.4 35.7063 42.8133 35.7063C44.2 35.7063 45.3467 34.573 45.3467 33.173V30.8263C45.3333 29.4396 44.2 28.293 42.8 28.293ZM32 36.333C29.6133 36.333 27.6667 34.3863 27.6667 31.9996C27.6667 29.613 29.6133 27.6663 32 27.6663C34.3867 27.6663 36.3333 29.613 36.3333 31.9996C36.3333 34.3863 34.3867 36.333 32 36.333Z", // Replace with actual path data
      title: "Operational Efficiency",
      description: "Automate ordering, payment, and stock management.",
    },
    {
      icon: "M43.88 30.8263V24.973C43.88 23.8797 43.0533 22.6397 42.0267 22.2263L34.6 19.1863C32.9333 18.5063 31.0533 18.5063 29.3867 19.1863L21.96 22.2263C20.9467 22.6397 20.12 23.8797 20.12 24.973V30.8263C20.12 37.3463 24.8533 43.453 31.32 45.2397C31.76 45.3597 32.24 45.3597 32.68 45.2397C39.1467 43.453 43.88 37.3463 43.88 30.8263ZM33 33.1597V36.6663C33 37.213 32.5467 37.6663 32 37.6663C31.4533 37.6663 31 37.213 31 36.6663V33.1597C29.6533 32.733 28.6667 31.4797 28.6667 29.9997C28.6667 28.1597 30.16 26.6663 32 26.6663C33.84 26.6663 35.3333 28.1597 35.3333 29.9997C35.3333 31.493 34.3467 32.733 33 33.1597Z", // Replace with actual path data
      title: "Operational Efficiency",
      description: "Automate ordering, payment, and stock management.",
    },
    {
      icon: "M43.88 30.8263V24.973C43.88 23.8797 43.0533 22.6397 42.0267 22.2263L34.6 19.1863C32.9333 18.5063 31.0533 18.5063 29.3867 19.1863L21.96 22.2263C20.9467 22.6397 20.12 23.8797 20.12 24.973V30.8263C20.12 37.3463 24.8533 43.453 31.32 45.2397C31.76 45.3597 32.24 45.3597 32.68 45.2397C39.1467 43.453 43.88 37.3463 43.88 30.8263ZM33 33.1597V36.6663C33 37.213 32.5467 37.6663 32 37.6663C31.4533 37.6663 31 37.213 31 36.6663V33.1597C29.6533 32.733 28.6667 31.4797 28.6667 29.9997C28.6667 28.1597 30.16 26.6663 32 26.6663C33.84 26.6663 35.3333 28.1597 35.3333 29.9997C35.3333 31.493 34.3467 32.733 33 33.1597Z", // Replace with actual path data
      title: "Operational Efficiency",
      description: "Automate ordering, payment, and stock management.",
    },
    {
      icon: "M43.88 30.8263V24.973C43.88 23.8797 43.0533 22.6397 42.0267 22.2263L34.6 19.1863C32.9333 18.5063 31.0533 18.5063 29.3867 19.1863L21.96 22.2263C20.9467 22.6397 20.12 23.8797 20.12 24.973V30.8263C20.12 37.3463 24.8533 43.453 31.32 45.2397C31.76 45.3597 32.24 45.3597 32.68 45.2397C39.1467 43.453 43.88 37.3463 43.88 30.8263ZM33 33.1597V36.6663C33 37.213 32.5467 37.6663 32 37.6663C31.4533 37.6663 31 37.213 31 36.6663V33.1597C29.6533 32.733 28.6667 31.4797 28.6667 29.9997C28.6667 28.1597 30.16 26.6663 32 26.6663C33.84 26.6663 35.3333 28.1597 35.3333 29.9997C35.3333 31.493 34.3467 32.733 33 33.1597Z", // Replace with actual path data
      title: "Operational Efficiency",
      description: "Automate ordering, payment, and stock management.",
    },
    {
      icon: "M43.88 30.8263V24.973C43.88 23.8797 43.0533 22.6397 42.0267 22.2263L34.6 19.1863C32.9333 18.5063 31.0533 18.5063 29.3867 19.1863L21.96 22.2263C20.9467 22.6397 20.12 23.8797 20.12 24.973V30.8263C20.12 37.3463 24.8533 43.453 31.32 45.2397C31.76 45.3597 32.24 45.3597 32.68 45.2397C39.1467 43.453 43.88 37.3463 43.88 30.8263ZM33 33.1597V36.6663C33 37.213 32.5467 37.6663 32 37.6663C31.4533 37.6663 31 37.213 31 36.6663V33.1597C29.6533 32.733 28.6667 31.4797 28.6667 29.9997C28.6667 28.1597 30.16 26.6663 32 26.6663C33.84 26.6663 35.3333 28.1597 35.3333 29.9997C35.3333 31.493 34.3467 32.733 33 33.1597Z", // Replace with actual path data
      title: "Operational Efficiency",
      description: "Automate ordering, payment, and stock management.",
    },
    {
      icon: "M43.88 30.8263V24.973C43.88 23.8797 43.0533 22.6397 42.0267 22.2263L34.6 19.1863C32.9333 18.5063 31.0533 18.5063 29.3867 19.1863L21.96 22.2263C20.9467 22.6397 20.12 23.8797 20.12 24.973V30.8263C20.12 37.3463 24.8533 43.453 31.32 45.2397C31.76 45.3597 32.24 45.3597 32.68 45.2397C39.1467 43.453 43.88 37.3463 43.88 30.8263ZM33 33.1597V36.6663C33 37.213 32.5467 37.6663 32 37.6663C31.4533 37.6663 31 37.213 31 36.6663V33.1597C29.6533 32.733 28.6667 31.4797 28.6667 29.9997C28.6667 28.1597 30.16 26.6663 32 26.6663C33.84 26.6663 35.3333 28.1597 35.3333 29.9997C35.3333 31.493 34.3467 32.733 33 33.1597Z", // Replace with actual path data
      title: "Operational Efficiency",
      description: "Automate ordering, payment, and stock management.",
    },
  ];

  const testimonials = [
    {
      text: "“We are very impressed with the use of this POS application. Management of orders and payments becomes faster and more accurate so as to increase our operational efficiency.”",
      author: "Stevano William",
      position: "CEO at Company",
      image: jcorun,
      color: "#38715B",
      background: "#F1FAEB",
    },
    {
      text: "“The use of this application has given our company efficiency and accuracy in managing orders and payments.”",
      author: "Jennifer Lopes",
      position: "Business Owner at KFC Indonesia",
      image: jcorun,
      color: "#3871A5",
      background: "#ECF6FF",
    },
    {
      text: "“We are pleased with the flexibility of this company's POS application. We can easily adapt our menu, prices, and promotions according to market needs.”",
      author: "Emanuel Rodrigo",
      position: "CEO at Company",
      image: jcorun,
      color: "#DC8558",
      background: "#FFF5EE",
    },
  ];

  return (
    <section className="bg-white">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        {/* Features Section */}
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Testimonials Section */}
        <TestimonialList testimonials={testimonials} />
      </div>
    </section>
  );
};

export default AdvantageTestimonials;
