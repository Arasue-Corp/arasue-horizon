export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ demo: string[] }>
}) {
  const resolvedParams = await params;
  const demoPath = resolvedParams.demo.join('/')
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Workshop Sandbox</h1>
        <p className="text-xl text-foreground/70">Demo: /workshop/{demoPath}</p>
        <p className="text-sm text-foreground/50 border border-foreground/10 bg-foreground/5 p-4 rounded-xl mt-8">
          This is a protected area for client mockups and experiments.
        </p>
      </div>
    </div>
  )
}
