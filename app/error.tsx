'use client'

import { useEffect } from 'react'
// import { captureException } from '@sentry/nextjs'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // captureException('Generic Error', { originalException: error })
    console.log('error', error)
  }, [error])

  return (
    <div className="p-6 text-center">
      <h2 className="mb-4">Algo deu errado!</h2>
      <button className="rounded bg-primary text-white py-3 px-[20px] leading-none text-sm" onClick={() => reset()}>
        Tentar novamente
      </button>
    </div>
  )
}
