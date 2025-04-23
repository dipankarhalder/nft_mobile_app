import React, {useState} from 'react';
import {StyleSheet, View, Image, Pressable} from 'react-native';
import FontAwsomeIcon from 'react-native-vector-icons/FontAwesome';
import mainbanner1 from '../../assets/images/mainbanner1.jpg';
import mainbanner2 from '../../assets/images/mainbanner2.jpg';
import COLORS from '../../config/colors';

export const BannerCards = () => {
  const [slider, setSlider] = useState('slider_1');

  return (
    <View style={styles.main_banner}>
      {slider === 'slider_1' && (
        <View style={styles.main_banner_item}>
          <Image source={mainbanner1} style={styles.main_banner_img} />
        </View>
      )}
      {slider === 'slider_2' && (
        <View style={styles.main_banner_item}>
          <Image source={mainbanner2} style={styles.main_banner_img} />
        </View>
      )}
      <View style={styles.banner_dots}>
        <Pressable
          style={styles.press_main_btn}
          onPress={() => setSlider('slider_1')}>
          <FontAwsomeIcon
            name={slider === 'slider_1' ? 'circle' : 'circle-o'}
            size={12}
            color={COLORS.theme}
          />
        </Pressable>
        <Pressable
          style={styles.press_main_btn}
          onPress={() => setSlider('slider_2')}>
          <FontAwsomeIcon
            name={slider === 'slider_2' ? 'circle' : 'circle-o'}
            size={12}
            color={COLORS.theme}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_banner: {
    width: '100%',
  },
  main_banner_item: {
    width: '100%',
  },
  main_banner_img: {
    width: '100%',
    height: 220,
    borderRadius: 16,
  },
  banner_dots: {
    marginTop: 10,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
});
