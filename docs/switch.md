---
id: switch
title: Switch
---

## Example

.

---

# Reference

## Props

Inherits [View Props](view.md#props).

### `disabled`

Whether the switch is disabled. Defaults to false.

| Type |
| ---- |
| bool |

---

### `ios_backgroundColor`

On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent).

| Type                                 |
| ------------------------------------ |
| enum(null, string, NativeColorValue) |

---

### `onChange`

Called when the user tries to change the value of the switch.

Receives the change event as an argument. If you want to only receive the new value, use `onValueChange` instead.

| Type     |
| -------- |
| function |

---

### `onValueChange`

Called when the user tries to change the value of the switch.

Receives the new value as an argument. If you want to instead receive an event, use `onChange`.

| Type     |
| -------- |
| function |

---

### `thumbColor`

Custom color for the switch thumb.

| Type                                 |
| ------------------------------------ |
| enum(null, string, NativeColorValue) |

---

### `trackColor`

Custom colors for the switch track.

NOTE: On iOS when the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use `ios_backgroundColor`.

| Type                                                          |
| ------------------------------------------------------------- |
| object: {false: [color](colors.md), true: [color](colors.md)} |

---

### `value`

Boolean value of the switch. Defaults to false.

| Type |
| ---- |
| bool |
