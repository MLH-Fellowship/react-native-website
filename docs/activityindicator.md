---
id: activityindicator
title: ActivityIndicator
---

Displays a circular loading indicator.

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

<block class='classical syntax' />

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

<block class='endBlock syntax' />

---

# Reference

## Props

### `accessibilityActions`

Provides an array of custom actions available for accessibility.

| Type                                     |
| ---------------------------------------- |
| \$ReadOnlyArray<AccessibilityActionInfo> |

---

### `accessibilityElementsHidden`

A value indicating whether the accessibility elements contained within this accessibility element are hidden.

| Type |
| ---- |
| bool |

---

### `accessibilityHint`

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

See https://reactnative.dev/docs/view.html#accessibilityHint

| Type   |
| ------ |
| string |

---

### `accessibilityIgnoresInvertColors`<div class="label ios">iOS</div>

Prevents view from being inverted if set to true and color inversion is turned on.

| Type |
| ---- |
| bool |

---

### `accessibilityLabel`

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the `Text` nodes separated by space.

See https://reactnative.dev/docs/view.html#accessibilitylabel

| Type   |
| ------ |
| string |

---

### `accessibilityLiveRegion`

Indicates to accessibility services whether the user should be notified when this view changes. Works for Android API >= 19 only.

| Type                                                                                 |
| ------------------------------------------------------------------------------------ |
| <code>&#x27;none&#x27; &#124; &#x27;polite&#x27; &#124; &#x27;assertive&#x27;</code> |

---

### `accessibilityRole`

Indicates to accessibility services to treat UI component like a specific role.

| Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>&#124; &#x27;none&#x27; &#124; &#x27;button&#x27; &#124; &#x27;link&#x27; &#124; &#x27;search&#x27; &#124; &#x27;image&#x27; &#124; &#x27;keyboardkey&#x27; &#124; &#x27;text&#x27; &#124; &#x27;adjustable&#x27; &#124; &#x27;imagebutton&#x27; &#124; &#x27;header&#x27; &#124; &#x27;summary&#x27; &#124; &#x27;alert&#x27; &#124; &#x27;checkbox&#x27; &#124; &#x27;combobox&#x27; &#124; &#x27;menu&#x27; &#124; &#x27;menubar&#x27; &#124; &#x27;menuitem&#x27; &#124; &#x27;progressbar&#x27; &#124; &#x27;radio&#x27; &#124; &#x27;radiogroup&#x27; &#124; &#x27;scrollbar&#x27; &#124; &#x27;spinbutton&#x27; &#124; &#x27;switch&#x27; &#124; &#x27;tab&#x27; &#124; &#x27;tablist&#x27; &#124; &#x27;timer&#x27; &#124; &#x27;toolbar&#x27;</code> |

---

### `accessibilityState`

Indicates to accessibility services that UI Component is in a specific State.

| Type                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>{ disabled?: boolean, selected?: boolean, checked?: ?boolean &#124; &#x27;mixed&#x27;, busy?: boolean, expanded?: boolean, ... }</code> |

---

### `accessibilityValue`

| Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>\$ReadOnly&#x3C;{&#124; /** _ The minimum value of this component&#x27;s range. (should be an integer) _/ min?: number, /** _ The maximum value of this component&#x27;s range. (should be an integer) _/ max?: number, /** _ The current value of this component&#x27;s range. (should be an integer) _/ now?: number, /** _ A textual description of this component&#x27;s value. (will override minimum, current, and maximum if set) _/ text?: string, &#124;}&#x3E;</code> |

---

### `accessibilityViewIsModal`

A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is `false`.

| Type |
| ---- |
| bool |

---

### `accessible`

When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.

See https://reactnative.dev/docs/view.html#accessible

| Type |
| ---- |
| bool |

---

### `animating`

Whether to show the indicator (`true`) or hide it (`false`).

| Type | Default |
| ---- | ------- |
| bool | `true`  |

---

### `children`

| Type |
| ---- |
| Node |

---

### `collapsable`

Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy.

| Type |
| ---- |
| bool |

---

### `color`

The foreground color of the spinner.

| Type               | Default                                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [color](colors.md) | ``null`(system accent default color)`<div class="label android">Android</div><hr/>`'#999999'`<ins style="background: #999999" class="color-box"></ins><div class="label ios">iOS</div> |

---

### `focusable`<div class="label android">Android</div>

Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.

| Type |
| ---- |
| bool |

---

### `hasTVPreferredFocus`<div class="label android">Android</div>

Whether to force the Android TV focus engine to move focus to this view.

| Type |
| ---- |
| bool |

---

### `hidesWhenStopped`<div class="label ios">iOS</div>

Whether the indicator should hide when not animating.

| Type | Default |
| ---- | ------- |
| bool | `true`  |

---

### `hitSlop`

This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.

> The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

See https://reactnative.dev/docs/view.html#hitslop

| Type                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------- |
| <code>\$ReadOnly&#x3C;{&#124; bottom?: ?number, left?: ?number, right?: ?number, top?: ?number, &#124;}&#x3E;</code> |

---

### `importantForAccessibility`

Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.

| Type                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------- |
| <code>&#x27;auto&#x27; &#124; &#x27;yes&#x27; &#124; &#x27;no&#x27; &#124; &#x27;no-hide-descendants&#x27;</code> |

---

### `nativeBackgroundAndroid`

| Type                                                               |
| ------------------------------------------------------------------ |
| <code>AndroidDrawableThemeAttr &#124; AndroidDrawableRipple</code> |

---

### `nativeForegroundAndroid`

| Type                                                               |
| ------------------------------------------------------------------ |
| <code>AndroidDrawableThemeAttr &#124; AndroidDrawableRipple</code> |

---

### `nativeID`

Used to locate this view from native classes.

> This disables the 'layout-only view removal' optimization for this view!

See https://reactnative.dev/docs/view.html#nativeid

| Type   |
| ------ |
| string |

---

### `needsOffscreenAlphaCompositing`

Whether this `View` needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.

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

TV next focus right (see documentation for the View component).

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

### `onAccessibilityAction`

When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.

| Type                                       |
| ------------------------------------------ |
| (event: AccessibilityActionEvent) => mixed |

---

### `onAccessibilityEscape`

When `accessible` is `true`, the system will invoke this function when the user performs the escape gesture.

See https://reactnative.dev/docs/view.html#onaccessibilityescape

| Type        |
| ----------- |
| () => mixed |

---

### `onAccessibilityTap`

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

See https://reactnative.dev/docs/view.html#onaccessibilitytap

| Type        |
| ----------- |
| () => mixed |

---

### `onBlur`

| Type                        |
| --------------------------- |
| (event: BlurEvent) => mixed |

---

### `onClick`<div class="label android">Android</div>

The action to perform when this `View` is clicked on by a non-touch click, eg. enter key on a hardware keyboard.

| Type                         |
| ---------------------------- |
| (event: PressEvent) => mixed |

---

### `onFocus`

| Type                         |
| ---------------------------- |
| (event: FocusEvent) => mixed |

---

### `onLayout`

Invoked on mount and layout changes with:

`{nativeEvent: { layout: {x, y, width, height}}}`

This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.

See https://reactnative.dev/docs/view.html#onlayout

| Type                          |
| ----------------------------- |
| (event: LayoutEvent) => mixed |

---

### `onMagicTap`

When `accessible` is `true`, the system will invoke this function when the user performs the magic tap gesture.

See https://reactnative.dev/docs/view.html#onmagictap

| Type        |
| ----------- |
| () => mixed |

---

### `onMouseEnter`

| Type                        |
| --------------------------- |
| (event: MouseEvent) => void |

---

### `onMouseLeave`

| Type                        |
| --------------------------- |
| (event: MouseEvent) => void |

---

### `onMoveShouldSetResponder`

Does this view want to "claim" touch responsiveness? This is called for every touch move on the `View` when it is not the responder.

`View.props.onMoveShouldSetResponder: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onmoveshouldsetresponder

| Type                       |
| -------------------------- |
| (e: PressEvent) => boolean |

---

### `onMoveShouldSetResponderCapture`

If a parent `View` wants to prevent a child `View` from becoming responder on a move, it should have this handler which returns `true`.

`View.props.onMoveShouldSetResponderCapture: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onMoveShouldsetrespondercapture

| Type                       |
| -------------------------- |
| (e: PressEvent) => boolean |

---

### `onResponderEnd`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onResponderGrant`

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

`View.props.onResponderGrant: (event) => {}`, where `event` is a synthetic touch event as described above.

PanResponder includes a note `// TODO: t7467124 investigate if this can be removed` that should help fixing this return type.

See https://reactnative.dev/docs/view.html#onrespondergrant

| Type                                                     |
| -------------------------------------------------------- |
| <code>(e: PressEvent) =&#x3E; void &#124; boolean</code> |

---

### `onResponderMove`

The user is moving their finger.

`View.props.onResponderMove: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onrespondermove

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onResponderReject`

Another responder is already active and will not release it to that `View` asking to be the responder.

`View.props.onResponderReject: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onresponderreject

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onResponderRelease`

Fired at the end of the touch.

`View.props.onResponderRelease: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onresponderrelease

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onResponderStart`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onResponderTerminate`

The responder has been taken from the `View`. Might be taken by other views after a call to `onResponderTerminationRequest`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

`View.props.onResponderTerminate: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onresponderterminate

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onResponderTerminationRequest`

Some other `View` wants to become responder and is asking this `View` to release its responder. Returning `true` allows its release.

`View.props.onResponderTerminationRequest: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onresponderterminationrequest

| Type                       |
| -------------------------- |
| (e: PressEvent) => boolean |

---

### `onStartShouldSetResponder`

Does this view want to become responder on the start of a touch?

`View.props.onStartShouldSetResponder: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onstartshouldsetresponder

| Type                       |
| -------------------------- |
| (e: PressEvent) => boolean |

---

### `onStartShouldSetResponderCapture`

If a parent `View` wants to prevent a child `View` from becoming responder on a touch start, it should have this handler which returns `true`.

`View.props.onStartShouldSetResponderCapture: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onstartshouldsetrespondercapture

| Type                       |
| -------------------------- |
| (e: PressEvent) => boolean |

---

### `onTouchCancel`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onTouchCancelCapture`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onTouchEnd`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onTouchEndCapture`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onTouchMove`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onTouchMoveCapture`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onTouchStart`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `onTouchStartCapture`

| Type                    |
| ----------------------- |
| (e: PressEvent) => void |

---

### `pointerEvents`

Controls whether the `View` can be the target of touch events.

See https://reactnative.dev/docs/view.html#pointerevents

| Type                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- |
| <code>&#x27;auto&#x27; &#124; &#x27;box-none&#x27; &#124; &#x27;box-only&#x27; &#124; &#x27;none&#x27;</code> |

---

### `removeClippedSubviews`

This is a special performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews).

See https://reactnative.dev/docs/view.html#removeclippedsubviews

| Type |
| ---- |
| bool |

---

### `renderToHardwareTextureAndroid`

Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU.

| Type |
| ---- |
| bool |

---

### `shouldRasterizeIOS`

Whether this `View` should be rendered as a bitmap before compositing.

| Type |
| ---- |
| bool |

---

### `size`

Size of the indicator.

| Type                                                                             | Default   |
| -------------------------------------------------------------------------------- | --------- |
| `enum(`'small'`,`'large'`)`<hr/>`number`<div class="label android">Android</div> | `'small'` |

---

### `style`

| Type                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>&#124; null &#124; void &#124; T &#124; false &#124; &#x27;&#x27; &#124; \$ReadOnlyArray&#x3C;GenericStyleProp&#x3C;T&#x3E;&#x3E;</code> |

---

### `testID`

Used to locate this view in end-to-end tests.

> This disables the 'layout-only view removal' optimization for this view!

See https://reactnative.dev/docs/view.html#testid

| Type   |
| ------ |
| string |
