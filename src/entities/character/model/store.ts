import { create } from "zustand";

export const useCharacterStore = create((set) => ({
  // Данные из Header
  name: "",
  class: "Воин",

  // Характеристики (из Stats.tsx)
  stats: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
  },

  // Здоровье (из CurrentHPAreaBlock.tsx)
  hp: { current: 0, max: 0, temp: 0 },

  // Спасброски и Навыки (из Trials.tsx и LeftCharacterColumn.tsx)
  proficiencies: [],

  // Экшены для обновления
  updateStat: (stat, value) =>
    set((state) => ({
      stats: { ...state.stats, [stat]: value },
    })),
  updateHP: (type, value) =>
    set((state) => ({
      hp: { ...state.hp, [type]: value },
    })),
  toggleProficiency: (name) =>
    set((state) => ({
      proficiencies: state.proficiencies.includes(name)
        ? state.proficiencies.filter((p) => p !== name)
        : [...state.proficiencies, name],
    })),
}));
