---
id: activityindicator
title: ActivityIndicator
---

---

# Reference

## Example

<div class="toggler">
  <ul role="tablist" class="toggle-syntax">
    <li id="functional" class="button-functional" aria-selected="false" role="tab" tabindex="0" aria-controls="functionaltab" onclick="displayTabs('syntax', 'functional')">
      Function Component Example
    </li>
    <li id="classical" class="button-classical" aria-selected="false" role="tab" tabindex="0" aria-controls="classicaltab" onclick="displayTabs('syntax', 'classical')">
      Class Component Example
    </li>
  </ul>
</div>

<block class="functional syntax" />

```SnackPlayer name=ActivityIndicator%20Function%20Component%20Example
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default App;
```

<block class="classical syntax" />

```SnackPlayer name=ActivityIndicator%20Class%20Component%20Example
import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default App;
```

<block class="endBlock syntax" />

### `accessibilityElementsHidden`

A value indicating whether the accessibility elements contained within this accessibility element are hidden.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | ios      |

See http://facebook.github.io/react-native/docs/view.html#accessibilityElementsHidden |

---

### `accessibilityHint`

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

See http://facebook.github.io/react-native/docs/view.html#accessibilityHint

| Type        | Required |
| ----------- | -------- |
| `Stringish` | No       |

---

### `accessibilityIgnoresInvertColors`

Prevents view from being inverted if set to true and color inversion is turned on.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | iOS      |

---

### `accessibilityLabel`

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space.

See http://facebook.github.io/react-native/docs/view.html#accessibilitylabel

| Type        | Required |
| ----------- | -------- |
| `Stringish` | No       |

---

### `accessibilityLiveRegion`

Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only.

| Type                                                                                 | Required | Platform |
| ------------------------------------------------------------------------------------ | -------- | -------- |
| <code>&#x27;none&#x27; &#124; &#x27;polite&#x27; &#124; &#x27;assertive&#x27;</code> | No       | android  |

See http://facebook.github.io/react-native/docs/view.html#accessibilityliveregion |

---

### `accessibilityRole`

Indicates to accessibility services to treat UI component like a specific role.

| Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Required |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <code>&#124; &#x27;none&#x27; &#124; &#x27;button&#x27; &#124; &#x27;link&#x27; &#124; &#x27;search&#x27; &#124; &#x27;image&#x27; &#124; &#x27;keyboardkey&#x27; &#124; &#x27;text&#x27; &#124; &#x27;adjustable&#x27; &#124; &#x27;imagebutton&#x27; &#124; &#x27;header&#x27; &#124; &#x27;summary&#x27; &#124; &#x27;alert&#x27; &#124; &#x27;checkbox&#x27; &#124; &#x27;combobox&#x27; &#124; &#x27;menu&#x27; &#124; &#x27;menubar&#x27; &#124; &#x27;menuitem&#x27; &#124; &#x27;progressbar&#x27; &#124; &#x27;radio&#x27; &#124; &#x27;radiogroup&#x27; &#124; &#x27;scrollbar&#x27; &#124; &#x27;spinbutton&#x27; &#124; &#x27;switch&#x27; &#124; &#x27;tab&#x27; &#124; &#x27;tablist&#x27; &#124; &#x27;timer&#x27; &#124; &#x27;toolbar&#x27;</code> | No       |

---

### `accessibilityState`

Indicates to accessibility services that UI Component is in a specific State.

| Type                                                                                                                                          | Required |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <code>{ disabled?: boolean, selected?: boolean, checked?: ?boolean &#124; &#x27;mixed&#x27;, busy?: boolean, expanded?: boolean, ... }</code> | No       |

---

Inherits [View Props](view#props).

---

### `animating`

Whether to show the indicator (`true`) or hide it (`false`).

| Type | Default |
| ---- | ------- |
| bool | `true`  |

---

### `color`

The foreground color of the spinner.

| Type            | Default                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [color](colors) | `null` (system accent default color)<div class="label android">Android</div><hr/><ins style="background: #999" class="color-box"></ins>`'#999999'` <div class="label ios">iOS</div> |

---

### `hidesWhenStopped` <div class="label ios">iOS</div>

Whether the indicator should hide when not animating.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

---

### `hitSlop`

Size of the indicator.

| Type                                                                           | Default   |
| ------------------------------------------------------------------------------ | --------- |
| enum(`'small'`, `'large'`)<hr/>number <div class="label android">Android</div> | `'small'` |
