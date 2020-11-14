import React from 'react'
import { View,Text,Platform,FlatList } from 'react-native'
import HeaderButton from '../components/HeaderButton'
import {
    HeaderButtons,
    Item
  } from 'react-navigation-header-buttons';

import Color from '../constant/Color';
import { DrawerActions } from '@react-navigation/native';
import CategoriGridTile from "../components/CategoriGridTile";
import { CATEGORIES } from "../data/dummy-data";

const AsetCategoriScreen = props => {
    
    const renderGridItem = (ItemData) => {
        return (
            <CategoriGridTile 
        title={ItemData.item.title}
        onSelect={()=> {
            props.navigation.navigate('AsetDetailScreen')
        }}
        image={ItemData.item.urlImage}
        
        />
        )
    }
    
    return(
        <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item,index)=> item.id}        
        />
    )
}

export const AsetScreenOptions = (navData) => {
    return{
        headerTitle: "Aset Categori",
        headerStyle: {
            backgroundColor: Platform.OS =="android" ? Color.primaryColor:"",
        },
        headerTintColor: Platform.OS =="android" ? "white" : Color.primaryColor,
        headerLeft:()=> {
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() =>{
                        navData.navigation.dispatch(DrawerActions.openDrawer());
                    }}
                    color="white"
                />
                </HeaderButtons>
            );
        },
        headerTitleStyle: {
            fontFamily:"open-sans-bold",
        },
        headerBackTitleStyle: {
            fontFamily: "open-sans",
        },
    }
}

export default AsetCategoriScreen