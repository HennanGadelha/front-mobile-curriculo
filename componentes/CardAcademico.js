import * as React from 'react';
import { Card, Title, Paragraph, StyleSheet } from 'react-native-paper';


const CardAcademico = ({instituicao, curso, dataInicio, dataFim}) => (
  <Card>
    <Card.Content>
      <Title>{instituicao}</Title>
      <Paragraph>Curso: {curso}</Paragraph>
      <Paragraph>Data de Início: {dataInicio}</Paragraph>
      <Paragraph>Data de Finalização: {dataFim}</Paragraph>
    </Card.Content>
  </Card>
 );
 
 export default CardAcademico;