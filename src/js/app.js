import GameSavingLoader from './gamesavingloader';
import GameSaving from './gamesaving';


export default function main() {
  return (async () => {
    try {
      const result = await GameSavingLoader.load();
      return new GameSaving(result);
    } catch (e) {
      throw new Error('Ошибочка вышла');
    }
  })();
}
