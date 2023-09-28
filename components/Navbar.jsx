import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/image1.jpg'

const Navbar = () => {
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2'>
          <Image 
            src={logo}
            alt='Spend Wise Logo'     
            width={90}
            height={90}
            className='rounded-2xl'
          />
          <p className=''>Spend Wise</p>
      </Link>

      <Link href='/login'>
        Sign In 
      </Link>

      <Link href='/signup'>
        <button>Sign Up</button>
      </Link>

    </nav>
  )
};

export default Navbar;
