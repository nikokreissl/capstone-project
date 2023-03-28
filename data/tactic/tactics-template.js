export const formations = [
  {
    name: "3-1-4-2",
    positions: [gk, rcb, ccb, lcb, rm, rcm, cdm, lcm, lm, rst, lst],
  },
  {
    name: "3-4-1-2",
    positions: [gk, rcb, ccb, lcb, rm, rcm, lcm, lm, cam, rst, lst],
  },
  {
    name: "3-4-2-1",
    positions: [gk, rcb, ccb, lcb, rm, rcm, lcm, lm, rcf, lcf, st],
  },
  {
    name: "3-4-3",
    positions: [gk, rcb, ccb, lcb, rm, rcm, lcm, lm, rw, st, lw],
  },
  {
    name: "3-5-2",
    positions: [gk, rcb, ccb, lcb, rm, rcdm, lcdm, lm, cam, rst, lst],
  },
  {
    name: "4-1-2-1-2",
    positions: [gk, rb, rcb, lcb, lb, cdm, rm, lm, cam, rst, lst],
  },
  {
    name: "4-1-2-1-2 (2)",
    positions: [gk, rb, rcb, lcb, lb, cdm, rcm, lcm, cam, rst, lst],
  },
  {
    name: "4-1-3-2",
    positions: [gk, rb, rcb, lcb, lb, cdm, rcm, ccm, lcm, rst, lst],
  },
  {
    name: "4-1-4-1",
    positions: [gk, rb, rcb, lcb, lb, cdm, rm, rcm, lcm, lm, st],
  },
  {
    name: "4-2-2-2",
    positions: [gk, rb, rcb, lcb, lb, rcdm, lcdm, rcam, lcam, rst, lst],
  },
  {
    name: "4-2-3-1",
    positions: [gk, rb, rcb, lcb, lb, rcdm, lcdm, rcam, ccam, lcam, st],
  },
  {
    name: "4-2-3-1 (2)",
    positions: [gk, rb, rcb, lcb, lb, rcdm, lcdm, rm, lm, cam, st],
  },
  {
    name: "4-2-4",
    positions: [gk, rb, rcb, lcb, lb, rcm, lcm, rw, rst, lst, lw],
  },
  {
    name: "4-3-1-2",
    positions: [gk, rb, rcb, lcb, lb, rcm, ccm, lcm, cam, rst, lst],
  },
  {
    name: "4-3-2-1",
    positions: [gk, rb, rcb, lcb, lb, rcm, ccm, lcm, rcf, lcf, st],
  },
  {
    name: "4-3-3",
    positions: [gk, rb, rcb, lcb, lb, rcm, ccm, lcm, rw, st, lw],
  },
  {
    name: "4-3-3 (2)",
    positions: [gk, rb, rcb, lcb, lb, cdm, rcm, lcm, rw, st, lw],
  },
  {
    name: "4-3-3 (3)",
    positions: [gk, rb, rcb, lcb, lb, rcdm, lcdm, cm, rw, st, lw],
  },
  {
    name: "4-3-3 (4)",
    positions: [gk, rb, rcb, lcb, lb, rcm, lcm, cam, rw, st, lw],
  },
  {
    name: "4-3-3 (5)",
    positions: [gk, rb, rcb, lcb, lb, cdm, rcm, lcm, cf, rw, lw],
  },
  {
    name: "4-4-1-1",
    positions: [gk, rb, rcb, lcb, lb, rm, rcm, lcm, lm, cf, st],
  },
  {
    name: "4-4-1-1 (2)",
    positions: [gk, rb, rcb, lcb, lb, rm, rcm, lcm, lm, cam, st],
  },
  {
    name: "4-4-2",
    positions: [gk, rb, rcb, lcb, lb, rm, rcm, lcm, lm, rst, lst],
  },
  {
    name: "4-4-2 (2)",
    positions: [gk, rb, rcb, lcb, lb, rm, rcdm, lcdm, lm, rst, lst],
  },
  {
    name: "4-5-1",
    positions: [gk, rb, rcb, lcb, lb, rm, cm, lm, rcam, lcam, st],
  },
  {
    name: "4-5-1 (2)",
    positions: [gk, rb, rcb, lcb, lb, rm, lcm, ccm, rcm, lm, st],
  },
  {
    name: "5-2-1-2",
    positions: [gk, rwb, rcb, ccb, lcb, lwb, rcm, lcm, cam, rst, lst],
  },
  {
    name: "5-2-2-1",
    positions: [gk, rwb, rcb, ccb, lcb, lwb, rcm, lcm, rw, st, lw],
  },
  {
    name: "5-1-2-2",
    positions: [gk, rwb, rcb, ccb, lcb, lwb, rcm, cdm, lcm, rst, lst],
  },
  {
    name: "5-4-1",
    positions: [gk, rwb, rcb, ccb, lcb, lwb, rm, rcm, lcm, lm, st],
  },
];

export const generalInstructions = [
  {
    instructionType: "Defense",
    defensiveStyle: [
      "Balanced",
      "Pressure on Heavy Touch",
      "Press After Possession Loss",
      "Constant Pressure",
    ],
    width: 50,
    depth: 50,
  },
  {
    instructionType: "Offense",
    buildUpPlay: ["Balanced", "Slow Build Up", "Long Ball", "Fast Build Up"],
    chanceCreation: [
      "Balanced",
      "Possession",
      "Direct Passing",
      "Forward Runs",
    ],
    width: 50,
    playersInBox: 5,
  },
  {
    instructionType: "Corners & Free Kicks",
    corners: 3,
    freeKicks: 3,
  },
];

export const playerInstructions = [
  {
    position: "gk",
    instructions: [],
  },
];
