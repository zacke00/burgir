import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React from "react";
import HomePage from "../pages/Home";
import SearchPage from "../pages/search";
import Favorites from "../pages/favorites";

const Tab = createBottomTabNavigator();


const HomeRoutes: React.FC = () => {
    return(
    <Tab.Navigator initialRouteName="Start">
        <Tab.Screen name="Start" component={HomePage} />
        <Tab.Screen name="Search" component={SearchPage}/>
        <Tab.Screen name="Favorites" component={Favorites}/>
        <Tab.Screen name="DetailPage" component={HomePage}/>
    </Tab.Navigator>
    )
}

export default HomeRoutes;