import Title from '@/components/Layout/Title'
import Footer from '@/components/UI/Footer'
import Navbar from '@/components/UI/Navbar'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Navbar/>
      <div className="px-4 sm:mx-auto max-w-3xl my-20 flex flex-col items-center justify-center">
        <Title emoji="🤔">404</Title>
        <h2 className='mb-2 text-center'>Oops! There is no such page here...</h2>
        <Link
          href={"/"}
          className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 text-sm rounded-lg text-zinc-400"
        >
          Back to Home
        </Link>
      </div>
      <Footer/>
    </div>
  )
}