const barChartSubject = new BarChartSubject();
const barChartStrand = new BarChartStrand();
const donutChartAssessment = new DonutChartAssessment();
const donutChartPersonal = new DonutChartPersonal();

$(() => {
  barChartSubject.display("barChartSubject");
  barChartStrand.display("barChartStrand");
  donutChartAssessment.display("donutChartAssessment", 1);
  donutChartPersonal.display("donutChartPersonal", 1);
});
