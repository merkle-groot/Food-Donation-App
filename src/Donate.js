import React, {Component} from 'react'; 
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native'; 
import { createBottomTabNavigator, createStackNavigator,createMaterialTopTabNavigator } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import AddDonationclass from './AddDonation';
import TrackDonationclass from './TrackDonation';
import { AdIconView } from 'expo-ads-facebook';

const Taby=createMaterialTopTabNavigator({
    Add:{
        screen:AddDonationclass,
        navigationOptions:{
            title:"Add Donation!"
        }
    },

    Track:{
        screen:TrackDonationclass,
        navigationOptions:{
            title:"Track your Donations!"
        }
    }

});    

class don extends React.Component{
    render(){
        return(
            <View>
                <Text>Herro!</Text>
            </View>
        )
    }
}    

    




export default createStackNavigator({Taby},{headerMode:"none"});