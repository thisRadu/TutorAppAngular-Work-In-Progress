export interface Request {
  id?: number;
  requestorId?: number;
  tutorId?: number;
  title?: string;
  categoryId?: number;
  subCategoryId?: number;
  details?: string;
  price?: number;
  dificulty?: number;
  publishDate?: Date;
  deleted?: boolean;
}
