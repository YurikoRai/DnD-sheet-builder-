"use client";
import React from "react";

import { useCharacterStore } from "../../model/store";

import styles from "./CharacterNature.module.scss";

const CharacterNature = () => {
  const nature = useCharacterStore((state) => state.nature);
  const updateNature = useCharacterStore((state) => state.updateNature);

  const captions = ["СВОЙСТВА ЛИЧНОСТИ", "ИДЕАЛЫ", "УЗЫ", "ИЗЪЯНЫ"];

  return (
    <div className={styles.container}>
      {nature.map((text, index) => {
        let borderClass = "";
        if (index === 0) borderClass = styles.firstBorder;
        else if (index === nature.length - 1) borderClass = styles.lastBorder;

        return (
          <div key={index} className={styles.textBlock}>
            <textarea
              className={`${styles.textarea} ${borderClass}`}
              value={text}
              onChange={(e) => updateNature(index, e.target.value)}
              placeholder={`Введите ${captions[index].toLowerCase()}...`}
            />
            <div className={styles.captions}>{captions[index]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterNature;
