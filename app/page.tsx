import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { LogoCloud } from '@/components/logo-cloud'
import Header from '@/components/header'
import FooterSection from '@/components/footer'

import { PlatformFeatures } from '@/app/(marketing)/(home)/sections/platform-features'
import { AnalyticsFeatures } from '@/app/(marketing)/(home)/sections/analytics-features'
import { TestimonialsSection } from '@/app/(marketing)/(home)/sections/testimonials-section'
import { CallToAction } from '@/components/call-to-action'
import { HeroIllustration } from '@/components/illustrations/hero-illustration'
import { ProductDirectionFeaturesSection } from '@/app/(marketing)/(home)/sections/product-direction-features'
import { MoreFeatures } from '@/app/(marketing)/(home)/sections/more-features'

export default function Home() {
    return (
        <>
            <Header />
            <main
                role="main"
                className="bg-muted [--color-primary:var(--color-indigo-500)]">
                <section>
                    <div className="bg-muted pt-32 lg:pt-44">
                        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-12">
                            <div className="text-center">
                                <h1 className="text-foreground mx-auto text-balance text-5xl font-semibold lg:text-6xl xl:text-7xl xl:tracking-tight">
                                The <span>Encrypted Prediction Market</span> on Zema
                            </h1>

                            <div className="mx-auto mb-20 mt-4 max-w-lg">
                                <p className="text-muted-foreground mb-6 text-balance text-lg lg:text-xl">Trade on future outcomes with full privacy. Your bets are encrypted, your strategy is yours.</p>

                                <div className="bg-foreground/5 ring-border-illustration mx-auto w-fit rounded-lg p-1 ring-1">
                                    <Button
                                        asChild
                                        className="[--color-primary:var(--color-indigo-500)]">
                                        <Link href="/create">Start Trading</Link>
                                    </Button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <HeroIllustration />
                        </div>
                    </div>
                    {/* <LogoCloud /> */}
                </section>
                {/* <AnalyticsFeatures /> */}
                <PlatformFeatures />
                {/* <ProductDirectionFeaturesSection /> */}
                <MoreFeatures />
                {/* <TestimonialsSection /> */}
                <CallToAction />
            </main>
            <FooterSection />
        </>
    )
}
