import sampleImg from "../../asset/strand/strand1.jpg";

function PEQuestion({ index, question }) {
  return (
    <>
      {/*-- QUESTION --*/}
      <h5 className="w-100 mt-5 poppins border-bottom border-dark text-uppercase fw-semibold">
        Personal Assessment No. {index ? index : 0}
      </h5>
      <section
        className="my-4 p-4 border border-secondary rounded"
        style={{ minHeight: "250px" }}
      >
        <h5 className="poppins fw-light">
          {question
            ? question
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim illum deserunt officiis, assumenda cumque facilis odit blanditiis tenetur non quos, architecto asperiores exercitationem ex perspiciatis neque tempora veritatis! Autem!"}
        </h5>
      </section>
    </>
  );
}

export default PEQuestion;
