import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

const {width, height} = Dimensions.get('window');

const COLORS = {
  green: '#91C788',
  orangeDark: '#FF8473',
  orangeLight: '#FFC0B8',
  white: '#fff',
};

const slides = [
  {
    id: '1',
    // image: require('../../assets/OnboardingScreenImages/Eating healthy food-cuate 1.png'),
    image: require('../../assets/OnboardingScreenImages/ImageOne.png'),
    title: 'Eat Healthy',
    subtitle:
      'Maintaining good health should be the primary focus of everyone.',
  },
  {
    id: '2',
    // image: require('../../assets/OnboardingScreenImages/Cooking-cuate 1.png'),
    image: require('../../assets/OnboardingScreenImages/ImageTwo.png'),
    title: 'Healthy Recipes',
    subtitle: 'Browse thousands of healthy recipes from all over the world.',
  },
  {
    id: '3',
    // image: require('../../assets/OnboardingScreenImages/Mobile-cuate 1.png'),
    image: require('../../assets/OnboardingScreenImages/ImageThree.png'),
    title: 'Track your Health',
    subtitle: 'With amazing inbuilt tools you can track your progress.',
  },
];

const Slide = ({item}) => {
  return (
    <View style={styles.flatListSlideContainer}>
      <Text style={styles.onBoardingScreenHeading}>calCount</Text>
      <Image source={item.image} style={styles.onBoardingScreenImages} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnBoardScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const updateCurrentSlideIndex = e => {
    // console.log(e);
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    // console.log(contentOffsetX);
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  //   backgroundColor: COLORS.white,
                  backgroundColor: COLORS.orangeDark,
                  width: 20,
                  //   height: 10,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 72}}>
              <TouchableOpacity
                style={[styles.btn]}
                // onPress={() => navigation.replace('HomeScreen')}>
                onPress={() => navigation.replace('Register')}>
                <Text
                  style={{
                    // fontWeight: 'bold',
                    fontSize: 15,
                    color: 'white',
                    fontFamily: 'Signika-Bold',
                  }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[
                  styles.btn,
                  {
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    // borderColor: COLORS.white,
                    borderColor: COLORS.green,
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    // fontWeight: 'bold',
                    fontSize: 15,
                    // color: COLORS.white,
                    color: COLORS.green,
                    fontFamily: 'Signika-Bold',
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}}></View>
              <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                <Text
                  style={{
                    // fontWeight: 'bold',
                    fontSize: 15,
                    color: 'white',
                    fontFamily: 'Signika-Bold',
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.onBoardingScreencontainer}>
      <StatusBar backgroundColor={COLORS.white} />
      <FlatList
        data={slides}
        // contentContainerStyle={{height: height * 0.55}}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  onBoardingScreencontainer: {
    flex: 1,
    // backgroundColor: COLORS.primary,
    backgroundColor: 'white',
    // backgroundColor: 'skyblue',
  },
  flatListSlideContainer: {
    alignItems: 'center',
    borderColor: 'black',
    width,
    // borderWidth: 1,
  },
  onBoardingScreenHeading: {
    fontSize: 24,
    color: COLORS.green,
    marginTop: 88,
    // fontWeight: 'bold',
    fontFamily: 'Signika-Bold',
  },
  onBoardingScreenImages: {
    height: 282,
    marginTop: 70,
    // width,
    // resizeMode: 'contain',
  },
  title: {
    // color: COLORS.white,
    fontSize: 22,
    // fontWeight: 'bold',
    // margin: 20,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Signika-Bold',
  },
  subTitle: {
    // color: COLORS.white,
    fontSize: 13,
    marginTop: 5,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
    fontFamily: 'Signika-Regular',
  },
  footerContainer: {
    height: height * 0.25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    // height: 2.5,
    width: 12,
    height: 8,
    borderRadius: 16,
    // backgroundColor: '#FFC0B8',
    backgroundColor: COLORS.orangeLight,
    marginHorizontal: 3,
    // borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 72,
    borderRadius: 24,
    // backgroundColor: COLORS.white,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 5,
  },
});
