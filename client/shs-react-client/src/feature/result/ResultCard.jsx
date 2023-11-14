import { Chart } from "react-google-charts";
import { chartEvents } from "../../js/chart/chart-event";

function ResultCard({ subject, donutChart }) {
  return (
    <>
      {/*-- ASSESSMENT RESULT CARD  --*/}
      <div key={subject._id} className="card bg-light p-2 mt-2">
        {/*-- CHART DISPLAY --*/}
        <Chart
          chartType="PieChart"
          data={donutChart?.data()}
          options={donutChart?.option()}
          graph_id={subject._id}
          width={"100%"}
          height={"300px"}
          chartEvents={chartEvents(donutChart)}
          legend_toggle
        />
        <div className="card-body text-center">
          <h6 className="card-title poppins text-uppercase mb-3">
            {subject.name}
          </h6>
          <p className="card-text mb-0">
            score: <strong>{subject.score}</strong> / {subject.totalScore}
          </p>
          <p className="card-text mb-0">
            duration:{" "}
            {subject.duration < 1 ? subject.duration * 100 : subject.duration}{" "}
            {subject.duration < 1 ? "sec" : "min"}
          </p>
          <p className="card-text mb-0">leave count: {subject.noOfUnVisit}</p>
        </div>
      </div>
    </>
  );
}

export default ResultCard;
