"use client";
import React from "react";

import { useCharacterStore } from "../../model/store";

import styles from "./Speed.module.scss";

const Speed = () => {
  const speed = useCharacterStore((state) => state.baseSpeed);

  return (
    <div className={styles.container}>
      <div className={styles.SpeedWrapper}>
        <div className={styles.SpeedValue}>
          {speed}
          <div className={styles.label}>СКОРОСТЬ</div>
        </div>
      </div>
    </div>
  );
};

export default Speed;
