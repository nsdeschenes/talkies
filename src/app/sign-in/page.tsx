import SignInButton from "@/components/SignInButton";
import Image from "next/image";

export default function SignInPage() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto h-12 w-auto"
            src="/android-chrome-512x512.png"
            alt="projector emoji"
            width={64}
            height={64}
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your <i>Talkies</i> account
          </h2>
        </div>

        <div className="mt-8 flex justify-center sm:mx-auto sm:w-full sm:max-w-md">
          <SignInButton />
        </div>
      </div>
    </>
  );
}
