import React, { useRef, useState } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Interactable from 'react-native-interactable';

const Screen = {
  height: Dimensions.get('window').height,
};

const CollapsingHeaderWithScroll = () => {
  const _deltaY = useRef(new Animated.Value(0)).current;
  const _deltaX = useRef(new Animated.Value(0)).current;
  const [canScroll, setCanScroll] = useState(false);

  function onSnap(event: any) {
    const { id } = event.nativeEvent;
    if (id === 'bottom') {
      setCanScroll(true);
    }
  }
  function onScroll(event: any) {
    const { contentOffset } = event.nativeEvent;
    if (contentOffset.y <= 0) {
      setCanScroll(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#542790', height: 250, alignItems: 'center' }}>
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
          <View style={{ width: 150, height: 150, backgroundColor: '#b5d9f8', borderRadius: 75, marginTop: 50 }} />
        </Animated.View>
      </View>

      <Interactable.View
        verticalOnly={true}
        snapPoints={[{ y: 0 }, { y: -150, id: 'bottom' }]}
        boundaries={{ top: -150 }}
        onSnap={onSnap.bind(this)}
        animatedValueY={_deltaY}
        animatedValueX={_deltaX}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          bounces={false}
          scrollEnabled={canScroll}
          onScroll={onScroll}
          style={{ left: 0, right: 0, height: Screen.height - 100, backgroundColor: '#e0e0e0' }}
        >
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
          <View style={styles.placeholder} />
        </ScrollView>
      </Interactable.View>
    </View>
  );
};
export default CollapsingHeaderWithScroll;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  placeholder: {
    backgroundColor: '#65C888',
    flex: 1,
    height: 120,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
