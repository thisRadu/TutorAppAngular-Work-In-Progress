export interface Request {
  id?: number;
  requestorId?: number;
  tutorId?: number;
  title?: number;
  categoryId?: number;
  subCategoryId?: number;
  details?: number;
  price?: number;
  dificulty?: number;
  publishDate?: Date;
  deleted?: boolean;
}
