import React from "react";
import pricingData from "../store/pricingData.json";

// Reusable Plan Header Component
const PlanHeader = ({ plan }) => (
  <th
    scope="col"
    className="font-medium h-16 sm:text-sm md:text-2xl"
    style={{
      background: plan.backgroundColor,
      color: plan.textColor,
      borderRight: "10px solid white",
      width: "200px",
    }}
  >
    {plan.name}
  </th>
);

// Reusable Plan Cell Component for both price and features
const PlanCell = ({ content, isPrice }) => (
  <td
    style={{
      backgroundColor: content.background,
      borderRight: "10px solid white",
    }}
  >
    {isPrice ? (
      <h1 className="font-semibold">
        <span className="text-sm md:text-4xl font-bold">${content.price}</span>
        <span className="text-sm text-xs">/Month</span>
      </h1>
    ) : content.included ? (
      <div class="flex justify-center items-center">
        <img
          alt="True"
          src="https://firebasestorage.googleapis.com/v0/b/coco-e485d.appspot.com/o/check-circle-alt%20(1).png?alt=media&token=f590eb38-0b82-4d2b-8d28-0ff5256c43fe"
        />
      </div>
    ) : (
      <span className="font-extrabold text-gray-400 text-2xl">-</span>
    )}
  </td>
);

// Price Row Component
const PriceRow = ({ plans }) => (
  <tr className="h-22">
    <th scope="row" className="text-left h-22">
      <h3 className="py-3 font-medium text-gray-600">Price</h3>
    </th>
    {plans.map((plan, index) => (
      <PlanCell key={index} content={plan} isPrice={true} />
    ))}
  </tr>
);

// Feature Row Component
const FeatureRow = ({ feature, plans }) => (
  <tr>
    <th scope="row" className="text-left">
      <h3 className="py-3 font-medium text-sm md:text-base text-gray-600">
        {feature}
      </h3>
    </th>
    {plans.map((plan, index) => (
      <PlanCell key={index} content={plan} isPrice={false} />
    ))}
  </tr>
);

// Main Pricing Component
const Pricing = () => {
  const { plans, features, price } = pricingData;

  return (
    <section>
      <div className="container p-6 overflow-x-auto max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 text-center">
        <h1 className=" sm:text-xl md:text-3xl mb-11 text-start max-w-3xl font-semibold">
          Packages for your business
        </h1>

        <table className="w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          <thead>
            <tr>
              <th></th>
              {plans.map((plan, index) => (
                <PlanHeader key={index} plan={plan} />
              ))}
            </tr>
          </thead>
          <tbody className="space-y-6 text-center divide-y dark:divide-gray-300">
            <PriceRow plans={price[0].plans} />
            {features.map((feature, index) => (
              <FeatureRow
                key={index}
                feature={feature.name}
                plans={feature.plans}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Pricing;
