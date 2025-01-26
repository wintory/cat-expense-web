import { memo } from 'react'

const ErrorBoundries = () => {
  const tryAgainError = () => {
    window.location.reload()
  }

  return (
    <div className="z-100 fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-neutral text-white">
      <p className="text-xl">Something went wrong</p>
      <button className="btn btn-primary text-white" onClick={tryAgainError}>
        Try again
      </button>
    </div>
  )
}

export default memo(ErrorBoundries)
