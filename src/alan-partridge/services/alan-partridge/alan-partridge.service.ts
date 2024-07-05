import { Injectable } from '@nestjs/common';

const QUOTE_URL =
  'https://raw.githubusercontent.com/anontyro/alan-partridge-interface/quotes/data/quotes.json';

@Injectable()
export class AlanPartridgeService {
  quotes: string[] = [];

  private getRandomQuote(): string {
    const max = this.quotes.length;
    const quoteIndex = Math.floor(Math.random() * (max - 0) + 0);

    return this.quotes[quoteIndex];
  }

  private async getQuoteList() {
    try {
      const response = await fetch(QUOTE_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = (await response.json()) as any;

      return data.quotes;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async getNewQuote(): Promise<string> {
    if (this.quotes.length > 0) {
      return this.getRandomQuote();
    }

    this.quotes = await this.getQuoteList();

    return this.getRandomQuote();
  }
}
