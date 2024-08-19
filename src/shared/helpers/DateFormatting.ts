import { DateTime } from 'luxon';

export const dateFormatting = (value: string): String | void  => {
  const date = DateTime.fromISO(value);

  const locale = 'ru';
  const dateMonth = date.setLocale(locale).toLocaleString({ month: 'long' });
  const dateDay = date.toFormat('d');

  return `${dateDay} ${dateMonth.slice(0,3)}`
};