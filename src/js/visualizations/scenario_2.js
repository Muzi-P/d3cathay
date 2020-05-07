export default class Scenario_2 {
  constructor() {
    // this.type = type;
    // this.data = data;
    // this.container = container;
    // this.offSet = offSet;
    this.width = 2000;
    this.height = 500;
    this.companyTypeWidth = 200;
    this.companyNameHeight = 70;
    this.graph = {
      height: 40,
      width: 200,
    };
    this.mainCompany = {
      width: 2000,
      height: 300,
    };

    this.offSet = {};
  }

  calcOffset(distributorData, purchaserData) {
    let numOfDistributors = Object.keys(distributorData).length;
    let numOfPurchasers = Object.keys(purchaserData).length;
    if (numOfPurchasers == 1 && numOfDistributors == 1) {
      this.offSet["scenario"] = 0;
      return this.offSet;
    }
    if (numOfPurchasers == 2 && numOfDistributors == 1) {
      this.offSet["scenario"] = 1;
      return this.offSet;
    }

    if (numOfPurchasers == 2 && numOfDistributors == 3) {
      return this.offSet;
    }
    if (numOfPurchasers == 3 && numOfDistributors == 3) {
      this.offSet["scenario"] = 3;
      return this.offSet;
    }
  }

  populateCompany(type, data, container, offSet) {
    let svg = d3
      .select(`.${container}`)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("fill", "red");

    let g = svg
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("height", this.graph.height)
      .attr("width", this.graph.width)
      .attr("transform", function (d, i) {
        switch (offSet.scenario) {
          case 0:
            return "translate(60,-80)";
            break;

          case 1:
            return type == "purchaser"
              ? "translate(-100,-80)"
              : "translate(60,-80)";
            break;
          case 2:
            return type == "purchaser"
              ? "translate(-100,-80)"
              : "translate(-260,-80)";
            break;
          case 3:
            return type == "purchaser"
              ? "translate(-240,-80)"
              : "translate(-240,-80)";
            break;
          default:
            return "translate(-100,-80)";
            break;
        }
      });

    g.append("rect")
      .attr("width", this.companyTypeWidth)
      .attr("height", 40)
      .style("fill", "#D3D3D3")
      .style("stroke", "black")
      .attr("x", function (d, i) {
        return i * 300 + 400;
      })
      .attr("y", function (d, i) {
        return type == "purchaser" ? 100 : 40 + 200;
      });

    // adding text for company type
    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 410;
      })
      .attr("y", function (d, i) {
        return type == "purchaser" ? 125 : 40 + 225;
      })
      .text(function (d) {
        // console.log(d.type.length)
        return `${d.type}`;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "16px")
      .attr("fill", "black")
      .attr("text-align", "center");

    g.append("rect")
      .attr("width", this.companyTypeWidth)
      .attr("height", this.companyNameHeight)
      .style("fill", function (d) {
        return d.inLineCustomer ? "#aed581" : "#ffff";
      })
      .style("stroke", "black")
      .attr("x", function (d, i) {
        return i * 300 + 400;
      })
      .attr("y", function (d, i) {
        return type == "purchaser" ? 140 : 2 * 40 + 200;
      });

    // adding text for company name

    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 410;
      })
      .attr("y", function (d, i) {
        return type == "purchaser" ? 180 : 40 + 280;
      })
      .text(function (d) {
        // console.log(d.type.length)
        return `${d.name}`;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "16px")
      .attr("fill", "green")
      .attr("text-align", "center");
    // adding percentage text

    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 460;
      })
      .attr("y", function (d, i) {
        return 230;
      })
      .text(function (d) {
        return `${d.percentange}`;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "16px")
      .attr("fill", "#424242 ")
      .attr("text-align", "center");
    /**************************************************************************
     * Warning sign svg
     ************************************************************************/
    let arc = d3.symbol().type(d3.symbolTriangle).size(400);
    let circle = d3.symbol().type(d3.symbolCircle).size(20);
    g.append("path")
      .attr("d", arc)
      .attr("fill", "red")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("opacity", function (d) {
        return d.risk ? 1 : 0;
      })
      .attr("transform", function (d, i) {
        return type == "purchaser"
          ? `translate(${610 + 300 * i},100)`
          : `translate(${610 + 300 * i},250)`;
      });

    g.append("path")
      .attr("d", circle)
      .attr("fill", "white")
      .attr("stroke", "white")
      .attr("stroke-width", 1)
      .attr("opacity", function (d) {
        return d.risk ? 1 : 0;
      })
      .attr("transform", function (d, i) {
        return type == "purchaser"
          ? `translate(${610 + 300 * i},103)`
          : `translate(${610 + 300 * i},252.5)`;
      });

    g.append("rect")
      .attr("width", 3.5)
      .attr("height", 8)
      .style("fill", "white")
      .attr("x", function (d, i) {
        return i * 293 + 400;
      })
      .attr("opacity", function (d) {
        return d.risk ? 1 : 0;
      })
      .attr("y", function (d, i) {
        return type == "purchaser" ? 140 : 2 * 40 + 200;
      })
      .attr("transform", function (d, i) {
        return type == "purchaser"
          ? `translate(${208 + 7 * i},-50)`
          : `translate(${208 + 7 * i},-40)`;
      });

    /****************************end of warning sign svg****************** */

    /**************************************************************************
     * Warning sign circle svg
     ************************************************************************/
    circle = d3.symbol().type(d3.symbolCircle).size(370);
    g.append("path")
      .attr("d", circle)
      .attr("fill", "#e57373")
      .attr("stroke", "#e57373")
      .attr("stroke-width", 1)
      .attr("opacity", function (d) {
        return d.risk && d.alertCode ? 1 : 0;
      })
      .attr("transform", function (d, i) {
        return type == "purchaser"
          ? `translate(${625 + 300 * i},93)`
          : `translate(${625 + 300 * i},243)`;
      });

    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 620;
      })
      .attr("y", function (d, i) {
        return type == "purchaser" ? 100 : 40 + 208;
      })
      .attr("opacity", function (d) {
        return d.risk && d.alertCode ? 1 : 0;
      })
      .text(function (d) {
        return `${d.alertCode}`;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "16px")
      .attr("fill", "white");

    /****************************Warning sign circle svg****************** */

    /**************************************************************************
     * Drawing Connectors between companies
     **************************************************************************/

    let drawPurchaserConnectors = (d, i) => {
      let lineGenerator = d3.line();
      let points;
      switch (i) {
        case 0:
          points =
            offSet.scenario == 0
              ? [
                  [500, 210],
                  [500, 250],
                ]
              : [
                  [500, 210],
                  [500, 250],
                  [660, 250],
                ];
          break;

        case 1:
          points = [
            [800, 210],
            [800, 250],
            [660, 250],
            // [660, 290],
          ];
          break;

        case 2:
          points = [
            [1100, 210],
            [1100, 250],
            [660, 250],
            // [660, 290],
          ];
          break;

        default:
          points = [
            [500, 210],
            [500, 250],
            [660, 250],
            // [660, 290],
          ];
          break;
      }

      let pathData = lineGenerator(points);
      return pathData;
    };

    let drawDistributorsConnectors = (d, i) => {
      let lineGenerator = d3.line();
      let points;
      switch (i) {
        case 0:
          points =
            offSet.scenario == 0 || offSet.scenario == 1
              ? [
                  [500, 240],
                  [500, 190],
                ]
              : [
                  [500, 240],
                  [500, 190],
                  [660, 190],
                ];
          break;

        case 1:
          points = [
            [800, 240],
            [800, 190],
            [660, 190],
            // [660, 130],
          ];
          break;

        case 2:
          points = [
            [1100, 240],
            [1100, 190],
            [660, 190],
            // [660, 130],
          ];
          break;

        default:
          points = [
            [500, 240],
            [500, 190],
            [660, 190],
            // [660, 130],
          ];
          break;
      }

      let pathData = lineGenerator(points);
      return pathData;
    };

    if (type === "purchaser") {
      g.append("path")
        .attr("d", function (d, i) {
          return drawPurchaserConnectors(d, i);
        })
        .attr("fill", "none")
        .attr("stroke", "#999");
    } else {
      g.append("path")
        .attr("d", function (d, i) {
          return drawDistributorsConnectors(d, i);
        })
        .attr("fill", "none")
        .attr("stroke", "#999");
    }

    /****************************end of drawing connectors between companies****************** */

    // add arrow in each  company

    if (type === "distributor") {
      arc = d3.symbol().type(d3.symbolTriangle).size(30);
      g.append("path")
        .attr("d", arc)
        .attr("fill", "black")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("transform", function (d, i) {
          return `translate(${500 + 300 * i},233) rotate(180)`;
        });
    }
  }

  populateMainCompany(data, container) {
    let svg = d3
      .select(`.${container}`)
      .append("svg")
      .attr("width", this.mainCompany.width)
      .attr("height", this.mainCompany.height)
      .attr("transform", function (d, i) {
        return "translate(-10,-30)";
      });

    let g = svg
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("height", this.graph.height)
      .attr("width", this.graph.width)
      .attr("transform", function (d, i) {
        return "translate(70,110)";
      });

    var radialLineGenerator = d3.radialLine();
    var r1 = 70;
    var radialpoints = [
      [0, r1],
      [Math.PI * 0.5, r1],
      [Math.PI, r1],
      [Math.PI * 1.5, r1],
      [Math.PI * 2, r1],
    ];

    var radialLine = radialLineGenerator(radialpoints);

    g.append("path")
      .attr("class", "radial")
      .attr("d", radialLine)
      .attr("fill", "none")
      .attr("stroke", "#999");

    g.append("text")
      .attr("x", -30)
      .attr("y", 5)
      .text(function (d) {
        // console.log(d.type.length)
        return `${d.name}`;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "16px")
      .attr("fill", "green")
      .attr("text-align", "center");

    // line from below vertex
    let lineGenerator = d3.line();
    let points = [
      [0, 70],
      [0, 130],
    ];
    let pathData = lineGenerator(points);

    g.append("path")
      .attr("d", pathData)
      .attr("fill", "none")
      .attr("stroke", "#999");

    // line from above vertex
    lineGenerator = d3.line();
    points = [
      [0, -70],
      [0, -400],
    ];
    pathData = lineGenerator(points);

    g.append("path")
      .attr("d", pathData)
      .attr("fill", "none")
      .attr("stroke", "#999");

    // arrow on top of main company

    let arc = d3.symbol().type(d3.symbolTriangle).size(30);
    g.append("path")
      .attr("d", arc)
      .attr("fill", "black")
      .attr("stroke", "#000")
      .attr("stroke-width", 1)
      .attr("transform", function (d) {
        return "translate(" + 0 + "," + -75 + ") rotate(180)";
      });
  }
}
