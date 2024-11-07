import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";


export default function Page(){
    return (
        <section className="w-full max-w-[400px]">
            <div
                className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            Remember your password?
                            <Link
                                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                href="/auth/login">
                                Sign in here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-5">
                        <form>
                            <div className="grid gap-y-4">
                                <div>
                                    <Label htmlFor="email">Email address</Label>
                                    <Input type="email" id="email" name="email" className="" required/>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                        Please include a valid email address so we can get back to you
                                    </p>
                                </div>

                                <Button type="submit" size="lg" className="">
                                    Reset password
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}