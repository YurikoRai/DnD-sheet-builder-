"use client";
import React from "react";
import { useCharacterStore } from "../../model/store";
import styles from "./CurrentHp.module.scss";

const CurrentHPAreaBlock = () => {
  const { current, max } = useCharacterStore((state) => state.hp);
  const updateHp = useCharacterStore((state) => state.updateHP);

  const handleChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateHp("max", parseInt(e.target.value) || 0);
  };

  const handleChangeCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateHp("current", parseInt(e.target.value) || 0);
  };

  const hitDiceType = useCharacterStore((state) => state.hitDice.type) || "d8";
  const hitDiceRemaining =
    useCharacterStore((state) => state.hitDice.remaining) || 3;
  const hitDiceTotal = useCharacterStore((state) => state.hitDice.total) || 3;
  const updateHitDice = useCharacterStore((state) => state.updateHitDice);

  const handleHitDiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateHitDice?.("type", e.target.value);
  };

  const deathSuccesses =
    useCharacterStore((state) => state.deathSaves.successes) || 0;
  const deathFailures =
    useCharacterStore((state) => state.deathSaves.failures) || 0;
  const updateDeathSaves = useCharacterStore((state) => state.updateDeathSaves);

  const toggleDeathSave = (type: "success" | "failure", index: number) => {
    if (type === "success") {
      const newValue = deathSuccesses === index + 1 ? index : index + 1;
      updateDeathSaves?.("successes", newValue);
    } else {
      const newValue = deathFailures === index + 1 ? index : index + 1;
      updateDeathSaves?.("failures", newValue);
    }
  };

  return (
    <div className={styles.allContent}>
      {/* Блок текущих и максимальных ПЗ */}
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.label}>Максимум ПЗ</div>
          <input
            className={styles.TopTextArea}
            type="number"
            value={max}
            onChange={handleChangeMax}
          />
        </div>
        <input
          className={styles.BottomTextArea}
          type="number"
          value={current}
          onChange={handleChangeCurrent}
        />
        <div className={styles.bottomLabel}>ТЕКУЩИЕ ПУНКТЫ ЗДОРОВЬЯ</div>
      </div>

      {/* Блок временных ПЗ */}
      <div className={styles.tempContainer}>
        <input
          className={styles.BottomTextArea}
          type="number"
          value={current}
          onChange={handleChangeCurrent}
        />
        <div className={styles.bottomLabel}>ВРЕМЕННЫЕ ПУНКТЫ ЗДОРОВЬЯ</div>
      </div>

      {/* кости хитов и спасброски от смерти */}
      <div className={styles.DicesAndTrialsContainer}>
        <div className={styles.DicesHpContainer}>
          <div className={styles.diceSelectContainer}>
            <select
              className={styles.diceSelect}
              value={hitDiceType}
              onChange={handleHitDiceTypeChange}
            >
              <option value="d4">d4</option>
              <option value="d6">d6</option>
              <option value="d8">d8</option>
              <option value="d10">d10</option>
              <option value="d12">d12</option>
            </select>
          </div>

          <div className={styles.label}>
            {hitDiceRemaining} / {hitDiceTotal}
          </div>
          <div className={styles.bottomLabel}>КОСТИ ХИТОВ</div>
        </div>

        <div className={styles.DicesHpContainer}>
          <div className={styles.content}>
            <div className={styles.label}>Успехи</div>
            <div className={styles.checkboxesContainer}>
              {[0, 1, 2].map((i) => (
                <div
                  key={`success-${i}`}
                  className={`${styles.checkCircle} ${
                    i < deathSuccesses ? styles.selected : ""
                  }`}
                  onClick={() => toggleDeathSave("success", i)}
                />
              ))}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.label}>Провалы</div>
            <div className={styles.checkboxesContainer}>
              {[0, 1, 2].map((i) => (
                <div
                  key={`failure-${i}`}
                  className={`${styles.checkCircle} ${
                    i < deathFailures ? styles.selected : ""
                  }`}
                  onClick={() => toggleDeathSave("failure", i)}
                />
              ))}
            </div>
          </div>
          <div className={styles.bottomLabel}>СПАСБРОКИ ОТ СМЕРТИ</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentHPAreaBlock;
