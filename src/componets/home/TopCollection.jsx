import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FONTS from '../../config/fonts';
import tdi from '../../assets/images/tdi.png';
import tc1 from '../../assets/images/tc1.jpg';
import tc2 from '../../assets/images/tc2.jpg';
import tc3 from '../../assets/images/tc3.jpg';
import tc4 from '../../assets/images/tc4.jpg';
import tc5 from '../../assets/images/tc5.jpg';

export const TopCollection = () => {
  const listItems = [
    {
      title: 'Cool APE',
      state: '+3.97%',
      col: '10382M',
      img: tc1,
    },
    {
      title: 'Penguin Pals',
      state: '+2.89%',
      col: '8711.02M',
      img: tc2,
    },
    {
      title: 'PEPR Frog Nobility',
      state: '+2.92%',
      col: '10382M',
      img: tc3,
    },
    {
      title: 'Pixels Punk',
      state: '+3%',
      col: '8681M',
      img: tc4,
    },
    {
      title: 'Nixous Audience',
      state: '+2.88%',
      col: '5639.78M',
      img: tc5,
    },
  ];
  return (
    <View style={styles.full_cover_row}>
      <Text style={styles.main_heading_text}>Top Collections Over</Text>
      <View style={styles.head_row_items}>
        <Text style={styles.row_sub_head}>Last 24 hours</Text>
        <Text style={styles.row_sub_more}>more</Text>
      </View>
      <View style={styles.list_cover_row}>
        {listItems.map((item, idx) => (
          <View key={item.title} style={styles.top_coll_row}>
            <View style={styles.collect_img_text}>
              <Text style={styles.idx_text_col}>{idx + 1}</Text>
              <View style={styles.col_img_destils}>
                <Image source={item.img} style={styles.coll_list_img} />
                <View style={styles.img_inside_content}>
                  <Text style={styles.img_cont_heading}>{item.title}</Text>
                  <View style={styles.content_inside}>
                    <Image source={tdi} style={styles.coll_log_img_row} />
                    <Text style={styles.col_ins}>{item.col}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.text_styles_state}>
              <Text style={styles.color_state_text}>{item.state}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
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
  head_row_items: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  row_sub_head: {
    fontSize: 13,
    fontFamily: FONTS.semibold,
  },
  row_sub_more: {
    fontSize: 13,
    color: '#26a17b',
    fontFamily: FONTS.semibold,
    textDecorationLine: 'underline',
  },
  list_cover_row: {
    display: 'row',
    flexDirection: 'column',
  },
  top_coll_row: {
    display: 'flex',
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  collect_img_text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  idx_text_col: {
    fontSize: 20,
    fontFamily: FONTS.bold,
  },
  col_img_destils: {
    display: 'row',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  coll_list_img: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  img_inside_content: {
    display: 'flex',
  },
  text_styles_state: {},
  content_inside: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  img_cont_heading: {
    fontSize: 16,
    fontFamily: FONTS.semibold,
  },
  color_state_text: {
    color: '#26a17b',
    fontSize: 18,
    fontFamily: FONTS.semibold,
  },
  col_ins: {
    fontSize: 13,
    fontFamily: FONTS.semibold,
  },
  coll_log_img_row: {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
});
