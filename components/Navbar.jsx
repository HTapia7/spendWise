import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/image1.jpg'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3 pr-8 pl-8">
    <Link href="/" className="flex items-center gap-2">
      <Image
        src={logo}
        alt="Spend Wise Logo"
        width={90}
        height={90}
        className="rounded-2xl"
      />
      <p className="text-xl font-semibold">Spend Wise</p>
    </Link>
  
    <div className="flex gap-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
        <Link href="/login">Sign In</Link>
      </button>
  
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
        <Link href="/signup">Sign Up</Link>
      </button>
    </div>
  </nav>

  )
};

export default Navbar;
