import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Accueil',
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={styles.text}>
            Cette application est destinée aider les personnes souhaitant améliorer la communication au sein de leurs relations sociales.
          </Text>
          <Text style={styles.text}>
            La communication non violente est un outil de communication qui, utilisée dans un but de bienveillance, amène de nombreux bénéfices tels que l'introspection, une meilleure expression des pensées et donc une meilleure compréhension de la part des interlocuteurs.
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate('About')}
            style={styles.knowMore}>
            En apprendre plus sur {"\n"} la communcation non violente
          </Text>
          <Text style={styles.text}>
            Vous trouverez aussi un jeu de rôle permettant de vous entrainer à réagir comme une girafe quand vous êtes face à un chacal !
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate('Game')}
            style={styles.knowMore}>
            Jouer pour apprendre
          </Text>
          <Text style={styles.text}>
            Il est aussi possible d'intégrer la communication non violente dans des cas concrets auxquels vous êtes confrontés.
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate('Apply')}
            style={styles.knowMore}>
            Appliquer la CNV
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 15,
  },
  text: {
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    fontSize: 17,
    marginTop: 5,
    marginBottom: 12,
  },
  knowMore: {
    fontSize: 19,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#00ADEE',
    borderRadius: 4,
    color: 'white',
  }
});
