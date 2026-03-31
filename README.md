SlidePanel
==========

A React Slide Panel Component.

Version 1.0.0

> **Migrated from jQuery plugin (v0.0.1) to a React component.**  
> The original jQuery source is preserved at `src/jquery.slidePanel.0.0.1.js` for reference.

---

## Description

SlidePanel is a React component that lets elements expand and collapse with a
smooth sliding panel effect. It is lightweight, flexible, and supports both
hover and click-based interactions. Directional constraints let you control
which mouse-exit direction triggers the close animation.

---

## Installation

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # production build
npm run preview  # preview the production build
```

The component has no runtime dependencies beyond React 18+.

---

## Usage

```jsx
import SlidePanel from './src/SlidePanel';

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

| Value    | Behaviour |
|----------|-----------|
| `"both"` | Close whenever the mouse leaves the panel (default). |
| `"right"`| Handle is on the right side. Only closes when the mouse exits from the **left**. |
| `"left"` | Handle is on the left side. Only closes when the mouse exits from the **right**. |

---

## Imperative API (ref)

Attach a `ref` to `<SlidePanel>` to call methods programmatically.

```js
const panelRef = useRef(null);
// ...
panelRef.current.open();
panelRef.current.close(mouseEvent); // respects direction
panelRef.current.forceClose();      // ignores direction
panelRef.current.toggle();
panelRef.current.hide();            // width → 0, handle hidden
```

---

## CSS

Import the bundled styles, or write your own:

```css
/* Provided by SlidePanel.css */
.slide-panel            { display: block; height: 100%; overflow: hidden; }
.slide-panel__content   { height: 100%; overflow: hidden; }
.slide-panel__handle    { height: 100%; overflow: hidden; }

/* Float helpers */
.slide-panel.left       { float: left;  }
.slide-panel.right      { float: right; }
```

The animated `width` is set as an inline style by the component; everything
else can be freely overridden.

---

## Examples

### Simple hover panel (opens left to right)

```jsx
<SlidePanel
  className="left"
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
<SlidePanel ref={leftRef}  className="left"  openedSize={200} openOn="" closeOn="">…</SlidePanel>
<SlidePanel ref={rightRef} className="right" openedSize={200} openOn="" closeOn="">…</SlidePanel>
```

---

## Project Page

[robincwillis.github.io/SlidePanel](http://robincwillis.github.io/SlidePanel/)

## Further Development

- Vertical (height) sliding support
- Controlled mode (externally managed `isOpen` prop)
