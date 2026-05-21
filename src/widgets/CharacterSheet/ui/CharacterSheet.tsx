"use client";
import React from "react";

import styles from "./CharacterSheet.module.scss";
import Header from "@/src/entities/Сharacter/ui/Header/Header";
import Stats from "@/src/entities/Stat/ui/Stats/Stats";
import TrialsColumn from "@/src/entities/Skill/ui/Trials/Trials";
import TextAreaBlock from "@/src/shared/ui/TextAreaBlock/TextAreaBlock";
import Speed from "@/src/entities/Combat/ui/Speed/Speed";
import CurrentHPAreaBlock from "@/src/entities/Сharacter/ui/CurrentHP/CurrentHP";
import Equipment from "@/src/entities/Combat/ui/Equipment/Equipment";
import CharacterNature from "@/src/entities/Сharacter/ui/CharacterNature/CharacterNature";
import Properties from "@/src/shared/ui/Properties/Properties";
import Inspiration from "@/src/entities/Skill/ui/Inspiration/Inspiration";
import Bonus from "@/src/entities/Skill/ui/Bonus/Bonus";
import Passive from "@/src/entities/Skill/ui/Passive/Passive";
import Shield from "@/src/entities/Combat/ui/Shield/Shield";
import Initiate from "@/src/entities/Combat/ui/Initiate/Initiate";
import AttacsAndSpells from "@/src/entities/Combat/ui/AttacksAndSpells/AttacsAndSpells";
import SkillsList from "@/src/entities/Skill/ui/SkillsList/SkillsList";

export const CharacterSheet = () => {
  return (
    <div className={styles.rowContentAll}>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <div className={styles.leftColl}>
            <div className={styles.RowInColumn}>
              <Stats />
              <div className={styles.characterSheet}>
                <Inspiration />
                <Bonus />
                <TrialsColumn />
                <SkillsList />
              </div>
            </div>
            <div className={styles.bottomcontent}>
              <Passive />
            </div>
            <TextAreaBlock />
          </div>
          <div className={styles.centerColumn}>
            <div className={styles.firstTopArea}>
              <div className={styles.topStats}>
                <Shield />
                <Initiate />
                <Speed />
              </div>
              <CurrentHPAreaBlock />
            </div>
            <AttacsAndSpells />
            <Equipment />
          </div>
          <div className={styles.rightColumn}>
            <CharacterNature />
            <Properties />
          </div>
        </div>
      </div>
    </div>
  );
};
