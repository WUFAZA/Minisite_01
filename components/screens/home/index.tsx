import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      {/* 1. HEADER SECTION */}
      <FadeIn.Item>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-neutral-100">
              Wunnam Zakaria
            </h1>
            <h2 className="text-base text-neutral-400 mt-1">
              Backend & Machine Learning Systems Engineer
            </h2>
          </div>
        </div>
      </FadeIn.Item>
      
      <Spacer />
      
      {/* 2. FIRST BLOCK (Muted, introductory tone) */}
      <FadeIn.Item>
        <p className="text-neutral-400 leading-relaxed font-normal">
          Welcome! This space is a reflection of my journey—through college,
          through tech, and through the lessons learned along the way. 
          Every project, every challenge, every breakthrough has shaped 
          my understanding, and I’m excited to share it with you. 
          Whether you're here to learn, connect, or simply explore, 
          I hope you find something meaningful in this journey.
        </p>
      </FadeIn.Item>

      <Spacer />
      
      {/* 3. SECOND BLOCK (High contrast, detailed profile story) */}
      <FadeIn.Item>
        <p className="text-neutral-100 leading-relaxed font-normal">
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
            className="text-neutral-300 underline underline-offset-4 hover:text-neutral-100 transition-colors"
          >
            Link to LinkedIn
          </a>
          <a 
            href="https://github.com/WUFAZA" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neutral-300 underline underline-offset-4 hover:text-neutral-100 transition-colors"
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
        <div className="border-t border-neutral-800 pt-6 mt-8">
          <p className="text-sm italic text-neutral-200 font-medium">
            "You are not a product of your circumstances. You are a product of your decisions."
          </p>
          <p className="text-xs text-neutral-500 mt-1 not-italic">
            — Stephen R. Covey
          </p>
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