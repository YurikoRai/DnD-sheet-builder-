import { useCharacterStore } from "@/src/entities/character/model/store";
import styles from "./Equipment.module.scss";

const Equipment = () => {
  const text = useCharacterStore((state) => state.equipment);
  const updateField = useCharacterStore((state) => state.updateField);

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={(e) => updateField("equipment", e.target.value)}
        placeholder="Выберите снаряжение..."
      />
      <div className={styles.captions}>СНАРЯЖЕНИЕ</div>
    </div>
  );
};

export default Equipment;
