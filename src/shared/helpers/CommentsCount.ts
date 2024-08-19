import type { IComment } from '@/shared';

export const commentsCount = (comments: IComment[]): String | void  => {
  const count = comments.length;

  let ending = 'комментариев';
  if (count % 10 === 1 && count % 100 !== 11) {
    ending = 'комментарий';
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    ending = 'комментария';
  }

  return `${count} ${ending}`;
};