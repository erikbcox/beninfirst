import React from 'react';
import { Domino } from './Domino';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export class DominoRow extends React.Component {
  constructor(props) {
    super(props)
  }
  style = {
    domino: {
      width: (this.props.width / 2)
    },
    equals: {
      width: (this.props.width / 4)
    },
    answer: {
      width: (this.props.width / 4)
    },
    row: {
      height: this.props.width / 4
    }
  }

  render() {
    return <View style={{ height: 100, marginLeft: 3, marginRight: 3 }}>
      <View style={{ flexDirection: 'row', height: style.row.height }}>
        <Domino width={style.domino.width} height={style.row.height} style={{ width: style.domino.width, height: style.row.height }} leftValue={this.props.leftValue} rightValue={this.props.rightValue} />
        <Text style={{ width: '10%', height: style.row.height, fontSize: 60, justifyContent: 'center', }}>=</Text>
        <View style={{ width: style.answer.width, borderColor: '#A9A9A9', borderWidth: '2', }} >
          <TextInput style={{
            backgroundColor: 'khaki',
            textAlign: 'center',
            height: style.answer.width,
            fontSize: 60, padding: 5,
          }}
            keyboardType='numeric' placeholder="?" maxLength={2}></TextInput>
        </View>
      </View>
    </View>
  }
}
