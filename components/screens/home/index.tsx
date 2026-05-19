import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      {/* 1. HEADER SECTION */}
      <FadeIn.Item>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-bold text-2xl text-neutral-100 tracking-tight">Wunnam Zakaria</h1>
            <h2 className="mt-1 text-base text-neutral-400">Backend & Machine Learning Systems Engineer</h2>
          </div>
        </div>
      </FadeIn.Item>

      <Spacer />

      {/* 2. FIRST BLOCK (Muted, introductory tone) */}
      <FadeIn.Item>
        <p className="font-normal text-neutral-400 leading-relaxed">
          Welcome! This space is a reflection of my journey—through college, through tech, and through the lessons learned along the way. Every project, every
          challenge, every breakthrough has shaped my understanding, and I’m excited to share it with you. Whether you're here to learn, connect, or simply
          explore, I hope you find something meaningful in this journey.
        </p>
      </FadeIn.Item>

      <Spacer />

      {/* 3. SECOND BLOCK (High contrast, detailed profile story) */}
      <FadeIn.Item>
        <p className="font-normal text-neutral-100 leading-relaxed">
          I architect production backend systems integrating security-hardened APIs with ML inference pipelines, optimized for robustness and measurable
          performance at scale. My stack spans Python/FastAPI, C#/ASP.NET Core, PostgreSQL/MSSQL, and Assembly—building highly efficient, data-driven
          applications that prioritize throughput, reliability, and low-level optimization.
        </p>
      </FadeIn.Item>

      {/* 4. MINIMALIST INLINE LINKS */}
      <FadeIn.Item>
        <div className="mt-4 flex gap-6 text-sm">
          <a
            href="https://www.linkedin.com/in/wunnam-zakaria-a3904229b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 underline underline-offset-4 transition-colors hover:text-neutral-100"
          >
            Link to LinkedIn
          </a>
          <a
            href="https://github.com/WUFAZA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 underline underline-offset-4 transition-colors hover:text-neutral-100"
          >
            Link to GitHub
          </a>
        </div>
      </FadeIn.Item>

      <Spacer />

      {/* 5. DYNAMIC CONTENT FEEDS */}
      <FadeIn.Item>
        <div className="my-2">
          <Posts category="guides" />
        </div>
      </FadeIn.Item>

      <FadeIn.Item>
        <div className="my-2">
          <Posts category="examples" />
        </div>
      </FadeIn.Item>

      <Spacer />

      {/* 6. SIGNATURE QUOTE BLOCK */}
      <FadeIn.Item>
        <div className="mt-8 border-neutral-800 border-t pt-6">
          <p className="font-medium text-neutral-200 text-sm italic">"You are not a product of your circumstances. You are a product of your decisions."</p>
          <p className="mt-1 text-neutral-500 text-xs not-italic">— Stephen R. Covey</p>
        </div>
      </FadeIn.Item>

      <Spacer />

      {/* 7. GLOBAL FOOTER */}
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
