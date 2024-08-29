import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Intro from "./app/screens/IntroScreen";
import Login from "./app/screens/auth/LoginScreen";
import Register from "./app/screens/auth/RegisterScreen";
import Home from "./app/screens/home/HomeScreen";

import { UserProvider } from "./app/context/UserContext";

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
