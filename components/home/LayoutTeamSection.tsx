import XIcon from "@/components/icons/x-icon";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
export const LayoutTeamSection = () => {
  return (
    <section id="team" className="container mx-auto lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Founder
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Meet Chirag Dodiya
        </h2>
        <p className="text-muted-foreground mt-2 mb-6 max-w-[520px] mx-auto">
          I'm Chirag, Mailvibe's creator and your direct support—no giant teams,
          just best-in-class infrastructure and hands-on service. Email me at{" "}
          <a href="mailto:hi@chirag.co" className="underline underline-offset-2 font-semibold">hi@chirag.co</a>.
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <Card className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg max-w-sm mx-auto">
          <CardHeader className="p-0 gap-0">
            <div className="h-full overflow-hidden flex items-center justify-center">
              <Image
                src="/team1.jpg"
                alt="Chirag Dodiya"
                width={240}
                height={240}
                className="w-[240px] aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01] rounded-lg"
              />
            </div>
            <CardTitle className="py-6 pb-4 px-6 text-2xl flex flex-col items-center">
              Chirag Dodiya
              <span className="text-primary ml-2 block text-lg font-normal">Founder &amp; Product Lead</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-0 text-muted-foreground text-center px-8">
            Building human-first tools for marketers, creators, and indie brands worldwide.
          </CardContent>
          <CardFooter className="space-x-4 mt-4 flex justify-center">
            <Link
              href="https://x.com/chiragdodiyadev"
              target="_blank"
              className="hover:opacity-80 transition-all"
              aria-label="Chirag on X"
            >
              <XIcon />
            </Link>
            <Link
              href="https://github.com/chiragdodiyadev"
              target="_blank"
              className="hover:opacity-80 transition-all"
              aria-label="Chirag on Github"
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://linkedin.com/in/chiragdodiya"
              target="_blank"
              className="hover:opacity-80 transition-all"
              aria-label="Chirag on LinkedIn"
            >
              <LinkedInIcon />
            </Link>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};