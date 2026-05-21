"use client";
import React from "react";

import { useCharacterStore } from "../../model/store";

import styles from "./Header.module.scss";

const SelectInput = ({ label, value, onChange, options }: any) => {
  return (
    <div className={styles.diceSelectContainer}>
      <select value={value} onChange={onChange} className={styles.diceSelect}>
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={styles.captions}>{label}</div>
    </div>
  );
};

const Header = () => {
  const store = useCharacterStore();

  const classOptions = ["Воин", "Плут", "Варвар"] as const;
  const raceOptions = ["Человек", "Эльф", "Дворф"] as const;
  const originOptions = ["Артист", "Моряк", "Пират"] as const;
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

  return (
    <div className={styles.header}>
      <div className={styles.details}>
        <div className={styles.container}>
          <textarea
            className={styles.textarea}
            value={store.name}
            onChange={(e) => store.updateHeader("name", e.target.value)}
            placeholder="Введите имя персонажа..."
          />
          <div className={styles.captionName}>ИМЯ ПЕРСОНАЖА</div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.lines}>
            <SelectInput
              label="Класс"
              value={store.class}
              onChange={(e: any) => store.updateHeader("class", e.target.value)}
              options={classOptions}
            />

            <SelectInput
              label="Происхождение"
              value={store.origin}
              onChange={(e: any) =>
                store.updateHeader("origin", e.target.value)
              }
              options={originOptions}
            />
            <div className={styles.inputWrapper}>
              <textarea
                className={styles.nameArea}
                value={store.playerName}
                onChange={(e) =>
                  store.updateHeader("playerName", e.target.value)
                }
                placeholder="Введите имя игрока..."
              />
            </div>
          </div>

          <div className={styles.lines}>
            <SelectInput
              label="Раса"
              value={store.race}
              onChange={(e: any) => store.updateHeader("race", e.target.value)}
              options={raceOptions}
            />
            <SelectInput
              label="Мировоззрение"
              value={store.alignment}
              onChange={(e: any) =>
                store.updateHeader("alignment", e.target.value)
              }
              options={alignmentOptions}
            />
            <div className={styles.inputWrapper}>
              <input
                type="number"
                className={styles.levelArea}
                value={store.level}
                onChange={(e) =>
                  store.updateLevel(parseInt(e.target.value) || "")
                }
                placeholder="Уровень персонажа"
              />
              <div className={styles.captions}>Уровень</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Header;
