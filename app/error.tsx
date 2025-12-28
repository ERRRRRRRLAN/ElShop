'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', backgroundColor: '#000000' }}>
          <div style={{ maxWidth: '28rem', width: '100%', textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem', color: '#ffffff' }}>
              Something went wrong!
            </h1>
            <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>
              We encountered an unexpected error. Please try again.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={reset}
                style={{
                  backgroundColor: '#b306a2',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Try again
              </button>
              <a
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1f2937',
                  color: '#b306a2',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  border: '2px solid #b306a2',
                  textDecoration: 'none'
                }}
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
