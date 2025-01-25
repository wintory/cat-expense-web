const FullscreenLoader = () => {
  return (
    <div className="none pointer-events-none flex h-screen w-screen items-center justify-center">
      <span className="loading loading-dots loading-lg" />
    </div>
  )
}

export default FullscreenLoader
