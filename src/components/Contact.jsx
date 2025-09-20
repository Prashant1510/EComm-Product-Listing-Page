import { FaFacebookF, FaTwitter } from "react-icons/fa";

function FooterSimple() {
  return (
    <footer className="bg-sky-100 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-24 sm:items-start">

        {/* Brand/Info */}

        <div className="md:w-1/3">
          <div className="flex items-center mb-3">
            <div className="bg-sky-500 p-2 rounded-full">
            <span className="block w-3 h-3 bg-white rotate-45 mx-auto"></span>
          </div>
            <span className="ml-3 font-bold text-xl text-gray-800">E-Comm</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Social Links */}

        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <span className="font-semibold text-lg mb-2 text-gray-800">Follow Us</span>
          <p className="text-gray-700 mb-3 text-sm">
            Since the 1500s, when an unknown printer took a galley of type and scrambled.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook"><FaFacebookF className="text-sky-500 text-xl" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="text-sky-500 text-xl" /></a>
          </div>
        </div>

        {/* Contact Info */}

        <div className="md:w-1/3">
          <span className="font-semibold text-lg mb-2 text-gray-800 block">Contact Us</span>
          <div className="text-gray-700 text-sm leading-relaxed">
            <div>E-Comm, 4578</div>
            <div>Marmora Road,</div>
            <div>Glasgow D04 89GR</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSimple;
