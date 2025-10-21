import { createStackNavigator } from "@react-navigation/stack";
import { HomeProducto } from "../screens/producto/HomeProducto";
import { FormProducto } from "../screens/producto/FormProducto";
import { ProductoResponse } from "../interfaces/productoInterfaces";

export type RootStackParams = {
    HomeProducto:      undefined;
    FormProducto:      ProductoResponse | undefined;
}

export const ProductoNavigator = () => {

    const Stack = createStackNavigator<RootStackParams>();

    return (
        <Stack.Navigator
            initialRouteName="HomeProducto"
            screenOptions={{
                headerShown: false,
                headerMode: "float",
            }}
        >
            <Stack.Screen 
                name="HomeProducto" 
                component={ HomeProducto } 
                />

            <Stack.Screen 
                name="FormProducto" 
                component={ FormProducto }
                />

        </Stack.Navigator>
    );
}


