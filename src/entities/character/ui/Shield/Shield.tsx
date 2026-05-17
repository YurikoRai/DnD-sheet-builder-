"use client";

import React from "react";
import { useCharacterStore } from "../../model/store";

import styles from "./Shield.module.scss";

const Shield = () => {
  const dex = useCharacterStore((state) => state.stats.dex);
  const modifier = Math.floor((dex - 10) / 2);
  const armorClass = 10 + modifier;

  return (
    <div className={styles.container}>
      <div className={styles.shieldWrapper}>
        <img
          src="/Shield.svg"
          alt="Armor Shield"
          className={styles.shieldSvg}
        />
        <div className={styles.armorValue}>
          {armorClass}
          <div className={styles.label}>КЛАСС БРОНИ</div>
        </div>
      </div>
    </div>
  );
};

export default Shield;
