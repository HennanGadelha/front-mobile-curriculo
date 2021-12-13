import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExperienciasProfissionais from '../componentes/ExperienciasProfissionais';
export function TelaExperienciaProfissional({navigation}) {
  
    return (
      <View style={styles.container}>
        <ExperienciasProfissionais />
      </View>
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });