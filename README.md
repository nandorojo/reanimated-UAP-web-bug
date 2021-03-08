# Reanimated useAnimatedProps bug

When using `useAnimatedProps` on web, mutating the shared value does **not** update properly.

This example uses `pointerEvents`. The initial `useAnimatedProps` value does work as a prop. However, subsequent updates do nothing.
