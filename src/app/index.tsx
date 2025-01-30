import { View, Text } from "react-native"
import { Welcome } from "../components/welcome"
import { ContainerToDo } from "../components/containerToDo"

export default function index() {
    return (
        <View style={{
            flex: 1,
            padding:40,
            gap:20,
        }}>
            <Welcome />
            <ContainerToDo/>
        </View>
    )
};
