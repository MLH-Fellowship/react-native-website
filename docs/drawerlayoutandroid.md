---
id: drawerlayoutandroid
title: DrawerLayoutAndroid
---

React component that wraps the platform `DrawerLayout` (Android only). The Drawer (typically used for navigation) is rendered with `renderNavigationView` and direct children are the main view (where your content goes). The navigation view is initially not visible on the screen, but can be pulled in from the side of the window specified by the `drawerPosition` prop and its width can be set by the `drawerWidth` prop.

## Example

```SnackPlayer name=DrawerLayoutAndroid%20Component%20Example&supportedPlatforms=android
import React, { useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

const App = () => {
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={() => navigationView}
    >
      <View style={styles.container}>
        <Text style={{ margin: 10, fontSize: 15 }}>
          DrawerLayoutAndroid example
        </Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={{ margin: 10, fontSize: 15 }}>
          Drawer on the {drawerPosition}! Swipe from the side to see!
        </Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8
  }
});

export default App;
```

---

# Reference

## Props

### <div class="label required basic">Required</div>`drawerPosition`

Specifies the side of the screen from which the drawer will slide in.

| Type                  | Default |
| --------------------- | ------- |
| enum('left', 'right') | `left`  |

---

### <div class="label required basic">Required</div>`renderNavigationView`

The navigation view that will be rendered to the side of the screen and can be pulled in.

| Type     |
| -------- |
| function |

---

### `children`

| Type         |
| ------------ |
| `React.Node` |

---

### `drawerBackgroundColor`

Specifies the background color of the drawer. If you want to set the opacity of the drawer, use rgba. Example:

```jsx
return (
  <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)" />
);
```

| Type               | Default |
| ------------------ | ------- |
| [color](colors.md) | `white` |

---

### `drawerLockMode`

Specifies the lock mode of the drawer. The drawer can be locked in 3 states:

- unlocked (default), meaning that the drawer will respond (open/close) to touch gestures.
- locked-closed, meaning that the drawer will stay closed and not respond to gestures.
- locked-open, meaning that the drawer will stay opened and not respond to gestures. The drawer may still be opened and closed programmatically (`openDrawer`/`closeDrawer`).

| Type                                             |
| ------------------------------------------------ |
| enum('unlocked', 'locked-closed', 'locked-open') |

---

### `drawerWidth`

Specifies the width of the drawer, more precisely the width of the view that be pulled in from the edge of the window.

| Type   |
| ------ |
| number |

---

### `keyboardDismissMode`

Determines whether the keyboard gets dismissed in response to a drag.

- 'none' (the default), drags do not dismiss the keyboard.
- 'on-drag', the keyboard is dismissed when a drag begins.

| Type                    |
| ----------------------- |
| enum('none', 'on-drag') |

---

### `onDrawerClose`

Function called whenever the navigation view has been closed.

| Type     |
| -------- |
| function |

---

### `onDrawerOpen`

Function called whenever the navigation view has been opened.

| Type     |
| -------- |
| function |

---

### `onDrawerSlide`

Function called whenever there is an interaction with the navigation view.

| Type     |
| -------- |
| function |

---

### `onDrawerStateChanged`

Function called when the drawer state has changed. The drawer can be in 3 states:

- idle, meaning there is no interaction with the navigation view happening at the time
- dragging, meaning there is currently an interaction with the navigation view
- settling, meaning that there was an interaction with the navigation view, and the navigation view is now finishing its closing or opening animation

| Type     |
| -------- |
| function |

---

### `statusBarBackgroundColor`

Make the drawer take the entire screen and draw the background of the status bar to allow it to open over the status bar. It will only have an effect on API 21+.

| Type               |
| ------------------ |
| [color](colors.md) |

---

### `style`

| Type                                 |
| ------------------------------------ |
| [View Style Props](view-style-props) |

## Methods

### `blur()`

Native methods

---

### `closeDrawer()`

```jsx
closeDrawer();
```

Closes the drawer.

---

### `focus()`

---

### `measure()`

**Parameters:**

| Name     | Type     | Required |
| -------- | -------- | -------- |
| callback | function | Yes      |

---

### `measureInWindow()`

**Parameters:**

| Name     | Type     | Required |
| -------- | -------- | -------- |
| callback | function | Yes      |

---

### `measureLayout()`

**Parameters:**

| Name                 | Type     | Required |
| -------------------- | -------- | -------- |
| relativeToNativeNode | number   | Yes      |
| onSuccess            | function | Yes      |
| onFail               | function | No       |

---

### `openDrawer()`

```jsx
openDrawer();
```

Opens the drawer.

---

### `positions()`

---

### `setNativeProps()`

**Parameters:**

| Name        | Type   | Required |
| ----------- | ------ | -------- |
| nativeProps | Object | Yes      |
