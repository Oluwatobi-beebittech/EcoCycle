import { NextResponse, NextRequest } from 'next/server';

import { API } from '@API';
import { accessTokenKey } from '@Utilities';
import { getAPIBaseURL } from 'Environment';

export async function middleware(request: NextRequest) {
	if (!request.cookies.has(accessTokenKey)) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	const bearerToken = request.cookies.get(accessTokenKey)?.value;
	const authVerifyRoute = '/auth/verify';
	const fullAuthVerifyUrl = `${getAPIBaseURL()}${authVerifyRoute}`;

	const { status: responseStatus } = await fetch(fullAuthVerifyUrl, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${bearerToken}`
		}
	});
	const authenticated = responseStatus === API.Status.NO_CONTENT;

	return authenticated ? NextResponse.next() : NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
	matcher: '/dashboard/:path*',
};
