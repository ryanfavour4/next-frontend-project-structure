import Image from "next/image";

type prop = {
    className?: string;
    variant?: "default" | "alt-icon" | "icon";
};

export default function Logo({ className, variant = "default" }: prop) {
    let logoSrc = "/images/logo.png";

    if (variant === "alt-icon") {
        logoSrc = "/images/logo-alt.png"; // change if different
    } else if (variant === "icon") {
        logoSrc = "/images/logo-icon.png"; // change if different
    }

    return (
        <Image
            alt="logo"
            width={100}
            height={100}
            src={logoSrc}
            className={`w-10 object-contain ${className}`}
            unoptimized
        />
    );
}
