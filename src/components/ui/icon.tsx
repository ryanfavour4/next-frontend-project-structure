"use client";

import {
    IconifyIcon,
    IconProps,
    Icon as IconifyReactIcon,
} from "@iconify/react";
import { ICON_MAP } from "@/lib/icons";

type IconType = string | IconifyIcon;

export interface Props extends IconProps {
    icon: IconType;
    className?: string;
}

export default function Icon({ icon, className, ...rest }: Props) {
    // ✅ Direct object usage
    if (typeof icon !== "string") {
        return <IconifyReactIcon icon={icon} className={className} {...rest} />;
    }

    const [prefix] = icon.split(":");

    // 🔍 Check if ANY icon from this set exists locally
    const hasSetInstalled = Object.keys(ICON_MAP).some((key) =>
        key.startsWith(prefix + ":"),
    );

    const resolved = ICON_MAP[icon as keyof typeof ICON_MAP];

    // ❌ Set NOT installed → error
    if (!hasSetInstalled) {
        console.error(`
❌ Icon set "${prefix}" not installed.

👉 Install it:
pnpm install @iconify/icons-${prefix}
(or @iconify-icons/${prefix} if applicable)

👉 Then run:
pnpm generate:icons
        `);

        return null;
    }

    // ⚡ Set exists but icon missing → fallback to API
    if (!resolved) {
        return (
            <IconifyReactIcon
                icon={icon} // string → API fallback
                className={className}
                {...rest}
            />
        );
    }

    // ✅ Local icon
    return <IconifyReactIcon icon={resolved} className={className} {...rest} />;
}
