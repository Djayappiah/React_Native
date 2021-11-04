import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
  StyleSheet,
 SafeAreaView,
 ScrollView,
 StatusBar
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Cart({navigation}){

    const CartItem = (props) => {
        
    return (
            <View style={{flexDirection:'row'}}>

            <Image 
            style={{
                padding:10,
                backgroundColor:'rgb(224,224,224)',
                width:100, 
                height:70, 
                marginLeft: 10,
                marginTop:40,
                borderRadius:10
                }}

            source={{uri:props.image}}
            />

            
            <View style={{flexDirection:'column'}}>

            
            <Text style={{marginTop:50, marginLeft:15, fontWeight:'bold', fontSize:20}}>{props.title}</Text>
            <Text style={{marginTop:10, marginLeft:20}}>{props.description}</Text>
        <Text style={{marginTop:10, marginLeft:20, color:"orange"}}>$<Text style={{color:"black", fontSize:20, fontWeight:'bold'}}>{props.price}</Text></Text>
                
            </View>

            <View style={{flexDirection:'column'}}>
            <EvilIcons name="trash" size={24} color="rgb(204,102,0)"  style={{marginTop:50, marginLeft:70}}/>

            <View style={{flexDirection:"row"}}>
            <TouchableOpacity>
            <AntDesign name="minuscircle" size={24} color="black" style={{marginTop:30}} />
            </TouchableOpacity>
            <Text style={{marginTop:30, marginLeft:20, fontWeight:'bold', fontSize:20}}>1</Text>
            <TouchableOpacity>
            <AntDesign name="pluscircle" size={24} color="rgb(204,102,0)" style={{marginTop:29, marginLeft:20}} />
            </TouchableOpacity>
            </View>
        </View>
        </View>
       

      
    )}

{/**TOP NAV BAR */}
    const {goBack} = navigation;
    return (
        
        
        <View style={{fflex:1}}>
    <View style={{marginTop:70, marginLeft:20, flexDirection:'row'}}>
        <TouchableOpacity onPress= {()=>goBack()
        }>
        <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <View style={{flexDirection:'column'}}>
        <Text style={{
            marginLeft:120,
            fontSize:24,
            fontWeight:"bold"
        }}>
            Cart List
        </Text>
        <Text style={{marginLeft:130}}>(3 items)</Text>
       
        </View>

        
         
    </View>

    <View>
    <CartItem description="Buzanga Bike" price="800.00" title="Amazon Seeker" 
		image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKDrxmJGY-O-ivwgmIMjsqMBCW_RiGNzanA&usqp=CAU		
"		
	/>
    <CartItem description="Black Monster" price="2,00.00" title="Splendid display" 
		image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0fULvS3OzN6-KnHxAtCSS-Mjd45pvoZhiw&usqp=CAU"			
		
	/>
    <CartItem description="Chioo Bike" price="1,100.00" title="Super friendzyy" 
	
	image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaWwAJoZznKrWlUNZ6FrvnvKCkYe4okZGJpw&usqp=CAU"			
	/>

    </View>

   <View style={{margin:4, borderRadius:30, padding:50, backgroundColor:"rgb(160,160,160)", alignItems:"center",justifyContent:"space-between", flexDirection:"row"}}>
   <Text style={{justifyContent:"space-between", fontSize:20, color:"grey"}}>Sub-Total </Text>
   <Text style={{justifyContent:"space-between",  fontSize:25}}>$3900.00</Text>
   </View>
   
        {/** PROCEED TO CHECKOUT BUTTON */}
        <TouchableOpacity>
        <View style={{backgroundColor:"rgb(204,102,0)", padding:20, margin:5, borderRadius:15}}>
        <Text style={{marginTop:0, fontWeight:'bold', color:"white", textAlign:'center', fontSize:17}}>Proceed to Checkout</Text>
        
        </View>
        </TouchableOpacity>

        {/** BOTTOM NAV BAR */}
        <View style={{backgroundColor:'rgb(224,224,224)',width:1000,height:80, bottom:0}}>
    <View style={{flexDirection:"row"}}>

    <TouchableOpacity onPress={()=>{
        navigation.navigate("Home")
    }}>
    <Ionicons name="home-outline" size={30} color="black" style={{marginTop:20, marginLeft:30}} />
</TouchableOpacity>
        <FontAwesome name="microphone" size={30} color="white" style={{
        marginBottom:0,
         marginLeft:120,
         backgroundColor:"black",
         padding:17,
         borderRadius:27,
         borderColor:"black",
         borderWidth:1,
         overflow:'hidden'
         }}/>
            <TouchableOpacity>
         <FontAwesome5 name="shopping-bag" size={24} color="orange"  style={{marginLeft:120, marginTop:20}} />
        </TouchableOpacity>
    </View>
    
        
    </View> 
    
    
    </View>
    )
}