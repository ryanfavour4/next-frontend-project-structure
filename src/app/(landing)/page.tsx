import Icon from "@/components/ui/icon";
import { lineMdDownloadingLoop } from "@/lib/icons";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <h1 className="text-5xl font-bold underline">
                Welcome to Next.js 13 with Tailwind CSS
            </h1>
            <button>Click Me!</button>
            <Icon icon={lineMdDownloadingLoop} />
            <Icon icon={"line-md:align-left"} />
            <Icon icon={"line-md:at"} />
            <Link href={"/login"}>Go To Login</Link>
        </div>
    );
}

