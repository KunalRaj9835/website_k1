import BlogCard from "./BlogCard";
import YellowButton from "./YellowButton";

export default function RecentBlogs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-[#0e355d]">Our Recent Blogs</h2>
        <div className="h-1 w-20 bg-red-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Subtext */}
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Explore our blog for insightful articles, personal reflections and
        ideas that inspire action on the topics you care about.
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <BlogCard
          image="/blog/blog1.jpg"
          title="Real-Time Analytics in 2025: Predicting Events Before They Happen"
          href="/blogs/blog1"
        />

        <BlogCard
          image="/blog/blog2.png"
          title="The Rise of Semantic Analytics: Replacing Dashboards with AI-Driven Insights"
          href="/blogs/blog2"
        />

        <BlogCard
          image="/blog/blog3.webp"
          title="Data Quality Automation: The Hidden Engine Behind Accurate Analytics"
          href="/blogs/blog3"
        />

      </div>

      {/* Know More Button */}
      <div className="flex justify-center mt-14">
        <YellowButton text="Know More" href="/blog" />
      </div>

    </section>
  );
}
