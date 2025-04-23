import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {Header} from '../componets/common/Header';
import FONTS from '../config/fonts';
import COLORS from '../config/colors';
import mb1 from '../assets/images/m3.jpg';
import mb2 from '../assets/images/m2.png';
import mainbanner1 from '../assets/images/mainbanner1.jpg';
import mainbanner2 from '../assets/images/mainbanner2.jpg';
import tdi from '../assets/images/tdi.png';

export const ExploreScreen = () => {
  const [selItem, setSelItem] = useState('sel_1');

  return (
    <SafeAreaView style={styles.safe_area}>
      <ScrollView style={styles.page_wrapper}>
        <View style={styles.full_content}>
          <Header />
        </View>
        <View style={styles.full_cover_row}>
          <Text style={styles.main_heading_text}>Explore</Text>
          <View style={styles.head_row_items_head}>
            <Pressable
              style={
                selItem === 'sel_1'
                  ? styles.press_main_actv_btn
                  : styles.row_sub_itm
              }
              onPress={() => setSelItem('sel_1')}>
              <Text
                style={
                  selItem === 'sel_1'
                    ? styles.press_text_actv
                    : styles.press_text
                }>
                Stake
              </Text>
            </Pressable>
            <Pressable
              style={
                selItem === 'sel_2'
                  ? styles.press_main_actv_btn
                  : styles.row_sub_itm
              }
              onPress={() => setSelItem('sel_2')}>
              <Text
                style={
                  selItem === 'sel_2'
                    ? styles.press_text_actv
                    : styles.press_text
                }>
                PolygonNFT
              </Text>
            </Pressable>
            <Pressable
              style={
                selItem === 'sel_3'
                  ? styles.press_main_actv_btn
                  : styles.row_sub_itm
              }
              onPress={() => setSelItem('sel_3')}>
              <Text
                style={
                  selItem === 'sel_3'
                    ? styles.press_text_actv
                    : styles.press_text
                }>
                Art
              </Text>
            </Pressable>
            <Pressable
              style={
                selItem === 'sel_4'
                  ? styles.press_main_actv_btn
                  : styles.row_sub_itm
              }
              onPress={() => setSelItem('sel_4')}>
              <Text
                style={
                  selItem === 'sel_4'
                    ? styles.press_text_actv
                    : styles.press_text
                }>
                Collectibles
              </Text>
            </Pressable>
          </View>
          {selItem === 'sel_1' && (
            <View style={styles.count_crypto_list}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
                <View style={styles.crypto_list_items} key={item}>
                  <Image
                    source={item % 2 === 0 ? mb1 : mb2}
                    style={styles.crypto_list_log_img}
                  />
                  <Text style={styles.list_text_crypto}>Stake_237960</Text>
                  <View style={styles.crypto_img_inside_item}>
                    <View style={styles.row_price_text}>
                      <Image source={tdi} style={styles.crypto_log_img_row} />
                      <Text style={styles.crypto_price_text_item}>
                        235 USDT
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          )}
          {selItem === 'sel_2' && (
            <View style={styles.count_crypto_list}>
              <View style={styles.count_crypto_list}>
                {[1, 2].map(item => (
                  <Pressable
                    style={styles.poly_list_items}
                    key={item}
                    onPress={() => console.log('sel_1')}>
                    <Image
                      source={item % 2 === 0 ? mainbanner1 : mainbanner2}
                      style={styles.ploy_list_log_img}
                    />
                    <View style={styles.poly_price_text}>
                      <Image source={mb2} style={styles.poly_log_img_row} />
                      <Text style={styles.poly_price_text_item}>
                        Noxious Audience
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe_area: {
    // justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  page_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 30,
  },
  full_content: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 16,
  },
  full_cover_row: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  main_heading_text: {
    fontSize: 22,
    textTransform: 'uppercase',
    fontFamily: FONTS.bold,
    marginBottom: 20,
  },
  head_row_items_head: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 0,
    gap: 10,
  },
  row_sub_itm: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: COLORS.border,
  },
  press_main_actv_btn: {
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: COLORS.theme,
  },
  press_text: {
    fontSize: 14,
    fontFamily: FONTS.semibold,
  },
  press_text_actv: {
    fontSize: 14,
    fontFamily: FONTS.semibold,
    color: COLORS.white,
  },
  row_sub_head_sub: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  count_crypto_list: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  crypto_list_items: {
    width: '48%',
    marginBottom: 6,
    borderWidth: 1,
    borderRadius: 16,
    padding: 12,
    borderColor: COLORS.border,
  },
  crypto_list_log_img: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 8,
  },
  list_text_crypto: {
    fontSize: 14,
    fontFamily: FONTS.semibold,
    marginBottom: 4,
  },
  crypto_img_inside_item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  crypto_log_img_item: {
    width: 24,
    height: 24,
    borderRadius: 16,
    backgroundColor: '#cccccc',
  },
  row_price_text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  crypto_log_img_row: {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  crypto_price_text_item: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: '#26a17b',
  },
  discover_btn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 70,
  },
  text_discover: {
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 6,
    fontFamily: FONTS.semibold,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.border,
    borderColor: COLORS.border,
    marginTop: 20,
  },
  poly_list_items: {
    width: '100%',
    marginBottom: 6,
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
    borderColor: COLORS.border,
  },
  ploy_list_log_img: {
    width: '100%',
    height: 180,
  },
  poly_price_text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  poly_log_img_row: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  poly_price_text_item: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
});
