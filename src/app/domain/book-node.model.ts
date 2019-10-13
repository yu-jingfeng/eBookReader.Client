import { BookItem } from './book-item.model';

export interface BookNode {
    cateId: number,
    cateName: string,
    books?: BookItem[],
}