import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';


export default function Screen02({ navigation, route }) {
  var dataPick = route.params?.dataPick;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={{ width: '100%', height: 200, borderRadius: 20 }} resizeMode='contain' source={{ uri: dataPick.image }} />


        <View style={styles.body}>
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{dataPick.name}</Text>
          <View style={styles.row}>
            <Text style={{ fontSize: 18, fontWeight: 500, color: 'gray' }}>{dataPick.detail}</Text>
            <Text style={{ fontSize: 22, fontWeight: 'bold', }}>${dataPick.price}.00</Text>
          </View>
          <View style={[styles.row]}>
            <View style={styles.column}>
              <Text style={{ fontSize: 18, fontWeight: 500, color: 'gray' }}>Delivery in</Text>
              <Text style={{ fontSize: 22, fontWeight: 'bold', }}>30 min</Text>
            </View>
            <View style={styles.row1}>
              <View style={styles.img}>
                <Image source={require('../assets/tru.png')} style={{ width: null, height: 20 }} resizeMode='contain' />
              </View>
              <Text style={{ fontSize: 22, fontWeight: 'bold', }}>1</Text>
              <View style={styles.img}>
                <Image source={require('../assets/cong.png')} style={{ width: null, height: 20 }} resizeMode='contain' />
              </View>
            </View>
          </View>
          <View style={[styles.column]}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Restaurants info</Text>
            <Text style={{ fontSize: 18, fontWeight: 500, color: 'gray' }}>
              Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
          </View>
          <View style={[styles.button]}>
            <Pressable style={[styles.cart]}
            ><Text style={{ fontSize: 22, fontWeight: 'bold', color:'#fff', textAlign:'center'}}>Add to cart</Text></Pressable>
          </View>
        </View>
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%'
    // alignItems: 'center', 
  },
  header: {
    width: '95%',
    height: '45%',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '2.5%',
    backgroundColor: "#fff"
  },
  body: {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-around',
    marginLeft: '2.5%',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  column: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  img: {
    height: 40,
    width: 40,
    marginTop: '5%'
  },
  row1: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: '5%'
  },
  cart: {
    backgroundColor: '#EFB034',
    height: 40,
    width: '80%',
    paddingTop: '1%',
    borderRadius: 10,
    margin:'auto'
  },
  button:{
    display: 'flex',
    width:'100%',
     height:50,
     marginTop:50
  }
});

