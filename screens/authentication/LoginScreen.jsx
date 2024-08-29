import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { UserContext } from "../../context/UserContext";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(UserContext);

    const handleLogin = () => {
        // Kiểm tra thông tin đăng nhập (ví dụ: thông tin giả)
        if (username === "quy1" && password === "12345678") {
            login(username, password);
            // Điều hướng tới màn hình Home với tham số
            navigation.navigate("Home", { name: username, resetCredentials: resetCredentials });
        } else {
            // Hiển thị thông báo lỗi
            Alert.alert("Login failed", "Invalid username or password");
        }
    };

    const resetCredentials = () => {
        setUsername("");
        setPassword("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Page</Text>

            <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Register")}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        width: "25%",
        height: 40,
        backgroundColor: "#007bff",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});

export default Login;
