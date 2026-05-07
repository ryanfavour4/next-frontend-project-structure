"use client";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect } from "react";
import { Icon } from "@iconify/react";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;

    title?: string;
    description?: string;

    className?: string;
    overlayClassName?: string;

    closeOnBackdrop?: boolean;
    showCloseButton?: boolean;
};

export default function Modal({
    open,
    onClose,
    children,

    title,
    description,

    className = "",
    overlayClassName = "",

    closeOnBackdrop = true,
    showCloseButton = true,
}: ModalProps) {
    // ESC close
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onClose();
            }
        }

        if (open) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 ${overlayClassName}`}
                    onClick={() => {
                        if (closeOnBackdrop) {
                            onClose();
                        }
                    }}
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.92,
                            y: 20,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-lg rounded-3xl border border-white/10 bg-linear-to-br from-background via-background-fade to-background p-6 shadow-2xl ${className}`}
                    >
                        {/* Header */}
                        {(title || showCloseButton) && (
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <div>
                                    {title && (
                                        <h2 className="text-xl font-semibold text-text">
                                            {title}
                                        </h2>
                                    )}

                                    {description && (
                                        <p className="mt-1 text-sm text-text/75">
                                            {description}
                                        </p>
                                    )}
                                </div>

                                {showCloseButton && (
                                    <button
                                        onClick={onClose}
                                        className="flex h-10 w-10 aspect-square items-center justify-center rounded-full bg-primary/25 text-text transition hover:bg-primary/10 hover:text-text cursor-pointer"
                                    >
                                        <Icon
                                            icon="line-md:close-small"
                                            className="text-2xl"
                                        />
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Content */}
                        <div>{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
