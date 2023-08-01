// Get the data
const bbData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(bbData).then(function(data) {
  console.log("ugh");
  console.log(data.samples[0].sample_values);
});


// // // Create an array of sample
let n940 = data.samples[0]['sample_values'];
// // let n941 = Object.values(data.samples.1);
// let n943 = Object.values(data.samples.2);
// let n944 = Object.values(data.samples.3);
// let n945 = Object.values(data.samples.4);
// let n946 = Object.values(data.samples.5);

// Create an array of category labels
let labels = data.samples[0]['sample_values'];

// Display the default plot
function init() {
  let data = [{
    x: n940,
    y: labels,
    type: "bar"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("bar", data, layout);
}