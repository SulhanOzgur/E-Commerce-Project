import { Search, ShoppingCart, UserIcon, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeaderNavBar() {
  return (
    <header className="w-full px-9 flex py-4">
      {/* Left Section: */}
      <h3 className="text-brand-DEFAULT text-2xl leading-8 font-bold mr-12">
        Bandage
      </h3>

      {/* Right Section: NavBar */}
      <div className="flex justify-between items-center flex-1">
        {/*Menu*/}
        <div className="text-brand-lightgray text-sm font-bold flex gap-4 ml-10">
          <Link to="">Home</Link>
          <Link to="">Shop</Link>
          <Link to="">About</Link>
          <Link to="">Blog</Link>
          <Link to="">Contact</Link>
          <Link to="">Pages</Link>
        </div>

        {/*Login/Register*/}
        <div className="text-brand-lightblue flex items-center space-x-8">
          <div className="flex justify-center">
            <Link to="">
              <UserIcon className="w-4 h-4 mt-1 mr-1" />
            </Link>
            <Link>
              <span className="font-bold text-sm">Login / Register</span>
            </Link>
          </div>
          <div className="flex justify-between space-x-6">
            <Link to="">
              <Search className="w-4 h-4" />
            </Link>
            <Link to="">
              <ShoppingCart className="w-4 h-4" />
            </Link>
            <Link to="">
              <Heart className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
