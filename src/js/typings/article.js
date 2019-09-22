import {
  arrayOf,
  exact,
  string,
  number,
} from 'prop-types';

export const betOddsType = exact({
  id: number,
  title: string,
  image: string,
  date: string,
  content: arrayOf(string),
  url: string,
  source: string,
});
