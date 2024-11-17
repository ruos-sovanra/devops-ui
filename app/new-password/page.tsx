'use client';
import { useState } from 'react'
import Link from 'next/link'

// // Simulated analytics event logging
// const logEvent = (eventName: string, data: any) => {
//     console.log('Event logged:', eventName, data)
//     // In a real app, this would send the event to an analytics service
// }
//
// // Simulated error logging
// const logError = (error: Error) => {
//     console.error('Error logged:', error)
//     // In a real app, this would send the error to a logging service
// }

export default function NewPasswordPage() {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setSuccess(null)

        if (password !== confirmPassword) {
            setError("Passwords don't match")
            return
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters long")
            return
        }

        try {
            // Simulated API call
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({password}),
            })
            if (!response.ok) throw new Error('Password reset failed')
            setSuccess('Your password has been successfully reset')
            // logEvent('password_reset_success', {})
        } catch (err) {
            setError('Password reset failed. Please try again.')
            // logError(err as Error)
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen w-full bg-white">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center p-4">
                <div className="grid w-full gap-6 rounded-xl bg-white md:grid-cols-2 md:gap-12 lg:gap-16">
                    {/* Left Column - New Password Form */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xl font-semibold text-purple-600">
                                <div className="grid h-8 w-8 place-items-center rounded bg-purple-600 text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                Tasky
                            </div>
                            <h1 className="text-3xl font-bold">Set New Password</h1>
                            <p className="text-sm text-gray-500">Enter and confirm your new password</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="new-password">
                                    New Password
                                </label>
                                <input
                                    className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="new-password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your new password"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="confirm-password">
                                    Confirm New Password
                                </label>
                                <input
                                    className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="confirm-password"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your new password"
                                    required
                                />
                            </div>
                            {error && (
                                <div className="flex items-center gap-2 text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <p className="text-sm">{error}</p>
                                </div>
                            )}
                            {success && (
                                <div className="flex items-center gap-2 text-green-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <p className="text-sm">{success}</p>
                                </div>
                            )}
                            {/*<button*/}
                            {/*    type="submit"*/}
                            {/*    className="inline-flex h-11 w-full items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"*/}
                            {/*>*/}
                            {/*    Reset Password*/}
                            {/*</button>*/}
                        </form>

                        <button
                            className="inline-flex h-11 w-full items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                        >
                            <Link href={"/login"}>Reset Password</Link>
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Remember your password?{" "}
                            <Link className="font-medium text-purple-600 hover:underline" href="#">
                                Sign In
                            </Link>
                        </p>
                    </div>

                    {/* Right Column - Illustration */}
                    <div className="hidden rounded-2xl bg-purple-500 p-6 md:block">
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-6 text-center text-white">
                                <h2 className="text-2xl font-bold">Secure Your Account</h2>
                                <p className="text-lg">Choose a strong password to keep your Tasky account safe.</p>
                                <div className="flex space-x-2">
                                    <div className="h-2 w-2 rounded-full bg-white/60"/>
                                    <div className="h-2 w-8 rounded-full bg-white"/>
                                    <div className="h-2 w-2 rounded-full bg-white/60"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
