import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";



export const s = StyleSheet.create({

    button: {
        backgroundColor: colors.green.light,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: "center",
        marginBottom: 15,
    },

    buttonText: {
        fontSize: 14,
        fontFamily: fontFamily.bold,
        color: "#ffffff",
        textAlign: "center",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        width: "80%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },

    modalTitle: {
        fontSize: 18,
        fontFamily: fontFamily.bold,
        marginBottom: 10,
    },

    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 10,
    },

    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },

    cancelButton: {
        flex: 1,
        backgroundColor: colors.red[500],
        paddingVertical: 10,
        borderRadius: 5,
        marginRight: 5,
    },

    addButton: {
        flex: 1,
        backgroundColor: colors.green.light,
        paddingVertical: 10,
        borderRadius: 5,
        marginLeft: 5,
    },
});


