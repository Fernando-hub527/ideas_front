import { useEffect, useState } from "react"
import { CardIdea } from "./CardIdea"
import { Box, Heading, HStack } from "@chakra-ui/react"
import { loadHighlightIdeas } from "../../services/ideaService"
import toast from "react-hot-toast"
import { NotificationError } from "../generics/notify/Notify"
import type { Idea } from "../../services/models";

export function HighlightIdeas(props: {setLoading: (loading: boolean) => void}){
    const [highlight, setHighlight] = useState(new Array<Idea>())

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        const ideas = await loadHighlightIdeas(notificationError)
        setHighlight(ideas)
    }
    const setLiked = (ideaId: number) => {
        setHighlight((ideas) => {
            ideas = ideas.map(idea => {
            if (idea.id == ideaId) idea.liked = true
                    return idea
            })
            return ideas
        })
    }
    const notificationError = (title: string, message ?: string) => {
        toast.error(()=> <NotificationError title = {title} msg = {message}/>)
    }

    const cardsHighlight = highlight.map((idea) => {
        return <CardIdea setLoading = {props.setLoading} idea = {idea} toLike = {() => setLiked(idea.id)} />
    })

    return (
        <Box width={"max-content"} paddingLeft={0}>
            <Heading fontWeight={"extrabold"} fontSize="2xl" color="blue.500" mb={4}>
                Ideias em Destaque
            </Heading>

            <Box paddingLeft={10} overflowX="auto" py={2} width= "100%" css={{"&::-webkit-scrollbar": {  height: "0px"}}}>
                <HStack spacing={10} width= "100%"minW="max-content">
                {cardsHighlight}
                </HStack>
            </Box>
        </Box>
    );
}