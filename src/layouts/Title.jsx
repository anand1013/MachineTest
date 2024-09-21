import React, { useEffect, useState } from "react";
import { BANNER_IMAGE, ARROW_ICON, RATING_ICON, PARTNER_ICON } from "../assets.js";
import SliderButton from "../components/molecules/SliderButton";
import { Testimonial } from "../components/molecules/Testimonial";
import RatingScore from "../components/molecules/RatingScore";
import BarChart from "../components/molecules/BarChart";
import { getDatabase, ref, onValue } from "firebase/database";
import cong from "../configuration";

// Main Hero Component
const Title = () => {
  const [data, setData] = useState([]);
  const database = getDatabase(cong);
  const collectionRef = ref(database, "statitics");

  useEffect(() => {
    const fetchData = () => {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();
        if (dataItem) {
          setData(Object.values(dataItem));
        }
      });
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        {/* Banner Section */}
        <section className="col-span-1 m-4 md:m-0 rounded-3xl bg-gradient-to-b from-black/90 to-black flex flex-col justify-between">
          <div className="h-72 ml-4 sm:ml-10 mt-10 sm:mt-20 flex flex-col">
            <h5 className="text-left mt-4 sm:mt-18 text-slate-500 text-sm sm:text-lg font-normal">
              All the features you need in one App for any kind of <br /> your business 🚀
            </h5>
            <h1 className="text-left mt-6 text-white max-w-xs sm:max-w-2xl mb-4 text-3xl sm:text-5xl font-semibold leading-none tracking-tight">
              Manage your restaurant <br /> business so advanced
            </h1>
            <SliderButton
              label="Get Started for Free"
              className="w-3/4 sm:w-1/2 mt-6 text-white bg-orange-500"
              icon={ARROW_ICON}
            />
          </div>
          <img className="mb-6 w-full sm:w-auto" src={BANNER_IMAGE} alt="Banner" />
        </section>

        {/* Testimonials and Reviews Section */}
        <section className="col-span-1 m-4 md:m-0">
          {data.length > 0 && (
            <BarChart
              data={data}
              xAxisLabels={["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]}
              xKey="month"
              yKey="earnings"
              barColor="#8FBFFF"
              barWidth={10}
              animationConfig={{ duration: 1500, onLoad: { duration: 800 } }}
              axisStyles={{
                xAxis: { tickLabels: { fontSize: 10, sm: { fontSize: 12 }, padding: 5 } },
                yAxis: { tickLabels: { fontSize: 10, sm: { fontSize: 12 }, padding: 5 } },
              }}
            />
          )}

          <section className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
            <div className="basis-full sm:basis-1/2 rounded-3xl">
              <section className="bg-gray-50 mb-8">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-2xl" style={{ background: "#F2ECFF" }}>
                  <SliderButton label="Rating Review" className="text-slate-950 bg-white" icon={RATING_ICON} />
                  <figure className="max-w-screen-md mx-auto">
                    <blockquote className="mb-7 mt-6">
                      <p className="text-base text-slate-500 text-left">Reviews of some of our app restaurant industry companies.</p>
                    </blockquote>
                    <RatingScore rating="4.9" />
                  </figure>
                </div>
              </section>
            </div>

            <div className="basis-full sm:basis-1/2 rounded-3xl">
              <section className="mb-8">
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center rounded-2xl" style={{ background: "#6d6d6f" }}>
                  <SliderButton label="Rating Review" className="text-white bg-slate-900" icon={PARTNER_ICON} />
                  <figure className="max-w-screen-md mx-auto">
                    <blockquote className="mb-7 mt-6">
                      <p className="text-base text-white text-left">Reviews of some of our app restaurant industry companies.</p>
                    </blockquote>
                    <div className="pr-3 font-bold text-4xl sm:text-6xl text-white">
                      50 <span className="font-semibold text-xl sm:text-2xl text-white"> Thousand</span>
                    </div>
                  </figure>
                </div>
              </section>
            </div>
          </section>

          <Testimonial
            text="Deliver a better customer experience and increase their operational efficiency."
            author="Jane Doe"
            position="CEO at Company"
            image={PARTNER_ICON}
            fontSize="text-sm sm:text-lg"
            color="#DC8558"
            background="#FFF5EE"
          />
        </section>
      </div>
    </section>
  );
};

export default Title;
