import { create } from "zustand";

interface CharacterState {
  equipment: string;
  features: string;
  languages: string;

  stats: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  };
  hp: { current: number | string; max: number; temp: number | string };
  inspiration: boolean;
  nature: string[];
  proficiencyBonus: number;
  baseSpeed: number;
  proficiencies: string[];
  name: string;
  playerName: string;
  class: string;
  race: string;
  origin: string;
  alignment: string;
  attacks: string;

  hitDice: {
    type: string;
    remaining: number;
    total: number;
  };
  deathSaves: {
    successes: number;
    failures: number;
  };

  updateAttacks: (value: string) => void;
  updateHeader: (field: keyof CharacterState, value: string) => void;
  updateStat: (stat: keyof CharacterState["stats"], value: number) => void;
  updateHP: (type: keyof CharacterState["hp"], value: number | string) => void;
  toggleProficiency: (name: string) => void;
  toggleInspiration: () => void;
  updateNature: (index: number, value: string) => void;
  updateField: (field: keyof CharacterState, value: string) => void;
  updateHitDice: <K extends keyof CharacterState["hitDice"]>(
    field: K,
    value: CharacterState["hitDice"][K],
  ) => void;
  updateDeathSaves: <K extends keyof CharacterState["deathSaves"]>(
    field: K,
    value: CharacterState["deathSaves"][K],
  ) => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  name: "",
  playerName: "",
  class: "Воин",
  race: "Человек",
  origin: "",
  alignment: "",
  equipment: "",
  features: "",
  languages: "",
  stats: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
  },
  hp: { current: "", max: 10, temp: 0 },
  inspiration: false,
  proficiencyBonus: 2,
  nature: ["", "", "", ""],
  baseSpeed: 30,
  proficiencies: [],
  attacks: "",
  hitDice: {
    type: "d8",
    remaining: 3,
    total: 3,
  },
  deathSaves: {
    successes: 0,
    failures: 0,
  },

  updateAttacks: (value) => set({ attacks: value }),

  updateHeader: (field, value) =>
    set((state) => ({ ...state, [field]: value })),

  updateStat: (stat, value) =>
    set((state) => ({
      stats: { ...state.stats, [stat]: value },
    })),

  updateHP: (type, value) =>
    set((state) => ({
      hp: { ...state.hp, [type]: value },
    })),

  toggleInspiration: () =>
    set((state) => ({ inspiration: !state.inspiration })),

  updateNature: (index, value) =>
    set((state) => {
      const newNature = [...state.nature];
      newNature[index] = value;
      return { nature: newNature };
    }),

  toggleProficiency: (name) =>
    set((state) => ({
      proficiencies: state.proficiencies.includes(name)
        ? state.proficiencies.filter((p) => p !== name)
        : [...state.proficiencies, name],
    })),

  updateField: (field, value) =>
    set((state) => ({
      ...state,
      [field]: value,
    })),
  updateHitDice: (field, value) =>
    set((state) => ({
      hitDice: { ...state.hitDice, [field]: value },
    })),

  updateDeathSaves: (field, value) =>
    set((state) => ({
      deathSaves: { ...state.deathSaves, [field]: value },
    })),
}));
