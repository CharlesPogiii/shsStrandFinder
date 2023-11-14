import { useEffect, useState } from "react";
import DonutChartAssessment from "../../js/chart/DonutChartAssessment";
import ResultCard from "./ResultCard";

function ResultAssessment({ subjectTypes = [] }) {
  // DONUT CHART
  const [donutChartAssessments, setDonutChartAssessments] = useState([]);

  // TABLES
  const assessmentHeader = ["Answer", "Ticks"];
  const [assessmentTable, setAssessmentTable] = useState([]);

  useEffect(() => {
    const donutChartArr = [];

    subjectTypes?.forEach((st) => {
      st.subjects.forEach((s) => {
        // ASSESSMENT TABLE
        const table = [assessmentHeader];
        const newDonutChartAssessment = new DonutChartAssessment();

        table.push(["Correct", s.score]);
        table.push(["Wrong", s.mistakes]);

        setAssessmentTable(table);
        newDonutChartAssessment.table = table;
        donutChartArr.push(newDonutChartAssessment);
        setDonutChartAssessments(donutChartArr);
      });
    });
  }, [subjectTypes]);

  useEffect(() => {}, [assessmentTable]);

  // DISPLAY FUNCTION
  const displayAssessmentChart = () => {
    let positionCounter = 0;

    const outputSt = subjectTypes.map((st) => (
      <>
        {/*-- COL --*/}
        <section
          key={st._id}
          className="col-3 pt-3 g-2 justify-content-center align-items-center"
        >
          <h5 className="w-100 text-center poppins text-uppercase fw-semibold">
            {st.name}
          </h5>
          {st.subjects.map((s) => (
            <ResultCard
              key={s._id}
              subject={s}
              donutChart={donutChartAssessments[positionCounter++]}
            />
          ))}
        </section>
      </>
    ));

    return outputSt;
  };

  return (
    <>
      {/*-- ASSESSMENT SCORE CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h4 className="w-100 text-primary poppins border-bottom border-dark text-uppercase fw-semibold">
          ASSESSMENT SCORES
        </h4>
        <section className="row mt-3 g-2">
          {/*-- USE MODULUS FOR ORGANIZATION --*/}
          {displayAssessmentChart()}
        </section>
      </section>
    </>
  );
}

export default ResultAssessment;
