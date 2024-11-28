"use client"

import { usePathname } from "next/navigation";
import React from 'react';

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer>
            <p className="font-bold text-lg mt-10 mb-2">Steps to re-create the bug:</p>
            {pathname !== "/" ? (
                <li>Navigate to <span className="text-red-400">&quot;home page&quot;</span> by clicking the link above.</li>
            ) : (
                <>
                    <li>Refresh the page just to make sure nothing is cached.</li>
                    <li>Navigate to <span className="text-red-400">&quot;art page&quot;</span> by clicking the link above.</li>
                </>
            )}

            <span className="mt-2 flex flex-nowrap flex-col gap-y-2">
                <span className="font-bold">
                    When navigating to <span className="text-red-400">&quot;art page&quot;</span> from <span className="text-red-400">&quot;home page&quot;</span> :
                </span>

                <li>
                    Notice that the loading UI says <span className="text-red-400">&quot;Loading Artist page...&quot;</span> instead of <span className="text-red-400">&quot;Loading Art page...&quot;</span>.
                </li>

                <li>
                    Exactly, if you look into the code, that is the `loading.tsx` UI for the <span className="text-red-400">&quot;artist page&quot;</span> and not the <span className="text-red-400">&quot;art page&quot;</span>.
                </li>

                <li>
                    But for some unknown reasons the `loading.tsx` UI for <span className="text-red-400">&quot;art page&quot;</span> is not displayed.
                </li>
                
                <li>
                    Instead `loading.tsx` UI for <span className="text-red-400">&quot;artist page&quot;</span> is displayed when navigating to <span className="text-red-400">&quot;art page&quot;</span>.
                </li>
            </span>
        </footer>
    );
}
