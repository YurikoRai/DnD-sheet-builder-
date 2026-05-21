"use client";
import React from "react";

import { useCharacterStore } from "../../../Сharacter/model/store";

import styles from "./Trials.module.scss";

const TrialsColumn = () => {
  const stats = useCharacterStore((state) => state.stats);
  const proficiencies = useCharacterStore((state) => state.proficiencies);
  const profBonus = useCharacterStore((state) => state.proficiencyBonus);
  const toggleProficiency = useCharacterStore(
    (state) => state.toggleProficiency,
  );

  const trials = [
    { id: "trial_str", name: "Сила", statKey: "str" },
    { id: "trial_dex", name: "Ловкость", statKey: "dex" },
    { id: "trial_con", name: "Выносливость", statKey: "con" },
    { id: "trial_int", name: "Интеллект", statKey: "int" },
    { id: "trial_wis", name: "Мудрость", statKey: "wis" },
    { id: "trial_cha", name: "Харизма", statKey: "cha" },
  ] as const;

  return (
    <div className={styles.leftPanel}>
      <div className={styles.skillsContainer}>
        {trials.map((trial) => {
          const isSelected = proficiencies.includes(trial.id);
          const baseMod = Math.floor((stats[trial.statKey] - 10) / 2);
          const finalModifier = isSelected ? baseMod + profBonus : baseMod;

          return (
            <SkillEntry
              key={trial.id}
              name={trial.name}
              modifier={finalModifier}
              isSelected={isSelected}
              onToggle={() => toggleProficiency(trial.id)}
            />
          );
        })}
      </div>
      <div className={styles.skillName}></div>
    </div>
  );
};

interface trialEntryProps {
  name: string;
  modifier: number;
  isSelected: boolean;
  onToggle: () => void;
}

const SkillEntry: React.FC<trialEntryProps> = ({
  name,
  modifier,
  isSelected,
  onToggle,
}) => {
  return (
    <div className={styles.skillRow} onClick={onToggle}>
      <div className={styles.skillCheckbox}>
        <div
          className={`${styles.checkCircle} ${isSelected ? styles.selected : ""}`}
        ></div>
      </div>
      <div className={styles.skillModifier}>
        {modifier >= 0 ? `+${modifier}` : modifier}
      </div>
      <div className={styles.skillName}>{name}</div>
    </div>
  );
};

export default TrialsColumn;
