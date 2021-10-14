import React from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from "react-native";
import {AntDesign} from '@expo/vector-icons'

export default function Login(){ 
    return <View style={{ flex:1 ,justifyContent: 'center',alignItems:'center'}}>
    <Image style={{
        
        width:250,
        height:250,
        borderRadius:20,
        marginBottom:30,
        transform:[{rotate:"45deg"} ],
        
        }}
    
    source={{uri:"https://cdn.dribbble.com/users/7782990/screenshots/16623004/media/f5c8ffdd286d2836b3e3c95093fe7a34.png"}}

    />
         <Text style={{color: "grey", fontSize:24, marginTop:15}}>Welcome to</Text> 
         <Text style={{color: "black", fontSize:24, fontWeight:'700',marginBottom:20,}}>Power Bike Shop</Text> 
         <Text>
         
         
             <TouchableOpacity style={{
                 backgroundColor:'#e3e3e3',
                 paddingHorizontal:80, 
                 flexDirection:'row',
                 alignItems:'center',
                 borderRadius:15,
                 padding:15,
                 marginBottom:15,
                 


                 }}>
                 <AntDesign name="google" size={24} color="black" />
                 <Text style={{fontSize:17, marginLeft: 15,}}>Login With Gmail</Text>
                 
             </TouchableOpacity>
             
             <TouchableOpacity onPress={() => {
                 navigation.navigate("Home")
             }}
             
             style={{
                 backgroundColor:'black',
                 borderRadius:10,
                 flexDirection:"row",
                 alignItems:'center',
                 padding:10,
                 paddingHorizontal:80,
                 marginTop:20,

             }}>
             <AntDesign name="apple1" size={24} color="white" />
                  <Text style={{fontSize:17, color: 'white',marginLeft:15}}>Login With Apple</Text>
             </TouchableOpacity>
            
         </Text>
         <Text style={{marginTop:10, color: "grey"}}>Not a Member? <Text style={{color: "orange", fontWeight:'bold'}}>Sign Up</Text></Text>
    </View>

}