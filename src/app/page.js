export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-7 select-none">
      <h1 className="flex justify-center items-center gap-7 text-8xl font-bold border-b pb-2 px-8 ">Welcome To <img className="invert" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="" /></h1>
      <h2 className="text-xl font-light">Made with <span className="animate-pulse">❤️</span> & Next.js + Tailwind CSS + React</h2>
    </div>
  )
}