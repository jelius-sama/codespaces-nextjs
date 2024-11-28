import testServerAction from "@/server/action";
import { Metadata, ServerRuntime } from "next";

export const runtime: ServerRuntime = "edge";

export const generateMetadata = async ({ params }: { params: { artist: string, art: string } }): Promise<Metadata> => {
    const resFromServer = await testServerAction();

    return {
        title: resFromServer + params.artist + params.art,
    }
}

export default async function Art({ params }: { params: { artist: string, art: string } }) {
    const resFromServer = await testServerAction();

    return (
        <div>
            <p className="font-bold text-lg">Art Page</p>
            <p>From server: <span className="text-green-400">{resFromServer}</span></p>
            <p>From params:
                <span className="text-green-400">
                    [artist]: <span className="underline">{params.artist}</span>,{" "}
                    [art]: <span className="underline">{params.art}</span>
                </span>
            </p>
        </div>
    );
}
