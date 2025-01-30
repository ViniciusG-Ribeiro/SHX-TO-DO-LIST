import { Text, View, TouchableOpacity } from "react-native"

import { s } from "./styles"

type Task = {
    id: number;
    title: string;
    completed: boolean;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

export function List({ id, title, completed, onToggleComplete, onDelete }: Task) {
    return (

        <View style={s.container}>
            <View style={s.taskHeader}>
                <Text style={[s.taskText, completed && s.completedTask]}>{id} - {title}</Text>
            </View>

            <View style={s.buttonContainer} >
                <TouchableOpacity onPress={() => onToggleComplete(id)} style={[s.button, s.completeButton]}>
                    <Text style={s.buttonText}>{completed ? "Desfazer" : "Finalizar"}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onDelete(id)} style={[s.button, s.deleteButton]}>
                    <Text style={s.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}