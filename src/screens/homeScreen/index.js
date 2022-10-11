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

import Contacts from 'react-native-contacts';
import RBSheet from 'react-native-raw-bottom-sheet';

const {width} = Dimensions.get('window').width;

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCoupon: null,
      currentIndex: 0,
      contact: '',
      searchText: '',
      filteredData: [],
      sort: 0,
      speedStart: 0,
      speedEnd: 0,
      data: [
        {
          rupee: '₹589',
          speed: 40,
          valdity: '1 month',
          lastRecharage: false,
        },
        {
          rupee: '589',
          speed: 40,
          valdity: '1 month',
          lastRecharage: false,
        },
        {
          rupee: '589',
          speed: 40,
          valdity: '1 month',
          lastRecharage: false,
        },
      ],

      moneySaver: [
        {
          id: 0,

          price: '589',
          price1: 'unlimited',
          speed: 40,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 1,
          price: '589',
          price1: 'unlimited',
          speed: 50,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 2,
          price: '589',
          price1: 'unlimited',
          speed: 70,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 3,
          price: '589',
          price1: 'unlimited',
          speed: 80,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 4,
          price: '589',
          price1: 'unlimited',
          speed: 40,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 5,
          price: '589',
          price1: 20,
          speed: 400,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
      ],

      entertainment: [
        {
          id: 0,
          price: '689',
          price1: 'unlimited',
          speed: 100,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 1,
          price: '689',
          price1: 'unlimited',
          speed: 100,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 2,
          price: '689',
          price1: 'unlimited',
          speed: 100,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 3,
          price: '689',
          price1: 'unlimited',
          speed: 100,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 4,
          price: '689',
          price1: 'unlimited',
          speed: 200,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
      ],

      basic: [
        {
          id: 0,
          price: '189',
          price1: 'unlimited',
          speed: 30,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 1,
          price: '189',
          price1: 'unlimited',
          speed: 30,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 2,
          price: '189',
          price1: 'unlimited',
          speed: 30,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 3,
          price: '189',
          price1: 'unlimited',
          speed: 30,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 4,
          price: '189',
          price1: 'unlimited',
          speed: 30,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 5,
          price: '189',
          price1: 'unlimited',
          speed: 30,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 6,
          price: '189',
          price1: 'unlimited',
          speed: 30,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
        {
          id: 7,
          price: '189',
          price1: 'unlimited',
          speed: 30,
          speed1: 'speed',
          valdity: '1 month',
          valdity1: 'valdity',
        },
      ],
    };
  }

  contacts = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(
      Contacts.getAll()
        .then(contacts => {
          // work with contacts
          console.log(contacts);
        })
        .catch(e => {
          console.log(e);
        }),
    );
  };
  viewabilityConfig = {
    waitForInteraction: true,

    viewAreaCoveragePercentThreshold: 95,
    itemVisiblePercentThreshold: 75,
  };

  priceFilter = () => {
    let {moneySaver, basic, entertainment, speedStart, speedEnd} = this.state;
    moneySaver = moneySaver.filter(
      a => a.speed >= speedStart && a.speed <= speedEnd,
    );
    basic = basic.filter(a => a.speed >= speedStart && a.speed <= speedEnd);
    entertainment = entertainment.filter(
      a => a.speed >= speedStart && a.speed <= speedEnd,
    );

    this.setState({filteredData: [...moneySaver, ...basic, ...entertainment]});
  };
  searchFn = value => {
    let {moneySaver, basic, entertainment} = this.state;
    console.log({moneySaver, basic, entertainment}, 'before');
    if (!value) return this.setState({filteredData: []});
    moneySaver = moneySaver.filter(ms => {
      let regexValue = new RegExp(value, 'i');
      if (regexValue.test(ms.price)) return true;
      if (regexValue.test(ms.valdity)) return true;
      if (regexValue.test(ms.speed)) return true;
      return false;
    });
    basic = basic.filter(ms => {
      let regexValue = new RegExp(value, 'i');
      if (regexValue.test(ms.price)) return true;
      if (regexValue.test(ms.valdity)) return true;
      if (regexValue.test(ms.speed)) return true;
      return false;
    });
    entertainment = entertainment.filter(ms => {
      let regexValue = new RegExp(value, 'i');
      if (regexValue.test(ms.price)) return true;
      if (regexValue.test(ms.valdity)) return true;
      if (regexValue.test(ms.speed)) return true;
      return false;
    });

    this.setState({filteredData: [...moneySaver, ...basic, ...entertainment]});
  };

  handleScroll = event => {
    console.log(event.nativeEvent.contentOffset.y);
    // console.log('item===>',event.index)
    if (event.nativeEvent.contentOffset.y == 0) {
      this.flatListRef.scrollToIndex({animated: true, index: 0});
      this.setState({currentIndex: 0});
    } else if (
      event.nativeEvent.contentOffset.y > 700 &&
      event.nativeEvent.contentOffset.y < 1350
    ) {
      this.flatListRef.scrollToIndex({animated: true, index: 1});
      this.setState({currentIndex: 1});
    } else if (
      event.nativeEvent.contentOffset.y > 1360 &&
      event.nativeEvent.contentOffset.y < 1670
    ) {
      this.flatListRef.scrollToIndex({animated: true, index: 2});
      this.setState({currentIndex: 2});
    }
  };
  scrollFn = index => {
    this.setState({currentIndex: index});

    this.scrollRef.scrollToIndex({
      animated: true,
      index: index,
    });

    this.flatListRef.scrollToIndex({
      animated: true,
      index: index,
    });
  };
  renderView = id => {
    switch (id) {
      case 0:
        return (
          <>
            <FlatList
              data={this.state.moneySaver}
              renderItem={({item}) => {
                return (
                  <Card
                    price={item.price}
                    price1={item.price1}
                    speed={item.speed}
                    speed1={item.speed1}
                    valdity={item.valdity}
                    valdity1={item.valdity1}
                  />
                  // <Text
                  //   style={{
                  //     fontSize: 15,
                  //     fontWeight: '600',
                  //     color: 'black',
                  //     marginVertical: 5,
                  //   }}>
                  //   {item.data}
                  // </Text>
                );
              }}
            />
          </>
        );
        break;
      case 1:
        return (
          <>
            {this.state.entertainment.map(item => {
              return (
                <Card
                  price={item.price}
                  price1={item.price1}
                  speed={item.speed}
                  speed1={item.speed1}
                  valdity={item.valdity}
                  valdity1={item.valdity1}
                />
              );
            })}
          </>
        );
      case 2:
        return (
          <>
            {this.state.basic.map(item => {
              return (
                <Card
                  price={item.price}
                  price1={item.price1}
                  speed={item.speed}
                  speed1={item.speed1}
                  valdity={item.valdity}
                  valdity1={item.valdity1}
                />
              );
            })}
          </>
        );

        return (
          <>
            <Text style={{fontSize: 24, color: 'pink', fontWeight: 'bold'}}>
              Instagram
            </Text>
            {instagramData.map(item => {
              return (
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: 'black',
                    marginVertical: 5,
                  }}>
                  {item.data}
                </Text>
              );
            })}
          </>
        );
      default:
        <View />;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header Title="recharge" rightIcon="help-circle" />
        <View style={styles.headerCard}>
          <View style={styles.headerCardContainer}>
            <View>
              <Text style={styles.airtelText}>{strings.enterairtelid}</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.numbertextIp}
                maxLength={10}
                value={this.state.contact}
              />
            </View>
            <TouchableOpacity
              style={styles.contactIcon}
              onPress={() => this.setState({contact: '9789645655'})}>
              <Icon1 name="contact-page" color={colors.lightGray} size={25} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <View style={styles.line}></View>
          <SearchBar
            Title={strings.searchby}
            onChange={value => {
              this.setState({searchText: value}, () => this.searchFn(value));
            }}
            onPressRight={() => {
              this.RBSheet.open();
            }}
          />

          <View style={styles.tabBar}>
            {console.log(this.state.filteredData, 'filtered')}

            {this.state.filteredData.length > 0 ? (
              <FlatList
                data={this.state.filteredData}
                renderItem={({item, index}) => {
                  return (
                    <Card
                      price={item.price}
                      price1={item.price1}
                      speed={item.speed}
                      speed1={item.speed1}
                      valdity={item.valdity}
                      valdity1={item.valdity1}
                    />
                  );
                }}
              />
            ) : (
              <>
                <FlatList
                  key={'1'}
                  data={[
                    {
                      id: 0,
                      data: 'Money saver',
                    },
                    {
                      id: 1,
                      data: 'entertainment',
                    },

                    {
                      id: 2,
                      data: 'basic',
                    },
                  ]}
                  snapToAlignment="start"
                  viewabilityConfig={{
                    itemVisiblePercentThreshold: 50,
                  }}
                  ref={ref => (this.flatListRef = ref)}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  style={styles.horizontalFlat}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={styles.tabsPosition}
                        onPress={() => this.scrollFn(item.id)}>
                        <Text
                          style={[
                            styles.tabs,
                            {
                              color:
                                this.state.currentIndex === index
                                  ? colors.gliterblack
                                  : colors.lightGray,
                            },
                          ]}>
                          {item.data}
                        </Text>
                        {this.state.currentIndex === index && (
                          <View style={styles.indicator} />
                        )}
                      </TouchableOpacity>
                    );
                  }}
                />

                <FlatList
                  key={'2'}
                  data={[{id: 0}, {id: 1}, {id: 2}, {id: 3}, {id: 4}]}
                  renderItem={({item}) => this.renderView(item.id)}
                  scrollEventThrottle={16}
                  onScroll={e => this.handleScroll(e)}
                  ref={ref => (this.scrollRef = ref)}
                />
              </>
            )}
          </View>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={300}
            openDuration={250}
            customStyles={{
              container: {
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}>
            <TouchableOpacity
              onPress={() =>
                this.setState(
                  {speedStart: 0, speedEnd: 50},
                  this.priceFilter,
                  this.RBSheet.close(),
                )
              }>
              <Text style={styles.sortData}>0-50 mbps</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState(
                  {speedStart: 50, speedEnd: 100},
                  this.priceFilter,
                  this.RBSheet.close(),
                )
              }>
              <Text style={styles.sortData}>50-100 mbps</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState(
                  {speedStart: 100, speedEnd: 200},
                  this.priceFilter,
                  this.RBSheet.close(),
                )
              }>
              <Text style={styles.sortData}>100-200 mbps</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setState(
                  {speedStart: 100, speedEnd: 200},
                  this.priceFilter,
                  this.RBSheet.close(),
                )
              }>
              <Text style={styles.sortData}>200-500 mbps</Text>
            </TouchableOpacity>
          </RBSheet>
        </View>
      </SafeAreaView>
    );
  }
}

export default home;
