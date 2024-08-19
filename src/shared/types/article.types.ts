export interface IComment {
  id: string
  userImg: string
  userName: string
  commentText: string
}

export interface IArticle {
  id: string
  imgURL: string
  date: Date
  title: string
  desc: string
  tags: string[]
  comments: IComment[]
}