"use client";

import ArrowButton from "@/src/shared/ui/ArrowButton/ArrowButton";
import { useCharacterStore } from "../../../Сharacter/model/store";

import styles from "./Stats.module.scss";

const Stats = () => {
  const stats = useCharacterStore((state) => state.stats);
  const updateStat = useCharacterStore((state) => state.updateStat);

  const statConfigs = [
    { key: "str", name: "CИЛА" },
    { key: "dex", name: "ЛОВКОСТЬ" },
    { key: "con", name: "ТЕЛОСЛОЖ" },
    { key: "int", name: "ИНТЕЛЛЕКТ" },
    { key: "wis", name: "МУДРОСТЬ" },
    { key: "cha", name: "ХАРИЗМА" },
  ] as const;

  const getMod = (score: number) => {
    const mod = Math.floor((score - 10) / 2);
    return mod;
  };

  return (
    <section className={styles.section}>
      {statConfigs.map(({ key, name }) => (
        <div key={key} className={styles.attribute}>
          <div className={styles.attributeModifier}>
            <label title="это атрибут, он будет влиять на хар-ки">{name}</label>
            <div className={styles.modDisplay}>{getMod(stats[key])}</div>
          </div>
          <div className={styles.statsValue}>
            <ArrowButton
              direction="decrement"
              onClick={() => updateStat(key, stats[key] - 1)}
              disabled={stats[key] === 0}
              ariaLabel="Уменьшить"
              className={styles.leftStatBtn}
            />
            <input
              type="number"
              className={styles.attributeValue}
              value={stats[key]}
              onChange={(e) => updateStat(key, parseInt(e.target.value) || 0)}
            />
            <ArrowButton
              direction="increment"
              onClick={() => updateStat(key, stats[key] + 1)}
              disabled={stats[key] === 0}
              ariaLabel="Увеличить"
              className={styles.rightStatBtn}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
