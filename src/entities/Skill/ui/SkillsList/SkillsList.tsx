"use client";
import React from "react";

import { useCharacterStore } from "../../../Сharacter/model/store";

import styles from "./SkillsList.module.scss";

const SkillsList = () => {
  const stats = useCharacterStore((state) => state.stats);
  const profBonus = useCharacterStore((state) => state.proficiencyBonus);
  const proficiencies = useCharacterStore((state) => state.proficiencies);
  const toggleProficiency = useCharacterStore(
    (state) => state.toggleProficiency,
  );

  const skills = [
    { id: "ath", name: "Атлетика", stat: "str" },
    { id: "acr", name: "Акробатика", stat: "dex" },
    { id: "sle", name: "Ловкость рук", stat: "dex" },
    { id: "ste", name: "Скрытность", stat: "dex" },
    { id: "arc", name: "Магия", stat: "int" },
    { id: "his", name: "История", stat: "int" },
    { id: "inv", name: "Расследование", stat: "int" },
    { id: "nat", name: "Природа", stat: "int" },
    { id: "rel", name: "Религия", stat: "int" },
    { id: "ins", name: "Проницательность", stat: "wis" },
    { id: "med", name: "Медицина", stat: "wis" },
    { id: "per", name: "Внимательность", stat: "wis" },
    { id: "sur", name: "Выживание", stat: "wis" },
    { id: "ani", name: "Дрессировка", stat: "wis" },
    { id: "dec", name: "Обман", stat: "cha" },
    { id: "int", name: "Запугивание", stat: "cha" },
    { id: "per_s", name: "Выступление", stat: "cha" },
    { id: "per_u", name: "Убеждение", stat: "cha" },
  ] as const;

  return (
    <div className={styles.leftPanel}>
      <div className={styles.skillsContainer}>
        {skills.map((skill) => {
          const isSelected = proficiencies.includes(skill.id);
          const baseMod = Math.floor((stats[skill.stat] - 10) / 2);
          const totalBonus = isSelected ? baseMod + profBonus : baseMod;

          return (
            <SkillEntry
              key={skill.id}
              name={skill.name}
              modifier={totalBonus}
              isSelected={isSelected}
              onToggle={() => toggleProficiency(skill.id)}
            />
          );
        })}
      </div>
      {/* <div className={styles.skillName}>НАВЫКИ</div> */}
    </div>
  );
};

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

export default SkillsList;
