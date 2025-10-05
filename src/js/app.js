import json from './parser.js';
import read from './reader.js';

export class GameSaving {
  constructor(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = {
      id: data.userInfo.id,
      name: data.userInfo.name,
      level: data.userInfo.level,
      points: data.userInfo.points
    };
  }
}

export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const jsonString = await json(buffer);
      const parseData = JSON.parse(jsonString);

      return new GameSaving({
        id: parseData.id,
        created: parseData.created,
        userInfo: {
          id: parseData.userInfo.id,
          name: parseData.userInfo.name,
          level: parseData.userInfo.level,
          points: parseData.userInfo.points
        }
      });
    } catch (error) {
      throw new Error('ошибка:', error);
    }
  }
}
