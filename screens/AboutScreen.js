import React from 'react';
import { ScrollView, View, StyleSheet, Text, FlatList, Alert, Button } from 'react-native';

export default class AboutScreen extends React.Component {

  static navigationOptions = {
    title: 'Communication non violente',
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      steps: [
        {
          name : '1. Observer les faits de façon neutre',
          description : 'Il est recommander de parler de faits concrets pour décrire les événements plutôt que de juger ou d’interpréter.',
          visible: false,
        },
        {
          name : '2. Identification et expression des sentiments',
          description : 'La Communication Non Violente invite à développer notre intelligence émotionnelle pour accueillir et exprimer toute la palette des émotions et leurs messages. Sentiments et besoins : https://drive.google.com/file/d/16KcUcAhr8bUA4-5fSdJuKlf7wKNjBeKP/view?usp=sharing',
          visible: false,
        },
        {
          name : '3. Reconnaissance des besoins révélés par les sentiments',
          description : 'Universels et vitaux, ils constituent un terrain sur lequel les êtres humains peuvent se comprendre. Ils  sont  à  la  base  de  la  CNV, Marshall Rosenberg les définit ainsi :                      ils sont universels (communs à tous les êtres humains) ; ils sont l\'énergie vitale qui nous mobilise pour agir dans le sens qui va nous faire croître                      ils sont indépendants de tout contexte. Notamment, ils ne sont attachés:                      ni à unepersonne en particulier,                      ni à un objet,                      ni à une action,                      ni à une situation particulière                      Un besoin n’est jamais quelque chose que l’on peut faire, ni quelque chose que l’on peut                      prendre ou toucher. Mais on peut identifier la satisfaction ou non de ses besoins par une sensation physique.                      Voir la carte de sentiments et de besoins qui permet de distinguer lebesoin au sens de la CNV de l\'usage courant du mot besoin (par exemple: « j\'ai besoin d\'une bonne bière » ou  « j\'ai besoin que tu sois gentil avec moi »)                      Neuf besoins fondamentaux recouvrent à peu près toute la palette des besoins humains:                      Besoins physiologiques, bien-être physique                      Sécurité                      Empathie, compréhension                      Créativité                      Amour, intimité                     Jeu, distraction                      Repos, détente, récupération                      Autonomie                      Sens, spiritualité                      Il y a des obstacles à l\'expression des besoins:                      Le conditionnement social ou familial qui réprime l\'expression des sentiments                      Un manque d\'habitude à exprimer ses besoins                      Le manque de vocabulaire pour exprimer ses sentiments et sesbesoins (je vais "bien", je vais "mal")          \n\n            Croire qu\'on se met en situation de faiblesse (risque d\'être critiqué ou manipulé)                      Ne pas croire que l\'autre puisse faire preuve de bienveillance à l\'égard de nos besoins                      La  liste  de  besoins suivante  n\'est  ni  exhaustive  ni  définitive.  Elle  est  destinée  à  être  un  point  de  départ  pour  toute personne   souhaitant   approfondir   la   connaissance   de   soi   et  pour   faciliter   une   meilleure compréhension et une meilleure relation entre les personnes.',
          visible: false,
        },
        {
          name : '4. Formulation d\'une demande claire, concrète, positive et négociable',
          description : 'Une demande ouverte, sans exigence, permet de passer à l’action pour satisfaire tous les besoins en présence.',
          visible: false,
        },
      ]
    }
  }

  stepTitlePressed = (index) => (event) => {
    let tempState = this.state;
    tempState.steps[index].visible = !tempState.steps[index].visible;
    this.setState(tempState);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.text}>
            La communication Non Violente se vit sur deux plans:{"\n"}
            - le premier, fondement de la démarche, est l’intention de bienveillance et la recherche d'une qualité de relation{"\n"}
            - le deuxième, concret, est une façon de communiquer qui sert cette intention
          </Text>

          <Text style={styles.text}>
              L'utilisation de ces pratiques repose sur différentes aptitudes dont principalement :{"\n"}
            - l'auto-empathie ou écoute de soi, de ses besoins{"\n"}
            - l'honnêteté ou expression de son propre vécu sans juger ni agresser quiconque{"\n"}
            - l'empathie ou accueil respectueux du vécu de l'autre{"\n"}
              - la gratitude ou capacité de célébrer les beautés de la vie et les progrès.
          </Text>

          <Text style={styles.text}>
              Cette façon de communiquer est constituée de quatre étapes
          </Text>

          {
            this.state.steps.map((step, index) => {
              return (
                <View key={index}>
                    <Text onPress={this.stepTitlePressed(index)} style={styles.stepTitle}>
                      {step.name}
                    </Text>
                    <Text style={this.state.steps[index].visible ? styles.text : {display : 'none'}}>{step.description}</Text>
                </View>);
            })
          }
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
  stepTitle: {
    fontSize: 18,
    padding: 10,
    marginTop: 10,
    marginBottom: 7,
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
  text: {
    color: 'rgba(96,100,109, 1)',
    lineHeight: 20,
    fontSize: 17,
    marginBottom: 10,
  },
});
