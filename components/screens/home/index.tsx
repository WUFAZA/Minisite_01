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
            <h1>Wunnam</h1>
            <h2>Software Engineer</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <div className="rounded-lg bg-gray-2 p-6 mb-6">
          <h3 className="text-lg font-medium mb-2">Welcome! This space is a reflection of 
            my journey—through college, through tech,
            and through the lessons learned along the way. 
            Every project, every challenge, every breakthrough has shaped my understanding,
            and I’m excited to share it with you. Whether you're here to learn,
            connect, or simply explore, 
            I hope you find something meaningful in this journey</h3>
          <p className="mb-4">
          Hey there!,I’m Faaiz Wunnam Zakaria, a passionate tech enthusiast from Tamale, Ghana, 
          currently pursuing my undergraduate degree in Software Engineering at Istanbul Ticaret University. 
          My journey in technology is deeply rooted in my curiosity for AI and machine learning engineering, 
          as well as my love for problem-solving through coding.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/wunnam-zakaria-a3904229b/" text="Link to Linkdn" underline />
            <Link href="https://github.com/WUFAZA" text="Link to GitHub" underline />
          </div>
        </div>
      </FadeIn.Item>
      <FadeIn.Item>
        <p>
        "You are not a product of your circumstances. You are a product of your decisions." – Stephen R. Covey
        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6">
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-medium mb-2">Machine Learning</h3>
            <p className="text-small text-muted">Autonomous tasks and data</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <h3 className="font-medium mb-2">Cloud Engineering</h3>
            <p className="text-small text-muted">creating & troubleshooting cloud infrastructure</p>
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
