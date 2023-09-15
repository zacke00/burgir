import React from 'react'; 
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import useOwnNavigation from '../../hooks/ownNavigator';


export const Welcome: React.FC = () => {
    const {navigate} = useOwnNavigation();

    const handleContinueClick = () => {
        navigate("HomeRoutes")
    }
    return(
        <View>
            <Button title='HomePage' onPress={handleContinueClick}/>
        </View>
    )    
};