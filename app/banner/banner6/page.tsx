import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="w-full bg-[#1F2937] text-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="uppercase tracking-widest text-red-500 font-semibold">
            2025 AEROSPACE & DEFENCE INSIGHTS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
            Aerospace & Defence: Engineering the Future of Aviation and National Security
          </h1>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">A Sector Poised for Transformational Growth</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The global aerospace and defense market is entering a period of significant expansion. Valued at
            $846.94 billion in 2025, it is projected to reach $1,470.43 billion by 2032, driven by rising geopolitical
            tensions, commercial aviation recovery, advancements in AI and autonomous systems, and rapid growth in the
            global space economy.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            In the United States alone, the sector is expected to reach $694.86 billion by 2030, fueled by continued
            defense modernization and renewed commercial aircraft demand.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Despite workforce shortages and supply chain constraints, the U.S. aerospace and defense industry generated
            over $995 billion in total economic activity in 2024, contributing $443 billion in economic value and
            supporting a highly skilled labor force with average annual incomes exceeding $115,000.
          </p>

          {/* MARKET TABLE */}
          <table className="w-full border border-gray-300 mt-10">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Region</th>
                <th className="border px-4 py-2">2025 Value</th>
                <th className="border px-4 py-2">2032 Projection</th>
                <th className="border px-4 py-2">Growth Drivers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Global Market</td>
                <td className="border px-4 py-2">$846.94B</td>
                <td className="border px-4 py-2">$1.47T</td>
                <td className="border px-4 py-2">AI, autonomy, space economy</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">United States</td>
                <td className="border px-4 py-2">$555B+</td>
                <td className="border px-4 py-2">$694.86B (2030)</td>
                <td className="border px-4 py-2">Defense modernization, aircraft demand</td>
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
              Key Market Drivers Reshaping Aerospace & Defence
            </h2>
          </div>

          <div className="space-y-12">

            {/* COMMERCIAL AVIATION */}
            <div>
              <h3 className="text-xl font-semibold">Commercial Aviation Recovery and Fleet Expansion</h3>
              <p className="text-lg mt-2">
                Passenger traffic has returned to pre-pandemic levels, with emerging markets showing 54% growth potential
                in regional and urban air mobility. Production capacity remains constrained, creating record backlogs
                and driving engineering demand across design, certification, and sustainment.
              </p>
            </div>

            {/* DEFENSE MODERNIZATION */}
            <div>
              <h3 className="text-xl font-semibold">Defense Modernization and Geopolitical Tensions</h3>
              <p className="text-lg mt-2">
                Defense spending continues to surge globally. The U.S. increased missile and munitions R&D funding by
                over 340% in the last decade, driving major growth in propulsion, guidance, and advanced weapons systems.
              </p>
            </div>

            {/* AI & AUTONOMY */}
            <div>
              <h3 className="text-xl font-semibold">Artificial Intelligence and Autonomous Systems</h3>
              <p className="text-lg mt-2">
                Aerospace and defense AI spending is projected to reach $5.8B by 2029. The Pentagon’s initiative to
                deploy thousands of autonomous systems is fueling demand for robotics, perception systems, navigation,
                and AI-powered command-and-control.
              </p>
            </div>

            {/* SPACE ECONOMY */}
            <div>
              <h3 className="text-xl font-semibold">Space Economy Expansion</h3>
              <p className="text-lg mt-2">
                The global space sector reached $570B in 2023. Satellite manufacturing, launch vehicles, 
                megaconstellations, and space-based communications are fueling specialized engineering demand.
              </p>
            </div>

            {/* ADVANCED MANUFACTURING */}
            <div>
              <h3 className="text-xl font-semibold">Advanced Manufacturing and Digital Transformation</h3>
              <p className="text-lg mt-2">
                Additive manufacturing and digital twins are reshaping aerospace. Over 58% of European aerospace
                manufacturers now use additive manufacturing for lighter, stronger components.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* KEPTEL EXPERTISE */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">
              How Keptel Enables Aerospace & Defence Engineering Excellence
            </h2>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">Avionics Software Development and Certification</h3>
              <p className="text-lg mt-2">
                Keptel delivers DO-178B/C compliant avionics software engineering across all DAL levels. 
                Their engineers specialize in embedded C/C++, RTOS, V&V, and safety-critical systems with 
                full traceability.
              </p>
              <p className="text-lg mt-4">
                With expertise in LDRA, VectorCast, and RTRT, Keptel ensures rigorous coverage analysis 
                required for airworthiness certification.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Embedded Systems for Aerospace Applications</h3>
              <p className="text-lg mt-2">
                Keptel sources embedded engineers with DO-178 and DO-254 experience, supporting 
                flight-critical hardware/software, redundancy architectures, and kernel-level programming.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Mechanical Design and Analysis</h3>
              <p className="text-lg mt-2">
                Capabilities span FEA, CFD, fatigue modeling, thermodynamics, and composite materials—
                supporting aircraft, engines, and defense platforms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Wire Harness Fabrication and Prototyping</h3>
              <p className="text-lg mt-2">
                Keptel provides blueprint-to-production wire harness engineering, including EMI shielding,
                routing, connector design, and qualification for harsh aerospace environments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Technical Publications and Illustrations</h3>
              <p className="text-lg mt-2">
                Keptel produces technical manuals, IPCs, and service bulletins aligned to aerospace 
                regulatory standards—supporting MRO and airline operators.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Testing and Validation</h3>
              <p className="text-lg mt-2">
                From black/white box to integration and HIL testing, Keptel ensures airworthiness, 
                safety compliance, and reliability across mission-critical systems.
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
              Regional Market Dynamics and Opportunities
            </h2>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">North America</h3>
              <p className="text-lg mt-2">
                North America leads with 45.2% global market share and is home to aerospace leaders like Boeing,
                Lockheed Martin, Raytheon, and Northrop Grumman.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Asia Pacific</h3>
              <p className="text-lg mt-2">
                Rapid modernization programs, indigenous aircraft initiatives, and advanced space missions 
                drive regional growth in China, India, Japan, and South Korea.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Europe</h3>
              <p className="text-lg mt-2">
                Europe emphasizes sustainability, alternative propulsion, and cross-border collaboration 
                through Airbus, Eurofighter, and ESA programs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Middle East</h3>
              <p className="text-lg mt-2">
                Heavy investment in defense capabilities, UAV systems, and aviation infrastructure drives 
                demand for aerospace engineering talent.
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
              Addressing Aerospace & Defence Engineering Challenges
            </h2>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">Supply Chain Resilience</h3>
              <p className="text-lg mt-2">
                Keptel supports redesign, qualification, dual sourcing, and supply chain transformation 
                to reduce risk in constrained aerospace ecosystems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Workforce Development</h3>
              <p className="text-lg mt-2">
                Nearly 50% of defense manufacturers report shortages in advanced engineering skills. 
                Keptel helps close this gap through large talent networks and ongoing upskilling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Certification and Compliance</h3>
              <p className="text-lg mt-2">
                Keptel accelerates compliance through DO-178C, DO-254, AS9100, and other aerospace-grade 
                frameworks and documentation practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Legacy System Modernization</h3>
              <p className="text-lg mt-2">
                Defense systems operate for decades. Keptel supports avionics upgrades, sensor integration,
                and cybersecurity enhancements for aging platforms.
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
              Emerging Technologies Transforming Aerospace & Defence
            </h2>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">Hypersonic Technologies</h3>
              <p className="text-lg mt-2">
                Hypersonics require high-temperature materials, scramjet propulsion, and advanced 
                aerothermal modeling—fields with extreme talent shortages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Electric and Hybrid Propulsion</h3>
              <p className="text-lg mt-2">
                Keptel supports development of battery systems, power electronics, and 
                thermal management for eco-friendly propulsion technologies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Advanced Air Mobility (AAM)</h3>
              <p className="text-lg mt-2">
                eVTOL and urban air mobility platforms require expertise in autonomy, avionics, 
                structural design, and systems certification.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Digital Twins and AI-Driven Sustainment</h3>
              <p className="text-lg mt-2">
                Keptel engineers build simulation-driven digital twins for predictive maintenance, performance 
                optimization, and lifecycle extension.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Space Sustainability and Debris Management</h3>
              <p className="text-lg mt-2">
                As orbital debris grows, Keptel supports sensing, tracking, robotics, and satellite 
                system engineering for orbital safety.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONCLUSION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">Conclusion: Partnering for Aerospace & Defence Excellence</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            Aerospace and defense growth reflects rising commercial aviation demand, defense modernization,
            space expansion, and emerging technologies. Delivering mission-critical systems requires exceptional
            engineering talent, rigorous certification, and industry-grade processes.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Keptel brings deep expertise in DO-178C, DO-254, avionics engineering, mechanical design, 
            embedded systems, testing, and aerospace quality frameworks—ensuring precision and reliability.
          </p>

          <p className="text-lg leading-relaxed">
            The future of aerospace and defense is autonomous, sustainable, and digitally integrated. 
            With Keptel as your engineering partner, that future becomes achievable today.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}
