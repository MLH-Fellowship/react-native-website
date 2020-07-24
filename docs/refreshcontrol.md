---
id: refreshcontrol
title: RefreshControl
---

This component is used inside a ScrollView or ListView to add pull to refresh functionality. When the ScrollView is at `scrollY: 0`, swiping down triggers an `onRefresh` event.

## Example

```SnackPlayer name=RefreshControl&supportedPlatforms=ios,android
import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Pull down to see RefreshControl indicator</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
```

---

# Reference

## Props

Inherits [View Props](view.md#props).

### `colors`

The colors (at least one) that will be used to draw the refresh indicator.

| Type                        |
| --------------------------- |
| \$ReadOnlyArray<ColorValue> |

---

### `enabled`

Whether the pull to refresh functionality is enabled.

| Type |
| ---- |
| bool |

---

### `onRefresh`

Called when the view starts refreshing.

| Type                                                        |
| ----------------------------------------------------------- |
| <code>() =&#x3E; void &#124; Promise&#x3C;void&#x3E;</code> |

---

### `progressBackgroundColor`

The background color of the refresh indicator.

| Type               |
| ------------------ |
| [color](colors.md) |

---

### `progressViewOffset`

Progress view top offset

| Type   |
| ------ |
| number |

---

### <div class="label required basic">Required</div>`refreshing`

Whether the view should be indicating an active refresh.

| Type |
| ---- |
| bool |

---

### `size`

Size of the refresh indicator, see RefreshControl.SIZE.

| Type                                                                                                     |
| -------------------------------------------------------------------------------------------------------- |
| <code>&#124; typeof RefreshLayoutConsts.SIZE.DEFAULT &#124; typeof RefreshLayoutConsts.SIZE.LARGE</code> |

---

### `tintColor`

The color of the refresh indicator.

| Type               |
| ------------------ |
| [color](colors.md) |

---

### `title`

The title displayed under the refresh indicator.

| Type   |
| ------ |
| string |

---

### `titleColor`

Title color.

| Type               |
| ------------------ |
| [color](colors.md) |
