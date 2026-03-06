export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

const rawPosts = [
  {
    id: 1,
    slug: 'why-most-websites-fail-to-convert',
    title: 'Why Most Websites Fail to Convert (And How to Fix Yours)',
    category: 'Conversion Strategy',
    date: 'Oct 12, 2023',
    excerpt: 'A beautiful design means nothing if visitors leave without taking action. Discover the top 3 reasons your site is leaking revenue and the strategic fixes you need to implement today.',
    content: `
      <p>A beautiful design means nothing if visitors leave without taking action. Many businesses treat their website like an art project, obsessing over visuals while ignoring the fundamental principles of conversion.</p>
      <h2>The Problem: Design Over Strategy</h2>
      <p>When you prioritize aesthetics over user intent, you create a digital brochure rather than a sales engine. Visitors don't care about your color palette; they care about whether you can solve their problem.</p>
      <h2>The Fix: Conversion-Focused Design</h2>
      <ol>
        <li><strong>Clear Value Proposition:</strong> Does the visitor know what you do within 3 seconds?</li>
        <li><strong>Intuitive Navigation:</strong> Is the path to purchase or contact frictionless?</li>
        <li><strong>Strong Calls to Action:</strong> Are your buttons clear, compelling, and strategically placed?</li>
      </ol>
    `
  },
  {
    id: 2,
    slug: 'hidden-cost-of-slow-load-times',
    title: 'The Hidden Cost of Slow Load Times on Ecommerce Revenue',
    category: 'Performance Optimization',
    date: 'Nov 05, 2023',
    excerpt: 'Every second of delay costs you conversions. We break down the data on how page speed directly correlates with average order value and cart abandonment rates.',
    content: `
      <p>In the digital age, patience is a luxury your customers don't have. A slow-loading website isn't just an annoyance; it's a direct hit to your bottom line.</p>
      <h2>Why Speed Matters</h2>
      <p>Studies show that a one-second delay in page load time can result in a 7% reduction in conversions. For an ecommerce store making $100,000 a day, that's a $2.5 million annual loss.</p>
      <h2>How to Optimize</h2>
      <ul>
        <li>Compress images and use modern formats like WebP.</li>
        <li>Implement lazy loading for off-screen content.</li>
        <li>Minimize JavaScript and CSS files.</li>
        <li>Use a Content Delivery Network (CDN) to serve assets closer to your users.</li>
      </ul>
    `
  },
  {
    id: 3,
    slug: 'ux-psychology-designing-for-the-human-brain',
    title: 'UX Psychology: Designing for the Human Brain',
    category: 'UI/UX Design',
    date: 'Dec 18, 2023',
    excerpt: 'How to use cognitive load theory, Hick\'s Law, and visual hierarchy to guide users effortlessly toward your primary call to action without feeling salesy.',
    content: `
      <p>Great UX design isn't just about making things look good; it's about understanding how the human brain processes information. By leveraging psychological principles, you can create experiences that feel intuitive and natural.</p>
      <h2>Key Principles</h2>
      <ul>
        <li><strong>Hick's Law:</strong> The time it takes to make a decision increases with the number and complexity of choices. Keep your menus simple.</li>
        <li><strong>Cognitive Load:</strong> Don't overwhelm your users. Break complex tasks into smaller, manageable steps.</li>
        <li><strong>Visual Hierarchy:</strong> Use size, color, and spacing to guide the user's eye to the most important elements first.</li>
      </ul>
    `
  },
  {
    id: 4,
    slug: 'custom-digital-architecture',
    title: 'Stop Using Templates: The Case for Custom Digital Architecture',
    category: 'Web Development',
    date: 'Jan 22, 2024',
    excerpt: 'Why off-the-shelf themes are holding your business back. Learn how a custom-built, performance-driven foundation scales better and converts higher over the long term.',
    content: `
      <p>Templates are easy to set up, but they are often bloated, inflexible, and difficult to scale. If you are serious about growing your business, you need a foundation that is built specifically for your needs.</p>
      <h2>The Template Trap</h2>
      <p>Templates are designed to be "one size fits all," which means they are rarely optimized for your unique business goals. They often come with unnecessary code that slows down your site and makes maintenance a nightmare.</p>
      <h2>The Custom Advantage</h2>
      <p>Custom digital architecture allows you to build a site that is lean, fast, and perfectly aligned with your brand. It gives you complete control over the user experience and the ability to scale as your business grows.</p>
    `
  },
  {
    id: 5,
    slug: 'technical-seo-basics',
    title: 'Technical SEO Basics Every Founder Should Know',
    category: 'SEO & Growth',
    date: 'Feb 10, 2024',
    excerpt: 'You don\'t need to be an SEO expert, but you do need to understand these fundamental technical requirements to ensure your site is actually visible to search engines.',
    content: `
      <p>Technical SEO is the backbone of your online visibility. It's not about writing content; it's about ensuring search engines can find, crawl, and understand your site.</p>
      <h2>The Fundamentals</h2>
      <ul>
        <li><strong>Site Speed:</strong> As mentioned before, speed is a ranking factor.</li>
        <li><strong>Mobile Friendliness:</strong> Google uses mobile-first indexing. Your site must look great on phones.</li>
        <li><strong>HTTPS:</strong> Security is non-negotiable.</li>
        <li><strong>XML Sitemap:</strong> Help search engines understand your site structure.</li>
      </ul>
    `
  }
];

export const blogPosts: BlogPost[] = rawPosts.map(post => {
  // Strip HTML tags and split by whitespace to count words
  const wordCount = post.content.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(word => word.length > 0).length;
  // Calculate reading time: words / 200 rounded to nearest minute
  const readTimeMinutes = Math.max(1, Math.round(wordCount / 200));
  
  return {
    ...post,
    readTime: `${readTimeMinutes} min read`
  };
});
