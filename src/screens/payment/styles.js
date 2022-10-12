import {StyleSheet} from 'react-native';
import {colors} from '../../constant/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {cloneElement} from 'react';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.lightPurple},
  container1: {backgroundColor: colors.lightPurple, height: hp('80%')},
  footer: {
    backgroundColor: colors.lightGray2,
    height: hp('50%'),
    flexDirection: 'row',
  },
  button: {
    width: '28%',
    height: '10%',
    marginLeft: wp('35%'),
    marginTop: hp('3%'),

    elevation: 2,

    borderRadius: 10,
    marginBottom: 8,
    backgroundColor: colors.black,
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
});

export default styles;
