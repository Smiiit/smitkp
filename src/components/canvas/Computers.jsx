import "@google/model-viewer";

const ComputersCanvas = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <model-viewer
        src="/models/scene.glb"
        poster="/models/poster.webp"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        tone-mapping="neutral"
        shadow-intensity="1"
        exposure="1"
        reveal="auto"
        loading="lazy"
        style={{ width: "100%", height: "100%", outline: "none" }}
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>

        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
      </model-viewer>
    </div>
  );
};

export default ComputersCanvas;
