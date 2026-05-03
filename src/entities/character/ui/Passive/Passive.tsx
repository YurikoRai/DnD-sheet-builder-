import React, { useState } from "react";
import styles from "./Passive.module.scss";

const Passive: React.FC = () => {
  const [isSymbolVisible, setIsSymbolVisible] = useState(false);

  const handleClick = () => {
    setIsSymbolVisible((prev) => !prev);
  };

  return (
    <div className={styles.InspirationContent}>
      <div
        className={styles.square}
        onClick={handleClick}
        role="button"
        aria-pressed={isSymbolVisible}
      >
        {isSymbolVisible && <span className={styles.symbol}>✴</span>}
      </div>
      <div className={styles.textBox}>
        <div className={styles.text}> Пассивная мудрость (внимание) </div>{" "}
      </div>
    </div>
  );
};

export default Passive;
