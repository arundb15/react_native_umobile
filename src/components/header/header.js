import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '../../constant/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class header extends Component {
  render() {
    const {Title, goBack, rightIcon, headerId} = this.props;

    return (
      <>
        {headerId == 1 ? (
          <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
              <View style={styles.iconBg}>
                <Icon name="arrow-left" size={25} color={colors.white} />
              </View>
            </TouchableOpacity>
            <Text style={styles.title}>{Title}</Text>
            <View style={styles.iconBg1}>
              <Icon name={rightIcon} size={25} color={colors.white} />
            </View>
          </View>
        ) : headerId == 2 ? (
          <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
              <View style={styles.iconBg}>
                <Icon name="arrow-left" size={25} color={colors.white} />
              </View>
            </TouchableOpacity>
            <Text style={styles.title1}>{Title}</Text>
            <View>
              <Icon name={rightIcon} size={25} color={colors.white} />
            </View>
          </View>
        ) : null}
      </>
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
    left: 10,
  },
  iconBg1: {
    height: 50,
    width: 50,
    borderRadius: 33,
    backgroundColor: colors.lightGray4,
    padding: 10,
    marginTop: hp('1.5%'),
    right: 10,
  },
  title: {
    fontSize: hp('3%'),
    fontWeight: 'bold',

    textAlign: 'center',
    marginTop: hp('2%'),
    color: colors.white,
  },
  title1: {
    fontSize: hp('3%'),
    fontWeight: 'bold',

    textAlign: 'center',
    marginTop: hp('2%'),
    color: colors.gliterblack,
  },
});
