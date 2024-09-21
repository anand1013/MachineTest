import React, { useEffect, useState } from "react";
import FeatureCard from "../components/molecules/FeatureCard";
import { Testimonial } from "../components/molecules/Testimonial";
import { getDatabase, ref, onValue } from "firebase/database";
import cong from "../configuration";

// TestimonialList Component
const TestimonialList = ({ testimonials }) => {
  return (
    <div className="mt-12 col-span-2 mb-8 ">
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
  const [testimonial, setTestimonial] = useState([]);
  const [card, setCard] = useState([]);
  const database = getDatabase(cong);
  const testimonialCollectionRef = ref(database, "testimonial");
  const cardCollectionRef = ref(database, "featurecard");

  useEffect(() => {
    const fetchData = () => {
      onValue(testimonialCollectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if (dataItem) {
          const displayItem = Object.values(dataItem);
          setTestimonial(displayItem);
        }
      });

      onValue(cardCollectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if (dataItem) {
          const displayItem = Object.values(dataItem);
          setCard(displayItem);
        }
      });
    };
    fetchData();
  }, []);

  return (
    <section className="bg-white">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-2 gap-12">
        {/* Features Section */}
        <div>
          <div className="text-left">
            <h1 className="text-start max-w-3xl mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Ease in the <br />
              Hand
            </h1>
            <p className="mb-8 lg:text-xl font-medium text-gray-500">
              Using our app in business, especially in the restaurant industry,{" "}
              <br />
              has many advantages. Here are some of them:
            </p>
          </div>

          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {card.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <TestimonialList testimonials={testimonial} />
        </div>
      </div>
    </section>
  );
};

export default AdvantageTestimonials;
