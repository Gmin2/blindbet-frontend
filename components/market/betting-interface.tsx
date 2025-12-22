'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Wallet } from 'lucide-react'

export function BettingInterface() {
    const [outcome, setOutcome] = useState<'yes' | 'no'>('yes')
    const [amount, setAmount] = useState('')

    return (
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-fit sticky top-24 rounded-none">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>Place Bet</span>
                    <span className="text-sm font-normal text-muted-foreground flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        Balance: 1,000 USDC
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <Tabs defaultValue="yes" onValueChange={(v) => setOutcome(v as 'yes' | 'no')} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 rounded-none">
                        <TabsTrigger value="yes" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-500 rounded-none">Yes</TabsTrigger>
                        <TabsTrigger value="no" className="data-[state=active]:bg-red-500/20 data-[state=active]:text-red-500 rounded-none">No</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">Amount (USDC)</label>
                    <div className="relative">
                        <Input 
                            type="number" 
                            placeholder="0.00" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pr-16 text-lg font-medium rounded-none"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2">
                            <Button variant="ghost" size="sm" className="h-6 px-2 text-xs rounded-none" onClick={() => setAmount('100')}>MAX</Button>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Potential Payout</span>
                        <span className="font-medium text-foreground">
                            {amount ? `$${(parseFloat(amount) * 1.8).toFixed(2)}` : '$0.00'}
                        </span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Potential Return</span>
                        <span className="font-medium text-green-500">
                            {amount ? `+80%` : '0%'}
                        </span>
                    </div>
                </div>

                <Button 
                    className={`w-full text-lg font-semibold h-12 rounded-none ${
                        outcome === 'yes' 
                            ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-900/20' 
                            : 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/20'
                    }`}
                >
                    Buy {outcome.toUpperCase()}
                </Button>
            </CardContent>
        </Card>
    )
}
