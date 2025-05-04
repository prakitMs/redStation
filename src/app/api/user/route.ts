import { db } from "@/lib/db";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import * as z from 'zod';

const userSchems = z.object({
  username: z.string().min(1,'Username is required').max(100),
  email: z.string().min(1,'Email is required').email('Invalid email'),
  password: z.string().min(1,'Password is requred').min(8,'Password must have than 8 charcters'),
  confirmPassword: z.string().min(1, 'Password confirmPassword is required'),

})
.refine((data)=> data.password === data.confirmPassword,{
  path: ['confirmPassword'],
  message: 'password do not match',
})

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
    const { password:newUserPassword, ...rest} = newUser;

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
