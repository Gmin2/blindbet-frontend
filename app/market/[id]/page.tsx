import { MarketHeader } from '@/components/market/market-header'
import { MarketChart } from '@/components/market/market-chart'
import { BettingInterface } from '@/components/market/betting-interface'
import { MarketStats } from '@/components/market/market-stats'

// Mock data for initial development
const marketData = {
    id: 0,
    question: "Will ETH reach $5000 by December 2025?",
    volume: "$3.5M",
    ending: "Dec 31, 2025",
    image: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?q=80&w=2072&auto=format&fit=crop",
    category: "Crypto",
}

export default function MarketPage({ params }: { params: { id: string } }) {
    return (
        <main className="min-h-screen bg-background pb-20 pt-24">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left Column: Market Info & Chart */}
                    <div className="lg:col-span-8 space-y-8">
                        <MarketHeader market={marketData} />
                        <MarketStats />
                        <MarketChart />
                        
                        {/* Market Description / Rules */}
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-xl font-semibold text-foreground mb-4">Market Rules</h3>
                            <p className="text-muted-foreground">
                                This market will resolve to "Yes" if the price of Ethereum (ETH) reaches or exceeds $5,000.00 USD at any point before December 31, 2025, according to the resolution source.
                            </p>
                            <p className="text-muted-foreground">
                                Resolution Source: Chainlink Oracle / Binance API.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Betting Interface */}
                    <div className="lg:col-span-4">
                        <BettingInterface />
                    </div>
                </div>
            </div>
        </main>
    )
}
