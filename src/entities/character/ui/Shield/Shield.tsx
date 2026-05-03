import React, { useState, useEffect } from "react";
import styles from "./Shield.module.scss";
import shieldSvg from "public/pictures/Shield.svg";

interface ShieldProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

const Shield: React.FC<ShieldProps> = ({ initialValue = 0, onChange }) => {
  const [ShieldStat, setShieldStat] = useState<number>(initialValue);

  useEffect(() => {
    setShieldStat(initialValue);
  }, [initialValue]);

  const handleValueChange = (newValue: number) => {
    setShieldStat(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.shieldWrapper}>
        <img src={shieldSvg} alt="Armor Shield" className={styles.shieldSvg} />
        <div className={styles.armorValue}>
          {ShieldStat}
          <div className={styles.label}>КЛАСС БРОНИ</div>
        </div>
      </div>
    </div>
  );
};

export default Shield;
