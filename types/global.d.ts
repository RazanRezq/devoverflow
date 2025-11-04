interface Tag {
  _id: string;
  name: string;
  questions?: number;
}
interface Author {
  image: string;
  _id: string;
  name: string;
}
interface Question {
  id: string;
  title: string;
  tags: Tag[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  answers: number;
  views: number;
}
