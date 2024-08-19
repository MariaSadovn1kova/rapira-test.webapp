export const readingTime = (text: string): String | void  => {
  const wordsPerMinute = 200; 

  const words = text.split(' ');
  const wordCount = words.length;

  const readingTimeMinutes = wordCount / wordsPerMinute;

  const readingTime = Math.ceil(readingTimeMinutes);

  return `${readingTime} мин`;
};