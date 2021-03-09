import read from './reader';
import json from './parser';
import GameSaving from './gamesaving';


export default class GameSavingLoader {
  static async load() {
    try {
      const bufferResponse = await read();
      const jsonResponse = await json(bufferResponse);
      return new GameSaving(jsonResponse);
    } catch (e) {
      throw new Error('Ошибочка вышла');
    }
  }
}
