
import React, {Component} from 'react'; 
import {Platform, StyleSheet, Text, View,TouchableOpacity,Button,ScrollView,Image} from 'react-native'; 
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from "react-native-modal-datetime-picker";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {KeyboardAvoidingView} from 'react-native';



export default class AddDonationclass extends React.Component{
    constructor(){
        super()
        this.state={
            isDateTimePickerVisible: false,
            units:'No.s',
            foodItem:"",
            quantity:"",
            duration:"",
            description:"",
            donator:4,

        }
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
     
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
     
    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.setState({
            duration:date
        })
        this.hideDateTimePicker();
    };
     



    render(){
        var data1 = [["No.s","Kgs","Litres"]]
        var data2=[["Yes","No"]]
        console.log(this.state)
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="150" enabled>
            <View style={styles.container}>
                <View >
                    <Text style={{fontSize:20,fontFamily:"Roboto",}}>Food Item :</Text>
                    <TextInput style={{fontSize:20,fontFamily:"Roboto",}} value={this.state.foodItem} placeholder="Type here" onChangeText={
                        (text)=>{this.setState({
                            foodItem:text
                        })}
                    }/>
                </View>

                <View >
                    <Text style={{fontSize:20,fontFamily:"Roboto",}}>Quantity :</Text>
                    <TextInput style={{fontSize:20,fontFamily:"Roboto",}}  value={this.state.quantity} placeholder="Type here" keyboardType='number-pad' onChangeText={
                        (text)=>{
                            this.setState({
                                quantity:text
                            })
                        }
                    }/>
                    
                </View>

                <View >
                    <Text style={{fontSize:20,fontFamily:"Roboto",}}>Select Unit :</Text>
                    <Radiothingy/>
                </View>


                <View>
                    <Text style={{fontSize:20,fontFamily:"Roboto",}}>Usable Duration :</Text>
                    <TouchableOpacity style={{backgroundColor:"#17a6ff",borderRadius:6, width:80}} onPress={this.showDateTimePicker}><Text style={{fontSize:15,fontFamily:"Roboto",color:"#ffffff"}}>Pick Time</Text></TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                        />
                </View>  

                <View >
                    <Text style={{fontSize:20,fontFamily:"Roboto",}}>Enter a brief description :</Text>

                    <TextInput style={{fontSize:20,fontFamily:"Roboto",}} value={this.state.description} placeholder="Add a remark" onChangeText={
                        (text)=>{
                            this.setState({
                                description:text
                            })

                        }
                    }/>
                </View>

                <View style={{alignItems:'center'}}>
                    <Button style={{borderRadius:15}} title="Submit"/>
                </View>
            
            </View>
            </KeyboardAvoidingView>
            

        );
        
    }

}


var radio_props = [
    {label: 'No.s', value: 0 },
    {label: 'Litre', value: 1 },
    {label: 'Kg', value: 2 }
];console.log(this.state)
   
class Radiothingy extends React.Component {
    
    getInitialState=function(){
      return {
        value: 0,
      };
    }

    render(){
      return (
        <View>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.setState({value:value})}}
          />
        </View>
      );
    }
}




const styles = StyleSheet.create({ 
	container: { 
        flex:1,
        paddingTop:10,
        backgroundColor: '#ffffff',
        justifyContent:'space-evenly',
        
		//justifyContent: 'center', 
		//textAlign:'left',
       
        paddingLeft:20, 
        
    },

    viewy:{
        flex:1,
        justifyContent:"center",
    }
    
   
}); 