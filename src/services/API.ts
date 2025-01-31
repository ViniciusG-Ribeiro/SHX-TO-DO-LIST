import axios from "axios"

export type Task ={
    id: number;
    title: string;
    completed: boolean;
}

const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=3";

export async function fetchTasks(): Promise<Task[]> {
    try {
        const response = await axios.get(API_URL);

        // console.log(response)

        return response.data.map((task: any) =>({
            id: task.id,
            title: task.title,
            completed: task.completed,
        }));

    } catch (error) {
        console.error("Erro ao buscar tarefas", error);
        return [];
    }
}