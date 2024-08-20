import { DateTime } from 'luxon';

export const dateFormattingWithTime = (value: string): string => {
  const date = DateTime.fromISO(value);

   const formattedDate = date.toFormat('dd.MM.yyyy');
   const formattedTime = date.toFormat('HH:mm');

   return `${formattedDate} в ${formattedTime}`;
};