import React, { useEffect } from "react";

// Import model-viewer web component
import "@google/model-viewer";

const ComputersCanvas = () => {
  useEffect(() => {
    // Ensure <model-viewer> is recognized as a custom element in React
    if (!window.customElements.get("model-viewer")) {
      import("@google/model-viewer");
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <model-viewer
        src="./models/scene.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        tone-mapping="neutral"
        shadow-intensity="1"
        style={{ width: "100%", height: "100%", outline: "none" }}
        poster="poster.webp"
        exposure="1"
      >
        {/* Progress bar */}
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>

        {/* AR button */}
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>

        {/* AR hand prompt */}
        <div id="ar-prompt">
          <img
            src="https://modelviewer.dev/shared-assets/icons/hand.png"
            alt="AR hand prompt"
          />
        </div>
      </model-viewer>
    </div>
  );
};

export default ComputersCanvas;
