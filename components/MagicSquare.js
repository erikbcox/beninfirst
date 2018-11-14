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

    style = {
      domino :{
        width: (this.state.width / 2)
      },
      equals: {
        width: (this.state.width / 4)
      },
      answer:{        
        width: (this.state.width / 4)
      },
      row:{
        height: this.state.width / 4
      }
    }

    return <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={{fontSize:50, height:style.row.height*.90, textAlign:'center', justifyContent: 'center',}}>Magic Dominos</Text>
      <DominoRow leftValue={1} rightValue={4} width={this.state.width} />
      <DominoRow leftValue={6} rightValue={3} width={this.state.width} />
      <AnswerRow width={this.state.width} />
    </View>
      ;
  }
}
