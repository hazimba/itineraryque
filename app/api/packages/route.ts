import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("packages").select("*");

  if (error) {
    return NextResponse.json(
      { error: "Failed to fetch packages" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}
