"use client";

import { useState } from "react";
import styles from "./get-involved.module.css";

// A demonstration: the button makes no request. The status line is always mounted
// so screen readers announce the note when it appears.
export function StartConversation() {
  const [shown, setShown] = useState(false);
  return (
    <div className={styles.action}>
      <button type="button" className={`btn btn-ink ${styles.actionButton}`} onClick={() => setShown(true)}>
        Start a conversation
      </button>
      <p role="status" className={styles.status}>
        {shown && (
          <>
            <span className={styles.statusMark} aria-hidden="true" />
            Our team reviews every request. Nothing was sent from this page.
          </>
        )}
      </p>
    </div>
  );
}
