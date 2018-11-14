import React from 'react';
import {  Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export class AnswerRow extends React.Component {
  constructor(props) {
    super(props)
  }
  style = {
    parentBox: {
      justifyContent: 'space-between',
    },
    equals: {
      width: (this.props.width / 4)
    },
    plus: {
      width: (this.props.width / 4)
    },
    answer:{        
      width: (this.props.width / 4)
    },
    row:{
      height: this.props.width / 4
    }
  }

  render() {
    return <View style={this.style.parentBox}>
    <View style={{ flexDirection: 'row', height:style.row.height }}>
    <View style={{ width:style.answer.width, borderColor: '#A9A9A9', borderWidth: '2', }} >
        <TextInput style={{ backgroundColor: 'khaki', 
                            textAlign: 'center', 
                            height: style.answer.width, 
                            fontSize: 60, padding: 5, }} 
                            keyboardType='numeric' placeholder="?" maxLength={2}></TextInput>
      </View>

      <View style={{ width:style.answer.width, borderColor: '#A9A9A9', borderWidth: '2', }} >
        <TextInput style={{ backgroundColor: 'khaki', 
                            textAlign: 'center', 
                            height: style.answer.width, 
                            fontSize: 60, padding: 5, }} 
                            keyboardType='numeric' placeholder="?" maxLength={2}></TextInput>
      </View>
      
      <View style={{ width:style.answer.width, borderColor: '#A9A9A9', borderWidth: '2', }} >
        <TextInput style={{ backgroundColor: 'khaki', 
                            textAlign: 'center', 
                            height: style.answer.width, 
                            fontSize: 60, padding: 5, }} 
                            keyboardType='numeric' placeholder="?" maxLength={2}></TextInput>
      </View>
    </View>
  </View>
  }
}
