import { getAuth, createUserWithEmailAndPassword, getIdToken } from "firebase/auth";

export const signUpWithEmailPassword = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    // Create the user (sign up)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Get the ID token
    const idToken = await getIdToken(user);

    // Send the ID token to the server to create a session
    const res = await fetch('/api/auth/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    if (res.ok) {
      console.log("Session created successfully");
      // Optionally redirect to a protected route
    } else {
      console.error("Failed to create session");
    }
  } catch (error) {
    console.error("Error during sign up:", error);
  }
};
