import Scenario_2 from "./visualizations/scenario_2";
import * as data from "./Data/data";

/*
 **Scenario_2 controller
 */

const ctrlScenario_2 = () => {
  let scenario_2 = new Scenario_2();
  let offSet = scenario_2.calcOffset(data.distributorData, data.purchaserData);
  console.log(offSet);
  scenario_2.populateCompany(
    "purchaser",
    data.purchaserData,
    "purchaser-container",
    offSet
  );

  scenario_2.populateCompany(
    "distributor",
    data.distributorData,
    "distributor-container",
    offSet
  );

  scenario_2.populateMainCompany(data.mainCompanyData, "maincompany-container");
};





ctrlScenario_2()