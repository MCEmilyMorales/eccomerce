import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  try {
    const isLogged = request.cookies.get("isLoggedIn")?.value === "true";

    if (isLogged) {
      // Usuario autenticado
      return NextResponse.next();
    }

    console.warn("⚠️ Usuario no autenticado");
    return NextResponse.redirect(new URL("/inicio", request.url));
  } catch (err) {
    console.error("Error en middleware:", err);
    return NextResponse.redirect(new URL("/inicio", request.url));
  }
}

export const config = {
  matcher: "/private/:path*",
};
