import { PortfolioTable } from '@/components/portfolio-table'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb'

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-12">
                <div className="max-w-md mb-12">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/portfolio">Portfolio</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <h1 className="text-muted-foreground mt-4 text-balance text-4xl font-semibold flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl border border-primary/20">
                            🤠
                        </div>
                        <div>
                            Your <strong className="text-foreground font-semibold">Portfolio</strong>
                        </div>
                    </h1>
                </div>

                <div className="relative">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-2 -translate-x-1 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-y-6 inset-x-0 right-1/3 ml-auto w-2 translate-x-1.5 border-x max-lg:hidden"
                    />
                    
                    <div className="relative z-10">
                        <PortfolioTable />
                    </div>
                </div>
            </div>
        </main>
    )
}
