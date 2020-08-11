---
id: sectionlist
title: SectionList
---

A performant interface for rendering sectioned lists, supporting the most handy features:

- Fully cross-platform.
- Configurable viewability callbacks.
- List header support.
- List footer support.
- Item separator support.
- Section header support.
- Section separator support.
- Heterogeneous data and item rendering support.
- Pull to Refresh.
- Scroll loading.

If you don't need section support and want a simpler interface, use [`<FlatList>`](flatlist).

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

```SnackPlayer name=SectionList%20Function%20Component%20Example
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
import Constants from "expo-constants";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default App;
```

<block class='classical syntax' />

```SnackPlayer name=SectionList%20Class%20Component%20Example
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
import Constants from "expo-constants";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default App;
```

<block class='endBlock syntax' />

This is a convenience wrapper around [`<VirtualizedList>`](virtualizedlist), and thus inherits its props (as well as those of [`<ScrollView>`](scrollview)) that aren't explicitly listed here, along with the following caveats:

- Internal state is not preserved when content scrolls out of the render window. Make sure all your data is captured in the item data or external stores like Flux, Redux, or Relay.
- This is a `PureComponent` which means that it will not re-render if `props` remain shallow- equal. Make sure that everything your `renderItem` function depends on is passed as a prop (e.g. `extraData`) that is not `===` after updates, otherwise your UI may not update on changes. This includes the `data` prop and parent component state.
- In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.
- By default, the list looks for a `key` prop on each item and uses that for the React key. Alternatively, you can provide a custom `keyExtractor` prop.

---

# Reference

## Props

### <div class="label required basic">Required</div>`initialNumToRender`

How many items to render in the initial batch. This should be enough to fill the screen but not much more. Note these items will never be unmounted as part of the windowed rendering in order to improve perceived performance of scroll-to-top actions.

| Type   |
| ------ |
| number |

---

### <div class="label required basic">Required</div>`keyExtractor`

Used to extract a unique key for a given item at the specified index. Key is used for caching and as the react key to track item re-ordering. The default extractor checks item.key, then falls back to using the index, like react does. Note that this sets keys for each item, but each overall section still needs its own key.

| Type     |
| -------- |
| function |

---

### <div class="label required basic">Required</div>`sections`

The actual data to render, akin to the `data` prop in [`<FlatList>`](flatlist).

| Type                       |
| -------------------------- |
| `$ReadOnlyArray<SectionT>` |

---

### `extraData`

A marker property for telling the list to re-render (since it implements `PureComponent`). If any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the `data` prop, stick it here and treat it immutably.

| Type |
| ---- |
| any  |

---

### `inverted`

Reverses the direction of scroll. Uses scale transforms of -1.

| Type |
| ---- |
| bool |

---

### `onEndReached`

Called once when the scroll position gets within `onEndReachedThreshold` of the rendered content.

| Type     |
| -------- |
| function |

---

### `removeClippedSubviews`

Note: may have bugs (missing content) in some circumstances - use at your own risk.

This may improve scroll performance for large lists.

| Type |
| ---- |
| bool |

---

### `renderItem`

Default renderer for every item in every section. Can be over-ridden on a per-section basis.

The render function will be passed an object with the following keys:

- 'item' (object) - the item object as specified in this section's `data` key
- 'index' (number) - Item's index within the section.
- 'section' (object) - The full section object as specified in `sections`.
- 'separators' (object) - An object with the following keys:
  - 'highlight' (function) - `() => void`
  - 'unhighlight' (function) - `() => void`
  - 'updateProps' (function) - `(select, newProps) => void`
    - 'select' (enum) - possible values are 'leading', 'trailing'
    - 'newProps' (object)

| Type     |
| -------- |
| function |

---

### `stickySectionHeadersEnabled`

| Type | Default                 |
| ---- | ----------------------- |
|      | `Platform.OS === 'ios'` |

## Methods

### `flashScrollIndicators()`

Displays the scroll indicators momentarily.

---

### `getScrollableNode()`

---

### `getScrollResponder()`

Provides a handle to the underlying scroll responder.

---

### `recordInteraction()`

Tells the list an interaction has occurred, which should trigger viewability calculations, e.g. if `waitForInteractions` is true and the user has not scrolled. This is typically called by taps on items or by navigation actions.

---

### `scrollToLocation()`

Scrolls to the item at the specified `sectionIndex` and `itemIndex` (within the section) positioned in the viewable area such that `viewPosition` 0 places it at the top (and may be covered by a sticky header), 1 at the bottom, and 0.5 centered in the middle. `viewOffset` is a fixed number of pixels to offset the final target position, e.g. to compensate for sticky headers.

Note: cannot scroll to locations outside the render window without specifying the `getItemLayout` prop.

**Parameters:**

| Name   | Type   | Required |
| ------ | ------ | -------- |
| params | object | Yes      |

---

### `setNativeProps()`

**Parameters:**

| Name  | Type | Required |
| ----- | ---- | -------- |
| props |      | Yes      |
