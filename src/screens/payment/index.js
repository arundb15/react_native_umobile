import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  PermissionsAndroid,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/header/header';
import styles from './styles';
import {strings} from '../../utils/strings';

import {colors} from '../../constant/theme';

import SearchBar from '../../components/search/search';
import Card from '../../components/card/card';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window').width;

class payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
    };
  }
  componentDidMount = () => {
    this.setState({price: this?.props?.route?.params?.price});
    console.log(this?.props?.route?.params?.price);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          Title="Payment"
          goBack={() => this.props.navigation.goBack()}
          headerId={2}
        />
        <View style={styles.container1}></View>
        <View style={styles.footer}>
          <View>
            <Text
              style={{
                fontSize: 18,
                color: colors.gliterblack,
                marginLeft: widthPercentageToDP('5%'),
                marginTop: heightPercentageToDP('1%'),
              }}>
              ₹{this.state.price}.00
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginLeft: widthPercentageToDP('5%'),
                  marginTop: heightPercentageToDP('1.1%'),
                }}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontSize: 14,color:colors.airtelText,alignSelf:"center",marginTop:heightPercentageToDP(".8%")}}>Pay now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default payment;
