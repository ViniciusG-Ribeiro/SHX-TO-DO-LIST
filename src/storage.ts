import AsyncStorage from "@react-native-async-storage/async-storage";

const TASKS_KEY = 'tasks_data';

// salvar registros
export const saveTasks = async(tasks: any[]) =>{
    try{
        const jsonValue = JSON.stringify(tasks);
        await AsyncStorage.setItem(TASKS_KEY,jsonValue);
    } catch (error) {
        console.error('Erro ao salvar tarefas', error);
    }
};

// carregar registros
export const loadTasks = async () =>{
    try{
        const jsonValue = await AsyncStorage.getItem(TASKS_KEY);
        return jsonValue ? JSON.parse(jsonValue) : [];
    } catch (error){
        console.error('erro ao carregar tarefas', error);
        return [];
    }
};