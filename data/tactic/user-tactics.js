export const givenUserTactics = [
  {
    id: "abc123",
    name: "Custom Tactic #1",
    formation: "4-4-2",
    generalInstructions: [
      {
        instructionType: "Defence",
        detailedInstructions: [
          {
            instructionName: "Defensive Style",
            value: "Balanced",
          },
          {
            instructionName: "Defensive Width",
            value: 60,
          },
          {
            instructionName: "Defensive Depth",
            value: 65,
          },
        ],
      },
      {
        instructionType: "Attacking",
        detailedInstructions: [
          {
            instructionName: "Build Up Play",
            value: "Fast Build Up",
          },
          {
            instructionName: "Chance Creation",
            value: "Direct Passing",
          },
          {
            instructionName: "Offensive Width",
            value: 45,
          },
          {
            instructionName: "Players In Box",
            value: 3,
          },
        ],
      },
      {
        instructionType: "Corners & Free Kicks",
        detailedInstructions: [
          {
            instructionName: "Corners",
            value: 4,
          },
          {
            instructionName: "Free Kicks",
            value: 2,
          },
        ],
      },
    ],
    playerInstructions: [
      {
        position: "GK",
        savingOnCrosses: "Comes for Crosses",
        savingOutsideBox: "Balanced",
      },
      {
        position: "RB",
        attackingRuns: "Stay Back While Attacking",
        interception: "Normal Interception",
        runType: "Overlap",
        defensivePosition: "Keep Position",
      },
      {
        position: "RCB",
        attackingSupport: "Stay Back While Attacking",
        interception: "Normal Interception",
        defensivePosition: "Keep Position",
      },
      {
        position: "LCB",
        attackingSupport: "Stay Back While Attacking",
        interception: "Normal Interception",
        defensivePosition: "Keep Position",
      },
      {
        position: "LB",
        attackingRuns: "Stay Back While Attacking",
        interception: "Normal Interception",
        runType: "Overlap",
        defensivePosition: "Keep Position",
      },
      {
        position: "RM",
        chanceCreation: "Cut Inside",
        interception: "Normal Interception",
        supportOnCrosses: "Get Into Box For Cross",
        supportRuns: "Get In Behind",
        defensiveSupport: "Come Back on Defence",
      },
      {
        position: "RCM",
        attackingSupport: "Stay Back While Attacking",
        defensivePosition: "Cover Center",
        interception: "Normal Interception",
        positioningFreedom: "Stick to Position",
        supportOnCrosses: "Stay on Edge Of Box For Cross",
      },
      {
        position: "LCM",
        attackingSupport: "Balanced Attack",
        defensivePosition: "Cover Wing",
        interception: "Aggressive Interception",
        positioningFreedom: "Stick to Position",
        supportOnCrosses: "Get Into Box For Cross",
      },
      {
        position: "LM",
        chanceCreation: "Cut Inside",
        interception: "Normal Interception",
        supportOnCrosses: "Get Into Box For Cross",
        supportRuns: "Get In Behind",
        defensiveSupport: "Come Back on Defence",
      },
      {
        position: "RST",
        attackingRuns: "Get In Behind",
        defensiveSupport: "Stay Forward",
        interception: "Normal Interception",
        supportRuns: "Stay Central",
      },
      {
        position: "LST",
        attackingRuns: [
          "Mixed Attack",
          "Get In Behind",
          "Target Man",
          "False 9",
        ],
        defensiveSupport: "Come Back on Defence",
        interception: "Aggressive Interception",
        supportRuns: "Balanced Width",
      },
    ],
  },
];
