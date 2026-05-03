import React, { useState } from "react";
import styles from "./Header.module.scss";

// Вспомогательный компонент для селекта
interface SelectInputProps<T extends string> {
  value: T;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: readonly T[];
}

const SelectInput = <T extends string>({
  value,
  onChange,
  options,
}: SelectInputProps<T>) => {
  return (
    <div className={styles.diceSelectContainer}>
      <select value={value} onChange={onChange} className={styles.diceSelect}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Header = () => {
  const [text, setText] = useState("");

  const [playerName, setPlayerName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPlayerName(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  // КЛАСС
  const classOptions = ["Воин", "Плут", "Варвар"] as const;
  type ClassType = (typeof classOptions)[number];
  const [selectedClass, setSelectedClass] = useState<ClassType>(
    classOptions[0]
  );
  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value as ClassType);
  };

  // РАСА
  const raceOptions = ["Человек", "Эльф", "Дворф"] as const;
  type raceType = (typeof raceOptions)[number];
  const [selectedRace, setSelectedRace] = useState<raceType>(raceOptions[0]);
  const handleRaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRace(e.target.value as raceType);
  };

  // ПРЕДЫСТОРИИ
  const originOptions = ["Артист", "Моряк", "Пират"] as const;
  type originType = (typeof originOptions)[number];
  const [selectedOrigin, setSelectedOrigin] = useState<originType>(
    originOptions[0]
  );
  const handleOriginChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrigin(e.target.value as originType);
  };

  // МИРОВОЗЗРЕНИЕ
  const alignmentOptions = [
    "Законно-добрый",
    "Нейтрально-добрый",
    "Хаотично-добрый",
    "Законно-нейтральный",
    "Истинно-нейтральный",
    "Хаотично-нейтральный",
    "Законно-злой",
    "Нейтрально-злой",
    "Хаотично-злой",
  ] as const;
  type alignmentType = (typeof alignmentOptions)[number];
  const [selectedAlignment, setSelecctedAlignment] = useState<alignmentType>(
    alignmentOptions[0]
  );
  const handleAlignmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelecctedAlignment(e.target.value as alignmentType);
  };

  return (
    <div className={styles.header}>
      <div className={styles.details}>
        <div className={styles.container}>
          <textarea
            className={styles.textarea}
            value={text}
            onChange={handleChange}
            placeholder="Введите имя персонажа..."
          />
          <div className={styles.captions}>ИМЯ ПЕРСОНАЖА</div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.leftCollumn}>
            <SelectInput
              value={selectedClass}
              onChange={handleClassChange}
              options={classOptions}
            />
            <SelectInput
              value={selectedRace}
              onChange={handleRaceChange}
              options={raceOptions}
            />
          </div>
          <div className={styles.leftCollumn}>
            <SelectInput
              value={selectedOrigin}
              onChange={handleOriginChange}
              options={originOptions}
            />
            <SelectInput
              value={selectedAlignment}
              onChange={handleAlignmentChange}
              options={alignmentOptions}
            />
          </div>
          <textarea
            className={styles.nameArea}
            value={playerName}
            onChange={handleNameChange}
            placeholder="Введите имя игрока..."
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
