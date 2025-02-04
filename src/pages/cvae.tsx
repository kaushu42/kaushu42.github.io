import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import ModelRunner from "../components/ModelRunner";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface VAEProps {
  title: string;
}
export default function CVAE({ title }: VAEProps) {
  // Initialize state with 16 sliders set to 0
  const [sliderValues, setSliderValues] = useState(Array(16).fill(0));
  const [digit, setDigit] = useState(Math.floor(Math.random() * 10));

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
        This app is a demo of a Conditional VAE trained on MNIST with 16
        dimensions. <br></br>You can specify which digit you want to generate
        and then adjust the sliders to see how each latent dimension has an
        effect on the model output.
      </p>

      {/* Flexbox layout for sliders */}
      <div className="flex flex-wrap">
        {/* Add a dropdown for the digit*/}
        <div className="flex flex-col basis-1/4 p-4 box-border">
          <Label className="font-medium">Digit</Label>
          <Select
            value={String(digit)}
            onValueChange={(value) => setDigit(parseInt(value))}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a digit" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <SelectItem key={index} value={String(index)}>
                  {index}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
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
        label={digit}
        targetWidth={300}
        targetHeight={300}
        modelPath="/cvae.onnx"
      />
    </div>
  );
}
