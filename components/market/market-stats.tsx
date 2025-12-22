import { Card, CardContent } from '@/components/ui/card'
import { Activity, Users, BarChart3, Clock } from 'lucide-react'

export function MarketStats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2">
                    <BarChart3 className="h-6 w-6 text-primary mb-1" />
                    <div className="text-2xl font-bold">$3.5M</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Total Volume</div>
                </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2">
                    <Users className="h-6 w-6 text-blue-500 mb-1" />
                    <div className="text-2xl font-bold">1,245</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Traders</div>
                </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2">
                    <Activity className="h-6 w-6 text-green-500 mb-1" />
                    <div className="text-2xl font-bold text-green-500">62%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Yes Probability</div>
                </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-2">
                    <Clock className="h-6 w-6 text-orange-500 mb-1" />
                    <div className="text-2xl font-bold">24h</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Time Left</div>
                </CardContent>
            </Card>
        </div>
    )
}
