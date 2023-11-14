import { numberToLetter } from "../../js/assessment";

function AssessmentChoice({ index, answerKey, isSelected, cb }) {
  return (
    <button
      onClick={() => cb()}
      className={`btn btn-${
        isSelected ? "primary" : "secondary"
      } roboto text-start w-100 mb-2 p-3 fs-6 fw-semibold`}
    >
      {numberToLetter(index + 1)}. {answerKey.value}
      {answerKey.imagePath != null ? (
        <img
          className="w-100 rounded shadow mt-2"
          src={answerKey.imagePath}
          alt="strand image display"
          style={{ height: "175px" }}
        />
      ) : (
        <></>
      )}
    </button>
  );
}

export default AssessmentChoice;
