import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Home = ({ navigation, route }) => {
    // Lấy tham số từ route
    const { name } = route.params;

    const handleLogout = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Page</Text>
            <Text style={styles.profile}>Hello {name}</Text>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
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
    },
    profile: {
        fontSize: 16,
        marginBottom: 10,
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

export default Home;
