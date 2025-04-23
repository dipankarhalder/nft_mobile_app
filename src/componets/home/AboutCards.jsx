import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import COLORS from '../../config/colors';
import FONTS from '../../config/fonts';

export const AboutCards = () => {
  return (
    <View style={styles.main_content_area}>
      <Text style={styles.main_heading}>
        Explore, Discover and Earn Big with one of the top Web3 NFT Marketplaces
        in the world
      </Text>
      <View style={styles.main_sub_content}>
        <View style={styles.main_list_content}>
          <FeatherIcon name="trello" size={34} color={COLORS.theme} />
          <View style={styles.main_inside_content}>
            <Text style={styles.inside_heading}>Multi-Reward</Text>
            <Text style={styles.inside_content}>
              NFT leverages a proprietary AI-powered algorithmic trading model,
              and provides a dual earnings mechanism with trading rewards as
              well as referral rewards.
            </Text>
          </View>
        </View>
        <View style={styles.main_list_content}>
          <FeatherIcon name="bar-chart-2" size={34} color={COLORS.theme} />
          <View style={styles.main_inside_content}>
            <Text style={styles.inside_heading}>Earn Future Value</Text>
            <Text style={styles.inside_content}>
              NFT reduces the entry hurdles of the NFT market and expands the
              boundaries of the NFT collection & trading through its innovative
              AI algorithmic trading process and rewarding financial model.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_content_area: {
    marginTop: 30,
  },
  main_heading: {
    textAlign: 'center',
    fontSize: 28,
    paddingHorizontal: 22,
    fontFamily: FONTS.bold,
  },
  main_sub_content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    gap: 20,
    backgroundColor: COLORS.spbg,
    paddingVertical: 32,
    paddingHorizontal: 20,
  },
  main_list_content: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main_inside_content: {
    width: '86%',
  },
  inside_heading: {
    fontSize: 21,
    fontFamily: FONTS.semibold,
  },
  inside_content: {
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
});
