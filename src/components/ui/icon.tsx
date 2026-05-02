"use client";
import { IconifyIcon, Icon as IconifyReactIcon } from "@iconify/react";
import { ICON_MAP } from "@/lib/icons";

type IconType = string | IconifyIcon;

type Props = {
    icon: IconType;
    className?: string;
};

export default function Icon({ icon, className }: Props) {
    // If already imported icon (object)
    if (typeof icon !== "string") {
        return <IconifyReactIcon icon={icon} className={className} />;
    }

    // If string → resolve from map
    const resolved = ICON_MAP[icon as keyof typeof ICON_MAP];

    if (!resolved) {
        console.error(`
        ❌ Icon "${icon}" not found or not available.
        👉 Install it or generate icons again.
        pnpm install @iconify/icons-${icon.split(":")[0]}
    `);

        return null;
    }

    return <IconifyReactIcon icon={resolved} className={className} />;
}
