import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TelaDadosTitular } from './telas/telaDadosTitular'
import { TelaFormacaoAcademica } from './telas/telaFormacaoAcademica'
import { TelaExperienciaProfissional } from './telas/telaExperienciaProfissional'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='DadosTitular'>
        <Tab.Screen 
            name="DadosTitular"
            component={TelaDadosTitular} 
            options={{ 
                title: "Dados do Titular",
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name="human-male"
                      color={color}
                      size={size}
                    />
                  ),
              }}
        />
        
        <Tab.Screen 
          name="Academico"
          component={TelaFormacaoAcademica}
          options={{
            title: 'Formação Acadêmica',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="school"
                color={color}
                size={size}
              />
            ),
          }}/>

        <Tab.Screen 
          name="Profissional"
          component={TelaExperienciaProfissional}
          options={{
            title: 'Experiência Profissional',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="laptop"
                color={color}
                size={size}
              />
            ),
          }}/>  
      </Tab.Navigator>
    </NavigationContainer>
  );
}
