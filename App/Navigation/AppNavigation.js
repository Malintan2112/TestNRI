import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Homepage from '../Container/Homepage';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createStackNavigator()

const StackNavigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Main' component={BottomTabNavigator} options={{ ...TransitionPresets.ScaleFromCenterAndroid }} />
        <Stack.Screen name='Homepage' component={Homepage} options={{ ...TransitionPresets.ScaleFromCenterAndroid }} />
    </Stack.Navigator>
)



const AppNavigation = () => {
    return (
        <NavigationContainer>
            {StackNavigator()}
        </NavigationContainer>
    )
}

export default AppNavigation