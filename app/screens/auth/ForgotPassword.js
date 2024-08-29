import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import CommonStyles from "../style/CommonStyles";

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");

    const handleResetPassword = async () => {};

    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Login Page</Text>

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
