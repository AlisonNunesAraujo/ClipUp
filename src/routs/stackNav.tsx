import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
