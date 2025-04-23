import React from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import COLORS from '../../config/colors';
import logo from '../../assets/images/logo.png';

export const Header = () => {
  return (
    <View style={styles.header_content}>
      <View style={styles.header_logo}>
        <Image source={logo} style={styles.main_logo} />
      </View>
      <View style={styles.header_spcl_part}>
        <Pressable
          style={styles.press_main_btn}
          onPress={() => console.log('fsjhghjds')}>
          <FeatherIcon name="bell" size={28} color={COLORS.theme} />
        </Pressable>
        <Pressable
          style={styles.press_main_btn}
          onPress={() => console.log('fsjhghjds')}>
          <FeatherIcon name="menu" size={28} color={COLORS.theme} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header_logo: {
    display: 'flex',
    width: 140,
  },
  main_logo: {
    width: 140,
  },
  header_spcl_part: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
  },
});
