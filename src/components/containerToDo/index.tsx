import { useState, useEffect } from "react"
import { FlatList, Text, View, TouchableOpacity } from "react-native"
import { s } from "./styles"
import { List } from "../list"
import { AddTaskModal } from "../addTaskModal"
import { saveTasks, loadTasks } from "@/src/storage"
import { fetchTasks, Task } from "@/src/services/API"; 

export function ContainerToDo() {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const loadInitialTasks  = async () => {
            const storedTasks = await loadTasks();
            if (storedTasks.length >0){
                setTasks(storedTasks);
            }else{
                const apiTasks = await fetchTasks();
                setTasks(apiTasks);
            }
        };
        loadInitialTasks();
    }, []);

    useEffect(() => {
        saveTasks(tasks);
    }, [tasks]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    // Alterna entre "concluído" e "pendente"
    const toggleComplete = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // remover uma tarefa
    const deleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    // adicionar uma tarefa
    const addTask = (taskTitle: string) => {
        setTasks((prevTasks) => {
            const newId = prevTasks.length > 0 ? Math.max(...prevTasks.map(task => task.id)) + 1 : 1;
            return[
                ...prevTasks,
                { id: newId, title: taskTitle, completed: false },
            ];
        });
    };

    return (

        <View style={s.container}>

            <View style={s.header}>
                <Text style={s.title}>
                    Afazeres
                </Text>
            </View>

            <TouchableOpacity onPress={() => setIsModalVisible(true)} style={s.button}>
                <Text style={s.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <FlatList
                data={tasks} //passando array
                keyExtractor={(item) => item.id.toString()} //converte id em string
                renderItem={({ item }) => (
                    <List id={item.id}
                        title={item.title}
                        completed={item.completed}
                        onToggleComplete={toggleComplete}
                        onDelete={deleteTask}
                    />
                )}
                contentContainerStyle={{
                    paddingBottom: 5,
                    paddingHorizontal: 5,
                }} // Espaçamento extra no final e nas laterais
                ListFooterComponent={<View style={{ height: 10 }} />} // Dá um respiro no final da lista
            />

            <AddTaskModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                onAddTask={addTask}
            />
        </View>
    )
}