import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FONTS from '../../config/fonts';
import COLORS from '../../config/colors';
import mb1 from '../../assets/images/m1.jpg';
import mb2 from '../../assets/images/m2.png';
import mb3 from '../../assets/images/m3.jpg';
import tdi from '../../assets/images/tdi.png';
import sic from '../../assets/images/sic.png';

export const FeatureNft = () => {
  return (
    <View style={styles.full_cover_row}>
      <Text style={styles.main_heading_text}>Featured NFT Collectinles</Text>
      <View style={styles.head_row_items_head}>
        <Text style={styles.row_sub_head}>Last 24 hours</Text>
        <Text style={styles.row_sub_more}>more</Text>
      </View>
      <View style={styles.crypto_collection}>
        <View style={styles.crypto_main_img}>
          <Image source={mb2} style={styles.crypto_main_banner} />
          <View style={styles.crypto_row_div}>
            <View style={styles.crypto_round_title}>
              <Image source={mb3} style={styles.crypto_title_img} />
              <Text style={styles.crypto_heading_text}>
                Giffaff_ApeClub_dsjgfjdfjhdsf_4r4356
              </Text>
            </View>
            <View style={styles.crypto_inside}>
              <Text style={styles.crypto_content_text}>Highest Bid</Text>
              <View style={styles.crypto_img_inside}>
                <Image source={sic} style={styles.crypto_log_img} />
                <Text style={styles.crypto_price_text}>235 USDT</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.count_crypto_list}>
          {[2, 4, 6].map(item => (
            <View style={styles.crypto_list_items} key={item}>
              <Image source={mb1} style={styles.crypto_list_log_img} />
              <Text style={styles.list_text_crypto}>
                TheCryptoLuckyGirl_202
              </Text>
              <View style={styles.crypto_img_inside_item}>
                <Image source={sic} style={styles.crypto_log_img_item} />
                <View style={styles.row_price_text}>
                  <Image source={tdi} style={styles.crypto_log_img_row} />
                  <Text style={styles.crypto_price_text_item}>235</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.head_row_items}>
        <Text style={styles.row_sub_head_sub}>PEPE Frog Nobility</Text>
      </View>
      <View style={styles.crypto_collection}>
        <View style={styles.crypto_main_img}>
          <Image source={mb3} style={styles.crypto_main_banner} />
          <View style={styles.crypto_row_div}>
            <View style={styles.crypto_round_title}>
              <Image source={mb3} style={styles.crypto_title_img} />
              <Text style={styles.crypto_heading_text}>
                Giffaff_ApeClub_dsjgfjdfjhdsf_4r4356
              </Text>
            </View>
            <View style={styles.crypto_inside}>
              <Text style={styles.crypto_content_text}>Highest Bid</Text>
              <View style={styles.crypto_img_inside}>
                <Image source={sic} style={styles.crypto_log_img} />
                <Text style={styles.crypto_price_text}>235 USDT</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.count_crypto_list}>
          {[2, 4, 6].map(item => (
            <View style={styles.crypto_list_items} key={item}>
              <Image source={mb2} style={styles.crypto_list_log_img} />
              <Text style={styles.list_text_crypto}>
                TheCryptoLuckyGirl_202
              </Text>
              <View style={styles.crypto_img_inside_item}>
                <Image source={sic} style={styles.crypto_log_img_item} />
                <View style={styles.row_price_text}>
                  <Image source={tdi} style={styles.crypto_log_img_row} />
                  <Text style={styles.crypto_price_text_item}>235</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.head_row_items}>
        <Text style={styles.row_sub_head_sub}>PixerEternity 2022 x RVP</Text>
      </View>
      <View style={styles.crypto_collection}>
        <View style={styles.crypto_main_img}>
          <Image source={mb1} style={styles.crypto_main_banner} />
          <View style={styles.crypto_row_div}>
            <View style={styles.crypto_round_title}>
              <Image source={mb3} style={styles.crypto_title_img} />
              <Text style={styles.crypto_heading_text}>
                Giffaff_ApeClub_dsjgfjdfjhdsf_4r4356
              </Text>
            </View>
            <View style={styles.crypto_inside}>
              <Text style={styles.crypto_content_text}>Highest Bid</Text>
              <View style={styles.crypto_img_inside}>
                <Image source={sic} style={styles.crypto_log_img} />
                <Text style={styles.crypto_price_text}>235 USDT</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.count_crypto_list}>
          {[2, 4, 6].map(item => (
            <View style={styles.crypto_list_items} key={item}>
              <Image source={mb2} style={styles.crypto_list_log_img} />
              <Text style={styles.list_text_crypto}>
                TheCryptoLuckyGirl_202
              </Text>
              <View style={styles.crypto_img_inside_item}>
                <Image source={sic} style={styles.crypto_log_img_item} />
                <View style={styles.row_price_text}>
                  <Image source={tdi} style={styles.crypto_log_img_row} />
                  <Text style={styles.crypto_price_text_item}>235</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  full_cover_row: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 0,
    marginBottom: 30,
    backgroundColor: COLORS.spbg,
  },
  main_heading_text: {
    fontSize: 22,
    textTransform: 'uppercase',
    fontFamily: FONTS.bold,
  },
  head_row_items_head: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  head_row_items: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row_sub_head: {
    fontSize: 13,
    fontFamily: FONTS.semibold,
  },
  row_sub_head_sub: {
    fontSize: 16,
    fontFamily: FONTS.bold,
  },
  row_sub_more: {
    fontSize: 13,
    color: '#26a17b',
    fontFamily: FONTS.semibold,
    textDecorationLine: 'underline',
  },
  crypto_collection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 16,
    marginBottom: 50,
  },
  crypto_main_img: {
    width: '100%',
  },
  crypto_main_banner: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  crypto_row_div: {
    display: 'flex',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  crypto_round_title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    width: '50%',
  },
  crypto_title_img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  crypto_heading_text: {
    fontSize: 18,
    fontFamily: FONTS.semibold,
  },
  crypto_inside: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  crypto_img_inside: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  crypto_content_text: {
    fontSize: 12,
    fontFamily: FONTS.semibold,
  },
  crypto_log_img: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: '#cccccc',
  },
  crypto_price_text: {
    fontSize: 15,
    fontFamily: FONTS.bold,
  },
  count_crypto_list: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  crypto_list_items: {
    width: '30%',
  },
  crypto_list_log_img: {
    width: '100%',
    height: 110,
    borderRadius: 16,
    marginBottom: 8,
  },
  list_text_crypto: {
    fontSize: 14,
    fontFamily: FONTS.semibold,
    marginBottom: 7,
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
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 8,
    borderColor: '#26a17b',
    gap: 5,
  },
  crypto_log_img_row: {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  crypto_price_text_item: {
    fontSize: 15,
    fontFamily: FONTS.bold,
    color: '#26a17b',
  },
});
