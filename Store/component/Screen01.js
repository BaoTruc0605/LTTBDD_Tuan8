import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Screen02 from './Screen02'

export default function Screen01({navigation}) {
  var [data, setData] = useState([])
  var [dataPick, setDataPick] = useState(null)
  useEffect(() => {
    fetch("https://654857d8dd8ebcd4ab22bfe8.mockapi.io/donut")
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 16, fontWeight: 500 }}>Welcome Jala!</Text>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Choice you Best food</Text>
        <TextInput style={styles.search} placeholder='Search food'></TextInput>
        <View style={styles.buttonRow}>
          <Pressable style={styles.button}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>Donut</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>Pink Donut</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>Floating</Text>
          </Pressable>
        </View>
      </View>

      {data.map((item) => {
        return (
          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.img}>
                <Image style={{ width: '100%', height: 90, borderRadius: 20 }} resizeMode='contain' source={{ uri: item.image }} />
              </View>
              <View style={styles.column}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', }}>{item.name}</Text>
                <Text style={{ fontSize: 16, fontWeight: 500, color:'gray'}}>{item.detail}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', }}>${item.price}.00</Text>
              </View>
              <View style={styles.plus}>
              <Pressable onPress={
                () => {
                  setDataPick(item)
                  navigation.navigate({
                    name: 'Screen02', params: { dataPick: item },
                    merge: true,
                  })
                 
                }
              }><Image source={require('../assets/plus_button.png')} style={{ width: null, height: 40 }} resizeMode='contain'  /></Pressable>
              </View>
            </View>
          </View>
        )
      })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height:'100%'
    // alignItems: 'center', 
  },
  header: {
    width: '95%',
    height: '25%',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '2.5%',
  },
  search: {
    borderColor: '#bbb',
    borderWidth: 1,
    height: 40,
    width: '75%',
    color: '#bbb',
    fontSize: 20,
    fontWeight: 500,
    paddingLeft: 10
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button: {
    borderColor: '#bbb',
    borderWidth: 1,
    height: 30,
    width: '30%',
    color: '#bbb',
  },
  body: {
    width: '95%',
    display:'flex',
    justifyContent: 'space-around',
    marginLeft: '2.5%',
  },
  item:{
    width: '100%',
    display:'flex',
    justifyContent: 'space-between',
    flexDirection:'row',
    backgroundColor:'#F4DDDD',
    borderRadius:15,
    marginTop:10,
    padding:5
  },
  img:{
    height:'100%',
    width:'25%',
  },
  column:{
    height:'100%',
    width:'52%',
    display:'flex',
    justifyContent: 'space-between',
    flexDirection:'column',
  },
  plus:{
    height:'100%',
    width:'12%',
    display:'flex',
    justifyContent: 'flex-end',
    flexDirection:'column',
  }
});

