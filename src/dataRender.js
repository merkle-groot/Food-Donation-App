import React, { Component } from 'react';

import {
  ScrollView,
  //Text,
  View
} from 'react-native';
import { food } from './data';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
//import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
//import console = require('console');

export default foodfn=()=>(
    food.map((food, index) =>
                <RenderClass 
                    name={food.name}
                    quantity={food.quantity}
					posted={food.donator}
					createdAt={food.created_at}
					available_till={food.available_till}
					units={food.units}
					description={food.description}
					number={food.numbero}
					//partial={food.ispartial}
                /> 
    )  

);



class RenderClass extends Component {
	constructor(){
		super()
		this.state=({
			isConfirm:false,
			retText:"Confirm"
			//ispartial:{this.props.partial}
		})
	}


	
  	render() {
    	return (
			<Card>
			<CardImage 
			  source={{uri: 'http://placehold.it/480x270'}} 
			  title={this.props.name}
			/>
			<CardTitle 
			  title={this.props.posted}
			  subtitle={this.props.createdAt}
			 />

			<CardContent text="Use by:"/>
			<CardContent text={this.props.available_till}/> 
			
			
			<CardContent text="Quantity:"/>
			<CardContent text={this.props.quantity}/>
			<CardContent text={this.props.number}/>

			<CardContent text={this.props.description}/>
			
			<CardAction 
			  separator={true} 
			  inColumn={false}>
			  <CardButton
				onPress={()=>{this.setState({
					isConfirm:!(this.state.isConfirm),
					retText:(this.state.isConfirm?"Confirm":"Revert")
				})}}
				title={this.state.retText}
				color="blue"
			  />
		
			</CardAction>
		  </Card>
    );
  }
}