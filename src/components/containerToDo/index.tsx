import { useState } from "react"
import { FlatList, Text, View, TouchableOpacity } from "react-native"
import { s } from "./styles"
import { List } from "../list"
import { AddTaskModal } from "../addTaskModal/addTaskModal"

type Task = {
    id: number;
    title: string;
    completed: boolean;
}

export function ContainerToDo() {

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, title: "Estudar React Native", completed: false },
        { id: 2, title: "Criar o layout do app", completed: true },
        { id: 3, title: "Teste com uma tarefa muito grande para testar responsividade do container do app", completed: false },
        { id: 4, title: "Outro exemplo de tarefa longa para verificar responsividade", completed: false },
    ])

    const [isModalVisible, setIsModalVisible] = useState(false);

    // Alterna entre "concluído" e "pendente"
    const toggleComplete = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Função para remover uma tarefa
    const deleteTask = (id: number) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

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