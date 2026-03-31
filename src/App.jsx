import { useRef } from 'react';
import SlidePanel from './SlidePanel';
import './App.css';

/**
 * Demo page mirroring the examples from the original jQuery plugin.
 */
export default function App() {
  const dPanelRef = useRef(null);

  return (
    <div id="container">
      <h1>SlidePanel</h1>
      <h2>A React Slide Panel Component</h2>

      <div id="content">
        {/* ── Demo ─────────────────────────────────────────────────────── */}
        <div id="header">
          <div id="demo_panel">

            {/* Panel A – starts open, hover to close */}
            <SlidePanel
              id="a_panel"
              className="left"
              defaultOpened
              direction="both"
              openedSize={180}
              openOn="mouseenter"
              closeOn="mouseleave"
              handle={<div className="slide-panel__tab right" />}
            >
              <div className="slide-panel__body left" />
            </SlidePanel>

            {/* Panel B – starts closed, hover to open */}
            <SlidePanel
              id="b_panel"
              className="left"
              direction="both"
              openedSize={180}
              openOn="mouseenter"
              closeOn="mouseleave"
              handle={<div className="slide-panel__tab right" />}
            >
              <div className="slide-panel__body left" />
            </SlidePanel>

            {/* Panel C – right-aligned, starts closed */}
            <SlidePanel
              id="c_panel"
              className="right"
              direction="both"
              openedSize={250}
              openOn="mouseenter"
              closeOn="mouseleave"
              handle={<div className="slide-panel__tab" />}
            >
              <div className="slide-panel__body" />
            </SlidePanel>

          </div>
        </div>

        {/* ── Description ──────────────────────────────────────────────── */}
        <div id="description">

          <h3>Description</h3>
          <p>
            SlidePanel is a React component that lets elements expand and collapse
            with a smooth sliding panel effect. It is flexible, lightweight, and
            supports both hover and click interactions.
          </p>

          <h3>Props</h3>
          <ul>
            <li><b>handle</b>: ReactNode rendered in the collapsed tab/handle.</li>
            <li><b>children</b>: ReactNode rendered in the expanded panel body.</li>
            <li><b>defaultOpened</b>: Start in the open state. Default: <code>false</code>.</li>
            <li><b>defaultHidden</b>: Start completely hidden. Default: <code>false</code>.</li>
            <li>
              <b>direction</b>: Constrains the close direction on <code>mouseleave</code>.
              <code>"right"</code> = handle on right, closes only when exiting left.
              <code>"left"</code> = handle on left, closes only when exiting right.
              <code>"both"</code> = always close. Default: <code>"both"</code>.
            </li>
            <li><b>openedSize</b>: Panel width (px) when open. Default: <code>250</code>.</li>
            <li><b>offset</b>: Panel width (px) when closed (handle visible). Default: <code>35</code>.</li>
            <li><b>animDuration</b>: Transition duration (ms). Default: <code>500</code>.</li>
            <li><b>openOn</b>: Event name that opens the panel. Default: <code>"mouseenter"</code>.</li>
            <li><b>closeOn</b>: Event name that closes the panel. Default: <code>"mouseleave"</code>.</li>
            <li><b>toggleOn</b>: Event name that toggles the panel. Default: <code>""</code>.</li>
            <li><b>onOpen</b>: Callback fired when the panel opens.</li>
            <li><b>onClose</b>: Callback fired when the panel closes.</li>
          </ul>

          <h3>Imperative Methods (via ref)</h3>
          <ul>
            <li><b>open()</b>: Open the panel.</li>
            <li><b>close(event)</b>: Close the panel, respecting the direction constraint.</li>
            <li><b>forceClose()</b>: Close the panel unconditionally.</li>
            <li><b>toggle()</b>: Toggle between open and closed.</li>
            <li><b>hide()</b>: Completely hide the panel.</li>
          </ul>

          {/* Panel D – toggle via external button */}
          <h3>Toggle Panel (click button to toggle)</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '12px 0' }}>
            <button onClick={() => dPanelRef.current?.toggle()}>
              Toggle Panel D
            </button>
            <SlidePanel
              ref={dPanelRef}
              openedSize={200}
              offset={0}
              animDuration={400}
              openOn=""
              closeOn=""
              handle={null}
            >
              <div style={{ background: '#232323', height: 40, width: '100%' }} />
            </SlidePanel>
          </div>

        </div>
      </div>

      <div id="menu">
        Version 1.0.0<br />
        Have questions or find a bug? Open an issue on{' '}
        <a href="https://github.com/robincwillis/SlidePanel/issues" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <br />
        <a className="button" href="https://github.com/robincwillis/SlidePanel/" target="_blank" rel="noreferrer">
          Source
        </a>
      </div>

      <div style={{ clear: 'both' }} />

      {/* ── Code examples ──────────────────────────────────────────────── */}
      <div id="code_jsx">
        <h2>JSX</h2>
        <pre>{`import SlidePanel from './SlidePanel';

// Hover to open / close
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

// Toggle via ref
const panelRef = useRef(null);

<button onClick={() => panelRef.current.toggle()}>Toggle</button>
<SlidePanel ref={panelRef} openedSize={250} openOn="" closeOn="">
  <div className="my-content" />
</SlidePanel>`}</pre>
      </div>

      <div id="css_example">
        <h2>CSS</h2>
        <pre>{`.slide-panel       { /* wrapper – width is animated */ }
.slide-panel__content { /* expanded body              */ }
.slide-panel__handle  { /* collapsed tab              */ }

/* Position helpers */
.slide-panel.left  { float: left;  }
.slide-panel.right { float: right; }`}</pre>
      </div>

      <div id="footer">
        Check out other projects at{' '}
        <a href="http://code.robincwillis.com" target="_blank" rel="noreferrer">
          code.robincwillis.com
        </a>
        {' '}or get in touch on{' '}
        <a href="https://twitter.com/robincwillis" target="_blank" rel="noreferrer">
          Twitter
        </a>.
      </div>
    </div>
  );
}
