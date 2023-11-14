import { useState } from "react";

function PEChoices() {
  const [choice, setChoice] = useState({
    a: false,
    b: false,
  });

  return (
    <>
      {/*-- CHOICES --*/}
      <button className="btn btn-light w-100 p-3 my-2 d-flex flex-column">
        <p className="m-0 text-start">
          <strong>A. </strong> YES
        </p>
      </button>
      <button className="btn btn-light w-100 p-3 my-2 d-flex flex-column">
        <p className="m-0 text-start">
          <strong>B. </strong> NO
        </p>
      </button>
    </>
  );
}

export default PEChoices;
