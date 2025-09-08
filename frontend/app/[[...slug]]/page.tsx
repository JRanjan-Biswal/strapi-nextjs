import { BlockGenerator } from "@/components/Layout/BlockGenerator";
import { getPageData } from "@/data_fetcher/fetcher";
import { notFound } from "next/navigation";

async function fetchData(slug?: string) {
    
    const data = await getPageData(slug);
    
    if (!data || !data.data?.[0]) notFound();

    return data?.data?.[0] || {};
}

export default async function DynamicPage(
    { searchParams, params, ...rest }: { searchParams: any, params: any, [key: string]: any }
) {
    const searchParamsa = await searchParams;
    const slug = (await params)?.slug;

    const data = await fetchData(slug);

    return (
        <div className="min-h-screen">
            <BlockGenerator blocks={data.blocks} />
        </div>
    );
}
