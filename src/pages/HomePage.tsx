import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// JSON array for the card data
const cardData = [
  {
    link: "/vae",
    title: "VAE Demo",
    description:
      "This is a demo on image generation using VAE which generates MNIST-like images.",
  },
  {
    link: "/cvae",
    title: "Conditional VAE",
    description:
      "Specify the digit you want to generate and visualize the effect of each latent dimension on the output.",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">@kaushu42</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cardData.map((card, idx) => (
          <Card key={idx} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {card.description}
              </p>
              <div className="mt-4">
                <Link to={card.link}>
                  <Button variant="secondary">Go to Page</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
