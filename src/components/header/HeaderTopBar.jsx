import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from 'lucide-react';

export default function HeaderTopBar() {
  return (
    <header className="hidden md:flex bg-[#252B42] text-white w-full h-[58px] flex justify-between px-9">
      {/* Left Section: Telephone + Email */}
      <div className="flex items-center">
        <div className="flex items-center p-6 rounded-sm">
          <Phone className="w-4 h-4" />
          <span className="p-1 text-sm font-bold leading-6">
            (225) 555-0118
          </span>
        </div>
        <div className=" flex items-center rounded-sm">
          <Mail className="w-4 h-4" />
          <span className="p-1 text-sm font-bold leading-6">
            michelle.rivera@example.com
          </span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex items-center">
        <span className="text-sm font-bold leading-6">
          Follow Us and get a chance to win 80% off
        </span>
      </div>

      {/* Right Section: Social Media */}
      <div className="flex items-center gap-3">
        <div className="p-1 text-sm font-bold leading-6">Follow Us :</div>
        <a href="#">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#">
          <Youtube className="w-4 h-4" />
        </a>
        <a href="#">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#">
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}
