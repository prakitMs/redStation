import { db } from "@/lib/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password, name } = body;

    if (!email || !username || !password || !name) {
      return NextResponse.json(
        { users: null, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingByEmail = await db.users.findUnique({
      where: { email: email },
    });
    if (existingByEmail) {
      return NextResponse.json(
        { users: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const existingByUsername = await db.users.findUnique({
      where: { username: username },
    });
    if (existingByUsername) {
      return NextResponse.json(
        { users: null, message: "User with this username already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.users.create({
      data: {
        username,
        email,
        name,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { users: newUser, message: "Ok" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { users: null, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
