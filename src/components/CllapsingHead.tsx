import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import Interactable from 'react-native-interactable';

const CollapsingHeader = (props: any) => {
  const _deltaY = useRef(new Animated.Value(0)).current;
  const _deltaX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#32B76C', height: 250, alignItems: 'center' }}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: _deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [-58, -58, 0, 0],
                }),
              },
              {
                scale: _deltaY.interpolate({
                  inputRange: [-150, -150, 0, 0],
                  outputRange: [0.35, 0.35, 1, 1],
                }),
              },
            ],
          }}
        >
          <View style={{ width: 150, height: 150, backgroundColor: '#EE2C38', borderRadius: 75, marginTop: 50 }} />
        </Animated.View>
      </View>

      <Interactable.View
        verticalOnly={true}
        snapPoints={[{ y: 0 }, { y: -150 }]}
        boundaries={{ top: -150 }}
        animatedValueY={_deltaY}
        animatedValueX={_deltaX}
        onResponderEnd={() => {
          console.log('HIHI');
        }}
        onAlert={() => {
          console.log('HIHI');
        }}
      >
        <View style={{ left: 0, right: 0, height: 650, backgroundColor: '#e0e0e0' }} />
      </Interactable.View>
    </View>
  );
};
export default CollapsingHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
