import React from 'react';
import { ScrollView, View, StyleSheet, Text, FlatList, Alert, Button } from 'react-native';

export default class ApplyScreen extends React.Component {

  static navigationOptions = {
    title: 'Appliquer concrètement',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.text}>
            Utilisation de la communcation non violente avec un cas concret
              - Faits
              - Émotions associées
              - Besoins
              - Demande
            Autres :
              - Difficulté à aborder le sujet
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  text: {
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
    fontSize: 17,
    marginBottom: 10,
  },
});
