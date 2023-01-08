import { Setter } from "solid-js";

export enum MODE {
  NONE = 'draw',
  STARS = 'stars',
  LINES = 'lines',
  BREAKOUT = 'breakout',
  GAMEOFLIFE = 'gameoflife',
  CIRCLE = 'circle',
  CLOCK = 'clock',
  CUSTOM = 'custom',
  UPDATE = 'update',
  LOADING = 'loading',
}

export interface Store {
  rotation: () => number;
  indexMatrix: () => number[];
  leds: () => number[];
  mode: () => MODE;

  setRotation: Setter<number>;
  setIndexMatrix: Setter<number[]>;
  setLeds: Setter<number[]>;
  setMode: Setter<MODE>;
  send: (message: string) => void;
  connectionState: () => number;

  connectionStatus?: string;
  toast: (text: string, duration: number) => void;
}