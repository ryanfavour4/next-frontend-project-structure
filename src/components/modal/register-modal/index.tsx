"use client";
import { useEffect, useState } from "react";
import Modal from "..";
import Input from "@/components/input";
import { User } from "@/entities/Users";
import axios from "axios";

type RegisterModalProps = {
    open: boolean;
    onClose: () => void;
};

type FormData = {
    name: string;
    zone: string;
    email: string;
    phone: string;
};

export default function RegisterModal({ open, onClose }: RegisterModalProps) {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState({ value: "" });
    const [zone, setZone] = useState({ value: "" });
    const [email, setEmail] = useState({ value: "" });
    const [phone, setPhone] = useState({ value: "" });

    async function fetchUsers() {
        const response = await fetch("/api/users");

        const data = await response.json();

        setUsers(data.data);
    }

    async function createUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setLoading(true);
            const payload: FormData = {
                name: name.value,
                zone: zone.value,
                email: email.value,
                phone: phone.value,
            };
            console.log(payload);

            const response = await axios.post("/api/users", payload);

            console.log(response.data);

            onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            fetchUsers();
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchUsers();
    }, []);

    return (
        <Modal
            open={open}
            onClose={onClose}
            title={`Register Account`}
            description={`Fill in your details to continue. ${users?.length}+ users have already registered.`}
            className="max-w-xl"
        >
            <form onSubmit={createUser} className="space-y-5">
                {/* Names */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm text-text/75 font-semibold">
                            Name
                        </label>

                        <Input
                            name="name"
                            placeholder="John Doe"
                            setState={setName}
                            state={name}
                            type="text"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm text-text/75 font-semibold">
                            Zone
                        </label>

                        <Input
                            name="zone"
                            placeholder="LZ2 Godmon"
                            setState={setZone}
                            state={zone}
                            type="text"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label className="text-sm text-text/75 font-semibold">
                        Email Address
                    </label>

                    <Input
                        name="email"
                        placeholder="yourname@gmail.com"
                        setState={setEmail}
                        state={email}
                        type="email"
                    />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                    <label className="text-sm text-text/75 font-semibold">
                        Phone Number
                    </label>

                    <Input
                        name="phone"
                        placeholder="09012345678"
                        setState={setPhone}
                        state={phone}
                        type="tel"
                    />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="h-12 rounded-2xl border border-white/10 px-5 text-primary/75 transition hover:bg-white/5"
                    >
                        Cancel
                    </button>

                    <button type="submit" disabled={loading} className="btn">
                        {loading ? "Creating..." : "Create Account"}
                    </button>
                </div>
            </form>
        </Modal>
    );
}
