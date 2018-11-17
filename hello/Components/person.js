import React, { Component, PureComponent } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    // shouldComponentUpdate(){
    //   return true;
    // } 
    onTouch() {
        let newLike = ++this.state.liked;
        this.setState({ liked: newLike });
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onTouch.bind(this)}>
                <View>
                    <Text> Hello {this.state.name} - {this.state.liked}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}