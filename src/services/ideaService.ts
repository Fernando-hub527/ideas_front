import type { NewIdea } from "./models"

type typeNotification = (msg: string, description ?: string) => void

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
        }, 2000)
    })

    
}

export async function createComment(coment: Comment, success: typeNotification, error: typeNotification){
    console.log("enviando comentário para api: ")
    console.log(coment)
    success("Seu comentário foi registrado")
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
            createdAt: new Date()
        },
    ]
}