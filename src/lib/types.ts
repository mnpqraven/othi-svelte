export type Post = {
  id: number;
  title: string;
  body: string;
};

export interface List<T> {
  list: T[];
}
