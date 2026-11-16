'use client';

import Link from "next/link";
import Image from "next/image";
import { TextInput, Label, Button, Checkbox } from "flowbite-react";

export default function ResetPassword () {
    return (
        <main className="bg-gray-50 h-screen dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
                <Link href="http://localhost:1313/" className="flex gap-4 items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white">
                    <Image src="/assets/imgs/logo-phenikaa-uni-mini.png" alt="logo-phenikaa-uni-mini" width={30} height={30} />
                    <span>ITC</span>
                </Link>
                {/* Card */}
                <div className="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow sm:p-8 dark:bg-gray-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Reset your password
                    </h2>
                    <form className="mt-8 space-y-6" action="#">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <TextInput placeholder="input email ..." />
                        </div>
                        <div>
                            <Label htmlFor="password">New password</Label>
                            <TextInput type="password" placeholder="••••••••" />
                        </div>
                        <div>
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <TextInput type="password" placeholder="••••••••" />
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
        </main>
    );
}