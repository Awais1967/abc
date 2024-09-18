// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// // import img1 from './Rectangle 4.png'

// import img1 from './Rectangle 4.png'; // Replace with actual paths to your images
// import img2 from './Rectangle 4.png'; // Replace with actual paths to your images
// import img3 from './Rectangle 4.png'; // Replace with actual paths to your images
// import img4 from './Rectangle 4.png'; // Replace with actual paths to your images
// import img5 from './Rectangle 4.png'; // Replace with actual paths to your images
// import img6 from './Rectangle 4.png'; // Replace with actual paths to your images

// const Watchseries = () => {
//   return (
//     // 
//       <div className="space-y-3">
// 						{/* car 01 */}
// 						<div className="bg-[#F5D9B6] rounded-2xl p-4 text-center h-[200px] flex items-center flex-col justify-center relative">
// 							<Link href={'/categories/pets'}>
// 							{/* <Image
// 								src={img1}
// 								alt=""
// 								height={500}
// 								width={500}
// 								className="rounded-lg object-cover absolute w-[150px] sm:w-[200px] left-0 -bottom-0"
// 							/> */}
// 							<div className='col-span-2'>
// 								<p className="font-semibold text-[#B26C11]">
// 									Pets Food
// 								</p>
// 								<button className="text-black bg-white px-3 py-1 my-2 rounded-3xl ">
// 									View All
// 								</button>
// 							</div>

// 							{/* <Image
// 								src={img1}
// 								alt=""
// 								height={1000}
// 								width={1000}
// 								className="rounded-lg object-cover absolute w-[100px] sm:w-[150px] right-10 -bottom-0"
// 								/> */}
// 								</Link>
// 						</div>

// 						{/* card 02 */}
// 						<div className="bg-[#CCB8D9] rounded-2xl p-4 text-center h-[200px] grid-cols-3 grid place-items-center relative ">
// 							<Link href={'/categories/cosmetics'}>
// 							<div className='row-span-2'>
// 								<p className="font-semibold text-primaryColor">
// 									Cosmetics
// 								</p>
// 								<button className="text-primaryColor bg-white px-3 py-1 my-2 rounded-3xl ">
// 									View All
// 								</button>
// 							</div>
// 							{/* <Image
// 								src={img1}
// 								alt="missing"
// 								height={500}
// 								width={500}
// 								className="rounded-lg object-cover absolute w-[250px] sm:w-[400px] right-10 -bottom-0"
// 							/> */}
// 							<div className="absolute bg-white rounded-xl px-2 py-2 top-[2%] right-[2%]">
// 								<span className="hover:cursor-pointer">
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										strokeWidth={2.5}
// 										stroke="currentColor"
// 										className="size-4 transform duration-300 ease-in-out transition hover:rotate-45"
// 									>
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
// 										/>
// 									</svg>
// 								</span>
// 								</div>
// 								</Link>
// 						</div>

// 						{/* card 03 */}
// 						<div className="bg-primaryColor rounded-2xl p-4 text-center h-[200px] grid-cols-3 grid place-items-center relative">
// 						<Link href={'/categories/food'}>
// 						<div>
// 								<p className="font-semibold text-white">
// 									Frozen Food
// 								</p>
// 								<button className="text-primaryColor bg-white px-3 py-1 my-2 rounded-3xl ">
// 									View All
// 								</button>
// 							</div>
// 							{/* <Image
// 								src={img1}
// 								alt=""
// 								height={1000}
// 								width={1000}
// 								className="rounded-lg object-cover absolute w-[180px] sm:w-[300px] right-10 -bottom-0"
// 							/> */}
// 							<div className="absolute bg-white rounded-xl px-2 py-2 top-[2%] right-[2%]">
// 								<span className="hover:cursor-pointer">
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										fill="none"
// 										viewBox="0 0 24 24"
// 										strokeWidth={2.5}
// 										stroke="currentColor"
// 										className="size-4 transform duration-300 ease-in-out transition hover:rotate-45"
// 									>
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
// 										/>
// 									</svg>
// 								</span>
// 							</div>
// 						</Link>
// 						</div>
// 						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
//       {/* Lifestyle Series */}
//       <div className="relative bg-teal-400 p-4 rounded-lg md:col-span-2 row-span-1 flex flex-col items-center justify-center">
//         <h2 className="text-white text-xl font-semibold mb-4">Lifestyle Series</h2>
//         <Image
//           src={img1}
//           alt="Lifestyle Series"
//           className="w-48 h-48 object-contain"
//           height={500}
//           width={500}
//         />
//         <button className="mt-4 text-white border border-white rounded-full py-2 px-4">View all</button>
//       </div>

//       {/* Accessories Series */}
//       <div className="relative bg-gray-900 p-4 rounded-lg flex flex-col items-center justify-center">
//         <h2 className="text-white text-xl font-semibold mb-4">Accessories Series</h2>
//         <Image
//           src={img2}
//           alt="Accessories Series"
//           className="w-48 h-48 object-contain"
//         />
//         <button className="mt-4 text-white border border-white rounded-full py-2 px-4">View all</button>
//       </div>

//       {/* Alexa Integrated Series */}
//       <div className="relative bg-amber-400 p-4 rounded-lg flex flex-col items-center justify-center">
//         <h2 className="text-white text-xl font-semibold mb-4">Alexa Integrated Series</h2>
//         <Image
//           src={img3}
//           alt="Alexa Integrated Series"
//           className="w-48 h-48 object-contain"
//         />
//         <button className="mt-4 text-white border border-white rounded-full py-2 px-4">View all</button>
//       </div>

//       {/* Adventure Series */}
//       <div className="relative bg-pink-300 p-4 rounded-lg row-span-1 flex flex-col items-center justify-center">
//         <h2 className="text-white text-xl font-semibold mb-4">Adventure Series</h2>
//         <Image
//           src={img4}
//           alt="Adventure Series"
//           className="w-48 h-48 object-contain"
//         />
//         <button className="mt-4 text-white border border-white rounded-full py-2 px-4">View all</button>
//       </div>

//       {/* Essential Series */}
//       <div className="relative bg-blue-300 p-4 rounded-lg row-span-1 flex flex-col items-center justify-center">
//         <h2 className="text-white text-xl font-semibold mb-4">Essential Series</h2>
//         <Image
//           src={img5}
//           alt="Essential Series"
//           className="w-48 h-48 object-contain"
//         />
//         <button className="mt-4 text-white border border-white rounded-full py-2 px-4">View all</button>
//       </div>

//       {/* Fitness Tracker Series */}
//       <div className="relative bg-sky-300 p-4 rounded-lg md:col-span-2 flex flex-col items-center justify-center">
//         <h2 className="text-white text-xl font-semibold mb-4">Fitness Tracker Series</h2>
//         <Image
//           src={img6}
//           alt="Fitness Tracker Series"
//           className="w-48 h-48 object-contain"
//         />
//         <button className="mt-4 text-white border border-white rounded-full py-2 px-4">View all</button>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Watchseries
