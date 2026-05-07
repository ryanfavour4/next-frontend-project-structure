import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/db/connect-db";
import { User } from "@/entities/Users";

export async function GET() {
    try {
        const db = await connectDB();

        const userRepository = db.getRepository(User);

        const users = await userRepository.find({
            order: {
                createdAt: "DESC",
            },
        });

        return NextResponse.json({
            success: true,
            data: users,
        });
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to fetch users",
            },
            {
                status: 500,
            },
        );
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const db = await connectDB();

        const userRepository = db.getRepository(User);

        const existingUser = await userRepository.findOne({
            where: {
                email: body.email,
            },
        });

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email already exists",
                },
                {
                    status: 400,
                },
            );
        }

        const user = userRepository.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            zone: body.zone,
        });

        await userRepository.save(user);

        return NextResponse.json(
            {
                success: true,
                data: user,
            },
            {
                status: 201,
            },
        );
    } catch (error) {
        console.log(error);

        return NextResponse.json(
            {
                success: false,
                message: "Failed to create user",
            },
            {
                status: 500,
            },
        );
    }
}
