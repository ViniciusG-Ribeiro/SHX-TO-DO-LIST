import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";


export const s = StyleSheet.create({

    logo: {
        width: 72,
        height: 80,
        margin: 0,
        marginBottom: 28,
    },

    container: {
        width: "100%",
        alignItems: "center",
        // backgroundColor: colors.gray[200],
    },

    title: {
        fontSize: 24,
        fontFamily: fontFamily.bold,
        color: colors.gray[600],
    },

    subtitle: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 12,
    },
})