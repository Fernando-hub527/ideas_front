import { useParams } from "react-router";
import { DetailsIdea } from "../components/ideas/DetailsIdea";
import type { Idea as IdeaType } from "../services/models";
import { useEffect, useState } from "react";
import { findIdea } from "../services/ideaService";
import toast from "react-hot-toast";
import { NotificationError } from "../components/generics/notify/Notify";
import { Box, Spinner } from "@chakra-ui/react";

export function Idea(){
    const param = useParams()
    const [idea, setIdea] = useState<IdeaType>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadIdea(){
            const ideaId = param["idea"]
            if(!ideaId) return notificationError("Não foi possível localizar ideia", "tente novamente mais tarde")
            setLoading(true)
            const response = await findIdea(Number(ideaId), notificationError)
            setLoading(false)
            if (!response) return 
            setIdea(response)
        }
        loadIdea()  
    }, [])
 
    const notificationError = (title: string, message ?: string) => {
        toast.error(()=> <NotificationError title = {title} msg = {message}/>)
    }
    return (
        <>
            {loading && (
                <Box
                    position="fixed" top={0} w="100vw" h="100vh" bg="rgba(255, 255, 255, 0.0)"  zIndex={9999}
                    display="flex" alignItems="center" justifyContent="center"
                >
                <Spinner size="xl" color="blue.500" />
                </Box>
            )}     
            {idea && <DetailsIdea idea={idea}/>}
        </>
    )
}