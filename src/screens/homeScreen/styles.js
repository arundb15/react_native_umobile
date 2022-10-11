import {StyleSheet} from 'react-native';
import {colors} from '../../constant/theme';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {cloneElement} from 'react';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.gliterblack},
  headerCard: {
    width: '90%',
    alignSelf: 'center',

    elevation: 2,
    backgroundColor: colors.cardBg,
    marginTop: hp('3%'),
    borderRadius: 17,
    marginBottom: 8,
    borderColor: colors.bordercolor,
    borderWidth: wp('.4%'),
    shadowColor: colors.lightGray1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },

  headerCardContainer: {flexDirection: 'row'},
  tabContainer: {
    width: wp('100%'),
    height: hp('100%'),
    alignSelf: 'center',
    // padding:15,
    elevation: 2,
    backgroundColor: colors.lightPurple,
    marginTop: hp('1%'),
    borderTopStartRadius: 22,
    borderTopEndRadius: 22,
    marginBottom: 8,
    shadowColor: colors.lightGray1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  contactIcon: {
    alignSelf: 'center',
    left: 60,
  },
  airtelText: {
    fontSize: hp('1.7%'),
    color: colors.airtelText,
    marginTop: hp('1%'),
    marginLeft: hp('2%'),
  },
  numbertextIp: {color: colors.placeHolderNumber, marginLeft: wp('2%')},
  line: {
    height: hp('1%'),
    width: wp('13%'),
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: hp('1.5%'),

    backgroundColor: colors.line,
  },
  tabBar: {
    paddingHorizontal: 20,
    backgroundColor: colors.lightPurple,
    paddingTop: 20,
  },
  horizontalFlat: {paddingRight: 100, width: '100%'},
  tabsPosition: {flex: 1, marginEnd: 20},
  tabs: {
    fontSize: 16,

    color: colors.gliterblack,
    paddingHorizontal: 15,
  },
  indicator: {height: 3, backgroundColor: colors.gliterblack},
  sortData: {
    fontSize: hp('5%'),
    padding: 15,
  },
});

export default styles;
