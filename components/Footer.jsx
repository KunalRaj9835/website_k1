import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e355d] text-gray-200 pt-16 pb-8 px-6 text-sm">

      <div className="max-w-7xl mx-auto">

        <hr className="border-gray-600 mb-8" />

        {/* Footer main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo */}
          <div>
            <img 
              src="/logo.svg"
              alt="Keptel"
              className="w-40 h-auto"
            />
          </div>

          {/* New York Office */}
          <div>
            <h3 className="font-semibold text-base mb-2">Hyderabad , India</h3>
            <p className="leading-relaxed">
              767, 2nd floor, Tngos colony,
Gachibowli, Hyderabad
Email: info@kepteltech.com
Ph : +91 8884344442
            </p>
          </div>

          
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-xs text-gray-300 leading-relaxed">
          <span className="font-semibold">Disclaimer:</span> Keptel does not charge
          any money from job seekers. Report suspicious activities to legal@keptel.com.
        </div>

        {/* Copyright */}
        <p className="text-center text-xs mt-8">
          © {new Date().getFullYear()} Keptel Analytics Space. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
