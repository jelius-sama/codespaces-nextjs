"use client"

import { usePathname } from "next/navigation";
import React from 'react';

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer>
            <p className="font-bold text-lg mt-10 mb-2">Steps to re-create the bug:</p>
            {pathname !== "/" ? (
                <li>Navigate to <span className="text-red-400">"home page"</span> by clicking the link above.</li>
            ) : (
                <>
                    <li>Refresh the page just to make sure nothing is cached.</li>
                    <li>Navigate to <span className="text-red-400">"art page"</span> by clicking the link above.</li>
                </>
            )}

            <span className="mt-2 flex flex-nowrap flex-col gap-y-2">
                <span className="font-bold">
                    When navigating to <span className="text-red-400">"art page"</span> from <span className="text-red-400">"home page"</span> :
                </span>

                <li>
                    Notice that the loading UI says <span className="text-red-400">"Loading Artist page..."</span> instead of <span className="text-red-400">"Loading Art page..."</span>.
                </li>

                <li>
                    Exactly, if you look into the code, that is the `loading.tsx` UI for the <span className="text-red-400">"artist page"</span> and not the <span className="text-red-400">"art page"</span>.
                </li>

                <li>
                    But for some unknown reasons the `loading.tsx` UI for <span className="text-red-400">"art page"</span> is not displayed.
                </li>
                
                <li>
                    Instead `loading.tsx` UI for <span className="text-red-400">"artist page"</span> is displayed when navigating to <span className="text-red-400">"art page"</span>.
                </li>
            </span>
        </footer>
    );
}
