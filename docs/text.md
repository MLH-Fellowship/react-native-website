---
id: text
title: Text
---

A React component for displaying text.

`Text` supports nesting, styling, and touch handling.

In the following example, the nested title and body text will inherit the `fontFamily` from `styles.baseText`, but the title provides its own additional styles. The title and body will stack on top of each other on account of the literal newlines:

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

```SnackPlayer name=Text%20Functional%20Component%20Example
import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";

const onPressTitle = () => {
  console.log("title pressed");
};

const TextInANest = () => {
  const titleText = useState("Bird's Nest");
  const bodyText = useState("This is not really a bird nest.");

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {"\n"}
        {"\n"}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TextInANest;

```

<block class="classical syntax" />

```SnackPlayer name=Text%20Class%20Component%20Example
import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

class TextInANest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: "This is not really a bird nest."
    };
  }

  render() {
    return (
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText}</Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TextInANest;
```

<block class="endBlock syntax" />

## Nested text

Both Android and iOS allow you to display formatted text by annotating ranges of a string with specific formatting like bold or colored text (`NSAttributedString` on iOS, `SpannableString` on Android). In practice, this is very tedious. For React Native, we decided to use web paradigm for this where you can nest text to achieve the same effect.

```SnackPlayer name=Nested%20Text%20Example
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldAndBeautiful = () => {
  return (
    <Text style={styles.baseText}>
      I am bold
      <Text style={styles.innerText}> and red</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});

export default BoldAndBeautiful;
```

Behind the scenes, React Native converts this to a flat `NSAttributedString` or `SpannableString` that contains the following information:

```jsx
"I am bold and red"
0-9: bold
9-17: bold, red
```

## Containers

The `<Text>` element is unique relative to layout: everything inside is no longer using the Flexbox layout but using text layout. This means that elements inside of a `<Text>` are no longer rectangles, but wrap when they see the end of the line.

```jsx
<Text>
  <Text>First part and </Text>
  <Text>second part</Text>
</Text>
// Text container: the text will be inline if the space allowed it
// |First part and second part|

// otherwise, the text will flow as if it was one
// |First part |
// |and second |
// |part       |

<View>
  <Text>First part and </Text>
  <Text>second part</Text>
</View>
// View container: each text is its own block
// |First part and|
// |second part   |

// otherwise, the text will flow in its own block
// |First part |
// |and        |
// |second part|
```

## Limited Style Inheritance

On the web, the usual way to set a font family and size for the entire document is to take advantage of inherited CSS properties like so:

```css
html {
  font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
  font-size: 11px;
  color: #141823;
}
```

All elements in the document will inherit this font unless they or one of their parents specifies a new rule.

In React Native, we are more strict about it: **you must wrap all the text nodes inside of a `<Text>` component**. You cannot have a text node directly under a `<View>`.

```jsx
// BAD: will raise exception, can't have a text node as child of a <View>
<View>
  Some text
</View>

// GOOD
<View>
  <Text>
    Some text
  </Text>
</View>
```

You also lose the ability to set up a default font for an entire subtree. Meanwhile, `fontFamily` only accepts a single font name, which is different from `font-family` in CSS. The recommended way to use consistent fonts and sizes across your application is to create a component `MyAppText` that includes them and use this component across your app. You can also use this component to make more specific components like `MyAppHeaderText` for other kinds of text.

```jsx
<View>
  <MyAppText>
    Text styled with the default font for the entire application
  </MyAppText>
  <MyAppHeaderText>Text styled as a header</MyAppHeaderText>
</View>
```

Assuming that `MyAppText` is a component that only renders out its children into a `Text` component with styling, then `MyAppHeaderText` can be defined as follows:

```jsx
class MyAppHeaderText extends Component {
  render() {
    return (
      <MyAppText>
        <Text style={{ fontSize: 20 }}>
          {this.props.children}
        </Text>
      </MyAppText>
    );
  }
}
```

Composing `MyAppText` in this way ensures that we get the styles from a top-level component, but leaves us the ability to add / override them in specific use cases.

React Native still has the concept of style inheritance, but limited to text subtrees. In this case, the second part will be both bold and red.

```jsx
<Text style={{ fontWeight: 'bold' }}>
  I am bold
  <Text style={{ color: 'red' }}>and red</Text>
</Text>
```

We believe that this more constrained way to style text will yield better apps:

- (Developer) React components are designed with strong isolation in mind: You should be able to drop a component anywhere in your application, trusting that as long as the props are the same, it will look and behave the same way. Text properties that could inherit from outside of the props would break this isolation.

- (Implementor) The implementation of React Native is also simplified. We do not need to have a `fontFamily` field on every single element, and we do not need to potentially traverse the tree up to the root every time we display a text node. The style inheritance is only encoded inside of the native Text component and doesn't leak to other components or the system itself.

---

# Reference

## Props

### `accessibilityHint`

| Type        | Required |
| ----------- | -------- |
| `Stringish` | No       |

---

### `accessibilityLabel`

| Type        | Required |
| ----------- | -------- |
| `Stringish` | No       |

---

### `accessibilityRole`

| Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Required |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <code>&#124; &#x27;none&#x27; &#124; &#x27;button&#x27; &#124; &#x27;link&#x27; &#124; &#x27;search&#x27; &#124; &#x27;image&#x27; &#124; &#x27;keyboardkey&#x27; &#124; &#x27;text&#x27; &#124; &#x27;adjustable&#x27; &#124; &#x27;imagebutton&#x27; &#124; &#x27;header&#x27; &#124; &#x27;summary&#x27; &#124; &#x27;alert&#x27; &#124; &#x27;checkbox&#x27; &#124; &#x27;combobox&#x27; &#124; &#x27;menu&#x27; &#124; &#x27;menubar&#x27; &#124; &#x27;menuitem&#x27; &#124; &#x27;progressbar&#x27; &#124; &#x27;radio&#x27; &#124; &#x27;radiogroup&#x27; &#124; &#x27;scrollbar&#x27; &#124; &#x27;spinbutton&#x27; &#124; &#x27;switch&#x27; &#124; &#x27;tab&#x27; &#124; &#x27;tablist&#x27; &#124; &#x27;timer&#x27; &#124; &#x27;toolbar&#x27;</code> | No       |

---

### `accessibilityState`

| Type                                                                                                                                          | Required |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <code>{ disabled?: boolean, selected?: boolean, checked?: ?boolean &#124; &#x27;mixed&#x27;, busy?: boolean, expanded?: boolean, ... }</code> | No       |

---

### `accessible`

Indicates whether the view is an accessibility element.

See https://facebook.github.io/react-native/docs/text.html#accessible

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `adjustsFontSizeToFit`

Whether font should be scaled down automatically.

See https://facebook.github.io/react-native/docs/text.html#adjustsfontsizetofit

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `allowFontScaling`

Whether fonts should scale to respect Text Size accessibility settings.

See https://facebook.github.io/react-native/docs/text.html#allowfontscaling

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `children`

| Type   | Required |
| ------ | -------- |
| `Node` | No       |

---

### `dataDetectorType`

| Type                                                                                                                                 | Required |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| <code>&#x27;phoneNumber&#x27; &#124; &#x27;link&#x27; &#124; &#x27;email&#x27; &#124; &#x27;none&#x27; &#124; &#x27;all&#x27;</code> | No       |

---

### `disabled`

Specifies the disabled state of the text view for testing purposes.

See https://facebook.github.io/react-native/docs/text.html#disabled

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `ellipsizeMode`

When `numberOfLines` is set, this prop defines how text will be truncated.

See https://facebook.github.io/react-native/docs/text.html#ellipsizemode

| Type                                                                                                    | Required |
| ------------------------------------------------------------------------------------------------------- | -------- |
| <code>&#x27;clip&#x27; &#124; &#x27;head&#x27; &#124; &#x27;middle&#x27; &#124; &#x27;tail&#x27;</code> | No       |

---

### `maxFontSizeMultiplier`

Specifies largest possible scale a font can reach when `allowFontScaling` is enabled. Possible values: `null/undefined` (default): inherit from the parent node or the global default (0) `0`: no max, ignore parent/global default `>= 1`: sets the maxFontSizeMultiplier of this node to this value

| Type     | Required |
| -------- | -------- |
| `number` | No       |

---

### `minimumFontScale`

Smallest possible scale a font can reach.

See https://facebook.github.io/react-native/docs/text.html#minimumfontscale

| Type     | Required |
| -------- | -------- |
| `number` | No       |

---

### `nativeID`

Used to locate this view from native code.

See https://facebook.github.io/react-native/docs/text.html#nativeid

| Type     | Required |
| -------- | -------- |
| `string` | No       |

---

### `numberOfLines`

Used to truncate the text with an ellipsis.

See https://facebook.github.io/react-native/docs/text.html#numberoflines

| Type     | Required |
| -------- | -------- |
| `number` | No       |

---

### `onLayout`

Invoked on mount and layout changes.

See https://facebook.github.io/react-native/docs/text.html#onlayout

| Type                            | Required |
| ------------------------------- | -------- |
| `(event: LayoutEvent) => mixed` | No       |

---

### `onLongPress`

This function is called on long press.

See https://facebook.github.io/react-native/docs/text.html#onlongpress

| Type                           | Required |
| ------------------------------ | -------- |
| `(event: PressEvent) => mixed` | No       |

---

### `onMoveShouldSetResponder`

Does this view want to "claim" touch responsiveness? This is called for every touch move on the `View` when it is not the responder.

`View.props.onMoveShouldSetResponder: (event) => [true | false]`, where `event` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `onPress`

This function is called on press. The first function argument is an event in form of [PressEvent](pressevent).

See https://facebook.github.io/react-native/docs/text.html#onpress

| Type                           | Required |
| ------------------------------ | -------- |
| `(event: PressEvent) => mixed` | No       |

---

### `onResponderGrant`

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

`View.props.onResponderGrant: (event) => {}`, where `event` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `onResponderMove`

The user is moving their finger.

`View.props.onResponderMove: (event) => {}`, where `event` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `onResponderRelease`

Fired at the end of the touch.

`View.props.onResponderRelease: (event) => {}`, where `event` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `onResponderTerminate`

The responder has been taken from the `View`. Might be taken by other views after a call to `onResponderTerminationRequest`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

`View.props.onResponderTerminate: (event) => {}`, where `event` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `onResponderTerminationRequest`

Some other `View` wants to become responder and is asking this `View` to release its responder. Returning `true` allows its release.

`View.props.onResponderTerminationRequest: (event) => {}`, where `event` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `onStartShouldSetResponder`

`View.props.onStartShouldSetResponderCapture: (event) => [true | false]`, where `event` is a [PressEvent](pressevent).

| Type     | Required |
| -------- | -------- |
| function | No       |

---

### `onTextLayout`

Invoked on Text layout

| Type                                        | Required |
| ------------------------------------------- | -------- |
| function: (event: TextLayoutEvent) => mixed | No       |

- TextLayoutEvent - SyntheticEvent object that contains a key called `lines` with a value which is an array containing objects with the following properties
  - { x: number, y: number, width: number, height: number, ascender: number, capHeight: number, descender: number, text: string, xHeight: number,}

---

### `pressRetentionOffset`

Defines how far your touch may move off of the button, before deactivating the button.

See https://facebook.github.io/react-native/docs/text.html#pressretentionoffset

| Type                   | Required |
| ---------------------- | -------- |
| [Rect](rect) or number | No       |

---

### `selectable`

Lets the user select text.

See https://facebook.github.io/react-native/docs/text.html#selectable

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `selectionColor`

The highlight color of the text.

See https://facebook.github.io/react-native/docs/text.html#selectioncolor

| Type     | Required |
| -------- | -------- |
| `string` | No       |

---

### `style`

| Type                                                                             | Required |
| -------------------------------------------------------------------------------- | -------- |
| [Text Style Props](text-style-props.md), [View Style Props](view-style-props.md) | No       |

---

### `suppressHighlighting`

When `true`, no visual change is made when text is pressed down.

See https://facebook.github.io/react-native/docs/text.html#supperhighlighting

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `testID`

Used to locate this view in end-to-end tests.

See https://facebook.github.io/react-native/docs/text.html#testid

| Type     | Required |
| -------- | -------- |
| `string` | No       |

---

### `textBreakStrategy`

Set text break strategy on Android.

---

### `android_hyphenationFrequency`

Sets the frequency of automatic hyphenation to use when determining word breaks on Android API Level 23+, possible values are `none`, `full`, `balanced`, `high`, `normal`. The default value is `none`.

| Type                                     | Required | Platform |
| ---------------------------------------- | -------- | -------- |
| enum('none', 'full', 'balanced', 'high') | No       | Android  |

# Known issues

| Type                                                                                       | Required |
| ------------------------------------------------------------------------------------------ | -------- |
| <code>&#x27;balanced&#x27; &#124; &#x27;highQuality&#x27; &#124; &#x27;simple&#x27;</code> | No       |
