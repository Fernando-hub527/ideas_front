import type { IdeaListingParam, typeNotification } from "./customTypes"
import type { Comment, Idea, NewComment, NewIdea, Pagination } from "./models"


export async function createIdea(idea: NewIdea, success: typeNotification, error: typeNotification){
    console.log("envia para api: ")
    console.log(idea)
    error("Não foi possível criar sua ideia", "tente novamente mais tarde")
}

export async function voteOnIdea(ideaId: number, success: typeNotification, error: typeNotification): Promise<boolean>{
    console.log("votando em idea: ")
    console.log(ideaId)
    return new Promise((res) => {
        setTimeout(() => {
            success("Seu voto foi registrado com sucesso")
            res(true)
        }, 1000)
    })

    
}

export async function createComment(comment: NewComment, success: typeNotification, error: typeNotification): Promise<Comment>{
    success("Seu comentário foi registrado")
    return {id: 100, comment: comment.comment, ideaId: comment.ideaId, author: {id:1, name: "Fernando coelho"}}
}

export async function loadHighlightIdeas(error: typeNotification){
    return [
        {
            id: 1, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "TECNOLOGIA",
            liked: false,
            createdAt: new Date()
        },
        {
            id: 2, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "SOCIAL",
            liked: false,
            createdAt: new Date()
        },
            {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
    ]
}

export async function loadIdeas(error: typeNotification, page: number, params: IdeaListingParam): Promise<Pagination<Idea>>{
    const result =  {
        currentPage: page,
        totalPages: 10,
        itemsPerPage: 10,
        totalItems: 100,
        data: [
        {
            id: 10, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias. Permite que usuários votem e comentem instantaneamente em ideias. Permite que usuários votem e comentem instantaneamente em ideias. Permite que usuários votem e comentem instantaneamente em ideias. Permite que usuários votem e comentem instantaneamente em ideias. Permite que usuários votem e comentem instantaneamente em ideias. Permite que usuários votem e comentem instantaneamente em ideias.", 
            author: "Fernando Coelho",
            category: "TECNOLOGIA",
            liked: false,
            createdAt: new Date()
        },
        {
            id: 2, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "SOCIAL",
            liked: false,
            createdAt: new Date()
        },
            {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
                    {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
                    {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
                    {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
                    {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
                    {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
                    {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
                    {
            id: 3, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "CULTURA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        },
    ]
    }

    return new Promise((res) => {
        setTimeout(() => {
            res(result)
        }, page == 1 ? 2000: 100)
    });
}

export async function findIdea(ideaId: number, error: typeNotification){
    return {
            id: 1, title: "Sistema de Feedback em Tempo Real", 
            description: "Permite que usuários votem e comentem instantaneamente em ideias.ermite que usuários votem e comentem instantaneamente em ideias.ermite que usuários votem e comentem instantaneamente em ideias.ermite que usuários votem e comentem instantaneamente em ideias.ermite que usuários votem e comentem instantaneamente em ideias.",
            author: "Fernando Coelho",
            category: "TECNOLOGIA",
            liked: false,
            createdAt: new Date(),
            votos: 10
        }
}

export async function loadComments(error: typeNotification, page: number): Promise<Pagination<Comment>>{
    const result =  {
        currentPage: page,
        totalPages: 10,
        itemsPerPage: 10,
        totalItems: 100,
        data: [
        {
            id: 1,
            comment: "Permite que usuários votem e comentem instantaneamente em ideias",
            ideaId: 1,
            author: {
                id: 1,
                name: "Fernando Coelho Saraiva"
            }
        },
                {
                id: 2,
            comment: "Permite que usuários votem e comentem instantaneamente em ideias Permite que usuários votem e comentem instantaneamente em ideias Permite que usuários votem e comentem instantaneamente em ideias Permite que usuários votem e comentem instantaneamente em ideias Permite que usuários votem e comentem instantaneamente em ideias",
            ideaId: 1,
            author: {
                id: 1,
                name: "Fernando Coelho Saraiva"
            }
        },
        ]
    }

    return new Promise((res) => {
        setTimeout(() => {
            res(result)
        }, page == 1 ? 1000: 100)
    });
}