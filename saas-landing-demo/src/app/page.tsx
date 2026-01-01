import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-32 px-8 text-center">
        <Badge className="mb-8">Launch 2025</Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          TaskFlow Pro
          <br />
          <span className="text-primary">The Future of Productivity</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Fast, secure, and scalable. Built for modern teams to get more done.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button size="lg" className="px-10 py-6 text-lg">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="px-10 py-6 text-lg">
            View Demo
          </Button>
        </div>
      </section>

      <Separator />

      {/* Features */}
      <section className="py-24 px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>Optimized for maximum speed</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>99.9% Uptime</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enterprise Security</CardTitle>
              <CardDescription>Top-tier protection built-in</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>SOC 2 Compliant</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Seamless Integrations</CardTitle>
              <CardDescription>Connect everything you use</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>100+ APIs</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Pricing */}
      <section className="py-24 px-8 bg-muted/50">
        <h2 className="text-4xl font-bold text-center mb-16">Simple Pricing</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription className="text-3xl font-bold">$29/month</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-muted-foreground">
                <li>Unlimited users</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
              </ul>
              <Button className="w-full mt-8">Choose Pro</Button>
            </CardContent>
          </Card>

          {/* Add Free/Starter and Enterprise cards similar */}
          <Card>
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription className="text-3xl font-bold">$0/month</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full mt-8">Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Contact for pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full mt-8">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 text-center text-muted-foreground border-t">
        <p>© 2025 Your SaaS. All rights reserved.</p>
      </footer>
    </main>
  );
}