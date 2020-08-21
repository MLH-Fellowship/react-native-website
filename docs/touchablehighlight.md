---
id: touchablehighlight
title: TouchableHighlight
---

> If you're looking for a more extensive and future-proof way to handle touch-based input, check out the [Pressable](pressable.md) API.

A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, which allows the underlay color to show through, darkening or tinting the view.

The underlay comes from wrapping the child in a new View, which can affect layout, and sometimes cause unwanted visual artifacts if not used correctly, for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color.

TouchableHighlight must have one child (not zero or more than one). If you wish to have several child components, wrap them in a View.

```jsx
function MyComponent(props) {
  return (
    <View {...props} style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text>My Component</Text>
    </View>
  );
}

<TouchableHighlight
  activeOpacity={0.6}
  underlayColor="#DDDDDD"
  onPress={() => alert('Pressed!')}>
  <MyComponent />
</TouchableHighlight>;
```

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

<block class='functional syntax' />

```SnackPlayer name=TouchableHighlight%20Function%20Component%20Example
import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightExample = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {count ? count : null}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default TouchableHighlightExample;
```

<block class='classical syntax' />

```SnackPlayer name=TouchableHighlight%20Class%20Component%20Example
import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.onPress}>
          <View style={styles.button}>
            <Text>Touch Here</Text>
          </View>
        </TouchableHighlight>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count ? this.state.count : null}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default App;
```

<block class='endBlock syntax' />

---

# Reference

## Props

### <div class="label required basic">Required</div>`hostRef`

| Type                     |
| ------------------------ |
| `React.Ref<typeof View>` |

---

### `activeOpacity`

Determines what the opacity of the wrapped view should be when touch is active. The value should be between 0 and 1. Requires `underlayColor` to be set.

| Type   | Default |
| ------ | ------- |
| number | `0.85`  |

---

### `hasTVPreferredFocus`<div class="label ios">iOS</div>

_(Apple TV only)_ TV preferred focus (see documentation for the View component).

| Type |
| ---- |
| bool |

---

### `nextFocusDown`<div class="label android">Android</div>

TV next focus down (see documentation for the View component).

| Type   |
| ------ |
| number |

---

### `nextFocusForward`<div class="label android">Android</div>

TV next focus forward (see documentation for the View component).

| Type   |
| ------ |
| number |

---

### `nextFocusLeft`<div class="label android">Android</div>

TV next focus left (see documentation for the View component).

| Type   |
| ------ |
| number |

---

### `nextFocusRight`<div class="label android">Android</div>

TV next focus left (see documentation for the View component).

| Type   |
| ------ |
| number |

---

### `nextFocusUp`<div class="label android">Android</div>

TV next focus up (see documentation for the View component).

| Type   |
| ------ |
| number |

---

### `onHideUnderlay`

Called immediately after the underlay is hidden.

| Type     |
| -------- |
| function |

---

### `onShowUnderlay`

Called immediately after the underlay is shown.

| Type     |
| -------- |
| function |

---

### `style`

| Type       |
| ---------- |
| View.style |

---

### `testOnly_pressed`

Handy for snapshot tests.

| Type |
| ---- |
| bool |

---

### `underlayColor`

The color of the underlay that will show through when the touch is active.

| Type               |
| ------------------ |
| [color](colors.md) |
