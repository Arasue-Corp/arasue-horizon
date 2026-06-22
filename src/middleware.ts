import { NextRequest } from 'next/server';
import { proxy, config as proxyConfig } from './proxy';

export const runtime = 'edge';

export const config = proxyConfig;

export function middleware(request: NextRequest) {
  return proxy(request);
}
