import type { IComment, IArticle } from './types/article.types';

export type {
  IComment,
  IArticle
}

import { dateFormatting } from './helpers/DateFormatting';
import { readingTime } from './helpers/ReadingTime';
import { commentsCount } from './helpers/CommentsCount';
import { dateFormattingWithTime } from './helpers/DateDormattingWithTime'

export {
  dateFormatting,
  readingTime,
  commentsCount,
  dateFormattingWithTime
}