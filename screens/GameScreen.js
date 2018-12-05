import React from 'react';
import {
  Image,
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

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Jeux pour apprendre la CNV',
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={styles.text}>
            Jeux pour apprendre la CNV
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
    marginBottom: 20,
  },
});
