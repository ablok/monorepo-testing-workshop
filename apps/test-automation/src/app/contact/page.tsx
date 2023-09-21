import { Heading, Button } from "ui";

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Heading title="Contact Us" />
      <Button text="Click me!!"/>
    </main>
  );
}
