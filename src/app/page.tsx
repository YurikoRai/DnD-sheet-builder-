"use client";
import React from "react";

import styles from "./CharacterSheet.module.scss";
import Header from "../entities/character/ui/Header/Header";
import Stats from "../entities/character/ui/Stats/Stats";
import TrialsColumn from "../entities/character/ui/Trials/Trials";
import LeftCharacterColumn from "../entities/character/ui/LeftCharacterColumn/LeftCharacterColumn";
import Shield from "../entities/character/ui/Shield/Shield";
import Initiate from "../entities/character/ui/Initiate/Initiate";
import Speed from "../entities/character/ui/Speed/Speed";
import CurrentHPAreaBlock from "../entities/character/ui/CurrentHP/CurrentHP";
import Properties from "../shared/ui/Properties/Properties";
import Equipment from "../shared/ui/Equipment/Equipment";
import TextAreaBlock from "../shared/ui/TextAreaBlock/TextAreaBlock";
import Passive from "../entities/character/ui/Passive/Passive";
import CharacterNature from "../entities/character/ui/CharacterNature/CharacterNature";
import Inspiration from "../entities/character/ui/Inspiration/Inspiration";
import Bonus from "../entities/character/ui/Bonus/Bonus";
import AttacsAndSpells from "../entities/character/ui/AttacksAndSpells/AttacsAndSpells";

export default function CharacterPage() {
  return (
    <div className={styles.rowContentAll}>
      {/* <div className={styles.containerTest}></div> */}

      <div className={styles.container}>
        <Header />

        <div className={styles.content}>
          {/* ЛЕВАЯ ЧАСТЬ[cite: 11] */}
          <div className={styles.leftColl}>
            <div className={styles.RowInColumn}>
              <Stats />

              <div className={styles.characterSheet}>
                <Inspiration />
                <Bonus />
                <TrialsColumn />
                <LeftCharacterColumn />
              </div>
            </div>

            <div className={styles.bottomcontent}>
              <Passive />
            </div>
            <TextAreaBlock />
          </div>

          {/* СРЕДНЯЯ КОЛОНКА[cite: 11] */}
          <div className={styles.centerColumn}>
            <div className={styles.topStats}>
              <Shield />
              <Initiate />
              <Speed />
            </div>

            <CurrentHPAreaBlock />
            <AttacsAndSpells />
            <Equipment />
          </div>

          {/* ПРАВАЯ КОЛОНКА[cite: 11] */}
          <div className={styles.rightColumn}>
            <CharacterNature />
            <Properties />
          </div>
        </div>
      </div>

      {/* <div className={styles.containerTest}></div> */}
    </div>
  );
}
