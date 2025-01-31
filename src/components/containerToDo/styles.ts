import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";


export const s = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.gray[100],
    },

    header: {
        backgroundColor: colors.orange[200],
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        padding: 5,
    },

    title:{
        fontSize: 18,
        fontFamily: fontFamily.semiBold,
        color: "#ffffff",
    },

    button: {
        backgroundColor: colors.green.light,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignSelf: "flex-end",
        marginBottom: 10,
        marginRight: 15,
    },

    buttonText: {
        fontSize: 14,
        fontFamily: fontFamily.bold,
        color: "#ffffff",
        textAlign: "center",
    },
});
