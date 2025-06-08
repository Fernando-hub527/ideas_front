export type NewIdea = {title: string, description: string, category: number}
export type Idea = {
    id: number, title: string, description: string, category: string, author: string, 
    createdAt: Date, liked: boolean
}
export type Comment = {title: string, description: string, category: number}