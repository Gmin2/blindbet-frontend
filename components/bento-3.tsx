import { Card } from '@/components/ui/card'
import VSCodium from '@/components/logos/VSCodium'
import Replit from '@/components/logos/Replit'
import GooglePaLM from '@/components/logos/GooglePaLM'
import { ScanIllustration } from "@/components/scan-illustration"
import { VisualizationIllustration } from "@/components/visualization-illustration"
import { CampaignIllustration } from "@/components/campaign-illustration"
import { Linear } from '@/components/logos/linear'
import OpenAI from '@/components/logos/open-ai'
import { Cloudflare } from '@/components/logos/cloudflare'

export default function Bento3() {
    return (
        <section className="@container bg-muted/50 py-24">
            <h2 className="sr-only">Features</h2>
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="@xl:grid-cols-2 @3xl:grid-cols-6 grid gap-4 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)]">
                    <Card className="@3xl:col-span-2 group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <h3 className="text-foreground font-semibold">Collaborative Analysis</h3>
                            <p className="text-muted-foreground mt-3">Add comments, share insights, and work together with your team to extract maximum.</p>
                        </div>

                        <div className="relative -m-8 flex flex-wrap items-center justify-between gap-1 from-transparent via-rose-50 to-amber-50 p-8">
                            <ScanIllustration />
                        </div>
                    </Card>
                    <Card className="@3xl:col-span-4 grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <h3 className="text-foreground font-semibold">Collaborative Analysis</h3>
                            <p className="text-muted-foreground mt-3">Add comments, share insights, and work together with your team to extract maximum.</p>
                        </div>
                        <VisualizationIllustration />
                    </Card>
                    <Card className="@xl:col-span-full @3xl:col-span-3 grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <h3 className="text-foreground font-semibold">Scheduled Reports</h3>
                            <p className="mt-3">Automate report delivery to stakeholders with customizable scheduling options.</p>
                        </div>
                        <CampaignIllustration />
                    </Card>
                    <Card className="@xl:col-span-full @3xl:col-span-3 grid grid-rows-[auto_1fr] space-y-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <h3 className="text-foreground font-semibold">Seamless Integration</h3>
                            <p className="text-muted-foreground mt-3">Add comments, share insights, and work together with your team to extract maximum.</p>
                        </div>
                        <div
                            aria-hidden
                            className="bg-linear-to-b border-background relative -m-8 flex flex-col justify-center border-x from-transparent via-orange-50 to-zinc-50 p-8">
                            <Stripes />
                            <Integrations />
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const Stripes = () => (
    <div
        aria-hidden
        className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,black,black_1px,transparent_1px,transparent_6px)] mix-blend-overlay [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    />
)

const Integrations = () => (
    <>
        <div className="@md:grid-cols-6 relative grid grid-cols-3 gap-4">
            <div className="@md:block rounded-(--radius) bg-background/50 border-foreground/15 hidden aspect-square border border-dashed backdrop-blur-3xl"></div>
            <div className="rounded-(--radius) bg-illustration ring-border-illustration shadow-black/10flex aspect-square items-center justify-center p-4 shadow-md ring-1">
                <VSCodium className="size-6" />
            </div>
            <div className="@md:block rounded-(--radius) bg-background/50 border-foreground/15 hidden aspect-square border border-dashed backdrop-blur-3xl"></div>
            <div className="rounded-(--radius) bg-illustration ring-border-illustration flex aspect-square items-center justify-center p-4 shadow-md shadow-black/10 ring-1">
                <Replit className="size-6" />
            </div>
            <div className="@md:block rounded-(--radius) bg-background/50 border-foreground/15 hidden aspect-square border border-dashed backdrop-blur-3xl"></div>
            <div className="rounded-(--radius) bg-illustration ring-border-illustration flex aspect-square items-center justify-center p-4 shadow-md shadow-black/10 ring-1">
                <GooglePaLM className="size-6" />
            </div>
        </div>
        <div className="@md:grid-cols-6 relative mt-4 grid grid-cols-3 gap-4">
            <div className="rounded-(--radius) bg-illustration ring-border-illustration flex aspect-square items-center justify-center shadow-md shadow-black/10 ring-1">
                <Linear className="size-6" />
            </div>
            <div className="@md:block rounded-(--radius) bg-background/50 border-foreground/15 hidden aspect-square border border-dashed backdrop-blur-3xl"></div>

            <div className="rounded-(--radius) bg-illustration ring-border-illustration flex aspect-square items-center justify-center shadow-md shadow-black/10 ring-1">
                <OpenAI className="size-6" />
            </div>
            <div className="@md:block rounded-(--radius) bg-background/50 border-foreground/15 hidden aspect-square border border-dashed backdrop-blur-3xl"></div>
            <div className="rounded-(--radius) bg-illustration ring-border-illustration flex aspect-square items-center justify-center shadow-md shadow-black/10 ring-1">
                <Cloudflare className="size-6" />
            </div>
            <div className="@md:block rounded-(--radius) bg-background/50 border-foreground/15 hidden aspect-square border border-dashed backdrop-blur-3xl"></div>
        </div>
    </>
)