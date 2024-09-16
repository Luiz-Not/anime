'use server'

import { cookies } from 'next/headers'

export const toggleTheme = (theme: string) => {
  cookies().set('theme', theme)
}
