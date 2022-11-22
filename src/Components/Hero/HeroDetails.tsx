import React from "react";

interface HeroDetailsType {}

const HeroDetails: React.FC<HeroDetailsType> = (props) => {
  return (
    <>
      <h1 className="fs-app-h1 text-app-dark-blue text-center text-lg-start fw-bold">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="mt-4 text-center text-lg-start">
        Fylo stores your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family, and
        co-workers.
      </p>
    </>
  );
};

export default HeroDetails;
