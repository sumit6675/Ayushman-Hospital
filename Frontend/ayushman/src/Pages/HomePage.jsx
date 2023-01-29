import React from "react";
import Testimonial from "../Components/Homepage/Feedbacks";
import Pricing from "../Components/Homepage/Pricing";
import TopHome from "../Components/Homepage/TopHome";
import MidHome from "../Components/Homepage/MidHome";

function HomePage() {
  return (
    <div>
      <MidHome/>
      <TopHome />
      <Pricing />
      <Testimonial/>
    </div>
  );
}

export default HomePage;
