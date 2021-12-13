import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
   {
     id: '001',
     empresa: 'Zup Innovation',
     cargo: 'Desenvolvedor de Software Pleno | Backend',
     dataInicio: 'ago.2021',
     dataFim: 'o presente momento'
   },
   {
     id: '002',
     empresa: 'Zup Innovation',
     cargo: 'Desenvolvedor de software',
     dataInicio: 'mai.2021',
     dataFim: 'ago.2021'
   },
   {
     id: '003',
     empresa: 'Melhor Comunicação',
     cargo: 'Desenvolvedor de software júnior',
     dataInicio: 'nov.2019',
     dataFim: 'fev.2020'
   },
 ];
 
 const Item = ({ empresa, cargo, dataInicio, dataFim }) => (
   <View style={styles.item}>
     <Text style={styles.empresa}>{empresa}</Text>
     <Text style={styles.cargo}>{cargo}</Text>
     <Text style={styles.data}>Data Início: {dataInicio}</Text>
     <Text style={styles.data}>Data de Finalização: {dataFim}</Text>
   </View>
 );
 
 const ExperienciasProfissionais = () => {
   const renderItem = ({ item }) => (
     <Item 
      empresa={item.empresa}
      cargo={item.cargo}
      dataInicio={item.dataInicio}
      dataFim={item.dataFim} 
      />
   );
 
   return (
     <SafeAreaView style={styles.container}>
       <FlatList
         data={DATA}
         renderItem={renderItem}
         keyExtractor={item => item.id}
       />
     </SafeAreaView>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: StatusBar.currentHeight || 0,
   },
   item: {
     backgroundColor: 'indigo',
     padding: 20,
     marginVertical: 8,
     marginHorizontal: 16,
   },
   empresa: {
      color: 'white',
     fontSize: 18,
   },
   cargo: {
      color: 'white',
     fontSize: 14,
   },
   data: {
      color: 'grey',
     fontSize: 14,
   },
 });
 
 export default ExperienciasProfissionais;