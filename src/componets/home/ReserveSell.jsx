import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FONTS from '../../config/fonts';

export const ReserveSell = () => {
  <View style={styles.full_cover_row}>
    <Text style={styles.main_heading_text}>
      RESERVE AND SELL YOUR NFT EASILY
    </Text>
    <View style={styles.head_row_items_head}>
      <Text style={styles.row_sub_head}>Last 24 hours</Text>
      <Text style={styles.row_sub_more}>more</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  full_cover_row: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 30,
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
});
