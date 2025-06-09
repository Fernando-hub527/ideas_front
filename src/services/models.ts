export type NewIdea = {title: string, description: string, category: number}
export type NewComment = {comment: string, ideaId: number}

export type Idea = {
    id: number, title: string, description: string, category: string, author: string, 
    createdAt: Date, liked: boolean
}
export type Pagination<T> = {currentPage: number, totalPages: number, itemsPerPage: number, totalItems: number, data: T[]}
export type Comment = {id: number, comment: string, ideaId: number, author: {name: string, id: number}}

export type IdeaListingParam = {orderBy: "most_voted" | "latest", titleSearch: string}