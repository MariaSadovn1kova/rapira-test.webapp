import { defineStore } from 'pinia';
import type { IArticle } from '@/shared';

interface ArticleState {
  articles: IArticle[]
}

export const useArticleStore = defineStore('article', {    
  state: (): ArticleState => ({
    articles: [
      {
        id: 'article_1',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
        date: new Date(),
        title: 'Все фильмы про Чу­жого: от худшего к лучшему',
        desc: 'В международный прокат выходит хоррор «Чужой: Ромул» Федерико Альвареса. Это новая часть франшизы о ксеноморфах.Мы побороли страх и пересмотрели все картины из серии: начиная от классического триллера Ридли Скотта и заканчивая его же переосмыслением собственной классики. А чтобы вам было проще выбрать фильм на вечер, расставили части от худшей к лучшей.',
        tags: ['Кино', 'Поп-культура'],
        comments: [
          {
            id: 'comment_1',
            userImg: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
            userName: 'Иванов иван',
            commentText: 'Статья бомба!'
          }
        ]
      },
      {
        id: 'article_2',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
        date: new Date(),
        title: 'Все фильмы про Чу­жого: от худшего к лучшему',
        desc: 'В международный прокат выходит хоррор «Чужой: Ромул» Федерико Альвареса. Это новая часть франшизы о ксеноморфах.Мы побороли страх и пересмотрели все картины из серии: начиная от классического триллера Ридли Скотта и заканчивая его же переосмыслением собственной классики. А чтобы вам было проще выбрать фильм на вечер, расставили части от худшей к лучшей.',
        tags: ['Кино', 'Поп-культура'],
        comments: [
          {
            id: 'comment_1',
            userImg: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
            userName: 'Иванов иван',
            commentText: 'Статья бомба!'
          }
        ]
      },
      {
        id: 'article_3',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
        date: new Date(),
        title: 'Все фильмы про Чу­жого: от худшего к лучшему',
        desc: 'В международный прокат выходит хоррор «Чужой: Ромул» Федерико Альвареса. Это новая часть франшизы о ксеноморфах.Мы побороли страх и пересмотрели все картины из серии: начиная от классического триллера Ридли Скотта и заканчивая его же переосмыслением собственной классики. А чтобы вам было проще выбрать фильм на вечер, расставили части от худшей к лучшей.',
        tags: ['Кино', 'Поп-культура'],
        comments: [
          {
            id: 'comment_1',
            userImg: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
            userName: 'Иванов иван',
            commentText: 'Статья бомба!'
          }
        ]
      },
      {
        id: 'article_4',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
        date: new Date(),
        title: 'Все фильмы про Чу­жого: от худшего к лучшему',
        desc: 'В международный прокат выходит хоррор «Чужой: Ромул» Федерико Альвареса. Это новая часть франшизы о ксеноморфах.Мы побороли страх и пересмотрели все картины из серии: начиная от классического триллера Ридли Скотта и заканчивая его же переосмыслением собственной классики. А чтобы вам было проще выбрать фильм на вечер, расставили части от худшей к лучшей.',
        tags: ['Кино', 'Поп-культура'],
        comments: [
          {
            id: 'comment_1',
            userImg: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
            userName: 'Иванов иван',
            commentText: 'Статья бомба!'
          }
        ]
      }
    ]
  }),

  getters: {
    activeArticles: (state) => state.articles,
  }
});