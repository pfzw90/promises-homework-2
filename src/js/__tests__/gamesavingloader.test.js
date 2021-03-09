import GameSaving from '../gamesaving';
import GameSavingLoader from '../gamesavingloader';
import read from '../reader';

jest.mock('../reader');


test('should return GameSaving object', async () => {
  read.mockImplementation(() => require.requireActual('../reader').default());
  const res = await GameSavingLoader.load();
  expect(res).toEqual(JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'));
  expect(res instanceof GameSaving).toBeTruthy();
});

it('should return error', async () => {
  read.mockImplementation(() => Promise.reject());
  expect.assertions(1);
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e).toEqual(new Error('Ошибочка вышла'));
  }
});
