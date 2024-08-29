import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { loginUser } from "../../api/AuthService";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const data = await loginUser(username, password);
            if (data.error) {
                Alert.alert("Login failed", data.message);
            } else {
                setUsername("");
                setPassword("");
                navigation.navigate("Home", { name: data.user.fullName });
            }
        } catch (error) {
            Alert.alert("Login failed", "An error occurred. Please try again.");
        }
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