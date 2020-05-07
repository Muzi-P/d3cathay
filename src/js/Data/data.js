const scenario_1 = {
  purchaserData: () => {
    return [
      {
        type: "非關係/集團企業",
        name: "XXXX股份有限公司",
        risk: true,
        inLineCustomer: true,
        person: 'legal',
        alertCode: 2,
        percentange: "55%",
        personInCharge: "陳XX",
      },
      // {
      //   type: "國民平安股份有限公司",
      //   name: "OOXX股份有限公司",
      //   person: 'natural',
      //   inLineCustomer: true,
      //   alertCode: 5,
      //   risk: true,
      //   percentange: "45%",
      //   personInCharge: "陳XX",
      // },
      // {
      //   type: "國民平安股份有限公司",
      //   name: "OOXX股份有限公司",
      //   person: 'legal',
      //   inLineCustomer: false,
      //   alertCode: 5,
      //   risk: true,
      //   percentange: "45%",
      //   personInCharge: "陳XX",
      // },
    ];
  },

  distributorData: () => {
    return [
      {
        type: "關係企業",
        name: "國民關係股份有限公司",
        alertCode: 1,
        inLineCustomer: true,
        risk: false,
        percentange: "55%",
        personInCharge: "陳XX",
      },
      {
        type: "非關係企業",
        name: "OOXX股份有限公司",
        alertCode: 3,
        inLineCustomer: true,
        risk: true,
        percentange: "5%",
        personInCharge: "陳XX",
      },
      {
        type: "非關係企業",
        name: "OOXX股份有限公司",
        inLineCustomer: false,
        alertCode: 5,
        risk: true,
        percentange: "95%",
        personInCharge: "陳XX",
      },
      {
        type: "非關係企業",
        name: "OOXX股份有限公司",
        inLineCustomer: true,
        alertCode: 5,
        risk: true,
        percentange: "36%",
        personInCharge: "陳XX",
      },

      {
        type: "非關係企業",
        name: "OOXX股份有限公司",
        inLineCustomer: false,
        alertCode: 5,
        risk: true,
        percentange: "45%",
        personInCharge: "陳XX",
      },
    ];
  },

  mainCompanyData: () => {
    return [{ name: " 國泰民安" }];
  },
};



const scenario_2 = {
  purchaserData: () => {
    return [
      {
        type: "非關係/集團企業",
        name: "XXXX股份有限公司",
        inLineCustomer: true,
        risk: true,
        alertCode: 2,
        percentange: "28%",
        personInCharge: "陳XX",
      },
      {
        type: "國民平安股份有限公司",
        name: "OOXX股份有限公司",
        inLineCustomer: false,
        alertCode: 5,
        risk: true,
        percentange: "37%",
        personInCharge: "陳XX",
      },
      {
        type: "國民平安股份有限公司",
        name: "OOXX股份有限公司",
        inLineCustomer: true,
        alertCode: 5,
        risk: true,
        percentange: "45%",
        personInCharge: "陳XX",
      },
    ];
  },

  distributorData: () => {
    return [
      {
        type: "關係企業",
        name: "國民關係股份有限公司",
        alertCode: 1,
        inLineCustomer: false,
        risk: false,
        percentange: "5%",
        personInCharge: "陳XX",
      },
      {
        type: "非關係企業",
        name: "OOXX股份有限公司",
        alertCode: 3,
        inLineCustomer: false,
        risk: true,
        percentange: "45%",
        personInCharge: "陳XX",
      },
      {
        type: "非關係企業",
        name: "OOXX股份有限公司",
        alertCode: 5,
        inLineCustomer: true,
        risk: true,
        percentange: "45%",
        personInCharge: "陳XX",
      },
    ];
  },

  mainCompanyData: () => {
    return [{ name: " 國泰民安" }];
  },
};






export default {
  scenario_1,
  scenario_2
}