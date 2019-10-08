import React from 'react'; 
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button} from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';


export default class TrackDonationclass extends React.Component{
    render(){
        let user="Adwaith TA";
        return(
            <View style={styles.container} >
                <Text style={{textAlign:'center',fontSize:20,fontFamily:'Roboto'}}>Cancel your donation :</Text>
                <View style={{alignItems:'center'}}>
                    <Button style={{borderRadius:30,paddingTop:10}} title="Cancel"/>
                </View>
                <Text style={{textAlign:'center',fontSize:20,fontFamily:'Roboto'}}>Your donation is being handled by:{user}</Text>
            </View>    

        );
    }
}


const styles = StyleSheet.create({ 
	container: { 
        flex:1,
        paddingLeft:10,
        paddingTop:10,
        justifyContent:'center',
    },
}); 