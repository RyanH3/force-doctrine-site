'use server';
import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { makeUserGreeting } from '@/app/actions/queries';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1m')
        .sign(encodedKey);
}

export async function decrypt(session) {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'], // add user email or uuid
        });
        return payload;
    } catch (error) {
        console.log('Failed to verify session');
    }
}

export async function createSession(userID) {
    const expiresAt = new Date(Date.now() + 60 * 1000);
    const session = await encrypt({ userID, expiresAt });
    const cookieStore = await cookies();

    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    });
}

export async function updateSession() {
    const session = (await cookies()).get('session')?.value;
    const payload = await decrypt(session);

    if (!session || !payload) {
        return null;
    }

    const expires = new Date(Date.now + 7 * 24 * 60 * 60 * 1000)(
        await cookies()
    ).set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/'
    });
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete('session');
}

export async function logout() {
    await deleteSession();
    redirect('/login');
}

export async function getCookieData() {
  var sessionCookie = (await cookies()).get('session')?.value;

  console.log(sessionCookie);

  var cookiePresent = (sessionCookie);

  // Get info from the cookie
  if (cookiePresent) {
    var decryptedCookie = await decrypt(sessionCookie);
    var currentUserID = decryptedCookie.userID;

    return currentUserID;
  }
  else {
    return 'Logged out';
  }
}

export default async function NavButton() {
  // Put username into a greeting
  var userID = await getCookieData();
  if (userID == 'Logged out') {
    return 'Login';
  }
  else {
    var userGreeting = makeUserGreeting(userID);
    return userGreeting;
  }
}