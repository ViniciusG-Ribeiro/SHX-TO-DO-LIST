import { StyleSheet, Dimensions } from "react-native";
import { colors, fontFamily } from "@/src/styles/theme";



export const s = StyleSheet.create({
  container: {
    width: "100%",
    padding: 12,
    marginBottom: 8,
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Para Android
  },

  // Linha para ID e título
  taskHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  taskText: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
    textAlign:"justify",
  },

  completedTask: {
    textDecorationLine: "line-through",
    color: colors.gray[400],
  },

  status: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[500],
    marginTop: 4,
  },

  // Botões lado a lado
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
    marginHorizontal: 4,
  },

  completeButton: {
    backgroundColor: colors.green[500],
  },

  deleteButton: {
    backgroundColor: colors.red[500],
  },

  buttonText: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: "white",
  },
});


