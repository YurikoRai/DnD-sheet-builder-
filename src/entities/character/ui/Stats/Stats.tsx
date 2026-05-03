import React, { useState } from "react";
import styles from "./Stats.module.scss";

const Stats: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftColumn}>
        <Section title="Характеристики">
          <Attribute name="CИЛА" />
          <Attribute name="ЛОВКОСТЬ" />
          <Attribute name="ТЕЛОСЛОЖ" />
          <Attribute name="ИНТЕЛЛЕКТ" />
          <Attribute name="МУДРОСТЬ" />
          <Attribute name="ХАРИЗМА" />
        </Section>
      </div>
    </div>
  );
};

// Вспомогательные компоненты
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  children,
}) => (
  <div className={styles.section}>
    <h3 className={styles.sectionTitle}></h3>
    {children}
  </div>
);

const Attribute: React.FC<{ name: string }> = ({ name }) => (
  <div className={styles.attribute}>
    <div className={styles.attributeModifier}>
      <label title="Это атрибут, который будет влиять на характеристики">
        {name}
      </label>
      <div className={styles.attributeValue}></div>
    </div>
  </div>
);

export default Stats;
