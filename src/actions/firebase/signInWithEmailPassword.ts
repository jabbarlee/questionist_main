import { getAuth, signInWithEmailAndPassword, getIdToken } from "firebase/auth";

export const loginWithEmailPassword = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const idToken = await getIdToken(user);

    const res = await fetch('/api/auth/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    if (res.ok) {
      console.log("Session created successfully");
    } else {
      console.error("Failed to create session");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};
