"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CustomInput from "./CustomInput";
import { AuthFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof AuthFormSchema>) {
    setisLoading(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setisLoading(false);
  }
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8 ">
        <Link href="/" className=" cursor-pointer flex items-center gap-1 ">
          <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account " : type === "signin" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600 ">
            {user
              ? "Link Your Account to get Started"
              : "please enter your Details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                      Loading...
                    </>
                  ) : type === "signin" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "signin" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
