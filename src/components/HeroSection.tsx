import { Button } from "@/components/ui/button";
import { Code2, GithubIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="w-full px-2 mx-auto max-w-screen-xl md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground/70">
                @kaushu42
              </h1>
              <p className="text-muted-foreground  mx-auto">
                Oh, did you land here by mistake? No worries, this is the best.
              </p>
              <p>
                Enjoy this random face from{" "}
                <a href="https://thispersondoesnotexist.com/">
                  thispersondoesnotexist.com
                </a>
                {""}
                <p>
                  while I add some content. Refresh for a new face. Who knows,
                  maybe you'll find your doppelganger here!
                </p>
              </p>
            </div>
            <div className="flex gap-4 px-2">
              <Button className="max-w-fit" size={"lg"}>
                Start <Code2 size={20} className="ml-2" />
              </Button>
              <Button
                asChild
                className="max-w-fit"
                size={"lg"}
                variant={"outline"}
              >
                <a href="https://github.com/kaushu42/kaushu42.github.io">
                  Github <GithubIcon size={20} className="ml-2" />
                </a>
              </Button>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto shadow-md overflow-hidden rounded-xl object-cover object-bottom sm:w-full lg:order-last"
            src="https://thispersondoesnotexist.com/"
          />
        </div>
      </div>
    </section>
  );
}
