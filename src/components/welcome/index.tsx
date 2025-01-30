import { Text, View } from "react-native"

import { s } from "./styles"

export function Welcome() {
    return (

        <View style={s.container}>
            <Text style={s.title}>Bem-vindo!</Text>

            <Text style={s.subtitle}>
                Faça a sua lista de afazeres com SHX To do 😊
            </Text>
        </View>

    )
}