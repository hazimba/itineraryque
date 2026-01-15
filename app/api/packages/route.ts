import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("packages")
    .select("*")
    .order("created_at", { ascending: false });
  console.log("Fetch packages result:", { data, error });

  if (error) {
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();

  const { data, error } = await supabase.from("packages").insert([body]);
  console.log("Insert result:", { data, error });

  if (error) {
    return NextResponse.json(
      { error: "Failed to create package" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 201 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Package ID is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase.from("packages").delete().eq("id", id);
  console.log("Delete result:", { data, error });

  if (error) {
    return NextResponse.json(
      { error: "Failed to delete package" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Package deleted" }, { status: 200 });
}
