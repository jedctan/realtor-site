import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, cert, getApps } from 'firebase-admin/app';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();
    const decodedToken = await getAuth().verifyIdToken(token);
    const isAdmin = decodedToken.email === process.env.ADMIN_EMAIL;
    return NextResponse.json({ isAdmin });
  } catch (error) {
    console.error('Admin verification failed:', error);
    return NextResponse.json({ isAdmin: false }, { status: 401 });
  }
}
