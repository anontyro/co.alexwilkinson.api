import { GoogleSheetObject } from '../../types/GoogleSheetObject';
import { Movie } from '../../entities/movie.entity';

export const validatePropertiesToClass = <T extends object>(
  dataArray: string[],
  headerClass: T,
) => {
  const propertyCount = Object.keys(headerClass).length;

  return propertyCount === dataArray.length;
};

export const mapSheetToEntity = (sheet: GoogleSheetObject): Movie[] => {
  const [headers, ...values] = sheet.values;

  const entities = values.map((movie) => {
    const entity = new Movie();
    entity.Id = +movie[0];
    entity.ImdbId = movie[1];
    entity.Name = movie[2];
    entity.ReleaseYear = movie[3];
    entity.ImdbUrl = movie[4];
    entity.HasBeenGuessed = movie[5] === '1';
    entity.Guesser = movie[6];
    entity.DateGuessed = movie[7];
    entity.CreatedAt = movie[8];
    entity.Type = movie[9];
    entity.Ignored = movie[10] === '1';
    entity.Weight = +movie[11];

    return entity;
  });

  return entities;
};
