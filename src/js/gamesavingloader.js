import read from './reader';
import json from './parser';


export default class GameSavingLoader {
  static async load() {
    const bufferResponse = await read();
    const jsonResponse = await json(bufferResponse);
    return jsonResponse;
  }
}
