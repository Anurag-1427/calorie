import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

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
      <Image source={item.image} style={styles.onBoardingScreenImages} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
    </View>
  );
};

const OnBoardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

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
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                style={[styles.btn]}
                onPress={() => navigation.replace('HomeScreen')}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
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
                    borderColor: COLORS.white,
                  },
                ]}
                onPress={skip}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{width: 15}}></View>
              <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>NEXT</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
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

  return (
    <SafeAreaView style={styles.onBoardingScreencontainer}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        data={slides}
        contentContainerStyle={{height: height * 0.75}}
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

export default OnBoardingScreen;

const styles = StyleSheet.create({
  onBoardingScreencontainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  flatListSlideContainer: {
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  onBoardingScreenImages: {
    height: '75%',
    width,
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  subTitle: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
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
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
