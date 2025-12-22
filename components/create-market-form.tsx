'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'

export default function CreateMarketForm() {
    return (
        <section className="bg-linear-to-b from-muted to-background flex min-h-screen px-4 py-16 md:py-32">
            <form
                action=""
                className="max-w-xl m-auto h-fit w-full">
                <div className="p-6">
                    <div>
                        <h1 className="mt-6 text-balance text-xl font-semibold">
                            <span className="text-muted-foreground">Create a new market</span>
                        </h1>
                        <p className="text-muted-foreground mt-2 text-sm">
                            Define the rules and parameters for your prediction market.
                        </p>
                    </div>

                    <hr className="mb-5 mt-6" />

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label
                                htmlFor="question"
                                className="block text-sm font-medium">
                                Market Question
                            </Label>
                            <Textarea
                                required
                                name="question"
                                id="question"
                                placeholder="e.g. Will ETH reach $5000 by December 2025?"
                                className="ring-foreground/15 border-transparent ring-1 min-h-[100px] resize-none rounded-none"
                            />
                            <p className="text-muted-foreground text-xs">
                                The question must be clear and resolvable.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="duration"
                                    className="block text-sm font-medium">
                                    Betting Duration
                                </Label>
                                <Select defaultValue="604800">
                                    <SelectTrigger className="w-full rounded-none border-transparent ring-1 ring-foreground/15">
                                        <SelectValue placeholder="Select duration" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-none">
                                        <SelectItem value="3600">1 Hour</SelectItem>
                                        <SelectItem value="86400">24 Hours</SelectItem>
                                        <SelectItem value="604800">7 Days</SelectItem>
                                        <SelectItem value="2592000">30 Days</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="delay"
                                    className="block text-sm font-medium">
                                    Resolution Delay
                                </Label>
                                <Select defaultValue="86400">
                                    <SelectTrigger className="w-full rounded-none border-transparent ring-1 ring-foreground/15">
                                        <SelectValue placeholder="Select delay" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-none">
                                        <SelectItem value="3600">1 Hour</SelectItem>
                                        <SelectItem value="86400">24 Hours</SelectItem>
                                        <SelectItem value="172800">48 Hours</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="resolver"
                                className="block text-sm font-medium">
                                Resolver Address
                            </Label>
                            <Input
                                type="text"
                                required
                                name="resolver"
                                id="resolver"
                                placeholder="0x..."
                                className="ring-foreground/15 border-transparent ring-1 rounded-none font-mono"
                            />
                            <p className="text-muted-foreground text-xs">
                                The address responsible for resolving the market outcome.
                            </p>
                        </div>

                        <Button
                            className="w-full rounded-none"
                            size="lg">
                            Create Market
                        </Button>
                    </div>
                </div>
            </form>
        </section>
    )
}
