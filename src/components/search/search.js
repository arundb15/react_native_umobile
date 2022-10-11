import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constant/theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {strings} from '../../utils/strings';

export default class searchBar extends Component {
  render() {
    const {Title, goBack, rightIcon, onChange, onPressRight} = this.props;

    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder={Title}
            style={styles.input}
            placeholderTextColor={colors.black}
            onChangeText={onChange}
          />
          <Icon
            name="md-search"
            size={wp('5%')}
            color={colors.blue}
            style={styles.searchIcon}
          />
        </View>
        <TouchableOpacity style={styles.likeBox} onPress={onPressRight}>
          <Icon1
            name="filter-outline"
            size={wp('6.2%')}
            style={{width: wp('6.5%')}}
            color={colors.blue}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '82%',
    backgroundColor: colors.likeBackground,
    borderColor: colors.lightGray1,
    borderWidth: 1,
    borderRadius: wp('3%'),
    paddingHorizontal: wp('3%'),
  },
  input: {
    width: wp('52%'),
  },
  searchIcon: {
    alignSelf: 'center',
  },
  searchContainer: {
    width: '90%',
    height: wp('13%'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: 20,
  },
  likeBox: {
    width: '13%',
    borderRadius: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.likeBackground,
    borderColor: colors.lightGray1,
    borderWidth: 1,
  },
});
