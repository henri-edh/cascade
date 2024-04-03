import {
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiPosthog,
  SiPrisma,
  SiSentry,
  SiStorybook,
  SiTailwindcss,
  SiTrpc,
} from "@icons-pack/react-simple-icons";

import { Card } from "~/components/ui/card";
import LsLogo from "./ls-logo";
import { Button } from "~/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";

const TechCard = ({ children }: React.PropsWithChildren) => {
  return (
    <Card className="flex h-full w-full max-w-xs flex-col items-center justify-center rounded-lg p-4 shadow-lg">
      {children}
    </Card>
  );
};

export default async function Home() {
  return (
    <div className="min-w-2xl mx-auto max-w-3xl px-4">
      <Image
        src="./cd.svg"
        width={100}
        height={100}
        alt="cascade logo"
        className=" mx-auto mb-4 rounded-md md:block"
      />
      <div className="mb-4 flex flex-col justify-center text-center align-middle">
        <div className="mb-4">
          <h1 className="mb-2 text-4xl font-bold uppercase">Cascade</h1>
          <h2 className="text-xl text-muted-foreground">
            Setup production grade SaaS project in minutes instead of days
          </h2>
        </div>
        <div className="flex gap-2 self-center align-middle">
          <Link href="/login">
            <Button>Try demo</Button>
          </Link>
          <Button variant="outline">
            {" "}
            <SiGithub className="mr-2 h-4 w-4" /> Code on GitHub
          </Button>
        </div>
      </div>

      <div className="mx-auto mb-4 grid w-full max-w-4xl grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <TechCard>
          <SiNextdotjs className="h-14 w-14 p-2" />
          <p>Next.js</p>
        </TechCard>
        <TechCard>
          <SiTrpc className="h-14 w-14 p-2" />
          <p>Trpc</p>
        </TechCard>
        <TechCard>
          <LsLogo className="mb-auto h-12 w-12 fill-emerald-200" />
          <p>Lemon Squeezy</p>
        </TechCard>
        <TechCard>
          <SiPrisma className="h-14 w-14 p-2" />
          <p>Prisma</p>
        </TechCard>
        <TechCard>
          <SiPostgresql className="h-14 w-14 p-2" />
          <p>PostgreSQL</p>
        </TechCard>
        <TechCard>
          <SiTailwindcss className="h-14 w-14 p-2" />
          <p>Tailwind + Shadcn/ui</p>
        </TechCard>
        <TechCard>
          <SiPosthog className="h-14 w-14 p-2" />
          <p>Posthog</p>
        </TechCard>
        <TechCard>
          <SiSentry className="h-14 w-14 p-2" />
          <p>Sentry</p>
        </TechCard>
        <TechCard>
          <SiStorybook className="h-14 w-14 p-2" />
          <p>Storybook</p>
        </TechCard>
      </div>
      <div className="my-16">
        <Tabs defaultValue="architecture">
          <TabsList className="flex self-center">
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="concept">Concept</TabsTrigger>
          </TabsList>
          <TabsContent value="architecture">
            <div className="max-w-3xl">
              <p className="prose lg:prose-xl mx-auto">
                Cascade is based on{" "}
                <Link className="underline" href="https://create.t3.gg/">
                  T3 Stack
                </Link>
                . It is a fullstack boilerplate that is relying on{" "}
                <Link className="underline" href="https://trpc.io/">
                  tRPC
                </Link>{" "}
                &{" "}
                <Link className="underline" href="https://nextjs.org/">
                  Next.js
                </Link>
                . <br />
                Cascade is a <b>SaaS boilerplate</b> meaning it is making
                opinionated choices when it comes to technologies used on top of
                T3 base stack. <br />
              </p>
              <Alert className="mt-4">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  Main goal of Cascade is to get you from <b>ideation</b> to{" "}
                  <b>first sale</b> as fast as possible. After that the template
                  is designed to support <b>growth and scale</b> .
                </AlertDescription>
              </Alert>
            </div>
          </TabsContent>
          <TabsContent value="tools">
            Cascade mainly relies on <b>open-source</b> tools and services to
            the main extent. There are some <b>paid services</b> included in the
            starter template, but those are either industry standards or tools
            critically acclaimed by the community. <br /> <br />
            Most importantly Cascade is designed to be <b>cost-effective</b>.
            All of the paid services are having generous free plans and will not
            require any costs unless you have big amounts of users.
          </TabsContent>
          <TabsContent value="concept">
            Cascade differs from the most of the templates because it covers not
            only the <b>technical side</b> of the things but also the{" "}
            <b>business side</b>.
            <br /> <br />
            Cascade template is designed in a way to help you:
            <ul className="list-disc">
              <li>
                Build your business logic from <b>Day 1</b> with existing code
                setup
              </li>
              <li>
                Get your first paying customers with simple but comprehensive
                payment setup
              </li>
              <li>
                Evolve your business with tools to monitor user behaviors &
                errors in your codebase.
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>
      <Separator className="my-4" />
      <h2 className="mb-4 text-center text-3xl">What is covered in template</h2>
      <ul className="list-disc">
        <li>
          Basic T3 stack setup with Next.js, Prisma, PostgreSQL, TailwindCSS.
        </li>
        <li>
          Styling with shadcn/ui components for fast UI prototyping |{" "}
          <b>Dark/light theme, TanStack Table integration</b>
        </li>
        <li>
          Authentication with Next Auth | <b>Discord & Google examples</b>{" "}
        </li>
        <li>
          Payments with Lemon Squeezy |{" "}
          <b>Checkout sessions, Subscriptions, One time payments</b>
        </li>
        <li>
          Background jobs with Trigger.dev |{" "}
          <b>Slack notifications on new Users, background job processing</b>
        </li>
        <li>
          Email user flows with Loops |{" "}
          <b>Welcome emails for newly signed up</b>
        </li>
        <li>
          Error handling with Sentry | <b>Monitoring, Alerts, Issue tracking</b>
        </li>
        <li>
          Analytics with Posthog | <b>Event tracking, User behavior analysis</b>
        </li>
        <li>
          Storybook | <b>Component library, Documentation</b>
        </li>
        <li>
          GitHub actions | <b>CI/CD, Automated testing</b>
        </li>
        <li>
          Lost Pixel | <b>Visual regression testing</b>
        </li>
      </ul>
    </div>
  );
}
