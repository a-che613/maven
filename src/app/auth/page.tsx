"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { signIn, signUp } from "@/firebase/auth";
import { toast } from "sonner";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return; // Prevent multiple submissions
    
    setLoading(true);
    
    try {
      if (activeTab === "login") {
        const { user, error } = await signIn(email, password);
        if (error) {
          toast.error(error);
          return;
        }
        if (user) {
          toast.success("Successfully signed in!");
          
          // Check for redirect URL in session storage
          const redirectPath = sessionStorage.getItem('redirectAfterLogin');
          const shouldOpenCart = sessionStorage.getItem('shouldOpenCart') === 'true';
          
          // Clear the stored values
          sessionStorage.removeItem('redirectAfterLogin');
          sessionStorage.removeItem('shouldOpenCart');
          
          if (redirectPath) {
            // If there's a redirect path, go there
            if (shouldOpenCart) {
              // Store flag to open cart after page load
              sessionStorage.setItem('shouldOpenCartOnLoad', 'true');
            }
            router.push(redirectPath);
          } else {
            // Default redirect
            router.push("/dashboard");
          }
        }
      } else {
        const { user, error } = await signUp({ email, password, firstName, lastName });
        if (error) {
          toast.error(error);
          return;
        }
        if (user) {
          toast.success("Account created successfully!");
          setActiveTab("login");
          // Clear form after successful signup
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
        }
      }
    } catch (error: any) {
      console.error("Authentication error:", error);
      toast.error(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleAuth}>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Maven Genetics</h1>
            <p className="text-slate-400">Premium Cannabis Seeds</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome back</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="m@example.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-sm text-blue-500 hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input 
                      id="password" 
                      type="password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>Enter your details to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="m@example.com" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input 
                      id="password" 
                      type="password" 
                      required 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="text-xs text-gray-400 mt-1">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </div>
    </div>
  );
}
