import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { s } from "./styles";
import { colors} from "@/src/styles/theme";

type AddTaskModalProps = {
    visible: boolean;
    onClose: () => void;
    onAddTask: (taskTitle: string) => void;
};

export function AddTaskModal({ visible, onClose, onAddTask }: AddTaskModalProps) {

    const [taskTitle, setTaskTitle] = useState("");

    const handleAddTask = () => {
        if (taskTitle.trim()) {
            onAddTask(taskTitle);
            setTaskTitle("");
            onClose();
        }
    };

    return (
        <Modal visible={visible} animationType="slide" transparent>
            <View style={s.modalOverlay}>
                <View style={s.modalContainer}>
                    <Text style={s.modalTitle}>Nova Tarefa</Text>

                    <TextInput
                        style={s.input}
                        placeholder="Digite a tarefa..."
                        placeholderTextColor={colors.gray[300]}
                        value={taskTitle}
                        onChangeText={setTaskTitle}
                    />

                    <View style={s.modalButtons}>
                        <TouchableOpacity style={s.cancelButton} onPress={onClose}>
                            <Text style={s.buttonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={s.addButton} onPress={handleAddTask}>
                            <Text style={s.buttonText}>Incluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}