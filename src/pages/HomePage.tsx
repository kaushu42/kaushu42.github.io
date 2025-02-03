import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">@kaushu42</h1>

      <Card className="shadow-lg p-4 max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">VAE Demo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is a demo on image generation using VAE which generates
            MNIST-like images.
          </p>
          <div className="mt-6">
            <Link to="/vae">
              <Button variant="default" size="lg">
                View Demo
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {[1, 2, 3].map((post, idx) => (
          <Card key={idx} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">
                Under Maintainence {post}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This blog is under maintainence.
              </p>
              <div className="mt-4">
                <Button variant="secondary">Read More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
