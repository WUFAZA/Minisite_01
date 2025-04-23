import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import Link from "@/components/link";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>Minisite</h1>
            <h2>Minimalist Portfolio template</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <div className="rounded-lg bg-gray-2 p-6 mb-6">
          <h3 className="text-lg font-medium mb-2">Create your portfolio in minutes</h3>
          <p className="mb-4">
            A lightweight, modern template built with Next.js and Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <Link href="/guides/getting-started" text="Get Started" underline />
            <Link href="https://github.com/OmniS0FT/Minisite" text="View on GitHub" underline />
          </div>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <p>
        Minisite offers a sleek portfolio solution for creating your personal showcase website. 
        Built for speed and simplicity, this lightweight template remains fully adaptable to match your unique style. Ideal for creative professionals including developers seeking to display their projects. 
        Get started by exploring the site and forking the repository.  
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-medium mb-2">Markdown & MDX</h3>
            <p className="text-small text-muted">Write content using Markdown or MDX with full flexibility.</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-medium mb-2">SEO Optimized</h3>
            <p className="text-small text-muted">Built-in SEO support with dynamic meta tags and Open Graph images.</p>
          </div>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
