import { auth } from '@/config/firebaseAdmin';

export async function claimDecodedClaims(sessionCookie: string) {
    
    if (!sessionCookie) {
        return null;
    }

    try {
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        return decodedClaims;
    } catch (error) {
        return error;
    }
}