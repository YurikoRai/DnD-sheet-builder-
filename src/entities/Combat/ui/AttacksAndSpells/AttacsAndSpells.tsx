"use client";
import React from "react";

import { useCharacterStore } from "../../../Сharacter/model/store";

import styles from "./AttacsAndSpells.module.scss";

const AttacsAndSpells = () => {
  const attacks = useCharacterStore((state) => state.attacks);
  const updateAttacks = useCharacterStore((state) => state.updateAttacks);

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={attacks}
        onChange={(e) => updateAttacks(e.target.value)}
        placeholder="Выберите атаки и заклинания..."
      />
      <div className={styles.captions}>АТАКИ И ЗАКЛИНАНИЯ</div>
    </div>
  );
};

export default AttacsAndSpells;
