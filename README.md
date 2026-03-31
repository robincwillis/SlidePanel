# @robincwillis/react-slidepanel

A collapsible slide panel React component with smooth width animations, directional close constraints, and an imperative ref API.

[![npm](https://img.shields.io/npm/v/@robincwillis/react-slidepanel)](https://www.npmjs.com/package/@robincwillis/react-slidepanel)
[![license](https://img.shields.io/npm/l/@robincwillis/react-slidepanel)](./LICENSE)

---

## Installation

```bash
npm install @robincwillis/react-slidepanel
```

Requires React 17 or later as a peer dependency.

---

## Usage

```jsx
import SlidePanel from '@robincwillis/react-slidepanel';

// Hover open / close
<SlidePanel
  defaultOpened
  direction="both"
  openedSize={250}
  openOn="mouseenter"
  closeOn="mouseleave"
  handle={<div className="my-tab" />}
>
  <div className="my-content" />
</SlidePanel>

// Toggle via an external button (imperative ref API)
import { useRef } from 'react';

function Example() {
  const panelRef = useRef(null);
  return (
    <>
      <button onClick={() => panelRef.current.toggle()}>Toggle</button>
      <SlidePanel ref={panelRef} openedSize={250} openOn="" closeOn="">
        <div className="my-content" />
      </SlidePanel>
    </>
  );
}
```

---

## Props

| Prop            | Type        | Default        | Description |
|-----------------|-------------|----------------|-------------|
| `handle`        | ReactNode   | —              | Content rendered in the collapsed tab/handle. |
| `children`      | ReactNode   | —              | Content rendered in the expanded panel body. |
| `defaultOpened` | boolean     | `false`        | Start in the open state. |
| `defaultHidden` | boolean     | `false`        | Start completely hidden (width 0, handle hidden). |
| `direction`     | string      | `"both"`       | Constrains the close direction on `mouseleave`. See below. |
| `openedSize`    | number      | `250`          | Panel width (px) when fully open. |
| `offset`        | number      | `35`           | Panel width (px) when closed (handle visible). |
| `animDuration`  | number      | `500`          | CSS transition duration in ms. |
| `openOn`        | string      | `"mouseenter"` | DOM event name that opens the panel. |
| `closeOn`       | string      | `"mouseleave"` | DOM event name that closes the panel. |
| `toggleOn`      | string      | `""`           | DOM event name that toggles the panel. |
| `className`     | string      | `""`           | Extra CSS class names on the panel wrapper. |
| `style`         | object      | `{}`           | Extra inline styles on the panel wrapper. |
| `onOpen`        | function    | —              | Callback fired when the panel opens. |
| `onClose`       | function    | —              | Callback fired when the panel closes. |

### `direction` values

| Value     | Behaviour |
|-----------|-----------|
| `"both"`  | Close whenever the mouse leaves the panel (default). |
| `"right"` | Handle is on the right side. Only closes when the mouse exits from the **left**. |
| `"left"`  | Handle is on the left side. Only closes when the mouse exits from the **right**. |

---

## Imperative API (ref)

Attach a `ref` to `<SlidePanel>` to call methods programmatically.

```js
const panelRef = useRef(null);

panelRef.current.open();
panelRef.current.close(mouseEvent); // respects direction
panelRef.current.forceClose();      // ignores direction
panelRef.current.toggle();
panelRef.current.hide();            // width → 0, handle hidden
```

---

## Examples

### Simple hover panel

```jsx
<SlidePanel
  defaultOpened
  openedSize={180}
  openOn="mouseenter"
  closeOn="mouseleave"
  handle={<div style={{ width: '100%', height: '100%', background: '#232323' }} />}
>
  <div style={{ width: '100%', height: '100%', background: '#e1e1e1' }} />
</SlidePanel>
```

### Click-toggled panel

```jsx
const ref = useRef(null);

<button onClick={() => ref.current.toggle()}>Open / Close</button>
<SlidePanel ref={ref} openedSize={300} openOn="" closeOn="" offset={0}>
  <p>Panel content</p>
</SlidePanel>
```

### Multiple panels sharing one toggle button

```jsx
const leftRef  = useRef(null);
const rightRef = useRef(null);

function toggleAll() {
  leftRef.current.toggle();
  rightRef.current.toggle();
}

<button onClick={toggleAll}>Toggle both</button>
<SlidePanel ref={leftRef}  direction="left"  openedSize={200} openOn="" closeOn="">…</SlidePanel>
<SlidePanel ref={rightRef} direction="right" openedSize={200} openOn="" closeOn="">…</SlidePanel>
```

---

## Further Development

- Vertical (height) sliding support
- Controlled mode (externally managed `isOpen` prop)
