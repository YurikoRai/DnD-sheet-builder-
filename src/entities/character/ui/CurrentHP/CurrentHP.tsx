import React, { useEffect, useState } from "react";
import styles from "./CurrentHP.module.scss";

interface CurrentHpProps {
  externalValue?: number;
  onChange?: (value: number) => void;
}
const CurrentHPAreaBlock: React.FC<CurrentHpProps> = ({
  externalValue = "",
  onChange,
}) => {
  const [HPValue, setHPValue] = useState<string>(externalValue.toString());

  useEffect(() => {
    setHPValue(externalValue.toString());
  }, [externalValue]);

  // Обработчик изменений в текстовом поле
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Разрешаем: пустая строка и целые числа
    if (value === "" || /^\d*$/.test(value)) {
      setHPValue(value);

      // Парсим и передаем значение наружу
      const numValue = parseInt(value);
      if (!isNaN(numValue)) {
        onChange?.(numValue);
      } else if (value === "") {
        onChange?.(0); // Обработка пустой строки
      }
    }
  };

  const diceOptions = ["К6", "К8", "К10", "К12"] as const;
  type DiceType = (typeof diceOptions)[number];

  // Для костей здоровья
  const [selectedDice, setSelectedDice] = useState<DiceType>("К6");

  // Обработчик Для костей здоровья
  const handleDiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDice(e.target.value as DiceType);
  };

  // Переключение чекбокса по индексу
  const [checkboxes, setCheckboxes] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const toggleCheckbox = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>Максимум ПЗ</div>
          <input
            className={styles.TopTextArea}
            value={HPValue}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className={styles.BottomTextArea} />
        <div className={styles.bottomLabel}>ТЕКУЩИЕ ПУНКТЫ ЗДОРОВЬЯ </div>
      </div>

      <div className={styles.BottomContainer}>
        <div className={styles.TempContainer}></div>
        <div className={styles.SecondBottomLabel}>
          ВРЕМЕННЫЕ ПУНКТЫ ЗДОРОВЬЯ{" "}
        </div>
      </div>
      <div className={styles.DicesAndTrialsContainer}>
        <div className={styles.DicesHpContainer}>
          <div className={styles.content}>
            <div className={styles.label2}>Всего</div>
            <input
              className={styles.TopTextArea}
              value={HPValue}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          {/*выпадающий список для костей хп */}
          <div className={styles.diceSelectContainer}>
            <select
              value={selectedDice}
              onChange={handleDiceChange}
              className={styles.diceSelect}
            >
              {diceOptions.map((dice) => (
                <option key={dice} value={dice}>
                  {dice}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.SecondBottomLabel}>кости здоровья </div>
        </div>
        <div className={styles.DicesHpContainer}>
          <div className={styles.checkboxesContainer}>
            <label className={styles.SecondBottomLabel}>успехи</label>
            {[0, 1, 2].map((index) => (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className={`${styles.checkCircle} ${checkboxes[index] ? styles.selected : ""}`}
                  onClick={() => toggleCheckbox(index)}
                />
                {index < 2 && (
                  <div className={styles.horizontalDividerWrapper}>
                    <div className={styles.divider} />{" "}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className={styles.checkboxesContainer}>
            <label className={styles.SecondBottomLabel}>провалы</label>
            {[3, 4, 5].map((index) => (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className={`${styles.checkCircle} ${checkboxes[index] ? styles.selected : ""}`}
                  onClick={() => toggleCheckbox(index)}
                />
                {index < 5 && (
                  <div className={styles.horizontalDividerWrapper}>
                    <div className={styles.divider} />{" "}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className={styles.EmptySpace} />
          <label className={styles.SecondBottomLabel}>исп. против смерти</label>
        </div>
      </div>
    </div>
  );
};

export default CurrentHPAreaBlock;
