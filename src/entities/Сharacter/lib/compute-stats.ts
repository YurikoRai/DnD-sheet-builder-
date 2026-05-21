import { calculateModifier } from "@/src/shared/lib/dnd-math";

export const getFinalStats = (baseStats: any, raceData: any) => {
  const finalStats: Record<
    string,
    { value: number; modifier: number; bonus: number }
  > = {};

  for (const stat in baseStats) {
    const raceBonus = raceData?.stats?.[stat] || 0;
    const totalValue = baseStats[stat] + raceBonus;

    finalStats[stat] = {
      value: totalValue,
      modifier: calculateModifier(totalValue),
      bonus: raceBonus,
    };
  }

  return finalStats;
};
