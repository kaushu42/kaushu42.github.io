import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AiFillYoutube } from "react-icons/ai";
import { FaSpotify, FaInstagram, FaApple } from "react-icons/fa";
export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-white-50 flex flex-col items-center justify-center py-10">
      <Card className="w-full max-w-4xl shadow-lg rounded-2xl p-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            About Me
          </CardTitle>
        </CardHeader>
        <Separator className="my-6" />
        <CardContent>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">👨‍💻 Experience</h2>
            <p className="text-white text-lg">
              I am an experienced{" "}
              <span className="font-semibold">Machine Learning Engineer</span>{" "}
              with a strong foundation in building, deploying, and optimizing
              machine learning models across various domains but specializing in
              NLP.
              <br></br>My bread and butter is{" "}
              <span className="font-semibold">Python.</span>
              <br></br>I have been working with Open Source and Commerical LLMs
              for the last 2 years. <br></br>Over the years, I have worked on
              projects involving supervised and unsupervised learning, natural
              language processing, and computer vision.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>
                Developed and deployed scalable ML models using tools like
                TensorFlow, PyTorch, and Scikit-Learn.
              </li>
              <li>
                Implemented end-to-end machine learning pipelines, from data
                preprocessing to model deployment.
              </li>
              <li>
                Collaborated with cross-functional teams to build predictive
                models for real-world applications.
              </li>
              <li>
                Optimized models for efficiency in production environments and
                ensured they met business objectives.
              </li>
            </ul>
          </section>
          <Separator className="my-6" />
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">📚 Interests</h2>
            <p className="text-white-700 text-lg">
              My specialization is <span className="font-bold">NLP</span>, but
              I'm very enthusiastic about{" "}
              <span className="font-semibold">Reinforcement Learning (RL)</span>
              . I am fascinated by the idea of training agents that can interact
              with and learn from their environment, leading to decision-making
              processes that improve over time.
            </p>
            <p className="mt-3 text-white-700 text-lg">
              My interests and skillsets:
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge>Python</Badge>
              <Badge>FastAPI</Badge>
              <Badge>Django</Badge>
              <Badge>SQL</Badge>
              <Badge>Pytorch</Badge>
              <Badge>Transformers</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>LLMs</Badge>
              <Badge>Reinforcement learning</Badge>
            </div>
          </section>
          <Separator className="my-6" />
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">🎨 Hobbies</h2>
            <p className="text-white-700 text-lg">
              If you don't find me coding, you might find me making my own
              music. You can find me on:
              {/* List of websites here*/}
              <div className="flex space-x-4">
                <Button asChild variant="ghost" className="hover:text-red-500">
                  <a
                    href="https://www.youtube.com/@kaushu42"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillYoutube className="w-6 h-6" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="hover:text-green-500"
                >
                  <a
                    href="https://open.spotify.com/artist/3ehdN3hA8mKwPehOqwkafd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSpotify className="w-6 h-6" />
                  </a>
                </Button>

                <Button asChild variant="ghost" className="hover:text-pink-500">
                  <a
                    href="https://www.instagram.com/kaushu42/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </Button>
                <Button asChild variant="ghost" className="hover:text-gray-700">
                  <a
                    href="https://music.apple.com/us/artist/kaush/1709802607"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaApple className="w-6 h-6" />
                  </a>
                </Button>
              </div>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
