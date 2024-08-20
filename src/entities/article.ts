import { defineStore } from 'pinia';
import type { IArticle } from '@/shared';

interface ArticleState {
  articles: IArticle[]
  tags: string[]
  filterTitleStr: string
  filterTags: string[]
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
        tags: ['Кино', 'Поп-культура', 'Игры', 'Книги', 'Комиксы'],
        comments: [
          {
            id: 'comment_1',
            userImg: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-alien-best-movies.jpg?preset=image_1280w',
            userName: 'Иванов иван',
            commentText: 'Статья бомба!'
          },
          {
            id: 'comment_2',
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
        title: 'sdfsfsf',
        desc: 'В международный прокат выходит хоррор «Чужой: Ромул» Федерико Альвареса. Это новая часть франшизы о ксеноморфах.Мы побороли страх и пересмотрели все картины из серии: начиная от классического триллера Ридли Скотта и заканчивая его же переосмыслением собственной классики. А чтобы вам было проще выбрать фильм на вечер, расставили части от худшей к лучшей.',
        tags: ['Книги', 'Комиксы'],
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
        title: 'sdfsfdsfds',
        desc: 'В международный прокат выходит хоррор «Чужой: Ромул» Федерико Альвареса. Это новая часть франшизы о ксеноморфах.Мы побороли страх и пересмотрели все картины из серии: начиная от классического триллера Ридли Скотта и заканчивая его же переосмыслением собственной классики. А чтобы вам было проще выбрать фильм на вечер, расставили части от худшей к лучшей.',
        tags: ['Комиксы', 'Игры'],
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
        title: 'fdsfsfs',
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
    ],

    tags: ['Кино', 'Поп-культура', 'Игры', 'Книги', 'Комиксы'],
    filterTitleStr: '',
    filterTags: []
  }),

  getters: {
    activeArticles: (state) => state.articles,
    activeTags: (state) => state.tags,
    filteredTags: (state) => state.filterTags,

    // Фильтр
    filteredArticles: (state) => {
      const searchTerm = state.filterTitleStr.toLowerCase(); 
      const filterTags = state.filterTags; 
    
      if (filterTags.length === 0) {
        return state.articles.filter(article => 
          article.title.toLowerCase().includes(searchTerm)
        );
      }
    
      return state.articles.filter(article => {
        const titleMatch = article.title.toLowerCase().includes(searchTerm); 
        const tagMatch = filterTags.some(tag => article.tags.includes(tag)); 
        
        return titleMatch && tagMatch; 
      });
    }
  },

  actions: {
    setFilterTitleStr (currentState: string) {
      this.filterTitleStr = currentState;
    },
    toggleTag (tag: string) {
      const tagIndex = this.filterTags.indexOf(tag);
      tagIndex !== -1 ? this.filterTags.splice(tagIndex, 1) : this.filterTags.push(tag);
    },
    clearFilterTags () {
      this.filterTags = []
    }
  },
});