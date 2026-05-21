"use client";
import React from "react";

import { useCharacterStore } from "@/src/entities/Сharacter/model/store";

import styles from "./Passive.module.scss";

const Passive: React.FC = () => {
  const stats = useCharacterStore((state) => state.stats);
  const proficiencies = useCharacterStore((state) => state.proficiencies);
  const profBonus = useCharacterStore((state) => state.proficiencyBonus);

  const wisMod = Math.floor((stats.wis - 10) / 2);
  const isPerceptionProficient = proficiencies.includes("per"); // 'per' - id внимательности из прошлого шага

  const passivePerception =
    10 + wisMod + (isPerceptionProficient ? profBonus : 0);

  return (
    <div className={styles.InspirationContent}>
      <div className={styles.square}>
        <span className={styles.symbol}>{passivePerception}</span>
      </div>
      <div className={styles.textBox}>
        <div className={styles.text}>Пассивная мудрость (внимание)</div>
      </div>
    </div>
  );
};

export default Passive;
