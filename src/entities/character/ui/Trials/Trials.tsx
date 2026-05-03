import React, { useState } from "react";
import styles from "./Trials.module.scss";

const trialsColumn: React.FC = () => {
  const [selectedTrials, setSelectedTrials] = useState<string[]>([]);

  const toggleTrial = (TrialName: string) => {
    setSelectedTrials((prev) =>
      prev.includes(TrialName)
        ? prev.filter((name) => name !== TrialName)
        : [...prev, TrialName]
    );
  };

  const trials = [
    "Сила",
    "Ловкость",
    "Выносливость",
    "Интеллект",
    "Мудрость",
    "Харизма",
  ];

  return (
    <div className={styles.leftPanel}>
      <div className={styles.skillsContainer}>
        {trials.map((trial) => (
          <SkillEntry
            key={trial}
            name={trial}
            modifier={0}
            isSelected={selectedTrials.includes(trial)}
            onToggle={() => toggleTrial(trial)}
          />
        ))}
      </div>
      <div className={styles.skillName}>Испытания</div>
    </div>
  );
};

// Обновленный компонент навыка
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

export default trialsColumn;
