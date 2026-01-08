"use client";
import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useUserStore } from "@/lib/store/user";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useUserStore((state) => state.setIsLoggedIn);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (values: { email: string; password: string }) => {
    console.log("Login attempt:", values);

    if (values.email === "admin@tm.com.my" && values.password === "123") {
      setIsLoggedIn(true);
      router.push("/package");
      return;
    } else {
      setShowAlert(true);
    }
  };
  console.log("Is Logged In:", isLoggedIn);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      <Image
        src="/bg-3.jpeg"
        alt="Login Background"
        fill
        className="object-cover object-center z-0 opacity-70"
        priority
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className=" p-8 rounded-lg w-full max-w-sm flex flex-col gap-4 z-20 relative"
        >
          <div className="text-2xl font-bold mb-2 text-center text-zinc-900 dark:text-zinc-100">
            Admin Login
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Email"
                {...field}
                required
                className="bg-white text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Password"
                {...field}
                required
                className="bg-white text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-400 focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-zinc-100"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <Link
            href="/"
            className="text-xs text-blue-600 dark:text-blue-400 hover:underline text-center"
          >
            Back to Home
          </Link>
        </form>
        <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Login Failed</AlertDialogTitle>
              <AlertDialogDescription>
                Invalid email or password. Please contact administrator.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setShowAlert(false)}>
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Form>
    </div>
  );
};

export default LoginPage;
