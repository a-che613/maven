"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Maven Genetics</h1>
          <p className="text-slate-400">Premium Cannabis Seeds</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Password</Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <label htmlFor="remember" className="text-sm text-slate-600">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-slate-600 hover:text-slate-900 underline">
                    Forgot password?
                  </a>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full" size="lg">
                  Sign In
                </Button>
                <p className="text-sm text-center text-slate-600">
                  Don't have an account?
                  <button
                    onClick={() => setActiveTab("signup")}
                    className="text-slate-900 font-medium hover:underline"
                  >
                    Sign up
                  </button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Sign Up Tab */}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>Join us to access premium genetics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-firstname">First Name</Label>
                    <Input
                      id="signup-firstname"
                      type="text"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-lastname">Last Name</Label>
                    <Input
                      id="signup-lastname"
                      type="text"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm">Confirm Password</Label>
                  <Input
                    id="signup-confirm"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 mt-1 rounded border-gray-300"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-slate-600">
                    I agree to the{" "}
                    <a href="#" className="text-slate-900 hover:underline">
                      Terms of Service
                    </a>
                    {" "}and{" "}
                    <a href="#" className="text-slate-900 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full" size="lg">
                  Create Account
                </Button>
                <p className="text-sm text-center text-slate-600">
                  Already have an account?{" "}
                  <button
                    onClick={() => setActiveTab("login")}
                    className="text-slate-900 font-medium hover:underline"
                  >
                    Sign in
                  </button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
