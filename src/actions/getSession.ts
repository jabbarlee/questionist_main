import {claimDecodedClaims} from '@/actions/claimDecodedClaims';
import { cookies } from 'next/headers';

export async function getSession() {
    const sessionCookie = cookies().get('_session')?.value as string;
    const decodedClaims = await claimDecodedClaims(sessionCookie);

    if (!decodedClaims) {
        return null;
    }
    
    return decodedClaims;
}