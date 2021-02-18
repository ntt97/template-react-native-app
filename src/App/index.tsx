/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { BG_SCREEN } from '@assets/index';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import database from '@react-native-firebase/database';

const App = (props: unknown) => {
  const [motor1, setMotor1] = useState(false);
  const [motor2, setMotor2] = useState(false);
  const [motor3, setMotor3] = useState(false);

  const [wind1, setWind1] = useState(false);
  const [wind2, setWind2] = useState(false);

  // const getData = () => {
  //   const onValueChange1 = database()
  //     .ref('reley1')
  //     .on('value', snapshot => {
  //       if (snapshot?.val() == 1) {
  //         setMotor1(true);
  //       } else {
  //         setMotor1(false);
  //       }
  //     });

  //   const onValueChange2 = database()
  //     .ref('reley2')
  //     .on('value', snapshot => {
  //       if (snapshot?.val() == 1) {
  //         setMotor2(true);
  //       } else {
  //         setMotor2(false);
  //       }
  //     });

  //   const onValueChange3 = database()
  //     .ref('reley3')
  //     .on('value', snapshot => {
  //       if (snapshot?.val() == 1) {
  //         setMotor3(true);
  //       } else {
  //         setMotor3(false);
  //       }
  //     });

  //   const onValueChange4 = database()
  //     .ref('reley4')
  //     .on('value', snapshot => {
  //       if (snapshot?.val() == 1) {
  //         setWind1(true);
  //       } else {
  //         setWind1(false);
  //       }
  //     });

  //   const onValueChange5 = database()
  //     .ref('reley5')
  //     .on('value', snapshot => {
  //       if (snapshot?.val() == 1) {
  //         setWind2(true);
  //       } else {
  //         setWind2(false);
  //       }
  //     });
  // };
  useEffect(() => {
    // getData();
    const onValueChange1 = database()
      .ref('reley1')
      .on('value', snapshot => {
        if (snapshot?.val() == 1) {
          setMotor1(true);
        } else {
          setMotor1(false);
        }
      });

    const onValueChange2 = database()
      .ref('reley2')
      .on('value', snapshot => {
        if (snapshot?.val() == 1) {
          setMotor2(true);
        } else {
          setMotor2(false);
        }
      });

    const onValueChange3 = database()
      .ref('reley3')
      .on('value', snapshot => {
        if (snapshot?.val() == 1) {
          setMotor3(true);
        } else {
          setMotor3(false);
        }
      });

    const onValueChange4 = database()
      .ref('reley4')
      .on('value', snapshot => {
        if (snapshot?.val() == 1) {
          setWind1(true);
        } else {
          setWind1(false);
        }
      });

    const onValueChange5 = database()
      .ref('reley5')
      .on('value', snapshot => {
        if (snapshot?.val() == 1) {
          setWind2(true);
        } else {
          setWind2(false);
        }
      });
    return () => {
      database().ref('reley1').off('value', onValueChange1);
      database().ref('reley2').off('value', onValueChange2);
      database().ref('reley3').off('value', onValueChange3);
      database().ref('reley4').off('value', onValueChange4);
      database().ref('reley5').off('value', onValueChange5);
    };
  }, []);

  const onPress = (n: number) => {
    switch (n) {
      case 1:
        if (motor1) {
          database().ref('reley1').set(0);
        } else {
          database().ref('reley1').set(1);
        }
        break;
      case 2:
        if (motor2) {
          database().ref('reley2').set(0);
        } else {
          database().ref('reley2').set(1);
        }

        break;
      case 3:
        if (motor3) {
          database().ref('reley3').set(0);
        } else {
          database().ref('reley3').set(1);
        }
        break;
      case 4:
        if (wind1) {
          database().ref('reley4').set(0);
        } else {
          database().ref('reley4').set(1);
        }
        break;
      case 5:
        if (wind2) {
          database().ref('reley5').set(0);
        } else {
          database().ref('reley5').set(1);
        }
        break;

      default:
        break;
    }
  };

  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={BG_SCREEN} style={{ flex: 1 }}>
          <View style={styles.containerHeadr}>
            <Text style={styles.textHeader}>Dương Thắng</Text>
          </View>
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View style={styles.column}>
                  <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Motor</Text>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      onPress={() => {
                        onPress(1);
                      }}
                      style={[styles.block11]}
                    >
                      <Animated.View
                        style={
                          motor1
                            ? {
                                transform: [{ rotate: spin }],
                              }
                            : {}
                        }
                      >
                        <Icon name="propeller-1" size={50} color={motor1 ? 'blue' : 'gray'} />
                      </Animated.View>
                      <Text style={styles.textItem}>Máy 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        onPress(2);
                      }}
                      style={[styles.block11]}
                    >
                      <Animated.View
                        style={
                          motor2
                            ? {
                                transform: [{ rotate: spin }],
                              }
                            : {}
                        }
                      >
                        <Icon name="propeller-1" size={50} color={motor2 ? 'blue' : 'gray'} />
                      </Animated.View>

                      <Text style={styles.textItem}>Máy 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        onPress(3);
                      }}
                      style={[styles.block11]}
                    >
                      <Animated.View
                        style={
                          motor3
                            ? {
                                transform: [{ rotate: spin }],
                              }
                            : {}
                        }
                      >
                        <Icon name="propeller-1" size={50} color={motor3 ? 'blue' : 'gray'} />
                      </Animated.View>

                      <Text style={styles.textItem}>Máy 3</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.column}>
                  <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>Máy hoà khí</Text>
                  </View>
                  <View style={styles.row}>
                    <TouchableOpacity
                      onPress={() => {
                        onPress(4);
                      }}
                      style={[styles.block11]}
                    >
                      <Icon name="atom" size={50} color={wind1 ? 'blue' : 'gray'} />
                      <Text style={styles.textItem}>Máy 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        onPress(5);
                      }}
                      style={[styles.block11]}
                    >
                      <Icon name="atom" size={50} color={wind2 ? 'blue' : 'gray'} />
                      <Text style={styles.textItem}>Máy 2</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {},
  sectionContainer: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  block11: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    // its for android
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 30,
    paddingVertical: 30,
    width: '40%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  containerHeadr: {
    height: 50,
    backgroundColor: '#fff',
    opacity: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#150f3b',
    letterSpacing: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  column: {
    flexDirection: 'column',
  },
  containerTitle: {
    height: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  textItem: {
    color: '#150f3b',
    marginTop: 10,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default App;
