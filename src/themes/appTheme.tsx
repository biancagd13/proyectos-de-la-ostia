import { StyleSheet, TextInput } from "react-native";

export const appTheme = StyleSheet.create({
    marginGlobal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        margin: 10,
        padding: 10
    },
    textInput: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#d9d9faff",
        borderRadius: 10,
        textAlign: "center",
        fontWeight: "bold",
        height: 50,
        width: 280,
        margin: 5,
        borderWidth: 5,
        borderColor: "#722155ff",
        color: "black"
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "black",
    },
    menuContainer:{
        alignItems: "center",
        marginHorizontal: 10,
        marginVertical: 10
    },
    menuBtn:{
        marginVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        width: 180,
        justifyContent: "center",
        borderColor: "violet"

    },
    textBtn:{
        fontSize: 20,
        color: "purple",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#e6e6fa"
    }
});
