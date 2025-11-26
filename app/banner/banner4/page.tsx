import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="w-full bg-[#1F2937] text-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-widest text-red-500 font-semibold">
            2025 MANUFACTURING TECHNOLOGY INSIGHTS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
            Industrial Automation: Transforming Manufacturing Through Smart Technologies
          </h1>

        </div>
      </section>

      {/* MARKET GROWTH SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">The Explosive Growth of Industrial Automation</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            The industrial automation market is entering a period of extraordinary expansion. Valued at approximately
            $47 billion in 2025, it is projected to reach $91 billion by 2035—driven by Industry 4.0 adoption,
            AI-powered autonomous systems, digital twin technology, and 5G-enabled machine communication.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Automation is no longer a cost-driven modernization choice. It is the backbone of competitiveness in a
            digital-first industrial landscape. Organizations that fail to automate risk falling behind faster, smarter,
            and more efficient global competitors.
          </p>

          {/* MARKET TABLE */}
          <table className="w-full border border-gray-300 mt-10">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Year</th>
                <th className="border px-4 py-2">Market Value</th>
                <th className="border px-4 py-2">Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">2025</td>
                <td className="border px-4 py-2">$47B</td>
                <td className="border px-4 py-2">Baseline</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2030</td>
                <td className="border px-4 py-2">$72B</td>
                <td className="border px-4 py-2">Industry 4.0 Acceleration</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2035</td>
                <td className="border px-4 py-2">$91B</td>
                <td className="border px-4 py-2">10%+ CAGR</td>
              </tr>
            </tbody>
          </table>

        </div>
      </section>

      {/* MARKET DRIVERS SECTION */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">Key Market Drivers Reshaping Industrial Landscapes</h2>
          </div>

          <div className="space-y-12">

            {/* LABOR EFFICIENCY */}
            <div>
              <h3 className="text-xl font-semibold">Labor Efficiency and Smart Manufacturing</h3>
              <p className="text-lg mt-2">
                Automation will displace an estimated 92 million jobs by 2030 but will create 170 million new roles—
                resulting in a net gain of 78 million positions. Automation enhances human capabilities by offloading
                repetitive tasks to intelligent systems.
              </p>
              <p className="text-lg mt-4">
                In Q1 2025 alone, North American manufacturers ordered more than 9,000 industrial robots worth
                $581 million. Automotive companies led a 42% surge as they tackled labor shortages and improved
                production efficiency.
              </p>
            </div>

            {/* AI & PREDICTIVE INTELLIGENCE */}
            <div>
              <h3 className="text-xl font-semibold">AI and Predictive Intelligence</h3>
              <p className="text-lg mt-2">
                Roughly 63% of organizations plan to adopt AI within three years. Predictive intelligence anticipates
                equipment failures, schedules maintenance, and increases efficiency. Siemens reports up to 30% efficiency
                gains through Industry 4.0 adoption.
              </p>
            </div>

            {/* EDGE COMPUTING */}
            <div>
              <h3 className="text-xl font-semibold">Edge Computing and Real-Time Processing</h3>
              <p className="text-lg mt-2">
                Edge-based industrial architectures enable microsecond-level decision-making on production lines.
                Real-time processing ensures safety, quality, and rapid optimization in high-speed manufacturing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* KEPTEL STRENGTH SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">How Keptel Enables Your Automation Journey</h2>
          </div>

          <div className="space-y-12">

            <div>
              <h3 className="text-xl font-semibold">Strategic Talent Management for Automation Excellence</h3>
              <p className="text-lg mt-2">
                Keptel delivers specialists in PLC programming, SCADA operations, HMI engineering, robotics integration,
                collaborative robot setup, and IIoT architecture—covering every major pillar of modern automation.
              </p>
            </div>

            {/* FLEXIBLE MODELS */}
            <div>
              <h3 className="text-xl font-semibold">Flexible Engagement Models for Every Project Phase</h3>
              <p className="text-lg mt-2">Keptel supports:</p>

              <ul className="list-disc pl-8 text-lg mt-2 space-y-2">
                <li>Contract staffing for rapid scaling</li>
                <li>Managed services for end-to-end automation programs</li>
                <li>Staff augmentation for specialized expertise</li>
              </ul>
            </div>

            {/* DOMAIN EXPERTISE */}
            <div>
              <h3 className="text-xl font-semibold">Domain-Specific Automation Expertise</h3>
              <p className="text-lg mt-2">
                Expertise spans automotive welding automation, EV production systems, aerospace-grade testing,
                DO-178C compliance, and large-scale industrial process optimization.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* REGIONAL MARKETS */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">Regional Growth Opportunities and Market Dynamics</h2>
          </div>

          <div className="space-y-12">

            {/* NORTH AMERICA */}
            <div>
              <h3 className="text-xl font-semibold">North America: Technology Leadership and Reshoring</h3>
              <p className="text-lg mt-2">
                North America holds 43.4% of the global automation market and grows at 12.8% annually. Reshoring and
                advanced manufacturing infrastructure drive strong demand for automation talent.
              </p>
            </div>

            {/* ASIA PACIFIC */}
            <div>
              <h3 className="text-xl font-semibold">Asia-Pacific: Volume Production and Rapid Adoption</h3>
              <p className="text-lg mt-2">
                China’s “Made in China 2025” and India’s expanding industrial base accelerate automation adoption across
                high-volume manufacturing ecosystems.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">Overcoming Implementation Challenges</h2>
          </div>

          <div className="space-y-12">

            {/* CAPITAL INVESTMENT */}
            <div>
              <h3 className="text-xl font-semibold">Capital Investment and ROI Concerns</h3>
              <p className="text-lg mt-2">
                Automation requires significant upfront investment. Keptel’s flexible staffing reduces fixed labor cost,
                improving ROI for small and mid-market manufacturers.
              </p>
            </div>

            {/* INTEGRATION COMPLEXITY */}
            <div>
              <h3 className="text-xl font-semibold">Integration Complexity and Legacy Systems</h3>
              <p className="text-lg mt-2">
                Many factories operate with decades-old equipment. Keptel provides engineers skilled in bridging
                legacy protocols with modern IIoT and automation systems.
              </p>
            </div>

            {/* CYBERSECURITY */}
            <div>
              <h3 className="text-xl font-semibold">Cybersecurity in Connected Factories</h3>
              <p className="text-lg mt-2">
                Connected automation increases exposure to cyber threats. Keptel sources professionals trained in OT
                security, ransomware prevention, and industrial threat mitigation.
              </p>
            </div>

            {/* SUSTAINABILITY */}
            <div>
              <h3 className="text-xl font-semibold">Sustainable Automation and Green Manufacturing</h3>
              <p className="text-lg mt-2">
                Automation reduces waste, energy consumption, and production inefficiencies. Keptel provides specialists
                in green automation and sustainable production engineering.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FUTURE TRENDS */}
      <section className="w-full bg-[#F3F4F6] py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">The Path Forward: Hyperautomation and Beyond</h2>
          </div>

          <p className="text-lg leading-relaxed mb-6">
            By 2026, 30% of enterprises will automate more than half their network activities. Ninety percent of major
            corporations will list hyperautomation as a strategic priority—combining robotics, AI, analytics, digital
            twins, and process automation.
          </p>

          <p className="text-lg leading-relaxed">
            Keptel assembles cross-functional hyperautomation teams merging mechanical engineers, robotics experts,
            software developers, and data scientists to ensure automation success.
          </p>

        </div>
      </section>

      {/* CONCLUSION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="border-l-4 border-red-500 pl-4 mb-10">
            <h2 className="text-2xl font-bold">Conclusion: Partnering for Automation Success</h2>
          </div>

          <p className="text-lg leading-relaxed mb-4">
            Industrial automation presents extraordinary opportunities but also significant execution challenges.
            Success requires specialized talent, industry experience, and strong delivery processes.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Keptel’s ISO 9001:2015-certified frameworks, industry-specific expertise, and flexible engagement models
            position the company as a trusted partner across automation programs.
          </p>

          <p className="text-lg leading-relaxed">
            The future of manufacturing is automated, intelligent, and interconnected. Keptel enables organizations
            to realize this future today.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
}
