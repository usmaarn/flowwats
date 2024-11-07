import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Icon} from "@iconify/react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@nextui-org/checkbox";
import {Loader2} from "lucide-react";

export default function Page(){
    return (
        <section className="w-full max-w-[400px]">
            <div
                className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign up</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            Already have an account?
                            <Link className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="/auth/login">
                                Sign in here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-5">
                        <Button type="button" className="w-full" variant="outline" size="lg">
                            <Icon icon="devicon:google" className="mr-5"/>
                            Sign up with Google
                        </Button>

                        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
                            Or
                        </div>

                        <form>
                            <div className="grid gap-y-4">
                                <div>
                                    <Label htmlFor="email">Email address</Label>
                                    <Input type="email" id="email" name="email" className="" required/>
                                    <p className="hidden text-xs text-red-600 mt-2">Please include a valid email address
                                        so we can get back to you</p>
                                </div>

                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input type="password" id="password" name="password"/>
                                    <p className="hidden text-xs text-red-600 mt-2">8+ characters required</p>
                                </div>

                                <div>
                                    <Label htmlFor="password">Confirm Password</Label>
                                    <Input type="password" id="password" name="password"/>
                                    <p className="hidden ext-xs text-red-600 mt-2">8+ characters required</p>
                                </div>

                                <Checkbox>
                                    <p className="text-sm">
                                        I accept the <Link href="" className="text-primary underline">Terms & Conditions</Link>
                                    </p>
                                </Checkbox>

                                <Button type="submit" className="flex items-center gap-2" size="lg">
                                    <Loader2 className="size-5 animate-spin"/>
                                    Sign in
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}