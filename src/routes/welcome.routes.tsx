import React from "react";
import {createStackNavigator} from "@react-navigation/stack" 
import {NavigationContainer} from "@react-navigation/native"
import { Text, View } from "react-native";
import { Welcome } from "../pages/Welcome";
import HomeRoutes from "../routes";
import SearchPage from "../pages/search";



const {Navigator, Screen} = createStackNavigator();

const WelcomeRoutes: React.FC = () => {
    const noHeader = {headerShown: false}
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="Welcome" component={Welcome}></Screen> 
                <Screen name="HomeRoutes" component={HomeRoutes}></Screen>
            </Navigator>
        </NavigationContainer>
    )
}

export default WelcomeRoutes;
