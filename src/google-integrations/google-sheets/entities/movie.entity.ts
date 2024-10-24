export class Movie {
  Id: number;
  ImdbId: string;
  Name: string;
  ReleaseYear: string;
  ImdbUrl: string;
  HasBeenGuessed: boolean;
  Guesser: string;
  DateGuessed: string;
  CreatedAt: string;
  Type: string;
  Ignored: boolean;
  Weight: number;

  toString(): string {
    return `Movie: {
      Id: ${this.Id},
      ImdbId: ${this.ImdbId},
      Name: ${this.Name},
      ReleaseYear: ${this.ReleaseYear},
      ImdbUrl: ${this.ImdbUrl},
      HasBeenGuessed: ${this.HasBeenGuessed},
      Guesser: ${this.Guesser},
      DateGuessed: ${this.DateGuessed},
      CreatedAt: ${this.CreatedAt},
      Type: ${this.Type},
      Ignored: ${this.Ignored},
      Weight: ${this.Weight}
    }`;
  }

  toObject(): object {
    return {
      Id: this.Id,
      ImdbId: this.ImdbId,
      Name: this.Name,
      ReleaseYear: this.ReleaseYear,
      ImdbUrl: this.ImdbUrl,
      HasBeenGuessed: this.HasBeenGuessed,
      Guesser: this.Guesser,
      DateGuessed: this.DateGuessed,
      CreatedAt: this.CreatedAt,
      Type: this.Type,
      Ignored: this.Ignored,
      Weight: this.Weight,
    };
  }
}
