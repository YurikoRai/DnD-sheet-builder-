// LeftCharacterColumn.tsx
import React, { useState } from "react";
import styles from "./LeftCharacterColumn.module.scss";

const LeftCharacterColumn: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skillName: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((name) => name !== skillName)
        : [...prev, skillName]
    );
  };

  const skills = [
    "Акробатика (Лов)",
    "Анализ (Инт)",
    "Атлетика (Сил)",
    "Восприятие (Муд)",
    "Выживание (Муд)",
    "Выступление (Хар)",
    "Запугивание (Хар)",
    "История (Инт)",
    "Ловкость рук (Лов)",
    "Магия (Инт)",
    "Медицина (Муд)",
    "Обман (Хар)",
    "Природа (Инт)",
    "Проницател.(Муд)",
    "Религия (Инт)",
    "Скрытность (Лов)",
    "Убеждение (Хар)",
    "Дрессировка (Муд)",
  ];

  return (
    <div className={styles.leftPanel}>
      <div className={styles.skillsContainer}>
        {skills.map((skill) => (
          <SkillEntry
            key={skill}
            name={skill}
            modifier={0}
            isSelected={selectedSkills.includes(skill)}
            onToggle={() => toggleSkill(skill)}
          />
        ))}
      </div>
    </div>
  );
};

// Обновленный компонент навыка
interface SkillEntryProps {
  name: string;
  modifier: number;
  isSelected: boolean;
  onToggle: () => void;
}

const SkillEntry: React.FC<SkillEntryProps> = ({
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

export default LeftCharacterColumn;
