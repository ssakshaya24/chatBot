import { View, Text, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import ChatFaceData from '../Service/ChatFaceData';


export default function HomeScreen() {
    const [chatFaceData,setChatFaceData]=useState([]);
    const [selectedChatFaceData,setSelectedChatFaceData]=useState([]);
   // const navigation=useNavigation();

    useEffect(()=>{
       setChatFaceData(ChatFaceData);
       setSelectedChatFaceData(ChatFaceData[0])
    },[] )

    const onChatFacePress=(id)=>{
        setSelectedChatFaceData(ChatFaceData[id-1])
    }
  return (
    <View style={{alignItems:'center',paddingTop:90}}>
      <Text style={[{color:selectedChatFaceData.primary},
    {fontSize:30}]}>Hello,</Text>

      <Text style={[{color:selectedChatFaceData.primary},
    {fontSize:30,fontWeight:'bold'}]}>I am {selectedChatFaceData.name}</Text>

    <Image source={{uri:selectedChatFaceData.image}} 
    style={{width:150,height:150,marginTop:20}} />
    <Text style={{width:15,height:15,marginTop:10}} />

    <Text style={{marginTop:10,fontSize:25}}>How can I help you? </Text>
    
        <FlatList 
        data = {chatFaceData}
        horizontal={true}
        renderItem={({item})=>selectedChatFaceData.id!=item.id&&(
            <TouchableOpacity style={{margin:15}} onPress={()=>onChatFacePress(item.id)}>
                <Image source={{uri:item.image}}
                style={{width:40,height:60}}/>
            </TouchableOpacity>

        )}
        />
        <Text style={{marginTop:5,fontSize:17,color:'#B0B0B0'}}> Choose Your Fav ChatBuddy</Text>
          
    <TouchableOpacity style={[{backgroundColor:selectedChatFaceData.primary},
    {padding:17,width:Dimensions.get('screen').width*0.6, borderRadius:100,alignItems:'center',marginTop:30,}]}>
        <Text style={{fontSize:16,color:'#000'}}>Let's Chat</Text>
    </TouchableOpacity>
    
    </View>
  )
}