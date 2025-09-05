import "@google/model-viewer";

const ComputersCanvas = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <model-viewer
        src="/models/scene.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: "100%", height: "100%", outline: "none" }}
      ></model-viewer>
    </div>
  );
};

export default ComputersCanvas;
