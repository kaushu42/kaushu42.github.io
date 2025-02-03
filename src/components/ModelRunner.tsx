import { useEffect, useState, useRef } from "react";
import * as ort from "onnxruntime-web";

interface ModelRunnerProps {
  sliderValues: number[];
  targetWidth: number; // Custom width for scaling
  targetHeight: number; // Custom height for scaling
}

export default function ModelRunner({
  sliderValues,
  targetWidth,
  targetHeight,
}: ModelRunnerProps) {
  const [session, setSession] = useState<ort.InferenceSession | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scaledCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        ort.env.wasm.wasmPaths = "/wasm/";
        const modelSession = await ort.InferenceSession.create("/vae-11.onnx", {
          executionProviders: ["cpu"],
        });

        setSession(modelSession);
        console.log("Model loaded successfully");
      } catch (error) {
        console.error("Error loading model:", error);
      }
    };

    loadModel();
  }, []);

  useEffect(() => {
    const runInference = async () => {
      if (!session) return;

      try {
        // Convert the slider values to a tensor
        const inputTensor = new ort.Tensor(
          "float32",
          Float32Array.from(sliderValues),
          [1, 16]
        );

        // Run the model and get the output tensor
        const outputMap = await session.run({ input: inputTensor });
        const outputData = outputMap["image"].data as Float32Array;

        // Render the image on the original canvas (28x28)
        renderImage(outputData, 28, 28);
      } catch (error) {
        console.error("Error during inference:", error);
      }
    };

    const renderImage = (
      pixelData: Float32Array,
      width: number,
      height: number
    ) => {
      const canvas = canvasRef.current;
      const scaledCanvas = scaledCanvasRef.current;
      if (!canvas || !scaledCanvas) return;

      const ctx = canvas.getContext("2d");
      const scaledCtx = scaledCanvas.getContext("2d");
      if (!ctx || !scaledCtx) return;

      // Step 1: Draw the original 28x28 image on the original canvas
      const imageData = ctx.createImageData(width, height);
      for (let i = 0; i < pixelData.length; i++) {
        const value = pixelData[i] * 255; // Scale to [0, 255]

        // Set RGB channels (grayscale, so R = G = B)
        imageData.data[i * 4] = value; // Red
        imageData.data[i * 4 + 1] = value; // Green
        imageData.data[i * 4 + 2] = value; // Blue
        imageData.data[i * 4 + 3] = 255; // Alpha (fully opaque)
      }
      ctx.putImageData(imageData, 0, 0);

      // Step 2: Scale the original 28x28 image to the target size using drawImage()
      scaledCtx.clearRect(0, 0, targetWidth, targetHeight); // Clear the scaled canvas
      scaledCtx.drawImage(
        canvas,
        0,
        0,
        width,
        height,
        0,
        0,
        targetWidth,
        targetHeight
      );
    };

    runInference();
  }, [session, sliderValues, targetWidth, targetHeight]);

  return (
    <div className="p-4 bg-gray-800 rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4">
        ONNX Model Output as Scaled Image
      </h2>
      <div className="flex gap-4">
        {/* Original 28x28 canvas (hidden if desired) */}
        <canvas
          ref={canvasRef}
          width={28}
          height={28}
          className="hidden"
        ></canvas>

        {/* Scaled canvas */}
        <canvas
          ref={scaledCanvasRef}
          width={targetWidth}
          height={targetHeight}
          className="border border-gray-700"
        ></canvas>
      </div>
    </div>
  );
}
