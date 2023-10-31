import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import 'chartjs-plugin-deferred';

class VerticalChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.data,
      chartOptions: props.options
    };
  }

  static defaultProps = {
    displayTitle: true,
    DisplayLegend: true,
    LegendPosition: "top",
    level: "Skills",
    data: {
      labels: ["Product Management","User Research","Python","SQL","Figma","Amplitude","Aha","JIRA","Data Science","Machine Learning"],
      datasets: [
        {
          data: [4,4,4,4,4,4,4,4,4,4,0],
          backgroundColor: [
            "rgba(0,0,164, 1)",
            "rgba(0,0,137, 1)",
            "rgba(0,0,118, 1)",
            "rgba(0,0,100, 1)",
            "rgba(0,0,92, 1)",
            "rgba(0,0,75, 1)",
            "rgba(0,0,64, 1)",
            "rgba(0,0,49, 1)",
            "rgba(0,0,35, 1)",
            "rgba(0,0,28, 1)"
          ],
              label: false
        }
        /* {
          data: [90, 90, 60, 70, 60, 70, 100, 55, 80, 40, 30, 20, 10, 0],
          backgroundColor: "#FF7",
          label: 2016
      }*/
      ]
    },

    options: {
      legend: {
           display: false,
       },
      scales: {
        yAxes: [
          {
            ticks: {
              fontSize: 15,
              fontWeight:50,
              font: {
              family: "Candara"
              },
              fontColor: '#000',
             fontStyle: '500',
              maxTicksLimit: 5,
              barThickness: 15,
               maxBarThickness: 15,
              callback: function(label, index, labels) {
                console.log("label is: " );
                if (label === 4) {
                  return "Expert" ;
                } else if (label === 3) {
                  return "Advanced";
                } else if (label === 2) {
                  return "Intermediate " ;
                } else if (label === 1) {
                  return "Beginner" ;
                } else {
                  return '';
                }
                //                         return '$' + label;
              }
            }
          }
        ],xAxes: [
          {
            ticks: {
              fontSize: 12,
              fontWeight:40,
              font: {
              family: "Candara"
              },
              fontColor: '#000',
             fontStyle: '550'
            }}],
      },tooltips: {
        enabled: false,

            callbacks: {

                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';
                    if (label) {
                        label += ': ';
                    }
                  return 'Skills';
                }
            }
        },
        plugins: {
          deferred: {
             enabled: true,
             yOffset: '50%',
             delay: 200
          }
         },


    }
  };
  render() {
    return (
      <div className='d-none d-lg-block'>

      <Bar height='140px' data={this.state.chartData} options={this.state.chartOptions}  />
      </div>

    );
  }
}

export default VerticalChart;
