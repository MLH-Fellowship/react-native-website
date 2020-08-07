---
id: view
title: View
---

## Example

l

---

# Reference

## Props

### `accessibilityActions`

Provides an array of custom actions available for accessibility.

| Type                                      |
| ----------------------------------------- |
| `$ReadOnlyArray<AccessibilityActionInfo>` |

---

### `accessibilityElementsHidden`

A value indicating whether the accessibility elements contained within this accessibility element are hidden.

See https://reactnative.dev/docs/view.html#accessibilityElementsHidden

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

See https://reactnative.dev/docs/view.html#accessibilityliveregion

| Type                                |
| ----------------------------------- |
| enum('none', 'polite', 'assertive') |

---

### `accessibilityRole`

Indicates to accessibility services to treat UI component like a specific role.

| Type                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enum('none', 'button', 'link', 'search', 'image', 'keyboardkey', 'text', 'adjustable', 'imagebutton', 'header', 'summary', 'alert', 'checkbox', 'combobox', 'menu', 'menubar', 'menuitem', 'progressbar', 'radio', 'radiogroup', 'scrollbar', 'spinbutton', 'switch', 'tab', 'tablist', 'timer', 'toolbar') |

---

### `accessibilityState`

Indicates to accessibility services that UI Component is in a specific State.

| Type                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>{ disabled?: boolean, selected?: boolean, checked?: ?boolean &#124; &#x27;mixed&#x27;, busy?: boolean, expanded?: boolean, ... }</code> |

---

### `accessibilityValue`

| Type       |
| ---------- |
| object: {} |

---

### `accessibilityViewIsModal`

A value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver. Default is `false`.

See https://reactnative.dev/docs/view.html#accessibilityviewismodal

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

### `children`

| Type |
| ---- |
| Node |

---

### `collapsable`

Views that are only used to layout their children or otherwise don't draw anything may be automatically removed from the native hierarchy as an optimization. Set this property to `false` to disable this optimization and ensure that this `View` exists in the native view hierarchy.

In Fabric, this prop is used in ios as well.

See https://reactnative.dev/docs/view.html#collapsable

| Type |
| ---- |
| bool |

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

### `hitSlop`

This defines how far a touch event can start away from the view. Typical interface guidelines recommend touch targets that are at least 30 - 40 points/density-independent pixels.

> The touch area never extends past the parent view bounds and the Z-index of sibling views always takes precedence if a touch hits two overlapping views.

See https://reactnative.dev/docs/view.html#hitslop

| Type       |
| ---------- |
| object: {} |

---

### `importantForAccessibility`

Controls how view is important for accessibility which is if it fires accessibility events and if it is reported to accessibility services that query the screen. Works for Android only.

See https://reactnative.dev/docs/view.html#importantforaccessibility

| Type                                             |
| ------------------------------------------------ |
| enum('auto', 'yes', 'no', 'no-hide-descendants') |

---

### `nativeBackgroundAndroid`

| Type                                                  |
| ----------------------------------------------------- |
| enum(AndroidDrawableThemeAttr, AndroidDrawableRipple) |

---

### `nativeForegroundAndroid`

| Type                                                  |
| ----------------------------------------------------- |
| enum(AndroidDrawableThemeAttr, AndroidDrawableRipple) |

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

See https://reactnative.dev/docs/view.html#needsoffscreenalphacompositing

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

| Type     |
| -------- |
| function |

---

### `onAccessibilityEscape`

When `accessible` is `true`, the system will invoke this function when the user performs the escape gesture.

See https://reactnative.dev/docs/view.html#onaccessibilityescape

| Type     |
| -------- |
| function |

---

### `onAccessibilityTap`

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

See https://reactnative.dev/docs/view.html#onaccessibilitytap

| Type     |
| -------- |
| function |

---

### `onBlur`

| Type     |
| -------- |
| function |

---

### `onClick`<div class="label android">Android</div>

The action to perform when this `View` is clicked on by a non-touch click, eg. enter key on a hardware keyboard.

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onFocus`

| Type     |
| -------- |
| function |

---

### `onLayout`

Invoked on mount and layout changes with:

`{nativeEvent: { layout: {x, y, width, height}}}`

This event is fired immediately once the layout has been calculated, but the new layout may not yet be reflected on the screen at the time the event is received, especially if a layout animation is in progress.

See https://reactnative.dev/docs/view.html#onlayout

| Type     |
| -------- |
| function |

---

### `onMagicTap`

When `accessible` is `true`, the system will invoke this function when the user performs the magic tap gesture.

See https://reactnative.dev/docs/view.html#onmagictap

| Type     |
| -------- |
| function |

---

### `onMouseEnter`

| Type     |
| -------- |
| function |

---

### `onMouseLeave`

| Type     |
| -------- |
| function |

---

### `onMoveShouldSetResponder`

Does this view want to "claim" touch responsiveness? This is called for every touch move on the `View` when it is not the responder.

`View.props.onMoveShouldSetResponder: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onmoveshouldsetresponder

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onMoveShouldSetResponderCapture`

If a parent `View` wants to prevent a child `View` from becoming responder on a move, it should have this handler which returns `true`.

`View.props.onMoveShouldSetResponderCapture: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onMoveShouldsetrespondercapture

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onResponderEnd`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onResponderGrant`

The View is now responding for touch events. This is the time to highlight and show the user what is happening.

`View.props.onResponderGrant: (event) => {}`, where `event` is a synthetic touch event as described above.

PanResponder includes a note `// TODO: t7467124 investigate if this can be removed` that should help fixing this return type.

See https://reactnative.dev/docs/view.html#onrespondergrant

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onResponderMove`

The user is moving their finger.

`View.props.onResponderMove: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onrespondermove

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onResponderReject`

Another responder is already active and will not release it to that `View` asking to be the responder.

`View.props.onResponderReject: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onresponderreject

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onResponderRelease`

Fired at the end of the touch.

`View.props.onResponderRelease: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onresponderrelease

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onResponderStart`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onResponderTerminate`

The responder has been taken from the `View`. Might be taken by other views after a call to `onResponderTerminationRequest`, or might be taken by the OS without asking (e.g., happens with control center/ notification center on iOS)

`View.props.onResponderTerminate: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onresponderterminate

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onResponderTerminationRequest`

Some other `View` wants to become responder and is asking this `View` to release its responder. Returning `true` allows its release.

`View.props.onResponderTerminationRequest: (event) => {}`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onresponderterminationrequest

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onStartShouldSetResponder`

Does this view want to become responder on the start of a touch?

`View.props.onStartShouldSetResponder: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onstartshouldsetresponder

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onStartShouldSetResponderCapture`

If a parent `View` wants to prevent a child `View` from becoming responder on a touch start, it should have this handler which returns `true`.

`View.props.onStartShouldSetResponderCapture: (event) => [true | false]`, where `event` is a synthetic touch event as described above.

See https://reactnative.dev/docs/view.html#onstartshouldsetrespondercapture

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onTouchCancel`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onTouchCancelCapture`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onTouchEnd`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onTouchEndCapture`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onTouchMove`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onTouchMoveCapture`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onTouchStart`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `onTouchStartCapture`

| Type                                  |
| ------------------------------------- |
| function([PressEvent](pressevent.md)) |

---

### `pointerEvents`

Controls whether the `View` can be the target of touch events.

See https://reactnative.dev/docs/view.html#pointerevents

| Type                                         |
| -------------------------------------------- |
| enum('auto', 'box-none', 'box-only', 'none') |

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

See https://reactnative.dev/docs/view.html#rendertohardwaretextureandroid

| Type |
| ---- |
| bool |

---

### `shouldRasterizeIOS`

Whether this `View` should be rendered as a bitmap before compositing.

See https://reactnative.dev/docs/view.html#shouldrasterizeios

| Type |
| ---- |
| bool |

---

### `style`

| Type                                                                 |
| -------------------------------------------------------------------- |
| enum(null, void, T, false, '', \$ReadOnlyArray<GenericStyleProp<T>>) |

---

### `testID`

Used to locate this view in end-to-end tests.

> This disables the 'layout-only view removal' optimization for this view!

See https://reactnative.dev/docs/view.html#testid

| Type   |
| ------ |
| string |
