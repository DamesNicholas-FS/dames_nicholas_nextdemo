export default function Home() {
  return (
    <>
    <title>My First Next JS App</title>
    <div className="min-h-screen flex justify-center items-center flex-col gap-7 select-none">
      <h1 className="flex justify-center items-center gap-7 text-8xl font-bold border-b pb-2 px-8 ">Welcome To <img className="invert" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="" /></h1>
      <h2 className="text-xl font-light">Making Bloging with <span className="animate-pulse">❤️</span> & Next.js + Tailwind CSS + React</h2>
    <hr/>

    <div className="border p-6 rounded-lg bg-white text-black">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img className="rounded-full shadow w-14" src="https://media.licdn.com/dms/image/C5603AQHSojSDrL2BbQ/profile-displayphoto-shrink_800_800/0/1574342692271?e=1691625600&v=beta&t=elRyjom_c_4ELSXogtaGv4_bdAXRodvDNk4ouwTehxw" alt="" />
            <ul>
              <li className="font-bold">Nicholas Dames</li>
              <li className="font-light text-xs text-gray-500">FullSail University Student - Web Development</li>
            </ul>
        </div>
        <p className="font-light text-xs text-gray-500">Thursday, June 7<sup>th</sup>, 2023
</p>
      </div>

      <h3 className="font-bold text-xl py-2">Creating Web APIs with Node & Express - New Articles:</h3>
      <ul>
        <li className="underline text-blue-700"> &gt;	 <a href="https://rapidapi.com/blog/nodejs-express-rest-api-example/">How to Build a RESTful API in Node.js (with Express.js) — RapidAPI</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09">RESTful API design with Node.js — Hackernoon</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://www.digitalocean.com/community/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger">Speed up your RESTful API development in Node.js with Swagger — Scotch.io</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd">Build Node.js RESTful APIs in 10 Minutes — CodeMentor</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://www.youtube.com/watch?v=GK4Pl-GmPHk">Build and sell your own API — YouTube</a> </li>
      </ul>
      <br/>
        <h3 className="font-bold text-xl py-2">Some Of My Projects:</h3>
      <ul>
        <li className="underline text-blue-700"> &gt;	  <a href="https://github.com/DamesNicholas-FS/prw">GitHub To My First API</a> </li>
        <li className="underline text-blue-700"> &gt;	  <a href="https://www.npmjs.com/~nrdames-fso">My NPM Packages</a> </li>
      </ul>
    </div>
    </div>
    </>
  )
}