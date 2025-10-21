import React, {useEffect} from 'react';
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native'; 
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient'; 
import { appTheme } from '../../themes/appTheme';
import { useUserApi } from '../../hooks/useUserApi';
import { UserCard } from '../../components/UserCard';
import { UserResponse } from '../../interfaces/userInterfaces';
import { BtnTouch } from '../../components/BtnTouch';

export const HomeUser = () => {

    const { isLoading, loadUsers, listUser } = useUserApi();

    const focused = useIsFocused();

    const navigation = useNavigation();

    const create: UserResponse  = {
        id_user:         0,
        username:        "",
        password:        "",
        email:           "",
        image:           "",
        update:          "",
    }

    useEffect(() => {
        (!isLoading) && loadUsers();
    },[focused])

    return(

        <LinearGradient
            colors={['#A7C7E7', '#E0BBE4']} 
            start={[0, 0]} 
            end={[1, 1]}  
            style={styles.gradientBackground} 
        >
            <View
                style={ appTheme.marginGlobal }
            >
                
                <FlatList
                    data={ Object.values(listUser) }
                    keyExtractor={ (item) => "#"+item.id_user }
                    ListHeaderComponent={(
                        <View
                            style={ appTheme.container }
                        >
                            <Text
                                style={ appTheme.title } 
                            >
                                Lista de Usuarios
                            </Text>
                            <BtnTouch
                                titulo='Crear Usuario'
                                color='violet'
                                action={ () => navigation.navigate("FormUser",{...create}) }
                            />
                        </View>
                    )}
                    refreshControl={(
                        <RefreshControl
                            refreshing={ isLoading }
                            onRefresh={ loadUsers }
                            colors={[ "pink", "violet", "black" ]} 
                            progressBackgroundColor="black"
                        />
                    )}
                    showsVerticalScrollIndicator={ false }
                    numColumns={ 2 }
                    renderItem={ ({item}) => (
                        <UserCard
                            user={ item }
                        />
                    )}
                />
            </View>
        </LinearGradient>

);
}


const styles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
});