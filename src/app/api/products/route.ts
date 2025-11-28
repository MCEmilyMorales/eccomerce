// src/app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    console.log("pasa por el get de producto?");

    // Llamada al backend en Render
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      withCredentials: true,
    });

    return NextResponse.json(res.data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: "Error al obtener productos", error: error.message },
        { status: 500 },
      );
    }
  }
}
