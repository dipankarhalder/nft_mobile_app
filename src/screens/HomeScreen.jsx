import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Header} from '../componets/common/Header';
import {BannerCards} from '../componets/home/BannerCards';
import {HomeCards} from '../componets/home/HomeCards';
import {AboutCards} from '../componets/home/AboutCards';
import {TopCollection} from '../componets/home/TopCollection';
import {FeatureNft} from '../componets/home/FeatureNft';
import {ReserveSell} from '../componets/home/ReserveSell';
import {DiscoverNft} from '../componets/home/DiscoverNft';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe_area}>
      <ScrollView style={styles.page_wrapper}>
        <View style={styles.full_content}>
          <Header />
          <BannerCards />
        </View>
        <AboutCards />
        <HomeCards />
        <TopCollection />
        <FeatureNft />
        <ReserveSell />
        <DiscoverNft />
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
});
