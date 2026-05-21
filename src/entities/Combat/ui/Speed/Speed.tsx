"use client";
import React from "react";

import { useCharacterStore } from "../../../Сharacter/model/store";

import styles from "./Speed.module.scss";

const Speed = () => {
  const speed = useCharacterStore((state) => state.baseSpeed);

  return (
    <div className={styles.container}>
      <div className={styles.speedValue}>{speed}</div>
      <div className={styles.label}>СКОРОСТЬ</div>
    </div>
  );
};

export default Speed;
