class BarChartStrand {
  display(elementID) {
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      const data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" }],
        ["Copper", 8.94, "#b87333"],
        ["Silver", 10.49, "silver"],
        ["Gold", 19.3, "gold"],
        ["Platinum", 21.45, "color: #e5e4e2"],
      ]);

      const view = new google.visualization.DataView(data);
      view.setColumns([
        0,
        1,
        {
          calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation",
        },
        2,
      ]);

      const options = {
        width: "100%",
        height: "100%",
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
      };
      const chart = new google.visualization.ColumnChart(
        document.getElementById(elementID)
      );
      chart.draw(view, options);
    }
  }
}
