import { Box, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { HighlightIdeas } from "../components/ideas/HighlightIdeas";


export function IdeasFeed(){
    const [loading, setLoading] = useState(false)
    

    return <div className="flex items-center justify-center h-full">
        {loading && <Box
                position="fixed" w="100vw" h="100vh"
                bg="rgba(255, 255, 255, 0.1)" zIndex={9999}
                display="flex" alignItems="center" justifyContent="center">
                <Spinner size="xl" color="blue.500" />
            </Box>
        }
        <HighlightIdeas setLoading={setLoading} />

    </div>
}