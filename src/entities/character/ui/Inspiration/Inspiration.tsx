"use client";
import React from "react";

import { useCharacterStore } from "../../model/store";

import styles from "./Inspiration.module.scss";

const Inspiration = () => {
  const isVisible = useCharacterStore((state) => state.inspiration);
  const toggle = useCharacterStore((state) => state.toggleInspiration);

  return (
    <div className={styles.InspirationContent}>
      <div className={styles.square} onClick={toggle} role="button">
        {isVisible && <span className={styles.symbol}>✴</span>}
      </div>
      <div className={styles.textBox}>
        <div className={styles.text}>Вдохновение</div>
      </div>
    </div>
  );
};

export default Inspiration;
