export default function Home() {
  return (
    <>
    <title>My First Next JS App</title>
    <div className="min-h-screen flex justify-center items-center flex-col gap-7 select-none">
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
<p className="pt-5 text-justify">
    <span className="italic font-semibold">&quot;Learn once, write anywhere.&quot;</span>
    This is the underlying principle of React Native. The concept of 
          React revolves around maintaining a single codebase that can smoothly transition across various platforms such as Android, 
          iOS, or the Web. It leverages the native components of each operating system&#39;s user interface, incorporating basic core components 
          like Button, Switch, View, among others. The distinguishing aspect of React Native lies in its usage of the
    <span className="font-mono">&#123;<span className="text-yellow-500/75 px-1">platform</span>&#125;</span>
    module, which manages Android&#39;s
    <span className="p-0.5 px-1 bg-slate-300 rounded-md border border-slate-500 font-mono">android.view</span>
    and iOS&#39;s
    <span className="p-0.5 px-1 bg-slate-300 rounded-md border border-slate-500 font-mono">uiview</span>,
              superseding the use of a
    <span className="p-0.5 px-1 bg-slate-300 rounded-md border border-slate-500 font-mono">div</span>
    and associated components. An appealing feature of React Native 
          is the ability to implement styles that resemble CSS, although it&#39;s important to note that CSS itself isn&#39;t compatible with React Native.</p>


      <img className="p-4 rounded" src="https://www.qed42.com/sites/default/files/styles/featured_image/public/2018-11/react-native.png?itok=lj4A4r0I" alt="react native with andriod and ios" />
      <p><a className="w-auto flex justify-center italic" href="https://www.qed42.com/insights/coe/javascript/react-native-fabric-why-am-i-so-excited">Courtesy of: QED42</a></p>
    </div>

    <div className="border p-6 rounded-lg bg-white text-black w-5/12 mb-9">

<div className="flex items-center justify-between mb-10">
  <div className="flex items-center gap-3">
    <img className="rounded-full shadow w-14" src="https://media.licdn.com/dms/image/C5603AQHSojSDrL2BbQ/profile-displayphoto-shrink_800_800/0/1574342692271?e=1691625600&v=beta&t=elRyjom_c_4ELSXogtaGv4_bdAXRodvDNk4ouwTehxw" alt="" />
      <ul>
        <li className="font-bold">Nicholas Dames</li>
        <li className="font-light text-xs text-gray-500">FullSail University Student - Web Development</li>
      </ul>
  </div>
  <p className="font-light text-xs text-gray-500">Thursday, June 24<sup>th</sup>, 2023
</p>
</div>
    <h3 className="font-bold text-xl py-2">Password Hashing</h3>
      <ul>
        <li className="underline text-blue-700"> &gt;	 <a href="https://nordpass.com/blog/password-hash/">What is password hashing?</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://www.okta.com/blog/2019/03/what-are-salted-passwords-and-password-hashing/#:~:text=Password%20hashing%20is%20defined%20as,unintelligible%20to%20the%20bad%20actor.">What are Salted Passwords and Password Hashing?</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://auth0.com/blog/hashing-passwords-one-way-road-to-security/">Hashing Passwords: One-Way Road to Security</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://www.youtube.com/watch?v=--tnZMuoK3E">Password Hashing, Salts, Peppers | Explained!</a> </li>
        <li className="underline text-blue-700"> &gt;	 <a href="https://www.linkedin.com/pulse/secure-user-passwords-adding-salt-pepper-sherlin-oneeta-bastin/">Secure User Passwords by Adding Salt and Pepper</a> </li>
      </ul>
      <img className="p-4 rounded" src="https://media.licdn.com/dms/image/C4E12AQF0tXc7dj0kNw/article-cover_image-shrink_423_752/0/1572907990230?e=1693440000&v=beta&t=rExpNlDxhyGRnH9OQtMWMJViu7447icmM_Qz5h6Ymww" alt="Secure User Passwords by Adding Salt and Pepper" />
      <p><a className="w-auto flex justify-center italic" href="https://www.linkedin.com/pulse/secure-user-passwords-adding-salt-pepper-sherlin-oneeta-bastin/">Courtesy of: LinkedIn</a></p>
      <p className="pt-5 text-justify">Password hashing is a crucial part of secure data storage&#44; primarily used to protect sensitive user data like passwords&#46; It involves transforming a password into an unrecognizable string of characters&#44; the hash&#44; using a hash function&#46; This hash is stored instead of the actual password&#46; When the user enters their password to log in&#44; it is transformed using the same hash function and compared to the stored hash&#46; If they match&#44; the password is correct and the user is granted access&#46;</p>
        <p className="py-3 font-bold">Password hashing serves several key purposes for security&#58;</p>
          <ul className="py-3">
            <li className="py-1 pl-2 font-light">	&bull; It protects against data breaches&#58; In case a system&#39;s user data is compromised&#44; the attacker obtains the hashes of the passwords&#44; not the actual passwords&#46; Since hash functions are designed to be irreversible&#44; it is extremely difficult for the attacker to deduce the original password from the hash&#46;</li>
            <li className="py-1 pl-2 font-light">	&bull; It protects against &#34;rainbow table&#34; attacks&#58; Rainbow tables are precomputed tables for reversing cryptographic hash functions and can be used to crack password hashes&#46; However&#44; if the hashing process includes &#34;salting&#34;&#44; rainbow tables are ineffective&#46;</li>
          </ul>
          <p className="py-3">Salting is a technique that further enhances the security of hashed passwords&#46; A salt is a random string of characters that is appended to the password before the hash is computed&#46; The salt is then stored along with the hash&#46; This means that even if two users have the same password&#44; their hashed passwords will differ due to the different salts used&#46; Salting offers two main benefits&#58;</p>
          <ul className="py-3">
            <li className="py-1 pl-2 font-light">	&bull; It prevents pre-computation attacks&#58; Since each user&#39;s password is salted with a unique value&#44; an attacker cannot use a precomputed table of hashes&#44; like a rainbow table&#44; to crack the passwords&#46;</li>
            <li className="py-1 pl-2 font-light">	&bull; It prevents identical passwords from having identical hashes&#58; Without salts&#44; the same password would always produce the same hash&#44; making it easier for attackers to guess passwords by noticing patterns in the hashes&#46;</li>
          </ul>
          <p className="py-3">There are many different hashing algorithms that can be used for password hashing&#44; including&#58;</p>
          <ul className="py-3">
            <li className="py-1 pl-2 font-light">	&bull; Bcrypt&#58; A widely used password hashing function that automatically handles the generation of salts&#46;</li>
            <li className="py-1 pl-2 font-light">	&bull; Scrypt&#58; Similar to Bcrypt but is designed to be more resistant to hardware accelerated attacks because it requires larger amounts of memory to compute&#46;</li>
            <li className="py-1 pl-2 font-light">	&bull; Argon2&#58; A relatively new algorithm that won the Password Hashing Competition in 2015&#46; It offers a high degree of security and flexibility&#46;</li>
          </ul>
        <p className="py-3">The aim of password hashing (and salting) is to make it as difficult and time-consuming as possible for an attacker to determine the original password even if they have obtained the hash&#46;</p>
    </div>
</div>
    </>
  )
}