import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * Public (anon) client for the guest-facing site.
 * Returns null when env vars aren't configured yet, so pages can render
 * gracefully during local setup instead of throwing at import time.
 */
export const supabase = url && key ? createClient(url, key) : null
