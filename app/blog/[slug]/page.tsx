"use client";

import { m, motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowLeft, Clock, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { marked } from "marked";

interface BlogPost {
  title: string;
  author: string;
  readTime: string;
  description: string;
  content: string;
  image: string;
}

const getBlogPost = (slug: string): BlogPost => {
  const blogPosts: Record<string, BlogPost> = {
    "transforming-public-schools-smart-furniture": {
      title:
        "Educating Nigeria's Future: Early Episode of Education Dialogue wit Ayodele Olajiga",
      author: "Modupeola Adekanbi",
      readTime: "5 min read",
      description:
        "We are excited to introduce the Education Dialogue series with Edugist, proudly sponsored by SKLD Integrated Services, where we delve into important conversations shaping the future of education in Nigeria. Through this series, we’ll feature leading voices in the education sector, addressing critical issues, innovative solutions, and impactful stories.",
      content:
        "In one of our early episodes, we had the privilege of hosting Ayodele Olajiga, CEO of Teach for Nigeria. Ayodele shared powerful insights into his organization’s commitment to eradicating educational inequity across the country. He emphasized that every Nigerian child, regardless of socio-economic background, deserves access to quality education. Through the Teach for Nigeria fellowship program, they recruit passionate graduates, provide six weeks of intensive training, and place them in underserved communities for two years. Additionally, they offer an 8-month training program for school leaders to further enhance educational leadership.\n\n\nOlajiga also spoke about the role of technology in education, stating: “Rather than focusing on acquiring technology, we are more concerned with answering the question of what can we use tech to solve?” His focus on innovative problem-solving over just tech acquisition is a refreshing approach to preparing children for real-world challenges.\n\nSince its inception in 2017, Teach for Nigeria has impacted over 200,000 students in 635 schools, with over 1,500 fellows trained. The organization’s ultimate goal is to influence over one million children.\n\nStay tuned as we continue to share episodes from this educational journey, featuring more thought-provoking discussions with leaders like Ayodele Olajiga.\n",
      image: "/news/news-1.png",
    },
    "new-furniture-wholesome-classroom": {
      title:
        "The Envelop Concept: Would it work for the 21st-century young Nigerian adult?",
      author: "Modupeola Adekanbi",
      readTime: "4 min read",
      description:
        "What is the Envelop Challenge?\n\nThe envelope budgeting method has evolved into a TikTok sensation, the concept was popularized by personal finance author Dave Ramsey. It involves dividing your take-home pay into spending categories (e.g., rent, utilities, et cetera), labeling an envelope for each category, and putting the cash you plan to spend into the envelopes.",
      content: `However, it’s taken a different turn on Tiktok and has garnered millions of views as the “100 Envelop Challenge” and it’s been a sensation ever since. It’s a money-saving challenge, which promises to help people save over $5,000.
#### Here's how it works:
You are required to label empty envelopes with the numbers 1 to 100
- Chronologically fill up each envelope with the dollar amount of said envelope each day. In other words, on Day 50, you’d grab envelope 50 and put $50 in it. By the end of the 100 days, you will have saved $5,050

### Adapting the Envelop Challenge For Nigerians:
Given the equivalent current exchange rate of 1 dollar to naira, the average monthly [income range from 80,000 to 150,000 Nigerian Naira](https://www.timecamp.com/average-salary/nigeria/), and the increasing expense for essentials in the lives of an average Nigerian, adapting this method to the current economic climate requires a different approach.

You can create your own envelopes and label in increments of 50 Naira. If you start from 50 Naira, you can progressively increase to 4,500 Naira on day 100, which will come to a total of N227,500.

Alternatively, opt for a digital approach using bank apps, beginning with N5 and progressing to N10, N15, N20, and beyond. After 100 days, you should amass a total of N25,250. Utilizing platforms like [Cowrywise](https://www.linkedin.com/company/cowrywise/) and [Piggyvest](https://www.linkedin.com/company/piggyvest/) can facilitate this process.

### Now, how realistic is this money-saving challenge?
According to [TIME](https://time.com/6249003/100-envelopes-challenge-tiktok/), Jen Hemphill, accredited financial counselor and host of Her Dinero Matters Podcast, understands the drawbacks but believes the psychological component of the challenge could outweigh the concerns about inflation and losing out on interest for some people. “Saving challenges like this gives people accountability and this one is fun, visual, and provides a sense of gamification,” she says.

> While [Dough Flynn in an interview with CNN](https://edition.cnn.com/2023/01/31/economy/experts-review-the-tik-tok-100-envelope-challenge/index.html) says “I’m all for whatever it takes to get people talking about saving money. That’s a good thing, but it’s gimmicky,” he said. “It’s laudable to try to put some money away, but it doesn’t feel very goal-oriented to me. What are you saving this money for?”

Whether you’re doing the 100 envelope challenge or not, you should get engaged with your finances and budgeting, and stay in tune with your finances. Take baby steps and get started with where you’re at now.


### Simple steps to get started:

1. **Label 100 envelopes from 1 to 100:** You can be as creative with this as you wish. Some people embrace their inner crafter and create colored envelopes with calligraphy. Others stick to classic white envelopes and a marker for numbering
2. **Put your envelopes in a container:** You can either keep them in numeric order or mix them up. Many people prefer to pick envelopes randomly to make the amount they save each day a surprise.
3. **Pick 1 envelope each day:** The number on the envelope you choose is the amount of cash you should stick inside of it.
4. **Take stock of your savings:** at the end of 100 days, you’ll have 100 envelopes containing a total of N227,500 or N25,250

> As [Fidelity.com](http://fidelity.com/) suggests, If the standard $5,000 or N227,500 target in 100 days isn’t feasible for you, consider adjusting the frequency of selecting envelopes, modifying the amounts associated with each envelope, or exploring alternatives like the 52-week money challenge.

If you’re looking to challenge yourself and supercharge your saver mindset despite the challenges, then this is it. The benefit of the 100 Envelopes Challenge is that it starts small and encourages constant, conscious saving that builds quickly.`,
      image: "/news/news-2.png",
    },
    "designing-collaborative-spaces-learning": {
      title:
        "Lagos Govt, Casio, SKLD Urge Teachers To Adopt New Teaching Skills",
      author: "Michael Emmanuel",
      readTime: "6 min read",
      description: "",
      content: `The Lagos State Government in partnership with Casio and SKLD has charged teachers, both in the private and public schools, to adopt their teaching skills to modern techniques so as to be able to meet the needs of their students.
        
[Click here to read more](https://www.thexpressng.com/lagos-govt-casio-skld-urge-teachers-to-adopt-new-teaching-skills/)`,
      image: "/news/news-3.webp",
    },
    "integrating-technology-smart-tools": {
      title: "Lagos Trains 1200 Teachers In Critical Skills",
      author: "Micheal Emmanuel",
      readTime: "2 min read",
      description: "",
      content: `Lagos State Government (LASG)  in partnership with an education-based Non-Governmental Organization on Wednesday organized a capacity-enhancing seminar for teachers across the state.

About 1200 teachers are to be trained in a program that the organizers say will be continued in phases.


[Read More](https://newtelegraphng.com/lagos-trains-1200-teachers-in-critical-skills/)`,
      image: "/news/news-3.webp",
    },
    "innovative-learning-spaces-future": {
      title:
        "Lagos, CASIO/ SKLD Targets 1,200 Secondary School Teachers for Capacity Building",
      author: "David Wilson",
      readTime: "5 min read",
      description: "",
      content: `A total of 1,200 teachers drawn from public and private secondary schools in Lagos are to benefit from the CASIO model School training project, aimed at enriching teachers with teaching methodologies, engaging students in new and exciting ways to enhance hands-on learning and serve as a tool to unlock their potentials in the state.
        

[Read Here](https://www.thisdaylive.com/index.php/2023/11/04/lagos-casio-skld-targets-1200-secondary-school-teachers-for-capacity-building)        `,
      image: "/news/news-5.webp",
    },
    "ergonomics-enhancing-student-performance": {
      title: "Shop for Back-to-School Without a Dime!",
      author: "Chioma Chinweze",
      readTime: "10 min read",
      description:
        "Sounds too good to be true, right?\nYes, you can shop with zero naira and that wasn’t a typo!",
      content: `Parents have a lot of responsibilities, even more so when it comes to getting their kids ready for the new school year. The back-to-school season can be a very stressful, rigorous and frustrating period if it isn’t planned properly. Most especially the wahala of moving from store to store hoping to find an important brand on your kid’s school list

But not to worry because Skit Store and Edubanc have partnered to help ease the stress this season by providing you with a place to shop for everything you need on your list in one location, SHOPPERs CREDIT, and an extra 5% on all purchases!

Throughout this article, we will explain how you can utilize this offer, and a free back-to-school shopping list to download.

### What do you stand to gain by reading?

1. Insights on the exclusive back-to-school offer you can’t miss
2. The benefits that await when you shop at **Skit Store**

Stay with me, we are almost at the good part.

> The economic situation in Nigeria is a major cause for concern as the price hike has affected all sectors. The price of fuel has gone up over 40%, food prices have tripled, and families are tightening their budgets. This partnership was started by parents for parents and to relieve them this back-to-school season because of this current reality.
 
### The offer you didn’t know you needed at your fingertips

Here's how to access it:

1. Visit [skit.ng](https://skit.ng/) or any **Skit Store** to place your order and generate an invoice
2. Head to Edpay to apply for Shoppers credit, where we assess your eligibility and transfer funds instantly to SKIT for invoice settlement
3. Get 5% off your invoice at checkout.
4. Once Skit receives the payment, arrangements will be made for store pickup or delivery of your order.
5. To access Shopper Credit on Edpay, apply via [www.edubanc.ng.](https://www.edubanc.ng/)
6. Select Edpay and click on SKLD.

At this point you must be elated at the expo I just revealed, right? Here’s the best part!

Stay with me, you would love this.

### Ever heard of a retail store that cares too much about its customers?

Yep! That’s Skit Store. It is that one-stop plug for everything office school and lifestyle.

It has stores seven (7) across Lagos, Abuja and Port Harcourt. and a website [skit.ng](https://skit.ng/) where you can make online orders and have them delivered to your doorstep nationwide.

Skit store has a vast range of trendy back-to-school brands that leaves you spoilt for choice when shopping. These are key players when it comes to affordability in the international markets. I will be listing a few below;

1. Staples
2. Helix
3. Milan
4. Smiggles
5. Schneider
6. Crayola
7. Stanley
8. Pierre Cardin
9. Jansport
10. Primo

Additionally, you can also shop for lifestyle and office supplies with a variety of interesting brands at very affordable prices. Click [here](https://skit.ng/)

I hope you had a good read?

Kindly send an email to chioma.chinweze@skld.ng if you have any questions or reach via phone call on 07048617428.

Do have an amazing shopping experience!`,
      image: "/news/news-6.jpg",
    },
    "flexible-seating-student-engagement": {
      title:
        "Leadership Competence: LASG Opens for Partnership in Education-Commissioner",
      author: "Micheal Emmanuel",
      readTime: "2 min read",
      description: "",
      content: `The Lagos State Ministry of Education has emphasised that education remains a key and critical component of development, thus the need for partnership with all relevant stakeholders in building leadership skills in students.
        
        
[Read More:](https://shadanpamareporters.com/1013-2/)`,
      image: "/news/news-7.jpg",
    },
    "schools-leading-sustainable-furniture": {
      title: "Lagos Harps On Innovative Methods To Transform Education",
      author: "Micheal Emmanuel",
      readTime: "2 min read",
      description: "",
      content: `The Lagos State Government  recently call for innovative methods through which private sector can partner with it to ensure an action plan that will transform the educational sector.

 

[Read here;](https://www.thisdaylive.com/index.php/2023/05/06/lagos-harps-on-innovative-methods-to-transform-education/)`,
      image: "/news/news-8.jpg",
    },
    "transforming-schools-smart-furniture-2": {
      title:
        "Lagos State Seek Additional Partnership for Educational Development",
      author: "MIcheal Emmanuel",
      readTime: "2 min read",
      description: "",
      content: `The Lagos State Government (LASG) has laudably received praise  for always being at the forefront of innovation in the educational sector and encouraged not to relent.

 

[Read More;](https://radionigerialagos.gov.ng/lagos-seeks-additional-partnership-for-educational-development/)`,
      image: "/news/news-9.jpg",
    },
  };

  return (
    blogPosts[slug] || blogPosts["transforming-public-schools-smart-furniture"]
  );
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  const renderer = new marked.Renderer();

  renderer.link = (hrefOrToken: any, title?: any, text?: any) => {
    // Support both old signature (href, title, text) and new marked v5 signature ({ href, title, text, tokens })
    let href: string | null = null;
    let t: string | null = null;
    let tx: string = "";

    if (hrefOrToken && typeof hrefOrToken === "object") {
      href = hrefOrToken.href ?? null;
      t = hrefOrToken.title ?? null;
      // marked v5 may provide text or we can fallback to token.text/title args
      tx =
        hrefOrToken.text ??
        hrefOrToken.tokens
          ?.map((tok: any) => (tok.type === "text" ? tok.raw : ""))
          .join("") ??
        "";
    } else {
      href = hrefOrToken;
      t = title ?? null;
      tx = text ?? "";
    }

    const isExternal = typeof href === "string" && href.startsWith("http");
    const target = isExternal
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
    return `<a href="${href}"${target}${
      t ? ` title="${t}"` : ""
    } class="text-blue-400 hover:text-blue-300 underline">${tx}</a>`;
  };

  marked.setOptions({
    breaks: true,
    gfm: true,
    async: false,
    renderer: renderer,
  });
  const parsedContent = marked.parse(post.content) as string;
  const tableOfContents = ["On the topic", "Why?", "How?", "What?", "When?"];

  const relatedArticles = [
    {
      title:
        "Educating Nigeria's Future: Early Episode of Education Dialogue wit Ayodele Olajiga",
      image: "/news/news-1.png",
      slug: "transforming-public-schools-smart-furniture",
    },
    {
      title:
        "The Envelop Concept: Would it work for the 21st-century young Nigerian adult?",
      image: "/news/news-2.png",
      slug: "new-furniture-wholesome-classroom",
    },
    {
      title:
        "Lagos, CASIO/ SKLD Targets 1,200 Secondary School Teachers for Capacity Building",
      image: "/news/news-5.webp",
      slug: "innovative-learning-spaces-future",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-24 pb-8 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-400 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
              <h1 className="text-4xl lg:text-5xl font-medium mb-6">
                {post.title}
              </h1>
              <p
                className="text-gray-400 text-lg"
                style={{ whiteSpace: "pre-line" }}
              >
                {post.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={500}
                className="w-full aspect-[16/10] object-cover rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content with Sidebars OUTSIDE */}
        <section className="px-6 pb-16">
          <div className="relative flex flex-col lg:flex-row justify-center lg:justify-between">
            {/* Table of Contents - OUTSIDE content width, floats left on large screens */}
            <motion.aside
              className="hidden lg:block w-64 shrink-0 ml-20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-24">
                <h3 className="font-medium mb-4">On this page</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.aside>

            {/* Main Content - perfectly matches image width */}
            {/* <motion.article
              className="max-w-4xl w-full mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: parsedContent }}>
                  <p className="text-gray-400 mb-6" style={{ whiteSpace: 'pre-line' }}>
                    {post.content}
                  </p>
              </div>
            </motion.article> */}
            <motion.article
              className="max-w-4xl w-full mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div
                className="custom-prose max-w-none text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parsedContent }}
              />
            </motion.article>

            {/* Author/ReadTime Sidebar - OUTSIDE content width, floats right on large screens */}
            <motion.aside
              className="hidden lg:block w-64 shrink-0 ml-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-24">
                <h3 className="font-medium mb-4">Article Info</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>

          {/* On mobile, display sidebars stacked under content */}
          <div className="lg:hidden mt-12 space-y-8">
            <aside>
              <h3 className="font-medium mb-4">On this page</h3>
              <nav className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </aside>
            <aside>
              <h3 className="font-medium mb-4">Article Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-3xl font-medium mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Related Articles
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <motion.article
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${article.slug}`} className="block">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={400}
                      height={300}
                      className="w-full aspect-[4/3] object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <p className="text-lg font-medium group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </p>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
