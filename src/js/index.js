import Scenario_2 from "./visualizations/scenario_2";
import data from "./Data/data";
import Scenario_1 from "./visualizations/scenario_1";

/*
 **Scenario_1 controller
 */
const ctrlScenario_1 = () => {
  let scenario_1 = new Scenario_1();
  scenario_1.populateMainCompany(
    data.scenario_1.mainCompanyData(),
    "maincompany-container"
  );
  let distributorOffSet = scenario_1.calcDistributorOffSet(
    data.scenario_1.distributorData()
  );

  scenario_1.populateDistributorCompany(
    "distributor",
    data.scenario_1.distributorData(),
    "distributor-container",
    distributorOffSet
  );


  let purchaserOffSet = scenario_1.calcPurchaserOffSet(
    data.scenario_1.purchaserData()
  );
  
  scenario_1.populatePurchaserCompany(
    "purchaser",
    data.scenario_1.purchaserData(),
    "purchaser-container",
    purchaserOffSet
  );
};


/*
 **Scenario_2 controller
 */

const ctrlScenario_2 = () => {
  let scenario_2 = new Scenario_2();
  let purchaserOffSet = scenario_2.calcPurchaserOffSet(
    data.scenario_2.purchaserData()
  );

  scenario_2.populatePurchaserCompany(
    "purchaser",
    data.scenario_2.purchaserData(),
    "purchaser-container",
    purchaserOffSet
  );

  let distributorOffSet = scenario_2.calcDistributorOffSet(
    data.scenario_2.distributorData()
  );

  scenario_2.populateDistributorCompany(
    "distributor",
    data.scenario_2.distributorData(),
    "distributor-container",
    distributorOffSet
  );

  scenario_2.populateMainCompany(
    data.scenario_2.mainCompanyData(),
    "maincompany-container"
  );
};

// ctrlScenario_1();
ctrlScenario_2()
