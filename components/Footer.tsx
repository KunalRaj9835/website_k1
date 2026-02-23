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

          {/* Office */}
          <div>
  <h3 className="font-semibold text-base mb-2">Hyderabad, India</h3>
  <p className="leading-relaxed">
    Door No 1-60/8/A &amp; B, 3rd Floor, KNR Square,
    <br />
    Opp. The Platina , Gachibowli, Kondapur,
    <br />
    Hyderabad – 500032
    <br />
    Email: info@kepteltech.com
    <br />
    Ph: +91 8884344442
  </p>
</div>


        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-gray-300 leading-relaxed">
  {/* Disclaimer */}
  <div className="sm:max-w-[70%]">
    <span className="font-semibold">Disclaimer:</span> Keptel does not charge
    any money from job seekers. Report suspicious activities to
    <span className="ml-1">info@kepteltech.com.</span>
  </div>

  {/* Copyright */}
  <p className="text-center sm:text-right">
    © {new Date().getFullYear()} Keptel Analytics Space. All Rights Reserved.
  </p>
</div>





      </div>
    </footer>
  );
}
