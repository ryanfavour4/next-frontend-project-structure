import Icon from "@/components/ui/icon";
import { lineMdDownloadingLoop } from "@/lib/icons";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center font-sans">
            <button>Click Me!</button>
            <Icon icon={lineMdDownloadingLoop} />
            <Icon icon={"line-md:align-left"} />
            <Link href={"/login"}>Go To Login</Link>
        </div>
    );
}

