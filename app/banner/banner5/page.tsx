import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="w-full bg-[#1F2937] text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-widest text-red-500 font-semibold">
            2025 AUTOMOTIVE ENGINEERING INSIGHTS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
            Automotive Engineering: Driving the Electric, Autonomous, and Software-Defined Future
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">
              The Automotive Revolution: From Mechanical to Software-Defined
            </h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The automotive industry is undergoing its most profound transformation in a century. The global automotive
            engineering services market is projected to grow from $132.12 billion in 2025 to $260.76 billion by 2032,
            driven by electric powertrains, autonomous systems, and the rise of software-defined vehicle (SDV) platforms.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Modern vehicles integrate hundreds of millions of lines of code, leverage AI for real-time decision making,
            maintain persistent cloud connectivity, and evolve through over-the-air software updates. The SDV market is
            expected to grow from $61.7 billion in 2025 to $584.1 billion by 2035—firmly establishing software as the
            dominant force shaping future mobility.
          </p>

          {/* TABLE */}
          <table className="w-full border border-gray-300 mt-10">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Segment</th>
                <th className="border px-4 py-2">2025 Value</th>
                <th className="border px-4 py-2">2032/2035 Projection</th>
                <th className="border px-4 py-2">Driver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Automotive Engineering Services</td>
                <td className="border px-4 py-2">$132.12B</td>
                <td className="border px-4 py-2">$260.76B (2032)</td>
                <td className="border px-4 py-2">EVs, autonomy, SDV</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Software-Defined Vehicle Market</td>
                <td className="border px-4 py-2">$61.7B</td>
                <td className="border px-4 py-2">$584.1B (2035)</td>
                <td className="border px-4 py-2">Cloud, OTA, software stacks</td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

      {/* MARKET DRIVERS */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">
              Key Market Drivers Reshaping Automotive Engineering
            </h2>
          </div>

          <div className="space-y-12">

            {/* EV ELECTRIFICATION */}
            <div>
              <h3 className="text-xl font-semibold">Electric Vehicle Electrification Surge</h3>
              <p className="text-lg mt-2">
                The transition from ICE to EV platforms is reshaping global mobility. China alone deployed over 421,000
                electric buses—compared to only 300 in the U.S.—highlighting the global shift toward electrification.
              </p>
              <p className="text-lg mt-4">
                EV engineering requires deep specialization in BMS, thermal dynamics, high-voltage safety, regenerative
                braking, and power electronics—creating a race for top engineering talent.
              </p>
            </div>

            {/* ADAS */}
            <div>
              <h3 className="text-xl font-semibold">Advanced Driver Assistance Systems & Autonomous Driving</h3>
              <p className="text-lg mt-2">
                ADAS and autonomous systems rely on radar, lidar, camera perception, sensor fusion, real-time decision
                engines, and fail-safe safety architectures. These are now essential baseline requirements, not optional
                features.
              </p>
            </div>

            {/* SDV */}
            <div>
              <h3 className="text-xl font-semibold">Software-Defined Vehicles and Connected Services</h3>
              <p className="text-lg mt-2">
                By 2029, software-defined vehicles may represent up to 90% of global production. Software replaces
                hardware-driven functions, enabling continuous upgrades, predictive maintenance, remote diagnostics,
                and personalized digital services.
              </p>
            </div>

            {/* REGULATORY */}
            <div>
              <h3 className="text-xl font-semibold">Regulatory Pressures and Safety Standards</h3>
              <p className="text-lg mt-2">
                Regulatory frameworks including Euro NCAP, UNECE R155/R156, and NHTSA standards drive expanding
                engineering investment into safety and cybersecurity compliance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* KEPTEL CAPABILITIES */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">
              How Keptel Enables Automotive Engineering Excellence
            </h2>
          </div>

          <div className="space-y-12">

            {/* EMBEDDED */}
            <div>
              <h3 className="text-xl font-semibold">Comprehensive Embedded Systems Expertise</h3>
              <p className="text-lg mt-2">
                AUTOSAR Classic & Adaptive, embedded C/C++, ECU integration, bootloaders, automotive Ethernet, CAN, LIN, FlexRay,
                QNX, Linux, and Android Automotive—Keptel covers the complete embedded ecosystem.
              </p>
            </div>

            {/* ADAS */}
            <div>
              <h3 className="text-xl font-semibold">ADAS and Autonomous Driving Capabilities</h3>
              <p className="text-lg mt-2">
                Keptel supports perception, sensor fusion, localization, cybersecurity, robotics, and HIL/SIL validation
                using CANoe, VectorCast, and VTest Studio.
              </p>
            </div>

            {/* EV */}
            <div>
              <h3 className="text-xl font-semibold">Electric Vehicle Engineering Services</h3>
              <p className="text-lg mt-2">
                Expertise includes battery management systems, thermal modeling, power electronics, CCS/CHAdeMO/Tesla charging,
                and high-voltage safety-compliant EV architecture.
              </p>
            </div>

            {/* SDV */}
            <div>
              <h3 className="text-xl font-semibold">Software-Defined Vehicle Development</h3>
              <p className="text-lg mt-2">
                Cloud-native OTA platforms, middleware engineering, firmware development, model-based design (MBD), AUTOSAR
                Adaptive stacks, and full-SDV lifecycle integration.
              </p>
            </div>

            {/* FLEXIBLE MODELS */}
            <div>
              <h3 className="text-xl font-semibold">Flexible Engagement Models</h3>
              <p className="text-lg mt-2">
                Contract staffing, staff augmentation, managed services, and Build-Operate-Transfer (BOT) models enable OEMs
                and Tier-1 suppliers to scale engineering efficiently.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* REGIONAL MARKETS */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">
              Regional Market Dynamics and Growth Opportunities
            </h2>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">Asia Pacific</h3>
              <p className="text-lg mt-2">
                Asia Pacific leads with 40%+ market share. China dominates EV production, Japan drives global automotive
                R&D, and India is rapidly scaling EV components and engineering hubs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">North America</h3>
              <p className="text-lg mt-2">
                North America leads autonomous mobility and SDV innovation. Tesla, Waymo, Cruise, and major OEMs drive
                next-generation autonomous and connected mobility.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Europe</h3>
              <p className="text-lg mt-2">
                Europe prioritizes lightweight materials, sustainability, and autonomous safety. Strict Euro NCAP and EU
                cybersecurity mandates accelerate engineering demand.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CHALLENGES */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">
              Addressing Automotive Engineering Challenges
            </h2>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">Semiconductor Shortages and Supply Chain Constraints</h3>
              <p className="text-lg mt-2">
                Keptel supplies engineers who perform system redesigns, validate substitute components, and improve supply-chain
                resilience during global shortages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Software Complexity and Cybersecurity Risks</h3>
              <p className="text-lg mt-2">
                Keptel provides ISO/SAE 21434-aligned cybersecurity engineers specializing in secure coding, penetration testing,
                IDS/IPS, and vehicle cybersecurity architectures.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Talent Shortages and Evolving Skill Requirements</h3>
              <p className="text-lg mt-2">
                Automotive engineering increasingly requires cross-disciplinary skills. Keptel addresses talent shortages through
                vast networks, technical vetting, and upskilling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Development Cost and Time-to-Market Pressures</h3>
              <p className="text-lg mt-2">
                Virtualization, digital twins, and model-based engineering reduce proto costs and accelerate development timelines—
                areas Keptel supports extensively.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* EMERGING TECHNOLOGIES */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">
              Emerging Technologies Transforming Automotive Engineering
            </h2>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">Artificial Intelligence and Machine Learning</h3>
              <p className="text-lg mt-2">
                AI accelerates automotive development: calibration, diagnostics, predictive maintenance, and ADAS/AV algorithms.
                Keptel delivers automotive-grade AI/ML talent.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Additive Manufacturing and Lightweight Design</h3>
              <p className="text-lg mt-2">
                3D printing and lightweight materials improve EV range and performance. Keptel provides experts in advanced
                materials and topology optimization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Vehicle-to-Everything (V2X) Communication</h3>
              <p className="text-lg mt-2">
                V2X enables cooperative mobility and real-time safety. Keptel sources engineers skilled in DSRC, C-V2X,
                edge computing, and connected mobility systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Sustainable Materials and Circular Economy</h3>
              <p className="text-lg mt-2">
                Sustainability drives material selection and manufacturing processes. Keptel supports recycled materials,
                eco-design, and circular manufacturing strategies.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONCLUSION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">
              Conclusion: Partnering for Automotive’s Electric, Autonomous, Software-Defined Future
            </h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The automotive industry is accelerating toward an era of electric mobility, autonomous intelligence,
            connected ecosystems, and software-defined vehicle architectures.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Keptel’s capabilities across embedded systems, ADAS, EV engineering, cloud integration, cybersecurity,
            and SDV software position it as a trusted partner for OEMs and suppliers transforming their product
            roadmaps.
          </p>

          <p className="text-lg leading-relaxed">
            With certified processes and scalable engagement models, Keptel empowers organizations to accelerate
            development, strengthen compliance, and build mobility platforms that define the future of transportation.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}
