import GameSavingLoader from './gamesavingloader';

export default async function () {
  await GameSavingLoader.load();
}
