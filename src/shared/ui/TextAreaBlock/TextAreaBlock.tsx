"use client";
import { useCharacterStore } from "@/src/entities/Сharacter/model/store";

import styles from "./TextAreaBlock.module.scss";

const TextAreaBlock = () => {
  const text = useCharacterStore((state) => state.languages);
  const updateField = useCharacterStore((state) => state.updateField);

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => updateField("languages", e.target.value)}
        placeholder="Введите прочие умения и языки..."
      />
      <div className={styles.captions}>ПРОЧИЕ УМЕНИЯ И ЯЗЫКИ</div>
    </div>
  );
};

export default TextAreaBlock;
