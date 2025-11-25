import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e355d] text-gray-200 pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto">

        <hr className="border-gray-600 mb-10" />

        {/* Footer main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & review */}
          <div>
            <img 
              src="/logo.svg"
              alt="Keptel"
              className="w-50 h-auto"
            />
            <p className="text-sm text-gray-400 uppercase">Reviewed on</p>
            <p className="font-bold text-xl text-white">Clutch ★★★★★</p>
            <p className="underline text-sm cursor-pointer">Review Us</p>
          </div>

          {/* New York Office */}
          <div>
            <h3 className="font-semibold text-lg mb-3">New York</h3>
            <p className="text-sm leading-relaxed">
              123 Business Avenue, Suite 500  
              NY 10001  
              Email: newyork@nexusglobal.com  
              Phone: +1 (555) 123-4567
            </p>
          </div>

          {/* San Francisco Office */}
          <div>
            <h3 className="font-semibold text-lg mb-3">San Francisco</h3>
            <p className="text-sm leading-relaxed">
              456 Innovation Drive  
              CA 94105  
              Email: sanfrancisco@nexusglobal.com  
              Phone: +1 (555) 234-5678
            </p>
          </div>

          {/* London Office */}
          <div>
            <h3 className="font-semibold text-lg mb-3">London</h3>
            <p className="text-sm leading-relaxed">
              789 Enterprise Street  
              EC2A 4BX  
              Email: london@nexusglobal.com  
              Phone: +44 20 1234 5678
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 text-sm text-gray-300 leading-relaxed">
          <span className="font-semibold">Disclaimer:</span> Keptel does not charge
          any money from job seekers. Report suspicious activities to legal@keptel.com.
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-10">
          Copyright © {new Date().getFullYear()} Keptel Analytics Space. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
