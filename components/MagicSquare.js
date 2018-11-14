import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { AnswerRow } from './AnswerRow';
import { Domino } from './Domino';
import { DominoRow } from './DominoRow';
import { TextInput } from 'react-native-gesture-handler';

export class MagicSquare extends React.Component {
  constructor(props) {
    super(props)
    let { width, height } = Dimensions.get('window')
    this.state = { width, height };
  }
  render() {

    return <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={{fontSize:50, height:(this.state.width / 4)*.90, textAlign:'center', justifyContent: 'center',}}>Magic Dominos</Text>
      <DominoRow leftValue={1} rightValue={4} width={this.state.width} />
      <DominoRow leftValue={6} rightValue={3} width={this.state.width} />
      <AnswerRow width={this.state.width} />
    </View>
      ;
  }
}
