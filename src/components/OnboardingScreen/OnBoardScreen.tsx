import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './onBoardStyles';
import {
  GET_STARTED_BUTTON,
  NEXT_BUTTON,
  ONBOARDING_SCREEN_HEADER,
  SKIP_BUTTON,
  SLIDE_ID_ONE,
  SLIDE_ID_THREE,
  SLIDE_ID_TWO,
  SLIDE_SUBTITLE_ONE,
  SLIDE_SUBTITLE_THREE,
  SLIDE_SUBTITLE_TWO,
  SLIDE_TITLE_ONE,
  SLIDE_TITLE_THREE,
  SLIDE_TITLE_TWO,
} from '../../constants/constants';
import ImageOne from '../../assets/OnboardingScreenImages/ImageOne.png';
import ImageTwo from '../../assets/OnboardingScreenImages/ImageTwo.png';
import ImageThree from '../../assets/OnboardingScreenImages/ImageThree.png';

const {width} = Dimensions.get('window');

const COLORS = {
  green: '#91C788',
  orangeDark: '#FF8473',
  orangeLight: '#FFC0B8',
  white: '#fff',
};

const slides = [
  {
    id: SLIDE_ID_ONE,
    image: ImageOne,
    title: SLIDE_TITLE_ONE,
    subtitle: SLIDE_SUBTITLE_ONE,
  },
  {
    id: SLIDE_ID_TWO,
    image: ImageTwo,
    title: SLIDE_TITLE_TWO,
    subtitle: SLIDE_SUBTITLE_TWO,
  },
  {
    id: SLIDE_ID_THREE,
    image: ImageThree,
    title: SLIDE_TITLE_THREE,
    subtitle: SLIDE_SUBTITLE_THREE,
  },
];

const Slide = ({item}) => {
  return (
    <View style={styles.flatListSlideContainer}>
      <Text style={styles.onBoardingScreenHeading}>
        {ONBOARDING_SCREEN_HEADER}
      </Text>
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
                  backgroundColor: COLORS.orangeDark,
                  width: 20,
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
                // onPress={() => navigation.replace('Register')}>
                onPress={() => navigation.replace('BottomTabNavigation')}>
                <Text style={styles.getStartedBtn}>{GET_STARTED_BUTTON}</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.nextAndSkipBtnContainer}>
              <TouchableOpacity
                style={[styles.btn, styles.skipBtnContainer]}
                onPress={skip}>
                <Text style={styles.skipBtnText}>{SKIP_BUTTON}</Text>
              </TouchableOpacity>
              <View style={{width: 15}}></View>
              <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                <Text style={styles.nextBtnText}>{NEXT_BUTTON}</Text>
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
