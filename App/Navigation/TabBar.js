import React from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  Image,
  Platform,
} from 'react-native';

const isIos = Platform.OS === 'ios';
const TabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const titleSet = value => {
    let title = '';
    switch (value) {
      case 'Home':
        title = 'Beranda';
        break;
      case 'Jual & Jasa':
        title = 'Jual & Jasa';
        break;
      case 'Agenda':
        title = 'Agenda';
        break;
      case 'Feed':
        title = 'Inspirasi';
        break;
      case 'Chat':
        title = 'Obrolan';
        break;
      case 'Profil':
        title = 'Masuk';
        break;
      default:
        title = '';
        break;
    }
    return title;
  };

  const getIcon = (name, isActive) => {
    let iconTab = require('../Assets/Images/footerActive/home.webp');
    if (isActive) {
      switch (name) {
        case 'Home':
          iconTab = require('../Assets/Images/footerActive/home.webp');
          break;
        case 'Agenda':
          iconTab = require('../Assets/Images/footerActive/calendar.webp');
          break;
        case 'Jual & Jasa':
          iconTab = require('../Assets/Images/footerActive/cart.webp');
          break;
        case 'Chat':
          iconTab = require('../Assets/Images/footerActive/chat.png');
          break;
        case 'Profil':
          iconTab = require('../Assets/Images/footerActive/profile.png');
          break;
        default:
          iconTab = require('../Assets/Images/footerActive/home.webp');
          break;
      }
    } else {
      switch (name) {
        case 'Home':
          iconTab = require('../Assets/Images/footerInActive/home.webp');
          break;
        case 'Agenda':
          iconTab = require('../Assets/Images/footerInActive/calendar.webp');
          break;
        case 'Jual & Jasa':
          iconTab = require('../Assets/Images/footerInActive/cart.webp');
          break;
        case 'Chat':
          iconTab = require('../Assets/Images/footerInActive/chat.png');
          break;
        case 'Profil':
          iconTab = require('../Assets/Images/footerInActive/profile.png');
          break;
        default:
          iconTab = require('../Assets/Images/footerInActive/home.webp');
          break;
      }
    }
    return iconTab;
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: isIos ? 20 : 8,
        borderTopWidth: 0.5,
        borderColor: '#F0F2F7',
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const label = route.name;
        // const image = ''

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.1)', true)}
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ alignItems: 'center' }}>
            <View style={{ alignItems: 'center', width: '25%' }}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 30,
                  height: isFocused ? 1 : 0,
                  backgroundColor: '#064eae',
                  marginBottom: 7,
                }}
              />
              <Image
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: isFocused && label === 'Home' ? 50 : 23,
                  height: 23,
                  zIndex: 0,
                  tintColor: isFocused ? '#064eae' : '#53565F',
                }}
                source={getIcon(label, isFocused)}
                resizeMode="contain"
              />
              <Text
                allowFontScaling={false}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: isFocused ? '#064eae' : '#53565F',
                  fontFamily: 'Inter-Medium',
                  fontSize: 9,
                  paddingLeft: 2,
                  lineHeight: 12,
                  marginTop: 5,
                }}>
                {titleSet(label)}
              </Text>
            </View>
          </TouchableNativeFeedback>
        );
      })}
    </View>
  );
};

export default TabBar;
