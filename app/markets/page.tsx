"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { MarketsGrid } from '@/components/markets-grid'
import { MarketsFilter, Category } from '@/components/markets-filter'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Post } from '@/types/post'

const markets = [
    {
        id: 0,
        question: "Will ETH reach $5000 by December 2025?",
        volume: "$3.5M",
        ending: "2025-12-31",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1622790698141-94e30457ef12?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: 1,
        question: "Will BTC hit $100k in 2025?",
        volume: "$12.1M",
        ending: "2025-12-31",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop"
    },
    {
        id: 2,
        question: "Will Trump win the 2024 US Election?",
        volume: "$45.2M",
        ending: "2024-11-05",
        category: "Politics",
        image: "https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        question: "Will GPT-5 be released before Q3 2025?",
        volume: "$1.2M",
        ending: "2025-07-01",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        question: "Will SpaceX land on Mars by 2030?",
        volume: "$850K",
        ending: "2030-12-31",
        category: "Space",
        image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 5,
        question: "Will the Fed cut rates in March 2024?",
        volume: "$5.6M",
        ending: "2024-03-20",
        category: "Finance",
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop"
    }
]

const categories: Category[] = [
    { slug: "crypto", title: "Crypto" },
    { slug: "politics", title: "Politics" },
    { slug: "ai", title: "AI" },
    { slug: "space", title: "Space" },
    { slug: "finance", title: "Finance" }
]

export default function MarketsPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const categoryParam = searchParams.get('category')
    const selectedCategory = categoryParam || "All"

    const filteredMarkets = selectedCategory === "All" 
        ? markets 
        : markets.filter(market => market.category.toLowerCase() === selectedCategory.toLowerCase())

    // Transform markets to Posts
    const posts: Post[] = filteredMarkets.map(market => ({
        title: market.question,
        description: `Volume: ${market.volume}`,
        slug: market.id.toString(),
        href: `/market/${market.id}`,
        publishedAt: new Date().toISOString(), // Mock
        date: market.ending,
        image: market.image,
        category: {
            title: market.category,
            slug: market.category.toLowerCase()
        },
        authors: [{
            name: "BlindBet Protocol",
            image: "https://github.com/shadcn.png" // Mock
        }]
    }))

    // All posts for search
    const allPosts: Post[] = markets.map(market => ({
        title: market.question,
        description: `Volume: ${market.volume}`,
        slug: market.id.toString(),
        href: `/market/${market.id}`,
        publishedAt: new Date().toISOString(), // Mock
        date: market.ending,
        image: market.image,
        category: {
            title: market.category,
            slug: market.category.toLowerCase()
        },
        authors: [{
            name: "BlindBet Protocol",
            image: "https://github.com/shadcn.png" // Mock
        }]
    }))

    const handleCategoryChange = (category: string) => {
        if (category === 'All') {
            router.push('/markets')
        } else {
            router.push(`/markets?category=${category}`)
        }
    }

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="flex items-end justify-between">
                    <div className="max-w-md">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/markets">Markets</BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <h1 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold">
                            Explore Markets on <strong className="text-foreground font-semibold">BlindBet</strong>
                        </h1>
                    </div>
                    <Button asChild className="rounded-none mb-2">
                        <Link href="/create">
                            Create Market
                        </Link>
                    </Button>
                </div>
            </div>

            <MarketsFilter 
                categories={categories} 
                posts={allPosts} 
                activeCategory={selectedCategory} 
                onCategoryChange={handleCategoryChange} 
            />

            <MarketsGrid posts={posts} />

        </main>
    )
}
