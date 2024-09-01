import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from "react-native";
import { forgotPassword } from "../../api/AuthAPIService";
import CommonStyles from "../../assets/styles/CommonStyles";
import Toast from "react-native-toast-message";

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");

    const handleResetPassword = async () => {
        try {
            const data = await forgotPassword(email);
            if (data.error) {
                Toast.show({
                    type: "error",
                    text1: "Error",
                    text2: data.message,
                    position: "top",
                    visibilityTime: 3000,
                    text1Style: { fontSize: 16, fontWeight: "bold" },
                    text2Style: { fontSize: 12 },
                });
            } else {
                Toast.show({
                    type: "success",
                    text1: "Success",
                    text2: data.message,
                    position: "top",
                    visibilityTime: 3000,
                    text1Style: { fontSize: 16, fontWeight: "bold" },
                    text2Style: { fontSize: 12 },
                });
                setOtpSent(true);
            }
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "An error occurred. Please try again.",
                position: "top",
                visibilityTime: 3000,
                text1Style: { fontSize: 20, fontWeight: "bold" },
                text2Style: { fontSize: 16 },
            });
        }
    };

    const handleConfirmOTP = async () => {};

    return (
        <View style={CommonStyles.container}>
            <Text style={CommonStyles.title}>Forgot Password Page</Text>

            <TextInput
                style={CommonStyles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                editable={!otpSent}
            />

            {otpSent && (
                <TextInput
                    style={CommonStyles.input}
                    placeholder="Enter OTP"
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="numeric"
                />
            )}

            {otpSent && (
                <TouchableOpacity style={CommonStyles.button} onPress={handleConfirmOTP}>
                    <Text style={CommonStyles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            )}

            {!otpSent && (
                <TouchableOpacity style={CommonStyles.button} onPress={handleResetPassword}>
                    <Text style={CommonStyles.buttonText}>Reset Password</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={CommonStyles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPassword;
