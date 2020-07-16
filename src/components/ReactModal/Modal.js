import React, { useState, Fragment } from "react";
import ReactModal from "react-modal";

const Modal = () => {
  const [show, SetShow] = useState(false);

  return (
    <Fragment>
      <button
        onClick={() => {
          SetShow(true);
        }}
      >
        Trigger Modal
      </button>
      <ReactModal
        isOpen={show}
        onRequestClose={
          () => {
            SetShow(false);
          }
          /* Function that will be run when the modal is requested
     to be closed (either by clicking on overlay or pressing ESC).
     Note: It is not called if isOpen is changed by other means. */
        }
        closeTimeoutMS={
          0
          /* Number indicating the milliseconds to wait before closing
     the modal. */
        }
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        contentLabel={
          "Example Modal"
          /* String indicating how the content container should be announced
     to screenreaders */
        }
        portalClassName={
          "ReactModalPortal"
          /* String className to be applied to the portal.
     See the `Styles` section for more details. */
        }
        overlayClassName={
          "ReactModal__Overlay"
          /* String className to be applied to the overlay.
     See the `Styles` section for more details. */
        }
        id={
          "some-id"
          /* String id to be applied to the content div. */
        }
        className={
          "ReactModal__Content"
          /* String className to be applied to the modal content.
     See the `Styles` section for more details. */
        }
        bodyOpenClassName={
          "ReactModal__Body--open"
          /* String className to be applied to the document.body 
     (must be a constant string).
     This attribute when set as `null` doesn't add any class 
     to document.body.
     See the `Styles` section for more details. */
        }
        htmlOpenClassName={
          "ReactModal__Html--open"
          /* String className to be applied to the document.html
     (must be a constant string).
     This attribute is `null` by default.
     See the `Styles` section for more details. */
        }
        ariaHideApp={
          true
          /* Boolean indicating if the appElement should be hidden */
        }
        shouldFocusAfterRender={
          true
          /* Boolean indicating if the modal should be focused after render. */
        }
        shouldCloseOnOverlayClick={
          true
          /* Boolean indicating if the overlay should close the modal */
        }
        shouldCloseOnEsc={
          true
          /* Boolean indicating if pressing the esc key should close the modal
     Note: By disabling the esc key from closing the modal
     you may introduce an accessibility issue. */
        }
        shouldReturnFocusAfterClose={
          true
          /* Boolean indicating if the modal should restore focus to the element
     that had focus prior to its display. */
        }
        role={
          "dialog"
          /* String indicating the role of the modal, allowing the 'dialog' role
     to be applied if desired.
     This attribute is `dialog` by default. */
        }
        parentSelector={
          () => document.body
          /* Function that will be called to get the parent element
     that the modal will be attached to. */
        }
        appElement={document.getElementById("root")}
        aria={
          {
            labelledby: "heading",
            describedby: "full_description",
          }
          /* Additional aria attributes (optional). */
        }
        data={
          { background: "green" }
          /* Additional data attributes (optional). */
        }
      >
        <p>Holi Woli</p>
      </ReactModal>
    </Fragment>
  );
};

export default Modal;
