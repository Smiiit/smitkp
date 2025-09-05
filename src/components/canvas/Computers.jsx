import "@google/model-viewer";
import { Suspense } from "react";

import CanvasLoader from "../Loader";

const ComputersCanvas = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <div className="w-full h-screen flex justify-center items-center ">
        <model-viewer
          src="/models/scene.glb"
          ar
          ar-modes="webxr scene-viewer quick-look"
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "100%", outline: "none" }}
        ></model-viewer>
      </div>
    </Suspense>
  );
};

export default ComputersCanvas;
