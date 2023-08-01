function barChart(dropdown_choice) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let samples = data.samples;
        let resultArray = samples.filter(sampleObject => sampleObject.id == dropdown_choice);
        let result = resultArray[0];

        // console.log(result);

        let otu_ids = result.otu_ids;
        let sample_values = result.sample_values;
        let otu_labels = result.otu_labels;

        let barData = [
            {
                y: otu_ids.slice(0, 10).map(out_id => `OTU ${out_id}`).reverse(),
                x: sample_values.slice(0, 10).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h",
            }
        ];

        let barChartLayout = {
            title: "Bar Chart",
            margin: { t:30, l:120 }
        };

        Plotly.newPlot("bar", barData, barChartLayout);

    });
}

function init() {

    optionChanged();

    let dropdown_selection = d3.select("#selDataset");

    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let dropdown_values = data.names;

        for (let i=0; i < dropdown_values.length; i++){
            dropdown_selection
                .append("option")
                .text(dropdown_values[i])
                .property("value", dropdown_values[i]);
        };

        let default_value = dropdown_values[0];
        barChart(default_value);
        bubbleChart(default_value);
        metaChart(default_value);
    });
}

function optionChanged(newSample) {
    barChart(newSample);
    bubbleChart(newSample);
    metaChart(newSample);
}

init();

function bubbleChart(){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let samples = data.samples;
        let resultArray = samples;
        let result = resultArray[0];

        console.log(result);

        let otu_ids = result.otu_ids;
        let sample_values = result.sample_values;
        let otu_labels = result.otu_labels;

        let bubbleData = [
            {
                y: sample_values,
                x: otu_ids,
                text: otu_labels,
                type: "scatter",
                mode: "markers",
                marker: {
                    color: otu_ids,
                    size: sample_values,
                    colorscale: "Earth"
                }
            }
        ];

        let bubbleChartLayout = {
            title: "Bubble Chart",
            margin: { t:30, l:120 }
        };

        Plotly.newPlot("bubble", bubbleData, bubbleChartLayout);

    });
}

function metaChart(dropdown_choice){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let demoData = data.metadata;
        let resultArray = demoData.filter(sampleObject => sampleObject.id == dropdown_choice);
        let result = resultArray[0];

        console.log(result);

        let PANEL = d3.select("#sample-metadata");

        PANEL.html("");

        for (val in result) {
            PANEL.append("h6").text(`${val.toUpperCase()}: ${result[val]}`);
        }

    });
}
