import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d8d8d8",
    borderRadius: 8,
    padding: 10,
  },
  button: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#1b0101",
    fontSize: 18,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  taskText: {
    fontSize: 16,
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  delete: {
    color: "red",
    fontWeight: "bold",
  },
  edit: {
    color: "blue",
  },
  save: {
    color: "green",
    fontWeight: "bold",
  },
});

export default styles;