import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CommonStyles from "../../assets/styles/CommonStyles";

const Home = ({ navigation, route }) => {
    // Lấy tham số từ route
    const { name } = route.params;

    const handleLogout = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Home Page</Text>
            <Text style={styles.profile}>Hello {name}</Text>

            <TouchableOpacity style={CommonStyles.button} onPress={handleLogout}>
                <Text style={CommonStyles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    profile: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default Home;
