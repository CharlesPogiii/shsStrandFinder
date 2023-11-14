import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import { chartEvents } from "../../js/chart/chart-event";
import { modalType } from "../modal/modalType";
// import { draw3DSphere } from "./3DSphere";
import BarChartSubject from "../../js/chart/BarChartSubject";
import BarChartStrand from "../../js/chart/BarChartStrand";
import PieChartSubject from "../../js/chart/PieChartSubject";

function ResultHeader({ subjects, strands }) {
  // BAR CHART
  const [barChartSubject] = useState(new BarChartSubject());
  const [barChartStrand] = useState(new BarChartStrand());
  const [pieChartSubject] = useState(new PieChartSubject());

  // TABLES
  const subjectHeader = ["Subject", "Distance", { role: "style" }];
  const strandHeader = ["Strand", "Score", { role: "style" }];
  const pieHeader = ["Strand", "Points"];
  const [subjectTable, setSubjectTable] = useState([]);
  const [strandTable, setStrandTable] = useState([]);
  const [pieTable, setPieTable] = useState([]);

  // INIT
  useEffect(() => {
    // SUBJECT TABLE
    let table = [subjectHeader];

    subjects?.forEach((subject) => {
      table.push([subject.name, subject.distance, "#4d4848"]);
    });

    setSubjectTable(table);
    barChartSubject.table = table;

    // STRAND TABLE
    table = [strandHeader];

    strands?.forEach((strand) => {
      table.push([strand.name, strand.sum, "#4d4848"]);
    });

    setStrandTable(table);
    barChartStrand.table = table;

    // PIE CHART
    table = [pieHeader];

    strands?.forEach((strand) => {
      table.push([strand.name, strand.sum]);
    });

    setPieTable(table);
    pieChartSubject.table = table;
  }, [subjects]);

  useEffect(() => {
    // draw3DSphere();
  }, [subjectTable, strandTable, pieTable]);

  // FUNCTION

  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">Your Assessment Result</h2>
          <p className="card-text my-4 roboto">
            Thank you for completing all the assessments. Your dedication to
            this process is truly appreciated. We are excited to present your
            comprehensive results, which encapsulate a detailed overview of your
            academic journey. Within this report, you will find a graphical
            representation of your performance across various subjects and
            strands. This visualization aims to provide you with valuable
            insights and analysis, helping you identify preferences and
            strengths. It encompasses not only subjects but also the diverse
            strands available for exploration. Feel free to delve into the data,
            explore the connections, and discover the wealth of information at
            your fingertips. We believe that understanding your results in this
            holistic manner will empower you to make informed decisions about
            your academic path. Once again, thank you for your participation,
            and we wish you continued success on your educational journey.
          </p>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#" + modalType.RESULT}
            className="btn btn-dark roboto px-4 fs-6 fw-semibold"
          >
            TOP 3 Recomended Strands
          </button>

          {/*-- HEADER ASSESSMENT RESULT --*/}
          <section className="row">
            <section className="col-6 mt-5">
              <h6 className="roboto fw-semibold mb-3">
                Ranking Points by Subject
              </h6>
              {subjectTable.length > 1 ? (
                <Chart
                  chartType="ColumnChart"
                  data={barChartSubject.data()}
                  options={barChartSubject.option()}
                  graph_id="UNIQUEID1"
                  width={"100%"}
                  height={"400px"}
                  chartEvents={chartEvents(barChartSubject)}
                  legend_toggle
                />
              ) : (
                <></>
              )}
            </section>
            <section className="col-6 mt-5">
              <h6 className="roboto fw-semibold mb-3">
                Ranking Points by Strand
              </h6>
              {strandTable.length > 1 ? (
                <Chart
                  chartType="ColumnChart"
                  data={barChartStrand.data()}
                  options={barChartStrand.option()}
                  graph_id="UNIQUEID2"
                  width={"100%"}
                  height={"400px"}
                  chartEvents={chartEvents(barChartStrand)}
                  legend_toggle
                />
              ) : (
                <></>
              )}
            </section>
            <section className="col-12 mt-5 d-flex flex-column justify-content-center align-items-center">
              <h6 className="roboto fw-semibold mb-3">
                Strand Ranking points by %
              </h6>
              {pieTable.length > 1 ? (
                <div className="w-100" style={{ height: "800px" }}>
                  <Chart
                    chartType="PieChart"
                    data={pieChartSubject.data()}
                    options={pieChartSubject.option()}
                    graph_id="UNIQUEID3"
                    width={"100%"}
                    height={"800px"}
                    chartEvents={chartEvents(pieChartSubject)}
                    legend_toggle
                  />
                </div>
              ) : (
                <></>
              )}
            </section>
            {/* 
            <section className="col-6 mt-5" id="3DWebGL-cont">
              <h6 className="roboto fw-semibold mb-3">KNN by 3D Coordinates</h6>
              <canvas
                id="3DWebGL"
                style={{
                  width: "100%",
                  height: "400px",
                  backgroundColor: "black",
                }}
              ></canvas>
            </section>
            */}
          </section>
        </div>
      </header>
    </>
  );
}

export default ResultHeader;
