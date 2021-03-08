import * as React from "react";
import { StyleSheet, View, Button } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
} from "react-native-reanimated";

// these both do nothing for web
Animated.addWhitelistedNativeProps({
  pointerEvents: true,
});
Animated.addWhitelistedUIProps({
  pointerEvents: true,
});

export default function App() {
  const pointerEvents = useSharedValue("auto");

  const bottomProps = useAnimatedProps(() => ({
    pointerEvents: pointerEvents.value,
  }));

  const toggle = () => {
    if (pointerEvents.value === "none") {
      pointerEvents.value = "auto";
    } else {
      pointerEvents.value = "none";
    }
    console.log("pointer events:", pointerEvents.value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.half}>
        <Button color="black" title="Toggle Pointer Events" onPress={toggle} />
      </View>
      <Animated.View
        style={[styles.half, styles.bottom]}
        animatedProps={bottomProps}
      >
        <Button
          color="black"
          title="Press me?"
          onPress={() => alert("has pointer events!")}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  half: {
    flex: 1,
    backgroundColor: "hotpink",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    backgroundColor: "green",
  },
});
