const FullscreenLoader = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen cursor-not-allowed items-center justify-center">
      <div className="z-100 fixed h-screen w-screen cursor-not-allowed bg-slate-400 opacity-30" />
      <span className="loading loading-dots loading-lg bg-primary" />
    </div>
  )
}

export default FullscreenLoader
