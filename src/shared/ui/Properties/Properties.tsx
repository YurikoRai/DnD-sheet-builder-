import React, { useState } from "react";
import styles from "./Properties.module.scss";

const Properties = () => {
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
        placeholder="Введите особенности и свойства"
      />
      <div className={styles.captions}>ОСОБЕННОСТИ И СВОЙСТВА</div>
    </div>
  );
};

export default Properties;
