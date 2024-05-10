import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
  console.log('REQUEST')
  // revalidateTag('сбросить кэш') // принимает название тега из src\app\[id]\page.tsx
  return NextResponse.json({ title: 'Title' })
}
