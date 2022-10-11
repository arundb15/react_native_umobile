import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../constant/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default class card extends Component {
  render() {
    const {
      Title,
      goBack,
      rightIcon,
      price,
      price1,
      speed,
      speed1,
      valdity,
      valdity1,
    } = this.props;

    return (
      <TouchableOpacity style={styles.headerCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.text1}>{price}</Text>
            <Text style={styles.text2}>{price1}</Text>
          </View>
          <View>
            <Text style={styles.text1}>
              {speed} {'mbps'}
            </Text>
            <Text style={styles.text2}>{speed1}</Text>
          </View>
          <View>
            <Text style={styles.text1}>{valdity}</Text>
            <Text style={styles.text2}>{valdity1}</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.extreme}>Xtreme premium</Text>
          <Text style={styles.viewDetails}>View details</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  iconBg: {
    height: 50,
    width: 50,
    borderRadius: 33,
    backgroundColor: colors.lightGray4,
    padding: 10,
    marginTop: hp('1.5%'),
  },
  title: {
    fontSize: hp('3%'),

    textAlign: 'center',
    marginTop: hp('2%'),
    color: colors.white,
  },
  headerCard: {
    width: '98%',
    alignSelf: 'center',

    elevation: 2,

    marginTop: hp('2%'),
    borderRadius: 17,
    marginBottom: 8,
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: wp('.4%'),
    shadowColor: colors.lightGray1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  line: {
    height: hp('.1%'),
    width: wp('88%'),

    alignSelf: 'center',
    marginTop: hp('1.5%'),

    backgroundColor: colors.line,
  },
  text1: {
    fontSize: hp('2.2%'),
    paddingHorizontal: 15,
    paddingTop: 15,
    fontWeight: 'bold',
    color: colors.gliterblack,
  },
  text2: {
    fontSize: hp('1.5%'),
    paddingTop: 4,

    paddingHorizontal: 15,
  },
  extreme: {
    fontSize: hp('1.4%'),
    padding: 10,
  },
  viewDetails: {
    fontSize: hp('1.4%'),
    padding: 10,
  },
});
