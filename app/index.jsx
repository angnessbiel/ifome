import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Pressable, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Header from './components/header';

const style = StyleSheet.create({
    tinyLogo: {
        width: 100,
        height: 100,
      },

})

const produto = [
    {
      id: '1',
      name: 'Laranja',
      local: 'Mercado Lima',
      price: 'R$8,49',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDdmtlJT1cgwPdda4mAqua8S6gGj1dA1y8A&s',

    },
    {
      id: '2',
      name: 'Maçã',
      local: 'Mercado Lima',
      price: 'R$29,99',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDdmtlJT1cgwPdda4mAqua8S6gGj1dA1y8A&s',
    },
    {
        id: '3',
        name: 'Melancia',
        local: 'Mercado Lima',
        price: 'R$7,98',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSUIaBT8IyNqSvEVXvzPr7HPRlgmd3i0XSg&s',
    },
    {
        id: '4',
        name: 'Mamão',
        local: 'Mercado Lima',
        price: 'R$14,50/kg',
        img: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Mamao-Papaya[1]-1000x1000.jpg',
      },

  ];
  const Item = ({ name, local, price, img }) => {
    return (
      <View style={style.item}>
        <Image
          style={style.tinyLogo}
          source={{
            uri: img,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={style.name}>{name}</Text>
          <Text style={style.local}>{local}</Text>
          <Text style={style.price}>{price}</Text>
          <Pressable style={style.button}>
            <Text style={style.buttonText}>Comprar</Text>
          </Pressable>
        </View>
      </View>
    );
  };
  

export default compras = () => {

    return(
        <ScrollView style = {style.View}>
            <Header/>
  <SafeAreaView style={style.container}>
      <FlatList
        data={produto}
        renderItem={({item}) => <Item name={item.name} local={item.local} price={item.price} img={item.img} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
        </ScrollView>
    )

}