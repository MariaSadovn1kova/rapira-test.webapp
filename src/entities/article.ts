import { defineStore } from 'pinia';
import type { IArticle, IComment } from '@/shared';

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
            userImg: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
            userName: 'Иванов Иван',
            commentText: 'Статья бомба!вввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввввв',
            date: new Date()
          },
          {
            id: 'comment_2',
            userImg: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
            userName: 'Иванов Иван',
            commentText: 'Статья бомба!',
            date: new Date()
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
    },
    addComment (comment: string, articleId: string) {
      const newCommentId = `comment_${Date.now()}`;

      const articleIndex = this.articles.findIndex(article => article.id === articleId);
      if (articleIndex === -1) {
        console.error('Article not found!');
        return;
      }

      const newComment: IComment = {
        id: newCommentId,
        userImg: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg', 
        userName: 'Вася Пупкин', 
        commentText: comment,
        date: new Date()
      };

      this.articles[articleIndex].comments.push(newComment);
    }
  },
});