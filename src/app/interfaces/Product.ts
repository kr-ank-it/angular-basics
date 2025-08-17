
export interface Product{
  id: number,
  createdAt: Date,
  lastModifiedAt: Date,
  title: String,
  price: Float32Array,
  description: String,
  imgUrl: String,
  category: Category
}

export interface Category{
  id: number,
  createdAt: Date | null,
  lastModifiedAt: Date,
  "title": string
}
