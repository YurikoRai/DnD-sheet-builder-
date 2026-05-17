import React from "react";

import styles from "./Properties.module.scss";
import { useCharacterStore } from "@/src/entities/character/model/store";

const Properties = () => {
  const text = useCharacterStore((state) => state.features);
  const updateField = useCharacterStore((state) => state.updateField);

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => updateField("features", e.target.value)}
        placeholder="Введите особенности и свойства"
      />
      <div className={styles.captions}>ОСОБЕННОСТИ И СВОЙСТВА</div>
    </div>
  );
};

export default Properties;
