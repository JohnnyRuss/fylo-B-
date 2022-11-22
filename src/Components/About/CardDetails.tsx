import React from "react";

interface CardDetailsType {}

const CardDetails: React.FC<CardDetailsType> = (props) => {
  return (
    <>
      <h2 className="fs-app-h2 text-app-dark-blue fw-bold text-center text-lg-start">
        Stay productive, wherever you are
      </h2>
      <p className="mt-app-2">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p className="mt-app-1">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required!
      </p>
      <span className="text-app-blue text-decoration-underline cursor-pointer align-self-center align-self-lg-start">
        See how Fylo works
      </span>
    </>
  );
};

export default CardDetails;
