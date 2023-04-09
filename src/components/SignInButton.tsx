"use client";

import { useSignIn } from "@clerk/nextjs/app-beta/client";
import toast from "react-hot-toast";

export default function SignInButton() {
  const { isLoaded, signIn } = useSignIn();

  if (!isLoaded) return null;

  const signInWithGoogle = () => {
    signIn
      ?.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "https://well-jay-29.accounts.dev/default-redirect",
        redirectUrlComplete: "/",
      })
      .catch(() => {
        toast.error("Failed to sign in :(");
      });
  };

  return (
    <button
      onClick={() => signInWithGoogle()}
      className="rounded-md bg-slate-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
    >
      Sign in with Google
    </button>
  );
}
