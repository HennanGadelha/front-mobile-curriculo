import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import CardAcademico from '../componentes/CardAcademico';


export function TelaFormacaoAcademica({navigation}) {

   const instituicao="Unicap"
   const curso="Sistemas para Internet"
   const dataInicio="2020.1"
   const dataFim="2022.1"

   const instituicao2="Unibratec"
   const curso2="Técnico em Desenvolvimento de Sistemas"
   const dataInicio2="2017.1"
   const dataFim2="2019.1"

    return (
      <View>
        <CardAcademico 
          instituicao={instituicao}
          curso={curso}
          dataInicio={dataInicio}
          dataFim={dataFim}
          style={styles.card}/>
        
        <CardAcademico 
          instituicao={instituicao2}
          curso={curso2}
          dataInicio={dataInicio2}
          dataFim={dataFim2}
          style={styles.card}/>
      </View>
    )
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightslategrey',
  },
});