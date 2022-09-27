import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React, {useState, type PropsWithChildren} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';

import DashedLine from 'react-native-dashed-line';
import CustomMarkerYellow from './customMakrer/CustomMarkerYellow';
import CustomMarkerGreen from './customMakrer/CustomMarkerGreen';
import CustomMarkerRed from './customMakrer/CustomMarkerRed';
import CustomMarkerOrange from './customMakrer/CustomMarkerOrange';

import CustomMarkerYellowRound from './customMakrer/CustomMarkerYellowRound';
import CustomMarkerGreenRound from './customMakrer/CustomMarkerGreenRound';
import CustomMarkerRedRound from './customMakrer/CustomMarkerRedRound';
import CustomMarkerOrangeRound from './customMakrer/CustomMarkerOrangeRound';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return <Text>Test</Text>;
};

const App = () => {
  const [multiSliderValueGreen, setMultiSliderValueGreen] = useState([20]);
  const [multiSliderValueYellow, setMultiSliderValueYellow] = useState([0, 40]);
  const [multiSliderValueRed, setMultiSliderValueRed] = useState([1, 20]);
  const [multiSliderValueOrange, setMultiSliderValueOrange] = useState([1, 40]);
  const [enbleDisableBtn, setEnbleDisableBtn] = useState(false);

  const multiSliderValuesChangeGreen = values =>
    setMultiSliderValueGreen(values);

  const multiSliderValuesChangeYellow = values =>
    setMultiSliderValueYellow(values);

  const multiSliderValuesChangeRed = values => setMultiSliderValueRed(values);

  const multiSliderValuesChangeOrange = values =>
    setMultiSliderValueOrange(values);

  const resetDefultMethodCall = () => {
    setEnbleDisableBtn(false);
    setMultiSliderValueGreen([20]);
    setMultiSliderValueYellow([1, 40]);
    setMultiSliderValueRed([1, 20]);
    setMultiSliderValueOrange([1, 40]);
  };

  return (
    <SafeAreaView style={{flex: 1, marginTop: '10%'}}>
      <>
        <View style={styles.mainView}>
          <Text style={styles.textColor2}>Green</Text>

          <View style={styles.rangtText}>
            <Text style={styles.textRangePPM}>0-20</Text>
            <Text style={{color: 'black'}}>PPM</Text>
          </View>
          <View style={styles.common_view}>
            <View
              style={{
                position: 'absolute',
                zIndex: 100,
              }}>
              {/* <Text>{Dimensions.get('window').width / 8}</Text> */}
              <MultiSlider
                values={[multiSliderValueGreen[0]]}
                min={0}
                max={20}
                step={1}
                // showSteps
                // showStepMarkers={true}
                // showStepLabels={true}
                snapped={true}
                customMarker={
                  enbleDisableBtn ? CustomMarkerGreenRound : CustomMarkerGreen
                }
                trackStyle={{
                  backgroundColor: 'red',
                  height: 3,
                }}
                unselectedStyle={{
                  backgroundColor: '#EBEBEB',
                }}
                selectedStyle={{
                  backgroundColor: '#98E565',
                }}
                // sliderLength={45}
                sliderLength={Dimensions.get('window').width / 8}
                // sliderLength={Dimensions.get('window').width / 8}
                onValuesChange={multiSliderValuesChangeGreen}
                enabledOne={enbleDisableBtn}
              />
            </View>
          </View>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textColor2}>Yellow</Text>

          <View style={styles.rangtText}>
            <Text style={styles.textRangePPM}>20-60</Text>
            <Text style={{color: 'black'}}>PPM</Text>
          </View>

          <View style={styles.common_view}>
            <View
              style={{
                position: 'absolute',
                zIndex: 100,
                marginStart: '16%',
              }}>
              <MultiSlider
                values={[multiSliderValueYellow[0], multiSliderValueYellow[1]]}
                min={1}
                max={40}
                step={1}
                allowOverlap
                snapped
                isMarkersSeparated={true}
                customMarkerRight={
                  enbleDisableBtn ? CustomMarkerYellowRound : CustomMarkerYellow
                }
                customMarkerLeft={CustomMarkerGreen}
                trackStyle={{
                  backgroundColor: 'red',
                  height: 3,
                }}
                unselectedStyle={{
                  backgroundColor: '#EBEBEB',
                }}
                selectedStyle={{
                  backgroundColor: '#FFEF5C',
                }}
                sliderLength={Dimensions.get('window').width / 4}
                onValuesChange={multiSliderValuesChangeYellow}
                enabledOne={false}
                enabledTwo={enbleDisableBtn}
              />
            </View>
          </View>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textColor2}>Red</Text>
          <View style={styles.rangtText}>
            <Text style={styles.textRangePPM}>60-80</Text>
            <Text style={{color: 'black'}}>PPM</Text>
          </View>

          <View style={styles.common_view}>
            <View
              style={{
                position: 'absolute',
                zIndex: 100,
                marginStart: '48%',
              }}>
              <MultiSlider
                values={[multiSliderValueRed[0], multiSliderValueRed[1]]}
                min={1}
                max={20}
                step={1}
                allowOverlap
                snapped
                isMarkersSeparated={true}
                customMarkerRight={
                  enbleDisableBtn ? CustomMarkerRedRound : CustomMarkerRed
                }
                customMarkerLeft={CustomMarkerYellow}
                trackStyle={{
                  backgroundColor: 'red',
                  height: 3,
                }}
                unselectedStyle={{
                  backgroundColor: '#EBEBEB',
                }}
                selectedStyle={{
                  backgroundColor: '#E05164',
                }}
                sliderLength={Dimensions.get('window').width / 8}
                onValuesChange={multiSliderValuesChangeRed}
                enabledOne={false}
                enabledTwo={enbleDisableBtn}
              />
            </View>
          </View>
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textColor2}>Orange</Text>
          <View style={styles.rangtText}>
            <Text style={styles.textRangePPM}>80-120</Text>
            <Text style={{color: 'black'}}>PPM</Text>
          </View>
          <View style={styles.common_view}>
            <View
              style={{
                position: 'absolute',
                zIndex: 100,
                marginStart: '64%',
              }}>
              <MultiSlider
                values={[multiSliderValueOrange[0], multiSliderValueOrange[1]]}
                min={1}
                max={40}
                step={1}
                allowOverlap
                snapped
                isMarkersSeparated={true}
                customMarkerRight={
                  enbleDisableBtn ? CustomMarkerOrangeRound : CustomMarkerOrange
                }
                customMarkerLeft={CustomMarkerRed}
                trackStyle={{
                  backgroundColor: 'red',
                  height: 3,
                }}
                unselectedStyle={{
                  backgroundColor: '#EBEBEB',
                }}
                selectedStyle={{
                  backgroundColor: '#FF8F66',
                }}
                sliderLength={Dimensions.get('window').width / 4}
                onValuesChange={multiSliderValuesChangeOrange}
                enabledOne={false}
                enabledTwo={enbleDisableBtn}
              />
            </View>
          </View>
        </View>
        <View style={styles.mainViewBtn}>
          <TouchableOpacity
            style={styles.editTharesholdTouch}
            onPress={() => {
              setEnbleDisableBtn(true);
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Edit threshold</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resetDefultTouchable}
            onPress={() => {
              resetDefultMethodCall();
            }}>
            <Text style={{color: 'black', fontSize: 20}}>Reset to default</Text>
          </TouchableOpacity>
        </View>
      </>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12%',
    // width: '100%',
    flexDirection: 'row',
    // marginEnd: 20,
    marginHorizontal: '2%',
  },

  textColor2: {
    fontSize: 20,
    color: 'black',
    flex: 0.22,
    // paddingLeft: '2%',
  },
  common_view: {
    borderWidth: 1.5,
    borderColor: '#EBEBEB',
    flex: 1,
    justifyContent: 'center',
    // marginEnd: 10,
  },
  editTharesholdTouch: {
    backgroundColor: 'black',
    padding: '3%',
    borderRadius: 40,
    marginLeft: '2%',
  },
  resetDefultTouchable: {
    padding: '3%',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginRight: '2%',
  },
  mainViewBtn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '15%',
  },
  rangtText: {
    flexDirection: 'row',
    right: '3%',
    top: '-80%',
    position: 'absolute',
  },
  textRangePPM: {
    color: 'black',
    fontWeight: '600',
  },
  image: {
    marginTop: '10%',
  },
  dashLine: {
    height: Dimensions.get('window').height / 3.3,
    // marginLeft: '8%',
    marginLeft: Dimensions.get('window').width / 16.2,
  },
  dashLineMainView: {
    flexDirection: 'row',
    position: 'absolute',
    top: '8%',
    left: '1%',
  },
  dashLineMainView2: {
    flexDirection: 'row',
    position: 'absolute',
    top: '1%',
    // left: '1%',
    justifyContent: 'center',
  },
  graphText: {
    // marginLeft: Dimensions.get('window').width / 25.2,
    flex: 14,
    color: '#00000033',
  },
});

export default App;
