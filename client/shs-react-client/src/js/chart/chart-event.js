const chartEvents = (chart) => [
  {
    eventName: "select",
    callback: ({ chartWrapper }) => {
      const selection = chartWrapper.getChart().getSelection();
      if (selection.length > 0) {
        const selectedData = chart.data()[selection[0].row + 1]; // +1 to skip the header row
        console.log("Selected Data:", selectedData);
      }
    },
  },
];

export { chartEvents };
