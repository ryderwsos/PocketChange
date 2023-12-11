'use client';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import {
    AtSymbolIcon,
    ExclamationCircleIcon,
    KeyIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';
import axios from 'axios';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../components/Button";
import toast from 'react-hot-toast';

export default function SignUpPage() {

    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: ""
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async (e: any) => {
        try {
            e.preventDefault()
            setLoading(true);
            const response = await axios.post(
                "/api/user/signup",
                user
            );
            console.log("Signup Success: ", response.data);
            router.push('/login')
            
        } catch (error: any) {
            console.log('Signup Failed', error)
            console.log('ERROR')
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        if (user.email.length > 0 && user.username.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <main className="flex items-center justify-center md:h-full">
            <div
                className="mx-auto flex justify-center items-center flex-col space-y-2.5 p-4 md:mt-96"
            >
                <div
                    className="flex justify-center items-end rounded-lg bg-secondary p-3 md:h-36"
                >
                    <form className="space-y-3" onSubmit={onSignup}>
                        <div
                            className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8 text-black"
                        >
                            <h1 className={`mb-3 text-2xl text-primary`}>
                                {loading ? 'Processing' : 'Please sign up to continue.'}
                            </h1>
                            <div className="w-full">
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="username"
                                    >
                                        Username
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="username"
                                            type="password"
                                            name="password"
                                            value={user.username}
                                            onChange={e => setUser({ ...user, username: e.target.value })}
                                            placeholder="Enter your username"
                                            required
                                        />
                                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={user.email}
                                            onChange={e => setUser({ ...user, email: e.target.value })}
                                            placeholder="Enter your email address"
                                            required
                                        />
                                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label
                                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={user.password}
                                            onChange={e => setUser({ ...user, password: e.target.value })}
                                            placeholder="Enter password"
                                            required
                                            minLength={6}
                                        />
                                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                    </div>
                                </div>
                            </div>
                            <SignupButton type='submit' text={buttonDisabled ? 'No Sign Up!' : 'Sign Up!'}/>
                            <div className="flex h-8 items-end space-x-1">
                                {/* Add form errors here */}
                            </div>
                        </div>
                    </form>
                </div>
                <Link href='/login' className="text-accent">
                    Have an account? Login here!
                </Link>
            </div>
        </main>
    );
}

function SignupButton({ type, text }: {
    type: 'submit' | 'reset' | 'button' | undefined
    text: String
}) {
    return (
        <Button
            type={type}
            className="mt-4 w-full bg-primary"
        >
            {text} <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
    );
}
