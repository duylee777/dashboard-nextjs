'use client';

import Link from "next/link";
import Image from "next/image";
import { TextInput, Label, Button, Checkbox } from "flowbite-react";

export default function ForgotPassword () {
    return (
        <main className="bg-gray-50 h-screen dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
                <Link href="http://localhost:1313/" className="flex gap-4 items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
                    <Image src="/assets/imgs/logo-phenikaa-uni-mini.png" alt="logo-phenikaa-uni-mini" width={30} height={30} />
                    <span>ITC</span>
                </Link>
                {/* Card */}
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
                    <div className="w-full p-6 sm:p-8">
                        <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                            Forgot your password?
                        </h2>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Don&apos;t fret! Just type in your email and we will send you a code to reset your password!
                        </p>
                        <form className="mt-8 space-y-6" action="#">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <TextInput placeholder="input email ..." />
                            </div>
                            <div className="flex items-center flex-wrap gap-2 text-sm">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">I accept the</Label>
                                <Link href="#" className="text-primary-700 hover:underline dark:text-primary-500">Terms and Conditions</Link>
                            </div>
                            <Button>Reset password</Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}