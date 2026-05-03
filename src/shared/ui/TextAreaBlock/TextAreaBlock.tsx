import React, { useState } from "react";
import styles from "./TextAreaBlock.module.scss";

const TextAreaBlock = () => {
  //  состояние для хранения значения текстового поля
  const [text, setText] = useState("");

  // Обработчик изменений в текстовом поле
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={handleChange}
        placeholder="Введите прочие умения и языки..."
      />
      <div className={styles.captions}>ПРОЧИЕ УМЕНИЯ И ЯЗЫКИ</div>
    </div>
  );
};

export default TextAreaBlock;
