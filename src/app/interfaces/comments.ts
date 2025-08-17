import {User} from './user';

export interface Comments {
  id: number,
  body: string,
  postId: number,
  likes: number,
  user: User
}


