export default function Home() {
  return (
    <>
    <title>My First Next JS App</title>
    <div className="min-h-screen p-10 flex justify-center items-center flex-col gap-7 select-none">
      <h1 className="flex justify-center items-center gap-7 text-8xl font-bold border-b pb-2 px-8 ">Welcome To <img className="invert" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="" /></h1>
      <h2 className="text-xl font-light">Making Bloging with <span className="animate-pulse">❤️</span> & Next.js + Tailwind CSS + React</h2>
    <hr/>

    <div className="border p-6 rounded-lg bg-white text-black w-5/12">

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

    <div className="border p-6 rounded-lg bg-white text-black w-5/12">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img className="rounded-full shadow w-14" src="https://media.licdn.com/dms/image/C5603AQHSojSDrL2BbQ/profile-displayphoto-shrink_800_800/0/1574342692271?e=1691625600&v=beta&t=elRyjom_c_4ELSXogtaGv4_bdAXRodvDNk4ouwTehxw" alt="" />
            <ul>
              <li className="font-bold">Nicholas Dames</li>
              <li className="font-light text-xs text-gray-500">FullSail University Student - Web Development</li>
            </ul>
        </div>
        <p className="font-light text-xs text-gray-500">Thursday, June 16<sup>th</sup>, 2023
</p>
      </div>

      <h3 className="font-bold text-xl py-2">What is React Native</h3>
      <ul>
        <li className="underline text-blue-700"> &gt;	 <a href="https://www.youtube.com/watch?v=gvkqT_Uoahw">React Native in 100 Seconds</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://reactnative.dev/">React Native Docs</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://youtube.com/playlist?list=PLYBvEAka-q1hJuwRPYQPlEBBRm7_qGw_2">Building A React Native App</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://www.youtube.com/watch?v=VozPNrt-LfE">React Native Crash Course</a> </li>
      </ul>
      <h1 className="pt-8 text-4xl font-semibold">React Native</h1>
      <p className="pt-5 text-justify"><span className="italic font-semibold">"Learn once, write anywhere."</span> This is the underlying principle of React Native. The concept of 
      React revolves around maintaining a single codebase that can smoothly transition across various platforms such as Android, 
      iOS, or the Web. It leverages the native components of each operating system's user interface, incorporating basic core components 
      like Button, Switch, View, among others. The distinguishing aspect of React Native lies in its usage of the <span className="font-mono">&#123;<span className="text-yellow-500/75 px-1">platform</span>&#125;</span> module, which
      manages Android's <span className="p-0.5 px-1 bg-slate-300 rounded-md border border-slate-500 font-mono">android.view</span> and iOS's <span className="p-0.5 px-1 bg-slate-300 rounded-md border border-slate-500 font-mono">uiview</span>, superseding the use of a <span className="p-0.5 px-1 bg-slate-300 rounded-md border border-slate-500 font-mono">div</span> and associated components. An appealing feature of React Native 
      is the ability to implement styles that resemble CSS, although it's important to note that CSS itself isn't compatible with React Native.</p>

      <img className="p-4 rounded" src="https://www.qed42.com/sites/default/files/styles/featured_image/public/2018-11/react-native.png?itok=lj4A4r0I" alt="react native with andriod and ios" />
      <p><a className="w-auto flex justify-center italic" href="https://www.qed42.com/insights/coe/javascript/react-native-fabric-why-am-i-so-excited">Courtesy of: QED42</a></p>
    </div>
    
    </div>
    </>
  )
}