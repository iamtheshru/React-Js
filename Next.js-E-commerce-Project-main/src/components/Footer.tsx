import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="main_container mx-auto px-6 lg:px-12 ">
        <h2 className="text-white text-xl font-semibold mb-4"><img src="/img/footerLogo.png" alt="" /></h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          
          <div className="md:col-span-1">
          <h3 className="footer_title">Contact us</h3>

            <p className="mb-2">Logo@gmail.com</p>
            <p className="mb-2">+91 12345 67890</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com">
                <img src="/img/Facebook.svg" alt="Facebook" className="w-6 h-6 cursor-pointer" />
              </Link>
              <Link href="https://twitter.com">
                <img src="/img/Twitter.svg" alt="Twitter" className="w-6 h-6 cursor-pointer" />
              </Link>
              <Link href="https://instagram.com">
                <img src="/img/Instagram.svg" alt="Instagram" className="w-6 h-6 cursor-pointer" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="footer_title mb-3">Products Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Auctor volutpat.</Link></li>
              <li><Link href="/" className="hover:text-white">Fermentum turpis.</Link></li>
              <li><Link href="/" className="hover:text-white">Mi consequat.</Link></li>
              <li><Link href="/" className="hover:text-white">Amet venenatis.</Link></li>
              <li><Link href="/" className="hover:text-white">Convallis porttitor.</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer_title mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Egestas vitae.</Link></li>
              <li><Link href="/" className="hover:text-white">Viverra lorem ac.</Link></li>
              <li><Link href="/" className="hover:text-white">Eget ac tellus.</Link></li>
              <li><Link href="/" className="hover:text-white">Erat nulla.</Link></li>
              <li><Link href="/" className="hover:text-white">Vulputate proin.</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer_title mb-3">Legal Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Egestas vitae.</Link></li>
              <li><Link href="/" className="hover:text-white">Viverra lorem ac.</Link></li>
              <li><Link href="/" className="hover:text-white">Eget ac tellus.</Link></li>
              <li><Link href="/" className="hover:text-white">Erat nulla.</Link></li>
              <li><Link href="/" className="hover:text-white">Vulputate proin.</Link></li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <h3 className="footer_title mb-3">Get the app</h3>
            <Link href="https://apps.apple.com" className="bg-[#94A3B8] flex mb-3 justify-center rounded-sm p-2 text-center">
              <img src="/img/GooglePlay.svg" alt="App Store" className="w-36 cursor-pointer" />
            </Link>
            <Link href="https://play.google.com"  className="bg-[#94A3B8] flex justify-center rounded-sm p-2 text-center">
              <img src="/img/AppStore.svg" alt="Google Play" className="w-36 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
