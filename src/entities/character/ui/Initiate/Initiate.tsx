import React, { useState, useEffect } from "react";
import styles from "./Initiate.module.scss";

interface InitiateProps {
  initialValue?: number;
  onChange?: (value: number) => void;
}

const Initiate: React.FC<InitiateProps> = ({ initialValue = 0, onChange }) => {
  const [InitiateStat, setInitiateStat] = useState<number>(initialValue);

  useEffect(() => {
    setInitiateStat(initialValue);
  }, [initialValue]);

  const handleValueChange = (newValue: number) => {
    setInitiateStat(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.InitiateWrapper}>
        <div className={styles.InitiateValue}>
          {InitiateStat}
          <div className={styles.label}>ИНИЦИАТИВА</div>
        </div>
      </div>
    </div>
  );
};

export default Initiate;
