"use client";
import React from "react";

import { useCharacterStore } from "../../model/store";

import styles from "./Initiate.module.scss";

const Initiate = () => {
  const dex = useCharacterStore((state) => state.stats.dex);
  const modifier = Math.floor((dex - 10) / 2);

  return (
    <div className={styles.container}>
      <div className={styles.InitiateWrapper}>
        <div className={styles.InitiateValue}>
          {modifier}
          <div className={styles.label}>ИНИЦИАТИВА</div>
        </div>
      </div>
    </div>
  );
};

export default Initiate;
