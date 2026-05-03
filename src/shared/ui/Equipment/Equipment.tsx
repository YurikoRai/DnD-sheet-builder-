import React, { useState } from "react";
import styles from "./Equipment.module.scss";

const Equipment = () => {
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
        placeholder="Выберите сняряжение..."
      />
      <div className={styles.captions}>СНАРЯЖЕНИЕ</div>
    </div>
  );
};

export default Equipment;
