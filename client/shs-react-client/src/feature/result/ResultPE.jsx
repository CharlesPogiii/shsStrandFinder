import { Chart } from "react-google-charts";
import { chartEvents } from "../../js/chart/chart-event";
import { useState, useEffect } from "react";
import DonutChartPersonal from "../../js/chart/DonutChartPersonal";

function ResultPE({ strands = [] }) {
  // DONUT CHART
  const [donutChartPersonals, setDonutChartPersonals] = useState([]);

  // TABLES
  const personalHeader = ["Answer", "Ticks"];
  const [personalTable, setPersonalTable] = useState([]);

  useEffect(() => {
    const donutChartArr = [];

    strands?.map((strand) => {
      // PERSONAL TABLE
      const table = [personalHeader];
      const newDonutChartPersonal = new DonutChartPersonal();

      table.push(["Yes", strand.yes]);
      table.push(["No", strand.no]);

      setPersonalTable(table);
      newDonutChartPersonal.table = table;
      donutChartArr.push(newDonutChartPersonal);
      setDonutChartPersonals(donutChartArr);
    });
  }, [strands]);

  useEffect(() => {}, [personalTable]);

  return (
    <>
      {/*-- PERSONAL ENGAGEMENT CONTAINER --*/}
      <section className="strand-type-container mt-5">
        <h4 className="w-100 text-primary poppins border-bottom border-dark text-uppercase fw-semibold">
          PERSONAL ENGAGEMENTS
        </h4>
        <section className="row mt-3 g-2">
          {/*-- USE MODULUS FOR ORGANIZATION --*/}
          {strands?.map((strand, index) => (
            <>
              {/*-- COL-1 --*/}
              <section
                key={index}
                className="col-3 justify-content-center align-items-center"
              >
                {/*-- PROBABILITY CARD  --*/}
                <div className="card bg-light h-100 p-2 mt-2">
                  {/*-- CHART DISPLAY --*/}
                  <Chart
                    chartType="PieChart"
                    data={donutChartPersonals[index]?.data()}
                    options={donutChartPersonals[index]?.option()}
                    graph_id={strand._id}
                    width={"100%"}
                    height={"300px"}
                    chartEvents={chartEvents(donutChartPersonals[index])}
                    legend_toggle
                  />
                  <div className="card-body text-center">
                    <h6 className="card-title poppins text-uppercase mb-3">
                      {strand.name}
                    </h6>
                    <h6 className="card-title poppins text-uppercase mb-3">
                      YES: {strand.yes}
                    </h6>
                    <h6 className="card-title poppins text-uppercase mb-3">
                      NO: {strand.no}
                    </h6>
                  </div>
                </div>
              </section>
            </>
          ))}
        </section>
      </section>
    </>
  );
}

export default ResultPE;
