"use client";

import { useCharacterStore } from "@/src/entities/character/model/store";
import styles from "./styles.module.scss"; // Импорт стилей
import { calculateModifier } from "@/src/shared/lib/dnd-math";

export function StatsBlock() {
  const baseStats = useCharacterStore((state) => state.baseStats);
  const setStat = useCharacterStore((state) => state.setStat);

  return (
    <div className={styles.container}>
      {(Object.entries(baseStats) as [keyof typeof baseStats, number][]).map(
        ([stat, value]) => {
          const mod = calculateModifier(value);
          return (
            <div key={stat} className={styles.statCard}>
              <span className={styles.label}>{stat}</span>
              <span className={styles.modifier}>
                {mod >= 0 ? `+${mod}` : mod}
              </span>
              <input
                type="number"
                value={value}
                onChange={(e) => setStat(stat, Number(e.target.value))}
                className={styles.input}
              />
            </div>
          );
        },
      )}
    </div>
  );
}
