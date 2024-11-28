import testServerAction from "@/server/action";
import { Metadata, ServerRuntime } from "next";

export const runtime: ServerRuntime = "edge";

export const metadata: Metadata = {
  title: "Home"
}

export default async function Home() {
  const resFromServer = await testServerAction();

  return (
    <div>
      <p className="font-bold text-lg">Home Page</p>
      <p>From server: <span className="text-green-400">{resFromServer}</span></p>
    </div>
  );
}
