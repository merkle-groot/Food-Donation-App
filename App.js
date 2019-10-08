import React, {Component} from 'react'; 
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button,Image} from 'react-native'; 
import {createAppContainer,createStackNavigator} from 'react-navigation'; 
import { TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import DonateClass from './src/Donate';
import DistributeClass from './src/Distribute';
import {KeyboardAvoidingView} from 'react-native';


 
 
 
class Homescreen extends Component{
	constructor(){
		super()
	} 
	render() { 
		return ( 
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
			<View style={styles.container}> 
				<Text style={{fontSize:30,fontFamily:'monospace',paddingBottom:50}}>SAHA</Text>
				<Image style={{width:150,height: 150,paddingTop:20}} source={require('./src/friendship.png')}/>
				<View style={{paddingTop:20}}>
					<TextInput style={{textAlign:"center"}} placeholder="Enter your email" />
					<TextInput style={{textAlign:"center"}} secureTextEntry={true}  placeholder="Enter your password"/>
				</View>	
				<View style={{paddingTop:20}}>
					<Button onPress={()=>this.props.navigation.navigate("Side")} styles={{fontSize:30,fontFamily:'Roboto',borderRadius:20,}} title="Login"/>
				</View>
			</View> 
			</KeyboardAvoidingView>
		); 

	} 
} 

 
 

class Sidescreen extends Component{ 
	render() { 
		return ( 
			<View style={styles.container}> 
				<TouchableOpacity style={styles.sidy} onPress={()=>this.props.navigation.navigate("Donate")}>
					<Image style={{width:150,height: 150}} source={require('./src/Donate.png')}/>
					<Button style={styles.texty} title="DONATE"/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.sidy} onPress={()=>this.props.navigation.navigate("Distribute")}>
				<Image style={{width:200,height: 200}} source={require('./src/Distribution.jpg')}/>
					<Button style={styles.texty} title="DISTRIBUTE"/>	
				</TouchableOpacity>	
			</View> 
		); 
	} 
} 




 
 

const styles = StyleSheet.create({ 
	container: { 
		flex:1,
		justifyContent: 'center', 
		alignItems: 'center', 
		
	}, 

	sidy:{
		flex:1,
		justifyContent:'center',
		alignSelf:"center",
		paddingTop:20,

	},

	fieldy:{
		paddingTop:20,
	},

	texty:{
		alignSelf:'center',
		color:"#ffffff",
		fontSize:20,
		backgroundColor:"#4260f5",
		borderRadius:20,

	}



}); 

 
const AppNavigator=createStackNavigator({
		Home:Homescreen, 
		Side:Sidescreen, 
		Donate:DonateClass,
		Distribute:DistributeClass,
	}, 
	{ 
		initialRouteName:"Home" 
	} 

); 



export default createAppContainer(AppNavigator); 

 
 

 