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
        tags: ['Кино'],
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
      },
      {
        id: 'article_2',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/out-black-myth-steam-record.jpg?preset=image_760w',
        date: new Date(),
        title: 'Black Myth: Wukong стала самой популяр­ной одиночной игрой в Steam',
        desc: '20 августа китайский экшен Black Myth: Wukong вышел в Steam на ПК. Всего за несколько часов игра установила новый рекорд на платформе. На пике новинку одновременно запустили 1 443 570 человек. Ранее первое место на протяжении почти четырех лет удерживала экшен-RPG Cyberpunk 2077 с 1 054 388 игроками.',
        tags: ['Игры', 'Поп-культура'],
        comments: []
      },
      {
        id: 'article_3',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-it-follows-2024.jpg?preset=image_1280w',
        date: new Date(),
        title: '«Оно приходит за тобой» снова в кино: 5 причин посмотреть хоррор о тревоге и прощании с детством',
        desc: 'В честь десятилетия хоррора «Оно приходит за тобой» 22 августа A-One выпустит фильм в повторный российский прокат.По сюжету студентку колледжа после секса с новым парнем начинают преследовать люди, желающие ее убить. Вот только видит их одна она. Вместе с друзьями героиня ищет способ избавиться от проклятия. Рассказываем, чем привлекателен этот независимый фильм ужасов и почему его стоит посмотреть.',
        tags: ['Кино'],
        comments: []
      },
      {
        id: 'article_4',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-ps3-best-games.jpg?preset=image_1280w',
        date: new Date(),
        title: '40 самобытных игр для PlayStation 3, которые прошли проверку временем',
        desc: 'PlayStation 3 — консоль для любителей любого жанра. Для нее вышли тысячи игр, часть которых положила начало важнейшим сериям. Разработчики не стеснялись экспериментировать: в одной только стартовой линейке представили симулятор фотографа дикой природы и выживач, где главным героем может стать слон.',
        tags: ['Игры', 'Поп-культура'],
        comments: []
      },
      {
        id: 'article_5',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/out-deadpool-lots-of-money.jpg?preset=image_760w',
        date: new Date(),
        title: '«Дэдпул и Росомаха» стал самым кассовым фильмом в истории с рейтингом 18+, обогнав «Джокера»',
        desc: '16 августа стало известно, что кинокомикс с Райаном Рейнольдсом и Хью Джекманом собрал в мировом прокате свыше 1 078 958 629 $. Это лучший результат для фильма с рейтингом 18+.',
        tags: ['Комиксы', 'Поп-культура', 'Кино'],
        comments: []
      },
      {
        id: 'article_6',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-top-dontsova.jpg?preset=image_760w',
        date: new Date(),
        title: '10 лучших книг Дарьи Донцовой',
        desc: 'Дарья Донцова написала более трехсот книг.Среди них — детские сказочные повести, автобиографии и даже сборники лучших рецептов. Но писательница прославилась именно благодаря детективам. Ее истории о любительницах — и одном любителе — частного сыска уже двадцать лет помогают читателям отвлечься от проблем, посмеяться и отдохнуть.',
        tags: ['Книги', 'Поп-культура'],
        comments: []
      },
      {
        id: 'article_7',
        imgURL: 'https://opis-cdn.tinkoffjournal.ru/mercury/in-out-dark-fantasy-books.png?preset=image_760w',
        date: new Date(),
        title: '10 отличных книг в жанре темного фэнтези',
        desc: 'Жанр темного фэнтези отличает жестокость выдуманных миров и неоднозначность героев. Далеко не всегда они стремятся спасти мир или осчастливить всех вокруг. Порой персонажи пытаются просто выжить в суровых условиях, но часто преследуют и свои корыстные цели.',
        tags: ['Книги', 'Поп-культура'],
        comments: []
      },
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