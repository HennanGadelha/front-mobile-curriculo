import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Button } from 'react-native-paper'

export function TelaDadosTitular({navigation}) {
  
   const nome = "Hennan Gadelha"
   const email = "hennangadelhafreitas@gmail.com"
   const telefone = "8199999999"

    return (
      <View style={styles.container}>
        <Text style={styles.campo}>Nome</Text>
        <Text style={styles.valor}>{nome}</Text>
        <Text style={styles.campo}>Email</Text>
        <Text style={styles.valor}>{email}</Text>
        <Text style={styles.campo}>Telefone</Text>
        <Text style={styles.valor}>{telefone}</Text>
        <Text style={styles.campo}>Minha Página</Text>
        <Text style={styles.valor}>https://github.com/hennangadelha</Text>
        <Button icon="github" color='indigo' mode="contained" onPress={() => Linking.openURL('https://github.com/hennangadelha')}>
          Visitar
        </Button>
      </View>
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },
   campo:{
      fontSize: 16,
      color: "black",
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center", 
   },
   valor:{
    fontSize: 18,
    color: "indigo",
    marginBottom: 40,
    textAlign: "center", 
   }
 });