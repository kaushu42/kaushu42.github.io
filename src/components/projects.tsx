import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import ModelRunner from "./ModelRunner";
interface ProjectProps {
  title: string;
}
export default function Project({ title }: ProjectProps) {
  // Initialize state with 16 sliders set to 0
  const [sliderValues, setSliderValues] = useState(Array(16).fill(0));

  // Handle slider change
  const handleSliderChange = (index: number, value: number[]) => {
    const newValues = [...sliderValues];
    newValues[index] = value[0]; // Get the first value from the slider array
    setSliderValues(newValues);
  };

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="mb-8 text-lg">
        This app is a demo of a VAE trained on MNIST with 16 dimensions.{" "}
        <br></br>Adjust the sliders to see how each latent dimension has an
        effect on the model output.
      </p>

      {/* Flexbox layout for sliders */}
      <div className="flex flex-wrap">
        {Array.from({ length: 16 }).map((_, index) => (
          <div key={index} className="flex flex-col basis-1/4 p-4 box-border">
            <label className="mb-2 font-medium">Dim {index + 1}</label>
            <Slider
              defaultValue={[0]}
              min={-5}
              max={5}
              step={0.1}
              value={[sliderValues[index]]}
              onValueChange={(value) => handleSliderChange(index, value)}
              className="w-full"
            />
          </div>
        ))}
      </div>

      {/* Include the model runner */}
      <ModelRunner
        sliderValues={sliderValues}
        targetWidth={300}
        targetHeight={300}
      />
    </div>
  );
}
