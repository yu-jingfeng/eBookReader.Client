import { BookItem } from './book-item.model';

export interface BookNode {
    categoryName: string,
    books?: BookItem[],
    children?: BookNode[];
}