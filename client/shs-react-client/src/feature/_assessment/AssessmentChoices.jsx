import { useState } from "react";
import Localhost from "../../js/model/LocalHost";

function AssessmentChoices({ user, choice, answerKey, index, cb }) {
  const [letter] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);

  return (
    <>
      {/*-- CHOICES --*/}
      <button
        className={`btn btn-${
          choice?.letter === letter[index] ? "secondary" : "light"
        } w-100 p-3 my-3 d-flex flex-column`}
        onClick={() => {
          cb(user.id, answerKey._id, answerKey.correct, letter[index]);
        }}
      >
        {answerKey?.imagePath ? (
          <img
            className="mb-3"
            src={Localhost.path() + answerKey.imagePath}
            alt="answer key image"
            style={{ maxWidth: "250px" }}
          />
        ) : (
          <></>
        )}
        <p className="m-0 text-start">
          <strong>{letter[index].toUpperCase()}.</strong> {answerKey.value}
        </p>
      </button>
    </>
  );
}

export default AssessmentChoices;
