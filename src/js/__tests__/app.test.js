import { GameSaving } from '../app.js';
import GameSavingLoader from '../app.js';

describe('class GameSaving', () => {
  it('создает с корректными свойствами', () => {
    const testData = {
      id: 123,
      created: '2023-01-01',
      userInfo: {
        id: 456,
        name: 'John',
        level: 10,
        points: 1000
      }
    };

    const saving = new GameSaving(testData);

    expect(saving.id).toBe(123);
    expect(saving.created).toBe('2023-01-01');
    expect(saving.userInfo).toEqual({
      id: 456,
      name: 'John',
      level: 10,
      points: 1000
    });
  });
});

describe('class GameSavingLoader', () => {

  it('данные должны соответствовать', async () =>{
    const expectedData = {
      'created': 1546300800,
      'id': 9,
      'userInfo': {
        'id': 1,
        'level': 10,
        'name': 'Hitman',
        'points': 2000,
      }
    };
    const result = await GameSavingLoader.load();
    expect(result).toEqual(expectedData);
  });
});
