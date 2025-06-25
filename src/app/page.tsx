import { LoginForm } from "@/components/login-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { BridgeIcon } from "@/components/bridge-icon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                <BridgeIcon className="h-10 w-10" />
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">Bridge</CardTitle>
            <CardDescription className="text-muted-foreground">Connecting soldiers and commanders.</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
