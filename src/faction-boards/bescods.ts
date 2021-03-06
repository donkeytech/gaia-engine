import { FactionBoardRaw } from ".";
import { Building, Faction } from "../enums";

const bescods: FactionBoardRaw = {
  faction: Faction.Bescods,
  buildings: {
    [Building.TradingStation]: {
      income: [["+k"], ["+k"], ["+k"], ["+k"]],
    },
    [Building.ResearchLab]: {
      income: [
        ["+3c", "tech"],
        ["+4c", "tech"],
        ["+5c", "tech"],
      ],
    },
    [Building.PlanetaryInstitute]: {
      income: [["+4pw", "+2t"]],
    },
  },
  income: ["k,4o,15c,q", "+o", "=> up-lowest"],
};

export default bescods;
