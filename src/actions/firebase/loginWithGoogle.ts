import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebaseClient";

export const loginWithGoogle = async ({
    router
} : {
    router: any
}) => {

    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);

        const idToken = await auth.currentUser?.getIdToken();

        if (!idToken) {
            throw new Error("Failed to get ID token");
        }

        await fetch("/api/session/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken }),
        });

        router.push("/");
    } catch (error) {
        console.error("Login error:", error);
    }
}