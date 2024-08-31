import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { forgotPassword } from "../../api/AuthAPIService";
import CommonStyles from "../../assets/styles/CommonStyles";

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");

    const handleResetPassword = async () => {
        try {
            const data = await forgotPassword(email);
            console.log(data);
            Alert.alert("Success", "OTP sent to your email");
        } catch (error) {
            Alert.alert("Error", "An error occurred. Please try again.");
        }
    };

    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Forgot Password Page</Text>

            <TextInput style={CommonStyles.input} placeholder="Email" value={email} onChangeText={setEmail} />

            <TouchableOpacity style={CommonStyles.button} onPress={handleResetPassword}>
                <Text style={CommonStyles.buttonText}>Reset Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={CommonStyles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPassword;
