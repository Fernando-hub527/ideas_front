import {
  Box,
  Flex,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export function SearchBar() {
  const [activeTab, setActiveTab] = useState("votadas");

  return (
    <Flex alignSelf="start" direction={{ base: "column", md: "row" }} justify="space-between"
      align="center" width={{ base: "100%", md: "40%" }} marginTop="10" marginLeft={{ base: 0, md: "200px" }}
      py={4} gap={4}
    >
      <Flex gap={{base: 45, md: 4}} align="end">
        <Box  
          cursor="pointer" fontWeight={activeTab === "votadas" ? "bold" : "normal"}
          color={activeTab === "votadas" ? "black" : "gray.500"}
          borderBottom={activeTab === "votadas" ? "2px solid black" : "none"} pb={1}
          onClick={() => setActiveTab("votadas")}
        >
          Mais Votadas
        </Box>
        <Box
          cursor="pointer"  fontWeight={activeTab === "recentes" ? "bold" : "normal"}
          color={activeTab === "recentes" ? "black" : "gray.500"}
          borderBottom={activeTab === "recentes" ? "2px solid black" : "none"} pb={1}
          onClick={() => setActiveTab("recentes")}
        >
          Mais Recentes
        </Box>
      </Flex>
      <Input
        placeholder="Buscar por título"
        maxW={{ base: "70%", md: "300px" }}
        color="gray"
        bg={useColorModeValue("gray.200", "gray.100")}
        borderRadius="xl"
      />
    </Flex>

  );
}
