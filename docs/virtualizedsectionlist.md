---
id: virtualizedsectionlist
title: VirtualizedSectionList
---

Right now this just flattens everything into one list and uses VirtualizedList under the hood. The only operation that might not scale well is concatting the data arrays of all the sections when new props are received, which should be plenty fast for up to ~10,000 items.

---

# Reference

## Props

### <div class="label required basic">Required</div>`sections`

| Type  |
| ----- |
| array |

---

### `data`

| Type | Default |
| ---- | ------- |
|      | `[]`    |

---

### `onEndReached`

| Type     |
| -------- |
| function |

---

### `renderItem`

Default renderer for every item in every section.

| Type     |
| -------- |
| function |

---

### `renderSectionFooter`

Rendered at the bottom of each section.

| Type     |
| -------- |
| function |

---

### `renderSectionHeader`

Rendered at the top of each section. These stick to the top of the `ScrollView` by default on iOS. See `stickySectionHeadersEnabled`.

| Type     |
| -------- |
| function |

---

### `SectionSeparatorComponent`

Rendered at the top and bottom of each section (note this is different from `ItemSeparatorComponent` which is only rendered between items). These are intended to separate sections from the headers above and below and typically have the same highlight response as `ItemSeparatorComponent`. Also receives `highlighted`, `[leading/trailing][Item/Separator]`, and any custom props from `separators.updateProps`.

| Type                       |
| -------------------------- |
| `React.ComponentType<any>` |

---

### `stickySectionHeadersEnabled`

Makes section headers stick to the top of the screen until the next one pushes it off. Only enabled by default on iOS because that is the platform standard there.

| Type |
| ---- |
| bool |

## Methods

### `getListRef()`

---

### `scrollToLocation()`

**Parameters:**

| Name   | Type   | Required |
| ------ | ------ | -------- |
| params | object | Yes      |
