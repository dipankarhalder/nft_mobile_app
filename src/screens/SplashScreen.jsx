import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../config/colors';
import FONTS from '../config/fonts';
import ROUTE from '../config/router';
import loginBg from '../assets/images/mainbg.png';

export function SplashScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.main_container}>
        <View style={styles.image_wrap}>
          <Image source={loginBg} style={styles.main_image} />
        </View>
        <Pressable
          style={styles.press_main_btn}
          onPress={() => navigation.navigate(ROUTE.homeTabs)}>
          <Text style={styles.press_btn_text}>Get Started</Text>
          <Icon name="arrow-right-circle" size={24} color={COLORS.white} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
  },
  main_container: {
    flex: 1,
    paddingTop: 180,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.theme,
  },
  image_wrap: {
    width: '100%',
    height: 400,
  },
  main_image: {
    width: '100%',
    height: 400,
  },
  press_main_btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 70,
    paddingLeft: 28,
    paddingRight: 24,
    backgroundColor: COLORS.btnbg,
  },
  press_btn_text: {
    fontSize: 16,
    height: 50,
    lineHeight: 50,
    paddingRight: 14,
    textAlign: 'center',
    color: COLORS.white,
    fontFamily: FONTS.semibold,
    fontWeight: 600,
  },
});
