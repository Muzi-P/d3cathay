export default class Scenario_1 {
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

    this.distributorOffSet = {};
    this.purchaserOffSet = {};
  }

  isOdd(num) {
    return num % 2;
  }
  calcDistributorOffSet(distributorData) {
    let numOfDistributors = Object.keys(distributorData).length;
    this.distributorOffSet["scenario"] = numOfDistributors;
    return this.distributorOffSet;
  }

  calcPurchaserOffSet(purchaserData) {
    let numOfPurchasers = Object.keys(purchaserData).length;
    this.purchaserOffSet["scenario"] = numOfPurchasers;
    return this.purchaserOffSet;
  }

  populateDistributorCompany(type, data, container, offSet) {
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
        // return ((offSet.scenario - 1) % 2) === 0
        //   ? `translate(${220 - offSet.scenario * 160},-100)`
        //   : `translate(${220 - offSet.scenario * 140},-100)`;
        switch (offSet.scenario) {
          case 0:
            return "translate(60,-80)";
            break;

          case 1:
            return "translate(220,-100)";
            break;
          case 2:
            return "translate(60,-100)";
            break;
          case 3:
            return "translate(-80,-100)";
            break;
          case 4:
            return "translate(-240,-100)";
            break;

          case 5:
            return "translate(-380,-100)";
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
        return 40 + 200;
      });

    // adding text for company type
    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 410;
      })
      .attr("y", function (d, i) {
        return 40 + 225;
      })
      .text(function (d) {
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
        return 2 * 40 + 200;
      });

    // adding text for company name

    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 410;
      })
      .attr("y", function (d, i) {
        return 40 + 280;
      })
      .text(function (d) {
        return `${d.name}`;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "16px")
      .attr("fill", "#1b5e20 ")
      .attr("text-align", "center");

    // adding percentage text

    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 460;
      })
      .attr("y", function (d, i) {
        return 225;
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
        return `translate(${610 + 300 * i},250)`;
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
        return `translate(${610 + 300 * i},252.5)`;
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
        return `translate(${208 + 7 * i},-40)`;
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
        return `translate(${625 + 300 * i},243)`;
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
    let drawDistributorsConnectors = (d, i) => {
      let lineGenerator = d3.line();
      let points;
      if (i === 0) {
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
      } else {
        points = [
          [`${500 + 300 * i}`, 240],
          [`${500 + 300 * i}`, 190],
          [660, 190],
        ];
      }

      let pathData = lineGenerator(points);
      return pathData;
    };

    g.append("path")
      .attr("d", function (d, i) {
        return drawDistributorsConnectors(d, i);
      })
      .attr("fill", "none")
      .attr("stroke", "#999");

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
  populatePurchaserCompany(type, data, container, offSet) {
    let svg = d3
      .select(`.${container}`)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("fill", "red")
    let g = svg
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("height", this.graph.height)
      .attr("width", this.graph.width)
      .attr("transform", function (d, i) {
        // return ((offSet.scenario - 1) % 2) === 0
        //   ? `translate(${220 - offSet.scenario * 160},-100)`
        //   : `translate(${220 - offSet.scenario * 140},-100)`;
        switch (i) {
          case 0:
            return "translate(220,-230)";
            break;

          case 1:
            return "translate(220,-100)";
            break;
          case 2:
            return "translate(60,-100)";
            break;
          case 3:
            return "translate(-80,-100)";
            break;
          case 4:
            return "translate(-240,-100)";
            break;

          case 5:
            return "translate(-380,-100)";
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
        return 40 + 200;
      });

    // adding text for company type
    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 410;
      })
      .attr("y", function (d, i) {
        return 40 + 225;
      })
      .text(function (d) {
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
        return 2 * 40 + 200;
      });

    // adding text for company name

    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 410;
      })
      .attr("y", function (d, i) {
        return 40 + 280;
      })
      .text(function (d) {
        return `${d.name}`;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "16px")
      .attr("fill", "#1b5e20 ")
      .attr("text-align", "center");

    // adding percentage text

    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 460;
      })
      .attr("y", function (d, i) {
        return 435;
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
        return `translate(${610 + 300 * i},250)`;
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
        return `translate(${610 + 300 * i},252.5)`;
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
        return 140 
      })
      .attr("transform", function (d, i) {
        return `translate(${208 + 7 * i},100)`;
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
        return `translate(${625 + 300 * i},243)`;
      });

    g.append("text")
      .attr("x", function (d, i) {
        return i * 300 + 620;
      })
      .attr("y", function (d, i) {
        return 250;
      })
      .attr("opacity", function (d) {
        return d.risk && d.alertCode ? 1 : 0;
      })
      .text(function (d) {
        console.log(d.alertCode)
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
          points = [
            [500, 370],
            [500, 450],
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
    arc = d3.symbol().type(d3.symbolTriangle).size(30);

    g.append("path")
      .attr("d", function (d, i) {
        return drawPurchaserConnectors(d, i);
      })
      .attr("fill", "none")
      .attr("stroke", "#999");

    /****************************end of drawing connectors between companies****************** */

    // add arrow in each  company

      arc = d3.symbol().type(d3.symbolTriangle).size(30);
      g.append("path")
        .attr("d", arc)
        .attr("fill", "black")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("transform", function (d, i) {
          return `translate(${500 + 300 * i},450) rotate(180)`;
        });
  }
  populateMainCompany(data, container) {
    let svg = d3
      .select(`.${container}`)
      .append("svg")
      .attr("width", this.mainCompany.width)
      .attr("height", this.mainCompany.height)
      .attr("transform", function (d, i) {
        return "translate(150,-30)";
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
      [0, 110],
    ];
    let pathData = lineGenerator(points);

    g.append("path")
      .attr("d", pathData)
      .attr("fill", "none")
      .attr("stroke", "#999");
  }
}
