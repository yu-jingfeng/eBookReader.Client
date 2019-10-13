export interface BookItem {
    id: number,
    hash: string,
    name: string,
    categoryId: number,
    size: number,
    additionDate?: string,
    creator?: string
    cover?: string,
    language?: string,
    publisher?: string,
    publicationDate?: string,
    ISBN?: string
    ASIN?: string
    description?: string
}