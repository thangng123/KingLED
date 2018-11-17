import React, { Component, PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Slider, TextInput
} from 'react-native';
class ColorControll extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <View style={styles.viewController}>
        <Text> {this.props.title}</Text>
        <Slider onValueChange={
          (val) => {
            this.props.onValueChange(val);
          }
        } value={this.props.value} step={1} maximumValue={255} minimumValue={0} style={styles.sliderBar} />
        <View>
          <TextInput value={`${this.props.value}`} style={styles.textInput} />
        </View>
      </View>
    )
  }
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      red: 100,
      green: 200,
      blue: 150
    }
  }
  onSliderValuchange = (color) => {
    this.setState(color);
    console.log(color);
  }

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.textHeader}>Color Picker</Text>
      </View>
    )

  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
            <View style={styles.contentWrapTop}>
              <ColorControll title='R' value={this.state.red} onValueChange={(val) => {
                const current = this.state;
                const newColor = { ...current, red: val };
                this.onSliderValuchange(newColor);
              }} />
              <ColorControll title='G' value={this.state.green} onValueChange={(val) => {
                const current = this.state;
                const newColor = { ...current, green: val };
                this.onSliderValuchange(newColor);
              }} />
              <ColorControll title='B' value={this.state.blue} onValueChange={(val) => {
                const current = this.state;
                const newColor = { ...current, blue: val };
                this.onSliderValuchange(newColor);
              }} />
            </View>
            <View style={{ flex: 1, backgroundColor: `rgb(${this.state.red},${this.state.green},${this.state.blue})` }}>

            </View>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 65,
    backgroundColor: '#ECEFF1',
    alignItems: 'center', // chieu ngang
    justifyContent: 'center', // chieu doc,
    shadowColor: 'gray', // mau
    shadowOffset: { width: 0, height: 2 }, //nam ngang
    shadowOpacity: 0.5,
    elevation: 4
  },
  textHeader: {
    fontSize: 20,
    ...Platform.select({
      ios: {
        marginTop: 15
      },
      android: {
        marginTop: 0
      }
    })
  },
  content: {
    flex: 1, // lay phan con lai cua man hinh

    alignItems: 'center',
    justifyContent: 'center'
  },
  contentWrapper: {
    width: 300,
    height: 350,
    flexDirection: 'column' // phan chia theo ngang hoac dung column - mac dinh
  },
  contentWrapTop: {
    flex: 1, // 2 view flex 1 chia doi
  },
  contentWrapBottom: {
    flex: 1, // 2 view flex 1 chia doi

  },
  viewController: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderBar: {
    width: 200
  },
  textInput: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1, // do day
    borderRadius: 5,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        height: 30,
        paddingBottom: 2
      },
      android: {
        height: 35,
        paddingBottom: 8
      }
    })
  },
  container: {
    flex: 1, // lay het man hinh
    backgroundColor: '#F5FCFF',
  }
});
