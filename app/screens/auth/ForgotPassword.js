import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, ActivityIndicator } from "react-native";
import { forgotPassword } from "../../api/AuthAPIService";
import CommonStyles from "../../assets/styles/CommonStyles";
import Toast from "react-native-toast-message";

const ForgotPassword = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState("");

    const showToast = (type, text1, text2) => {
        Toast.show({
            type: type,
            text1: text1,
            text2: text2,
            position: "top",
            visibilityTime: 3000,
            text1Style: { fontSize: 16, fontWeight: "bold" },
            text2Style: { fontSize: 12 },
        });
    };

    const handleResetPassword = async () => {
        setLoading(true);
        try {
            const data = await forgotPassword(email);
            if (data.error) {
                showToast("error", "Error", data.message);
            } else {
                showToast("success", "Success", data.message);
                setOtpSent(true);
            }
        } catch (error) {
            showToast("error", "Error", "An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleConfirmOTP = async () => {
        // Logic xác nhận OTP
    };

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

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" style={{ marginBottom: 15 }} />
            ) : (
                <>
                    {otpSent ? (
                        <TouchableOpacity style={CommonStyles.button} onPress={handleConfirmOTP}>
                            <Text style={CommonStyles.buttonText}>Confirm</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={CommonStyles.button} onPress={handleResetPassword}>
                            <Text style={CommonStyles.buttonText}>Reset Password</Text>
                        </TouchableOpacity>
                    )}
                </>
            )}

            <TouchableOpacity style={CommonStyles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={CommonStyles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ForgotPassword;
