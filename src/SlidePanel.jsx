/**
 * SlidePanel - React Component
 * @version 1.0.0
 * @author Robin Willis
 * @license MIT
 */
import { useState, useRef, useCallback, useImperativeHandle, forwardRef } from 'react';

/**
 * Map DOM event names to React synthetic event prop names.
 */
const REACT_EVENT_MAP = {
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  click: 'onClick',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
};

/**
 * SlidePanel - A collapsible slide panel component.
 *
 * Props:
 *   handle        {ReactNode}  Content rendered in the collapsed tab/handle.
 *   children      {ReactNode}  Content rendered in the expanded panel body.
 *   defaultOpened {boolean}    Start in the open state. Default: false.
 *   defaultHidden {boolean}    Start completely hidden. Default: false.
 *   direction     {string}     Constrains which side the panel closes toward on
 *                              'mouseleave'. "right" = handle is on the right,
 *                              closes only when exiting left. "left" = handle is
 *                              on the left, closes only when exiting right.
 *                              "both" = always close. Default: "both".
 *   openedSize    {number}     Panel width (px) when fully open. Default: 250.
 *   offset        {number}     Panel width (px) when closed (handle visible). Default: 35.
 *   animDuration  {number}     Transition duration in ms. Default: 500.
 *   openOn        {string}     DOM event name that opens the panel. Default: "mouseenter".
 *   closeOn       {string}     DOM event name that closes the panel. Default: "mouseleave".
 *   toggleOn      {string}     DOM event name that toggles the panel. Default: "".
 *   className     {string}     Additional CSS class names for the panel wrapper.
 *   style         {object}     Additional inline styles for the panel wrapper.
 *   onOpen        {function}   Callback fired when the panel opens.
 *   onClose       {function}   Callback fired when the panel closes.
 *
 * Imperative handle (via ref):
 *   open()        Open the panel.
 *   close(event)  Close the panel, respecting the direction constraint.
 *   forceClose()  Close the panel unconditionally.
 *   toggle()      Toggle between open and closed.
 *   hide()        Completely hide the panel (width → 0, handle hidden too).
 */
const SlidePanel = forwardRef(function SlidePanel(
  {
    handle,
    children,
    defaultOpened = false,
    defaultHidden = false,
    direction = 'both',
    openedSize = 250,
    offset = 35,
    animDuration = 500,
    openOn = 'mouseenter',
    closeOn = 'mouseleave',
    toggleOn = '',
    className = '',
    style = {},
    onOpen,
    onClose,
  },
  ref
) {
  const initialOpen = defaultOpened && !defaultHidden;
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [isHidden, setIsHidden] = useState(defaultHidden);
  const panelRef = useRef(null);

  // ── Imperative methods ──────────────────────────────────────────────────────

  const open = useCallback(() => {
    setIsOpen(true);
    setIsHidden(false);
    onOpen?.();
  }, [onOpen]);

  const forceClose = useCallback(() => {
    setIsOpen(false);
    setIsHidden(false);
    onClose?.();
  }, [onClose]);

  /**
   * Close the panel, optionally checking exit direction via a mouse event.
   * Mirrors the original jQuery plugin's directional close logic.
   */
  const close = useCallback(
    (e) => {
      if (!e || direction === 'both') {
        forceClose();
        return;
      }

      const exitMouseX = e.pageX ?? e.clientX + window.scrollX;
      const el = panelRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const elLeft = rect.left + window.scrollX;
      const elRight = elLeft + rect.width;

      const shouldClose =
        (direction === 'right' && exitMouseX - 5 < elLeft) ||
        (direction === 'left' && exitMouseX + 5 > elRight);

      if (shouldClose) {
        forceClose();
      }
    },
    [direction, forceClose]
  );

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) onOpen?.();
      else onClose?.();
      return next;
    });
    setIsHidden(false);
  }, [onOpen, onClose]);

  const hide = useCallback(() => {
    setIsOpen(false);
    setIsHidden(true);
  }, []);

  useImperativeHandle(ref, () => ({ open, close, forceClose, toggle, hide }), [
    open,
    close,
    forceClose,
    toggle,
    hide,
  ]);

  // ── Derived widths ──────────────────────────────────────────────────────────

  let panelWidth, contentWidth, handleWidth;

  if (isHidden) {
    panelWidth = 0;
    contentWidth = 0;
    handleWidth = 0;
  } else if (isOpen) {
    panelWidth = openedSize;
    contentWidth = openedSize;
    handleWidth = 0;
  } else {
    panelWidth = offset;
    contentWidth = 0;
    handleWidth = offset;
  }

  // ── Event handler assembly ──────────────────────────────────────────────────

  /**
   * Build React event props, allowing multiple actions to share the same event.
   */
  const eventHandlers = {};

  const actionsByEvent = {};
  if (openOn && REACT_EVENT_MAP[openOn]) {
    (actionsByEvent[openOn] = actionsByEvent[openOn] || []).push(open);
  }
  if (closeOn && REACT_EVENT_MAP[closeOn]) {
    (actionsByEvent[closeOn] = actionsByEvent[closeOn] || []).push(close);
  }
  if (toggleOn && REACT_EVENT_MAP[toggleOn]) {
    (actionsByEvent[toggleOn] = actionsByEvent[toggleOn] || []).push(toggle);
  }

  for (const [evt, actions] of Object.entries(actionsByEvent)) {
    const reactProp = REACT_EVENT_MAP[evt];
    eventHandlers[reactProp] = (e) => actions.forEach((fn) => fn(e));
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  const transition = `width ${animDuration}ms ease`;
  const float = direction === 'left' ? 'left' : direction === 'right' ? 'right' : undefined;

  return (
    <div
      ref={panelRef}
      className={className || undefined}
      style={{
        display: 'block',
        height: '100%',
        overflow: 'hidden',
        float,
        width: panelWidth,
        transition,
        ...style,
      }}
      {...eventHandlers}
    >
      <div style={{ height: '100%', overflow: 'hidden', width: contentWidth, transition }}>
        {children}
      </div>
      <div style={{ height: '100%', overflow: 'hidden', width: handleWidth, transition }}>
        {handle}
      </div>
    </div>
  );
});

export default SlidePanel;
