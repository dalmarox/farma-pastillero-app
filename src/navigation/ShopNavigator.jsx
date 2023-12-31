import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";

//Importamos las vistas
import Categories from '../screens/Categories'
import ProductsByCategory from '../screens/ProductsByCategory'
import ProductDetailScreen from '../screens/ProductDetailScreen'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return(
            <Stack.Navigator
                initialRouteName="Categorías"
                screenOptions={
                    ({navigation, route}) => ({
                        header: () => <Header title={route.name} navigation={navigation} />
                    })
                }
            
            >
                <Stack.Screen 
                    name="My App        Categorias"
                    component={Categories}
                />
                <Stack.Screen 
                    name="products"
                    component={ProductsByCategory}
                    options={{ title: 'Productos'}}
                />
                <Stack.Screen 
                    name="Detalle"
                    component={ProductDetailScreen}
                />
            </Stack.Navigator>
    )
}


export default ShopNavigator