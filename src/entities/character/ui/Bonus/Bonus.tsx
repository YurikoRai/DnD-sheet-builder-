"use client";
import React, { useState } from "react";

import { useCharacterStore } from "../../model/store";

import styles from "./Bonus.module.scss";

const Bonus = () => {
  const profBonus = useCharacterStore((state) => state.proficiencyBonus);

  return (
    <div className={styles.InspirationContent}>
      <div className={styles.square}>
        <span className={styles.symbol}>+{profBonus}</span>
      </div>
      <div className={styles.textBox}>
        <div className={styles.text}>Бонус Умения</div>
      </div>
    </div>
  );
};

export default Bonus;
