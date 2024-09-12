
import { auth } from "@/config/firebaseAdmin";
import { cookies } from "next/headers";

/**
 * Verifies the session cookie and returns the user claims if valid.
 * @returns User claims or null if verification fails.
 */

export async function verifySessionCookie() {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get('session')?.value;

  if (!sessionCookie) {
    console.log("No session cookie found.");
    return null;
  }

  try {
    // Verify the session cookie
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
    return decodedClaims;
  } catch (error) {
    console.error("Session verification failed:", error);
    return null;
  }
}
