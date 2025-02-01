import SafeLink from "@/components/shared/safe-link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SafeLink href={"/documents/123"}>Go to docs</SafeLink>
    </main>
  );
}
