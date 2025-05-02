import { NextRequest, NextResponse } from "next/server";
import createConnectionToDB from "@/lib/mongoose";
import User from "@/models/users";
import axios from "axios"; // No need to import AxiosError directly

// Handle POST request (create user)
export async function POST(req: NextRequest) {
  try {
    await createConnectionToDB();

    const { name, email } = await req.json();

    const newUser = new User({ name, email });
    await newUser.save();

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : String(error);

    console.error("Error saving user:", message);

    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}

// Handle GET request (get all users)
export async function GET() {
  try {
    await createConnectionToDB();

    const users = await User.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error: unknown) {
    let message = "Unknown error";
    if (axios.isAxiosError(error)) {
      message = error.response?.data || error.message;
    } else if (error instanceof Error) {
      message = error.message;
    } else {
      message = String(error);
    }

    console.error("Error fetching users:", message);

    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
