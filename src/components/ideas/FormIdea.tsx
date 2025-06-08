import { Box, FormControl, FormLabel, Input, Textarea, Select, Button } from "@chakra-ui/react";
import { createIdea } from "../../services/ideaService";
import toast, { Toaster } from 'react-hot-toast';
import { NotificationError } from "../generics/notify/Notify";

export function FormIdea() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const form = formatFormData(event.currentTarget)
    if (!form) return toast.error("Não foi possível enviar sua ideia, tente novamente mais tarde")
      
    await createIdea(form, notifySuccess, notifyError)
  };

  const formatFormData = (targetForm: HTMLFormElement) => {
    const form = new FormData(targetForm)
    const formData = {category: form.get("category"), title: form.get("title"), description: form.get("description")}
    if (!formData.category || !formData.title || !formData.description) return
    return {category: Number(formData.category), title: formData.title.toString(), description: formData.description.toString()}
  }

  const notifyError = (title: string, message ?: string) => {
    toast.error(()=> <NotificationError title = {title} msg = {message}/>)
  }
  const notifySuccess = (msg: string) =>  toast.success(msg)

  return (
    <Box maxW="md" mx="auto" mt={6} p={4} borderWidth="1px" borderRadius="md" >
      <Toaster/>
      <form onSubmit={handleSubmit} >
        <FormControl isRequired mb={4}>
          <FormLabel>Título</FormLabel>
          <Input maxLength={60} name="title" placeholder="Digite o título" borderColor={"blackAlpha.300"}/>
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Descrição</FormLabel>
          <Textarea maxLength={500} name="description" placeholder="Digite a descrição" borderColor={"blackAlpha.300"}/>
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Categoria</FormLabel>
          <Select name="category" placeholder="Selecione uma categoria" borderColor={"blackAlpha.300"}>
            <option value={1}>Tecnologia</option>
            <option value={2}>Negócios</option>
            <option value={3}>Educação</option>
          </Select>
        </FormControl>

        <Button colorScheme='blue' mr={1} fontSize="16" fontWeight={"normal"} type="submit">
          Save
        </Button>
      </form>
    </Box>
  );
}
