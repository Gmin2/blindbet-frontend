import Link from 'next/link'
import { ArrowUpRight, Clock, Users, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MarketCardProps {
    id: string | number
    question: string
    volume: string
    ending: string
    category?: string
    image?: string
}

export function MarketCard({ id, question, volume, ending, category, image }: MarketCardProps) {
    return (
        <Link 
            href={`/market/${id}`}
            className="group relative flex flex-col justify-end h-full min-h-[240px] overflow-hidden rounded-xl border bg-background"
        >
            {/* Image Background */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <img 
                        src={image} 
                        alt={question}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="h-full w-full bg-muted/20" />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-black/60">
                            {category || 'Market'}
                        </span>
                    </div>
                    <ArrowUpRight className="size-5 text-white/70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold leading-tight text-white antialiased">
                    {question}
                </h3>
                
                <div className="flex items-center gap-4 text-sm font-medium text-white/70">
                    <div className="flex items-center gap-1.5">
                        <Users className="size-4" />
                        <span>{volume}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="size-4" />
                        <span>{ending}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
