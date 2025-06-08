export type NewIdea = {title: string, description: string, category: number}
export type Idea = {
    id: number, title: string, description: string, category: string, author: string, 
    createdAt: Date, liked: boolean
}
export type Pagination<T> = {currentPage: number, totalPages: number, itemsPerPage: number, totalItems: number, data: T[]}
export type Comment = {title: string, description: string, category: number}