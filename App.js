import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Intro from "./screens/IntroScreen";
import Login from "./screens/authentication/LoginScreen";
import Register from "./screens/authentication/RegisterScreen";
import Home from "./screens/home/HomeScreen";

import { UserProvider } from "./context/UserContext";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Intro" component={Intro} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </UserProvider>
    );
};

export default App;
