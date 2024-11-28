import Link from "next/link";

export default function NotFound() {

    return (
        <div className="flex flex-col">
            <p className="font-bold text-lg">404 - Page Not Found!</p>
            <Link href={'/'} className="text-blue-400 underline">Return home</Link>
        </div>
    );
}
