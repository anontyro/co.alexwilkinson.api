import { mapSheetToEntity } from './mapSheetToEntity';
import { movieSheetReturnValue } from './mockData';

describe('mapSheetToEntity', () => {
  it('will correctly return and array', () => {
    const results = mapSheetToEntity(movieSheetReturnValue);

    expect(results).toBeDefined();
  });

  it('will correctly map the values ignoring the headers', () => {
    const results = mapSheetToEntity(movieSheetReturnValue);

    expect(results).toHaveLength(movieSheetReturnValue.values.length - 1);
  });

  it('will correctly map the movie to its entity', () => {
    const results = mapSheetToEntity(movieSheetReturnValue);

    expect(results[0]).toEqual({
      Id: 1,
      ImdbId: 'tt1037705',
      Name: 'The Book Of Eli',
      ReleaseYear: '2010',
      ImdbUrl: 'https://www.imdb.com/title/tt1037705',
      HasBeenGuessed: false,
      Guesser: '',
      DateGuessed: '',
      CreatedAt: '2021-06-03',
      Type: '',
      Ignored: false,
      Weight: 10,
    });
  });
});
