import React, { useState, useEffect } from "react";
import styles from "./Speed.module.scss";

interface SpeedProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

const Speed: React.FC<SpeedProps> = ({ initialValue = 0, onChange }) => {
  const [SpeedStat, setSpeedStat] = useState<number>(initialValue);

  useEffect(() => {
    setSpeedStat(initialValue);
  }, [initialValue]);

  const handleValueChange = (newValue: number) => {
    setSpeedStat(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.SpeedWrapper}>
        <div className={styles.SpeedValue}>
          {SpeedStat}
          <div className={styles.label}>СКОРОСТЬ</div>
        </div>
      </div>
    </div>
  );
};

export default Speed;
