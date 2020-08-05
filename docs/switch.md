---
id: switch
title: Switch
---

A visual toggle between two mutually exclusive states.

This is a controlled component that requires an `onValueChange` callback that updates the `value` prop in order for the component to reflect user actions. If the `value` prop is not updated, the component will continue to render the supplied `value` prop instead of the expected result of any user actions.

## Example

```SnackPlayer name=Switch&supportedPlatforms=android,ios
import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
```

---

# Reference

## Props

### `accessibilityActions`

Provides an array of custom actions available for accessibility.

| Type                                      | Required |
| ----------------------------------------- | -------- |
| `$ReadOnlyArray<AccessibilityActionInfo>` | No       |

---

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

### `accessibilityValue`

| Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <code>\$ReadOnly&#x3C;{&#124; /** _ The minimum value of this component&#x27;s range. (should be an integer) _/ min?: number, /** _ The maximum value of this component&#x27;s range. (should be an integer) _/ max?: number, /** _ The current value of this component&#x27;s range. (should be an integer) _/ now?: number, /** _ A textual description of this component&#x27;s value. (will override minimum, current, and maximum if set) _/ text?: string, &#124;}&#x3E;</code> | No       |

---

### `accessibilityViewIsModal`

A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is `false`.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | ios      |

See http://facebook.github.io/react-native/docs/view.html#accessibilityviewismodal |

---

### `accessible`

When `true`, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.

See http://facebook.github.io/react-native/docs/view.html#accessible

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `children`

| Type   | Required |
| ------ | -------- |
| `Node` | No       |

---

### `collapsable`

Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | android  |

See http://facebook.github.io/react-native/docs/view.html#collapsable |

---

### `disabled`

Whether the switch is disabled. Defaults to false.

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `focusable`

Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | Android  |

---

### `hasTVPreferredFocus`

Whether to force the Android TV focus engine to move focus to this view.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | Android  |

---

### `hitSlop`

This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.

> The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

See http://facebook.github.io/react-native/docs/view.html#hitslop

| Type                                                                                                                 | Required |
| -------------------------------------------------------------------------------------------------------------------- | -------- |
| <code>\$ReadOnly&#x3C;{&#124; bottom?: ?number, left?: ?number, right?: ?number, top?: ?number, &#124;}&#x3E;</code> | No       |

---

### `importantForAccessibility`

Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.

| Type                                                                                                              | Required | Platform |
| ----------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| <code>&#x27;auto&#x27; &#124; &#x27;yes&#x27; &#124; &#x27;no&#x27; &#124; &#x27;no-hide-descendants&#x27;</code> | No       | android  |

See http://facebook.github.io/react-native/docs/view.html#importantforaccessibility |

---

### `ios_backgroundColor`

On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent).

| Type                            | Required |
| ------------------------------- | -------- |
| <code>null &#124; string</code> | No       |

---

### `nativeBackgroundAndroid`

| Type                                                               | Required |
| ------------------------------------------------------------------ | -------- |
| <code>AndroidDrawableThemeAttr &#124; AndroidDrawableRipple</code> | No       |

---

### `nativeForegroundAndroid`

| Type                                                               | Required |
| ------------------------------------------------------------------ | -------- |
| <code>AndroidDrawableThemeAttr &#124; AndroidDrawableRipple</code> | No       |

---

### `nativeID`

Used to locate this view from native classes.

> This disables the 'layout-only view removal' optimization for this view!

See http://facebook.github.io/react-native/docs/view.html#nativeid

| Type     | Required |
| -------- | -------- |
| `string` | No       |

---

### `needsOffscreenAlphaCompositing`

Whether this `View` needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | android  |

See http://facebook.github.io/react-native/docs/view.html#needsoffscreenalphacompositing |

---

### `nextFocusDown`

TV next focus down (see documentation for the View component).

| Type     | Required | Platform |
| -------- | -------- | -------- |
| `number` | No       | Android  |

---

### `nextFocusForward`

TV next focus forward (see documentation for the View component).

| Type     | Required | Platform |
| -------- | -------- | -------- |
| `number` | No       | Android  |

---

### `nextFocusLeft`

TV next focus left (see documentation for the View component).

| Type     | Required | Platform |
| -------- | -------- | -------- |
| `number` | No       | Android  |

---

### `nextFocusRight`

TV next focus right (see documentation for the View component).

| Type     | Required | Platform |
| -------- | -------- | -------- |
| `number` | No       | Android  |

---

### `nextFocusUp`

TV next focus up (see documentation for the View component).

| Type     | Required | Platform |
| -------- | -------- | -------- |
| `number` | No       | Android  |

---

### `onAccessibilityAction`

When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.

| Type                                         | Required |
| -------------------------------------------- | -------- |
| `(event: AccessibilityActionEvent) => mixed` | No       |

---

### `onAccessibilityEscape`

When `accessible` is `true`, the system will invoke this function when the user performs the escape gesture.

See http://facebook.github.io/react-native/docs/view.html#onaccessibilityescape

| Type          | Required |
| ------------- | -------- |
| `() => mixed` | No       |

---

### `onAccessibilityTap`

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

See http://facebook.github.io/react-native/docs/view.html#onaccessibilitytap

| Type          | Required |
| ------------- | -------- |
| `() => mixed` | No       |

---

### `onBlur`

| Type                          | Required |
| ----------------------------- | -------- |
| `(event: BlurEvent) => mixed` | No       |

---

### `onChange`

Called when the user tries to change the value of the switch.

Receives the change event as an argument. If you want to only receive the new value, use `onValueChange` instead.

| Type                                                                                | Required |
| ----------------------------------------------------------------------------------- | -------- |
| <code>(event: SwitchChangeEvent) =&#x3E; Promise&#x3C;void&#x3E; &#124; void</code> | No       |

---

### `onClick`

The action to perform when this `View` is clicked on by a non-touch click, eg. enter key on a hardware keyboard.

| Type                           | Required | Platform |
| ------------------------------ | -------- | -------- |
| `(event: PressEvent) => mixed` | No       | Android  |

---

### `onFocus`

| Type                           | Required |
| ------------------------------ | -------- |
| `(event: FocusEvent) => mixed` | No       |

---

### `onLayout`

Invoked on mount and layout changes with:

`{nativeEvent: { layout: {x, y, width, height}}}`

This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.

See http://facebook.github.io/react-native/docs/view.html#onlayout

| Type                            | Required |
| ------------------------------- | -------- |
| `(event: LayoutEvent) => mixed` | No       |

---

### `onMagicTap`

When `accessible` is `true`, the system will invoke this function when the user performs the magic tap gesture.

See http://facebook.github.io/react-native/docs/view.html#onmagictap

| Type          | Required |
| ------------- | -------- |
| `() => mixed` | No       |

---

### `onMouseEnter`

| Type                          | Required |
| ----------------------------- | -------- |
| `(event: MouseEvent) => void` | No       |

---

### `onMouseLeave`

| Type                          | Required |
| ----------------------------- | -------- |
| `(event: MouseEvent) => void` | No       |

---

### `onMoveShouldSetResponder`

Does this view want to "claim" touch responsiveness? This is called for every touch move on the `View` when it is not the responder.

`View.props.onMoveShouldSetResponder: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onmoveshouldsetresponder

| Type                         | Required |
| ---------------------------- | -------- |
| `(e: PressEvent) => boolean` | No       |

---

### `onMoveShouldSetResponderCapture`

If a parent `View` wants to prevent a child `View` from becoming responder on a move, it should have this handler which returns `true`.

`View.props.onMoveShouldSetResponderCapture: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onMoveShouldsetrespondercapture

| Type                         | Required |
| ---------------------------- | -------- |
| `(e: PressEvent) => boolean` | No       |

---

### `onResponderEnd`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onResponderGrant`

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

`View.props.onResponderGrant: (event) => {}`, where `event` is a synthetic touch event as described above.

PanResponder includes a note `// TODO: t7467124 investigate if this can be removed` that should help fixing this return type.

See http://facebook.github.io/react-native/docs/view.html#onrespondergrant

| Type                                                     | Required |
| -------------------------------------------------------- | -------- |
| <code>(e: PressEvent) =&#x3E; void &#124; boolean</code> | No       |

---

### `onResponderMove`

The user is moving their finger.

`View.props.onResponderMove: (event) => {}`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onrespondermove

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onResponderReject`

Another responder is already active and will not release it to that `View` asking to be the responder.

`View.props.onResponderReject: (event) => {}`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onresponderreject

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onResponderRelease`

Fired at the end of the touch.

`View.props.onResponderRelease: (event) => {}`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onresponderrelease

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onResponderStart`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onResponderTerminate`

The responder has been taken from the `View`. Might be taken by other views after a call to `onResponderTerminationRequest`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

`View.props.onResponderTerminate: (event) => {}`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onresponderterminate

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onResponderTerminationRequest`

Some other `View` wants to become responder and is asking this `View` to release its responder. Returning `true` allows its release.

`View.props.onResponderTerminationRequest: (event) => {}`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onresponderterminationrequest

| Type                         | Required |
| ---------------------------- | -------- |
| `(e: PressEvent) => boolean` | No       |

---

### `onStartShouldSetResponder`

Does this view want to become responder on the start of a touch?

`View.props.onStartShouldSetResponder: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onstartshouldsetresponder

| Type                         | Required |
| ---------------------------- | -------- |
| `(e: PressEvent) => boolean` | No       |

---

### `onStartShouldSetResponderCapture`

If a parent `View` wants to prevent a child `View` from becoming responder on a touch start, it should have this handler which returns `true`.

`View.props.onStartShouldSetResponderCapture: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See http://facebook.github.io/react-native/docs/view.html#onstartshouldsetrespondercapture

| Type                         | Required |
| ---------------------------- | -------- |
| `(e: PressEvent) => boolean` | No       |

---

### `onTouchCancel`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onTouchCancelCapture`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onTouchEnd`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onTouchEndCapture`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onTouchMove`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onTouchMoveCapture`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onTouchStart`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onTouchStartCapture`

| Type                      | Required |
| ------------------------- | -------- |
| `(e: PressEvent) => void` | No       |

---

### `onValueChange`

Called when the user tries to change the value of the switch.

Receives the new value as an argument. If you want to instead receive an event, use `onChange`.

| Type                                                                      | Required |
| ------------------------------------------------------------------------- | -------- |
| <code>(value: boolean) =&#x3E; Promise&#x3C;void&#x3E; &#124; void</code> | No       |

---

### `pointerEvents`

Controls whether the `View` can be the target of touch events.

See http://facebook.github.io/react-native/docs/view.html#pointerevents

| Type                                                                                                          | Required |
| ------------------------------------------------------------------------------------------------------------- | -------- |
| <code>&#x27;auto&#x27; &#124; &#x27;box-none&#x27; &#124; &#x27;box-only&#x27; &#124; &#x27;none&#x27;</code> | No       |

---

### `removeClippedSubviews`

This is a special performance property exposed by `RCTView` and is useful for scrolling content when there are many subviews, most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound. The subviews must also have `overflow: hidden`, as should the containing view (or one of its superviews).

See http://facebook.github.io/react-native/docs/view.html#removeclippedsubviews

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |

---

### `renderToHardwareTextureAndroid`

Whether this `View` should render itself (and all of its children) into a single hardware texture on the GPU.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | android  |

See http://facebook.github.io/react-native/docs/view.html#rendertohardwaretextureandroid |

---

### `shouldRasterizeIOS`

Whether this `View` should be rendered as a bitmap before compositing.

| Type      | Required | Platform |
| --------- | -------- | -------- |
| `boolean` | No       | ios      |

See http://facebook.github.io/react-native/docs/view.html#shouldrasterizeios |

---

### `style`

| Type                                                                                                                                           | Required |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| <code>&#124; null &#124; void &#124; T &#124; false &#124; &#x27;&#x27; &#124; \$ReadOnlyArray&#x3C;GenericStyleProp&#x3C;T&#x3E;&#x3E;</code> | No       |

---

### `testID`

Used to locate this view in end-to-end tests.

> This disables the 'layout-only view removal' optimization for this view!

See http://facebook.github.io/react-native/docs/view.html#testid

| Type     | Required |
| -------- | -------- |
| `string` | No       |

---

### `thumbColor`

Custom color for the switch thumb.

| Type                            | Required |
| ------------------------------- | -------- |
| <code>null &#124; string</code> | No       |

---

### `trackColor`

Custom colors for the switch track.

NOTE: On iOS when the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use `ios_backgroundColor`.

| Type                                                                                        | Required |
| ------------------------------------------------------------------------------------------- | -------- |
| <code>\$ReadOnly&#x3C;{&#124; false?: ?ColorValue, true?: ?ColorValue, &#124;}&#x3E;</code> | No       |

---

### `value`

Boolean value of the switch. Defaults to false.

| Type      | Required |
| --------- | -------- |
| `boolean` | No       |
