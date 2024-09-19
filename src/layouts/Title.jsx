import React from "react";
import banner from "../assets/banner.png";
import SliderButton from "../components/molecules/SliderButton";
import arrow from "../assets/arrow.png";
import rating from "../assets/rating.png";
import partner from "../assets/partner.png";

import { Testimonial } from "../components/molecules/Testimonial";
import RatingScore from "../components/molecules/RatingScore";

// Main Hero Component
const Title = () => (
  <section className="bg-white">
    <div className="grid max-w-screen-xl pb-8 mx-auto lg:gap-8 xl:gap-4 grid-cols-12">
      {/* Banner Section */}
      <section className="mr-auto place-self-center lg:col-span-7 rounded-3xl bg-gradient-to-b from-black to-black/90">
        <div className="h-72 ml-10 mt-20  flex flex-col">
          <h5 className="text-left mt-18 text-slate-500 text-lg font-normal">
            All the features you need in one App for any kind of <br /> your
            business 🚀
          </h5>
          <h1 className="text-left mt-6 text-white max-w-2xl mb-4 text-5xl font-semibold leading-none tracking-tight">
            Manage your restaurant <br />
            business so advanced
          </h1>
          <SliderButton
            label="Get Started for Free"
            className="w-1/2 mt-6 text-white bg-orange-500"
            icon={arrow}
          />
        </div>
        <img className="mb-6" src={banner} alt="Banner" />
      </section>

      {/* Testimonials and Reviews Section */}
      <section className="mr-auto place-self-center lg:col-span-5">
        <Testimonial
          text="Deliver a better customer experience and increase their operational efficiency."
          author="Jane Doe"
          position="CEO at Company"
          image={rating}
          fontSize="text-lg"
          color="text-red-500"
          background="#FFF5EE"
        />

        <div className="flex flex-row space-x-4">
          
          <div className="basis-1/2 rounded-3xl">
            <section className="bg-gray-50 mb-8">
              <div
                className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-2xl"
                style={{ background: "#F2ECFF" }}
              >
                <SliderButton
                  label="Rating Review"
                  className="text-slate-950 bg-white"
                  icon={rating}
                />
                <figure className="max-w-screen-md mx-auto ">
                  <blockquote className="mb-7 mt-6">
                    <p className="text-base text-slate-500 text-left">
                      Reviews of some of our app restaurant industry companies.
                    </p>
                  </blockquote>
                  <RatingScore rating="4.9" />
                </figure>
              </div>
            </section>
          </div>

          <div className="basis-1/2 rounded-3xl">
            <section className="bg-gray-50 mb-8">
              <div className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-2xl bg-black/90">
                <SliderButton
                  label="Rating Review"
                  className="text-white bg-slate-900"
                  icon={partner}
                />
                <figure className="max-w-screen-md mx-auto ">
                  <blockquote className="mb-7 mt-6">
                    <p className="text-base text-white text-left">
                      Reviews of some of our app restaurant industry companies.
                    </p>
                  </blockquote>
                  <div className="pr-3 font-bold text-6xl text-white">
                    50{" "}
                    <span className="font-semibold text-xl text-white">
                      {" "}
                      Thousand
                    </span>
                  </div>
                </figure>
              </div>
            </section>
          </div>
        </div>

        <Testimonial
          text="Deliver a better customer experience and increase their operational efficiency."
          author="Jane Doe"
          position="CEO at Company"
          image={rating}
          fontSize="text-lg"
          color="text-red-500"
          background="#FFF5EE"
        />
      </section>
    </div>
  </section>
);

export default Title;
