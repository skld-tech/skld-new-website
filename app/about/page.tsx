"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
// import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { TeamModal } from "@/components/team-modal";
import { AboutNavbar } from "@/components/about-navbar";
// import Link from "next/link";
// import { PartnersCarousel } from "@/components/partners-carousel";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  expertise: string;
  funFact: string;
  linkedin?: string;
  website?: string;
}

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [activeSection, setActiveSection] = useState("who-we-are");
  const milestoneIndices = [0, 4, 8, 12, 16, 19, 24, 27, 31, 35, 39]; // Example positions
  const lineCount = 40;

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "who-we-are",
        "our-story",
        "our-team",
        "board-of-directors",
        // "our-partners",
        // "testimonials",
      ];

      const scrollPosition = window.scrollY + 150; // Adjust for better accuracy

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Temilola Adepetun",
      role: "Managing Director",
      image: "/S2.jpg",
      description:
        "Founder and MD/CEO of SKLD Integrated Services Limited, a leading top sourcing company for education, lifestyle, humanitarian and aid supplies in Nigeria, with a presence in six states of the country serving over 500 companies.",
      expertise:
        "She is passionate about learning and development and has been a facilitator of soft skills in entrepreneurship programs. She has served on mentoring Programs over the years mentoring other female entrepreneurs.\nShe started her 14-year career in the Oil and Gas Industry in 1986 during which she worked in various strategic departments such as Economics & Planning, Treasury, Insurance and Human Resources. She resigned in the year 2000 to pioneer the concept of a one-stop back-to-school store in Lagos, with the opening of her first retail store at Onikan on September 9th of the same year. SKLD was launched with 2 members of staff over 20 years ago and currently, it operates 8 business locations across Lagos, Abuja and Port Harcourt as well as liaison offices in Ibadan, Maiduguri and Damaturu. emilola has driven a very innovative and dynamic team towards achieving remarkable growth in her company. SKLD has 6 Retail outlets (with expansion plans for a total of 8 brick-and-mortar stores), an online back-to-school store; a robust wholesale business unit serving over 500 schools nationwide; and a garment production facility employing 93 garment workers and producing over 7,300 garments per month. Marcel Hughes Apparel, SKLD’s flagship uniform brand was launched in 2009 and has gained wide acceptance among hundreds of schools as Nigeria’s leading premium school wear brand. In November 2019, Temilola received the International Women’s Entrepreneurial Challenge Foundation (IWEC) award in India, in recognition of her giant strides on her journey as a successful entrepreneur and for her contribution to empowering women. emilola holds a B.Sc. in Economics from the University of Lagos (1982) and she is an Associate of the Chartered Institute of Insurance, London -A.C.I.I. (1985). She is also an Associate of Women in Management and Business (WIMBIZ) and a Trustee of the Board of Courage Education Foundation, an NGO dedicated to educating indigent children. She is a member of the Garment and Accessories Manufacturers Association of Nigeria.",
      funFact: "Loves gardening and is an avid traveler.",
      linkedin: "https://www.linkedin.com/in/temilola-adepetun-6ab03b38/",
      website: "#",
    },
    {
      name: "Tayo Oyesimi",
      role: "Deputy Managing Director",
      image: "/S9.jpg",
      description:
        "He is a business development expert and management consultant. He started his career with Nextzon Business Services as a Management Trainee Consultant, where he worked as an analyst in the Financial Services and Payments business unit of the company.",
      expertise:
        "During this engagement, he worked as a project team member on Corporate Strategy development projects for major Commercial Banks and Microfinance Banks in Nigeria. He was the implementation project manager for the set-up of Safeline Microfinance Bank (Nigerian Road Safety Cooperative) Abuja. Upon leaving Nextzon Business Services, Tayo worked as a business development executive and Project manager in Reveal Audio and Acoustics Limited, a reputable multimedia engineering Company in Lagos. He also worked as a business development manager for a leading electronic gadget distribution company in Lagos and with his direct involvement secured distribution contracts with major retail stores across Lagos to drive gadget sales volumes. He joined School Kits Limited as Chief Operating Officer in December 2013 for the creation of business strategy and to provide oversight for key business functions, while working with strategic team leads to deliver overall business objectives and return value to shareholders As Chief Operating Officer of School Kits, Tayo oversees a dynamic organization with a core focus on providing educational supplies through wholesale, retail and online channels. He also helped to set up a 100 garment-per-day production facility for the company as a backward integration project towards lowering cost and driving local content. Under his management of operations, the company’s revenue grew by 250% within the first three years. He has cognate and transactional experience in a variety of industries including Garment manufacture, Auto trade, Audio Engineering and Property Development. Tayo holds a Chemical Engineering Degree from Obafemi Awolowo University. In addition to his extensive experience as a Business Development expert, he is a certified Project Management Professional (PMP) from the Project Management Institute. He further holds an Executive Master of Business Administration (MBA) from Quantic School of Business and Technology as well as Lagos Business School.",
      funFact: "Built his first computer at age 12 and still codes for fun.",
      linkedin: "https://www.linkedin.com/in/tayo-osiyemi/",
    },
    {
      name: "Faith Abakada",
      role: "Chief Operating Officer",
      image: "/S7.jpg",
      description:
        "Faith Abakada is an agile and creative thinker with more than 12 years’ experience, within and outside Nigeria, in retail transformation, brand building, and operational excellence, across multiple sectors. Her signature track record of balancing strategic thinking and executional impact with a keen understanding of consumers and the marketplace is noteworthy.",
      expertise:
        "A cross-functional team player, she consistently demonstrates flexibility and agility to solve challenges rapidly and resourcefully, in fast-changing business environments, while prioritizing multiple deliverables. She started her career with Surfdome Ltd UK, a global online retailer of premium brands as a Business Operations Coordinator where she honed her skills of streamlining operational efficiencies across multiple departments. As Retail Planning and Marketing Manager, she successfully expanded Samsung’s store platform by managing the roll-out execution and retail marketing strategies of 200+ Shop-in-Shop outlets pan Nigeria. She successfully provided professional contract services, focusing on business optimization, expansion strategies, retail marketing and operational success, as an Independent Consultant for Krispy Kreme Nigeria and Cars45 Nigeria amongst other small-medium enterprises. Shortly after, Faith joined Farmforte, Nigeria as the Retail Operations Manager, where she created and executed a roadmap to excellence strategy for the retail brand Freshforte. She is currently the Head of Operations of SKLD Integrated Services and is responsible for developing the operational strategy and executing optimization plans for the organisation. Faith holds a B.Eng. in Information and Communication Technology from Covenant University, Nigeria and an M.Sc. in Business Information Technology from Middlesex University, United Kingdom. In addition, she has obtained certifications from the IE Business School in Market Research and Customer Behaviour, Marketing Strategy, and Brand Positioning. Faith enjoys leading teams and imbuing them with a strong sense of business ownership. When she is not at work, she relaxes by watching movies.",
      funFact: "Marathon runner who has completed races on three continents.",
      linkedin: "#",
    },
  ];

  const boardMembers: TeamMember[] = [
    {
      name: "Mr. Michael Olusegun Olukoya",
      role: "Chairman of the Board",
      image: "/board/segun-olukoya.jpg",
      description:
        "He heads the Financial Services and Payments Business division in NEXTZON Business Services, a leading professional services firm in Nigeria. He is responsible for leading teams that assist local, international and regulatory institutions in the financial services sector to articulate business strategies and implement transformational initiatives.",
      expertise:
        "He is also a key member of NEXTZON’s African regional expansion team and has been active in assisting Nigerian banks and insurance companies’ prospects, acquiring and setting up business interests in several African countries including Ghana, The Gambia, Sierra Leone, Liberia, Central African Republic and Angola. Before this role, he was the pioneer Head of Strategy and Portfolio Management in the HEIRS Alliance Group, which was a holding company with interests in several key sectors of the Nigerian economy. At HEIRS Alliance, Segun led several project teams involved in designing and implementing strategic initiatives (including setting up new business ventures, mergers and acquisitions) that resulted in the remarkable growth and transformation of virtually all member companies in the group. He started his professional career in Guaranty Trust Bank Plc as a member of the Corporate Finance Team after which he proceeded to work with Accenture in the Financial Services Market Unit. During his stay with Accenture, he worked on several projects for both local and international financial services institutions in the area of business strategy and process re-engineering. He was also one of the few professionals in the Lagos Office that had the opportunity to work internationally in Germany and The Netherlands. Segun is an associate of the Nigeria Leadership Initiative (A member of the Aspen Global Leadership Network) and also a Member of the global Crans Montana Forum of New Leaders for Tomorrow. He is an independent member of the Management Investment Committee of Kakawa Asset Management Limited and also coordinates the secretariat of the Lagos Angel Network (a network of Angel Investors). Segun facilitates sessions on Strategic Planning for MBA students at the Lagos Business School, is an authorized trainer of the IFC-Global Corporate Governance Forum and is also an active volunteer/ mentor/trainer with FATE Foundation where he covers sessions on the Nigerian Economy, Corporate Strategy/Business Planning and Personal Financial Management. He is also a member of the executive committee of the King’s College Old Boys Association (KCOBA) where he is responsible for leading mentoring and venture capital initiatives.",
      funFact: "Published author of three books on African education systems.",
      linkedin: "https://www.linkedin.com/in/olusegun-olukoya-6b440321/",
    },
    {
      name: "Temilola Adepetun",
      role: "Executive Director & MD",
      image: "/S2.jpg",
      description:
        "Founder and MD/CEO of SKLD Integrated Services Limited, a leading top sourcing company for education, lifestyle, humanitarian and aid supplies in Nigeria, with a presence in six states of the country serving over 500 companies.",
      expertise:
        "She is passionate about learning and development and has been a facilitator of soft skills in entrepreneurship programs. She has served on mentoring Programs over the years mentoring other female entrepreneurs.\nShe started her 14-year career in the Oil and Gas Industry in 1986 during which she worked in various strategic departments such as Economics & Planning, Treasury, Insurance and Human Resources. She resigned in the year 2000 to pioneer the concept of a one-stop back-to-school store in Lagos, with the opening of her first retail store at Onikan on September 9th of the same year. SKLD was launched with 2 members of staff over 20 years ago and currently, it operates 8 business locations across Lagos, Abuja and Port Harcourt as well as liaison offices in Ibadan, Maiduguri and Damaturu. emilola has driven a very innovative and dynamic team towards achieving remarkable growth in her company. SKLD has 6 Retail outlets (with expansion plans for a total of 8 brick-and-mortar stores), an online back-to-school store; a robust wholesale business unit serving over 500 schools nationwide; and a garment production facility employing 93 garment workers and producing over 7,300 garments per month. Marcel Hughes Apparel, SKLD’s flagship uniform brand was launched in 2009 and has gained wide acceptance among hundreds of schools as Nigeria’s leading premium school wear brand. In November 2019, Temilola received the International Women’s Entrepreneurial Challenge Foundation (IWEC) award in India, in recognition of her giant strides on her journey as a successful entrepreneur and for her contribution to empowering women. emilola holds a B.Sc. in Economics from the University of Lagos (1982) and she is an Associate of the Chartered Institute of Insurance, London -A.C.I.I. (1985). She is also an Associate of Women in Management and Business (WIMBIZ) and a Trustee of the Board of Courage Education Foundation, an NGO dedicated to educating indigent children. She is a member of the Garment and Accessories Manufacturers Association of Nigeria.",
      funFact: "Loves gardening and is an avid traveler.",
      linkedin: "https://www.linkedin.com/in/temilola-adepetun-6ab03b38/",
    },
    {
      name: "Miss Aramide Abe",
      role: "Director",
      image: "/board/aramide-abe.jpg",
      description:
        "A British-Nigerian woman on a mission to influence the private sector in emerging economies and boost their macroeconomic development through entrepreneurship and job creation.",
      expertise:
        "She lives and works in Europe, managing a €7.5m multi-donor fund to invest in and strengthen entrepreneurship in Africa, specifically in Climate Adaptation, working with a global multilateral development bank. She does this through establishing strategic partnerships, mobilising funding and working with African governments to improve legal and regulatory frameworks for enabling business environments. While in Africa, the entrepreneur platform (Naija Startups) she co-founded in 2016 has scaled rapidly to a 95,000-member hub for SMEs and is impacting thousands of entrepreneurs in the areas of investment readiness, access to opportunities, capacity-building and programs. Trained as a computer scientist, Aramide has a 15 year background in technology, marketing and strategy. She has an MBA from INSEAD, (France & Singapore) where she specialised in entrepreneurial strategies for emerging markets. Post-MBA, she notably led the strategy implementation of a multi-million dollar program for a pan-African financial services organisation (ETI-Ecobank Group), across its 36 countries in Africa. She is a recipient of the Investing in Women UK ‘Wonder Woman Award’ for the ‘Woman in Tech’ category in 2019. She was named one of the 100 most inspiring women in an African country in 2018 by Leading Ladies Africa and The Guardian. She is an ambassador of the Cherie Blair mentorship programme and mentors with Google LaunchPad and Microsoft, where she has directly coached hundreds of young entrepreneurs. She was named one of the most influential African millennials by MiPAD in 2020. As a key influencer in the African SME ecosystem, Aramide serves on the United Nations committee on private sector development for Africa on regional integration, trade and the digital economy. She also consults on the committee on policy development for the AfCFTA country business index with UNECA. She serves on the advisory boards of InaTiDe Limited, a clean energy social enterprise and StartUpAfrica, a non-profit in Wilmington, Delaware. Aramide is bilingual -an English & French speaker, and is passionate about connecting and convening young global leaders to access growth opportunities, and designing programs which lead to macroeconomic impact.",
      funFact: "Designed the first solar-powered school in rural Nigeria.",
      linkedin:
        "https://www.linkedin.com/in/aramide/?trk=author_mini-profile_title&originalSubdomain=uk",
    },
    {
      name: "Dr. Damola Adepetun",
      role: "Non-Executive Director",
      image: "/board/damola-adepetun.jpg",
      description:
        "A highly sought-after specialist in the Audio Visual industry with expertise in Audio-Visual Production, Post-production, Music Production and Sound Design for TV/Film & Music Industries.",
      expertise:
        "He graduated from the University of Lagos, College of Medicine and continued at the London School of Hygiene and Tropical Medicine obtaining an MSc in Clinical Tropical Medicine. Dr. Adepetun is a trained physician. After setting up and running a clinic in Lagos, he switched to digital music production, when a chance encounter led him to transform his interest in computer digital equipment into a full-fledged sound production agency. Driven by a passion for the media industry, he forayed into the audio-visual production and sound design space by establishing Midi-tone Limited in 1987. The company has since become a major player in video and audio production delivering over 7000 radio jingles/commercials in different Nigerian languages for local and international audiences. Dr. Adepetun also founded two other companies within the Media industry. He launched Midi-Vision Limited in 1996 and Cue Media in 2006 to explore different business opportunities in the industry. Over the last 2 decades, the companies have delivered commercials for top Nigerian global brands as well as musical scoring for blockbusters like “The Wedding Party 1 & 2”. Bayo’s core competencies include Documentary and TV Commercial Production, Recording Studio Consultancy, Music/TV Production and Post-Production. Away from professional circles, Dr. B expresses his passion for sound design and music in a jazz band called Survival. He still plays an active role in medicine through medical outreach programs and healthcare policy advisory to state governments. Dr. Adepetun is passionate about computer technology and helping the youth harness it for better sound design. He now has his sights on VR and would love to work with young enthusiasts to deliver new sound experiences. He is a co-pioneering Director of SKLD Integrated Services Limited ",
      funFact: "Speaks seven languages and has lectured on five continents.",
      linkedin: "https://www.linkedin.com/in/bayo-adepetun/",
    },
    {
      name: "Mr. Obinna Ukachukwu",
      role: "Non-Executive Director",
      image: "/board/obinna-ukachukwu.jpg",
      description:
        "A business growth expert and thought leader, with keen interest in development finance and tech venture building.",
      expertise:
        "He has led significant strategic investments in tech businesses that aim to tackle problems in various impact areas, including health, education, energy, and entertainment. He is an action-oriented business leader dedicated to playing a critical role in achieving high quality and sustainable health systems in sub-Saharan Africa through financing, defragmentation, and technological innovations. His goal is to awaken the local capital in Sub-Saharan Africa, allowing the region to generate funding for its sustenance and become less dependent on external aid. The education and health sectors are seen by private-sector financial institutions as fragile with recognizable ethical issues when it comes to loan recovery. However, Obinna has redefined what it means to finance these vital sectors by developing and implementing viable business models that stimulate financing, an achievement that has triggered interest and active participation from other notable players in the industry. Obinna’s invaluable contributions include galvanizing stakeholders to provide quality drugs at significantly lower prices in public hospitals and transforming the health care logistics framework to serve persons in hard-to-reach areas. He is currently championing a massive investment drive as he seeks to solve for Nigeria’s emergency care services, general capacity building in the health sector, and is working with key partners to actively bring down the cost of quality pharmaceuticals, making them even more accessible. In addition to addressing education financing concerns with the development of 0% interest loans, Obinna is leading the transformation of Nigeria’s public higher education institutions into digital educational institutions that provide hybrid and specialized education. Because of the support by private sector entities and impact institutions like the Sterling One Foundation, this transformation comes at no cost to the public institutions. Obinna’s career includes leadership positions in top organizations such as Sterling Bank Plc, Advans Micro Finance Network, Stanbic IBTC, Hygeia HMO and He sits on the board of several organizations. Obinna has his background in Electrical Electronic Engineering, but he soon veered into finance few years after graduating from the University. He is currently a Fellow of the Chartered Institute of Management Accountants (UK), He is also a Chartered Global Management Accountant and has an MBA from The University of Manchester Business School. He is blessed with a beautiful family and draws motivation from the fact that dreams and values are eternal even though life itself is finite.",
      funFact: "Mentored over 100 young entrepreneurs across Africa.",
      linkedin: "https://www.linkedin.com/in/oukachukwu/?originalSubdomain=ng",
    },
    {
      name: "Mr Tayo Osiyemi",
      role: "Executive Director & DMD",
      image: "/board/osiyemi.jpg",
      description:
        "A management and business development enthusiast. He started his career with Nextzon Business Services as a Management Trainee Consultant, where he worked as an analyst in the Financial Services and Payments business unit of the company.",
      expertise:
        "During this engagement, he worked as a project team member on Corporate Strategy development projects for major Commercial Banks and Microfinance Banks in Nigeria. He was the implementation project manager for the set-up of Safeline Microfinance Bank (Nigerian Road Safety Cooperative) in Abuja. Upon leaving Nextzon Business Services, Tayo worked as a business development executive and Project manager in Reveal Audio and Acoustics Limited (now Showgear Limited), a reputable multimedia engineering Company in Lagos. He also worked as a business development manager for a leading electronic gadget distribution company in Lagos for which his direct involvement secured distribution contracts with major retail stores across Lagos to drive gadget sales volumes. He joined School Kits Limited as Chief Operating Officer in December 2013 for the creation of business strategy and to provide oversight for key business functions, while working with strategic team leads to deliver overall business objectives and return value to shareholders As Chief Operating Officer of School Kits, Tayo oversees a dynamic organization with a core focus on providing educational supplies through wholesale, retail and online channels. He also helped to set up a 100 garment-per-day production facility for the company as a backward integration project towards lowering cost and driving local content. Under his management of operations, the company’s revenue grew by 250% within the first three years. He has cognate and transactional experience in a variety of industries including Garment manufacture, Auto trade, Audio Engineering and Property Development. Tayo holds a Chemical Engineering Degree from Obafemi Awolowo University. In addition to his extensive experience as a Business Development expert, he is a certified Project Management Professional (PMP) from the Project Management Institute. He further holds an Executive Master of Business Administration (MBA) from Quantic School of Business and Technology as well as Lagos Business School.",
      funFact: "Holds 12 patents in educational technology solutions.",
      linkedin: "https://www.linkedin.com/in/tayo-osiyemi/",
    },
    {
      name: "Tokunboh Ishmael of Alitheia Capital Limited",
      role: "Non-Executive Director",
      image: "/board/tokunboh-ishmael.jpg",
      description:
        "Tokunboh Ishmael is an accomplished and experienced private equity investor. She is MD and co-founder of Alitheia Capital – a Nigerian-based investment management and advisory business channeling private equity investments to transform businesses in West Africa where funding gaps create unique opportunities.",
      expertise:
        "In 2015, she co-founded Alitheia IDF (www.alitheiaidf.com) to scale investing across Sub-Saharan women-led SMEs. Tokunboh is a CFA Charterholder, corporate financier and M&A banker historically having worked on over $5.6 billion in M&A deals across the US, UK and Africa. Exceptionally experienced in the energy, oil, gas, technology and financial services sectors, she is now focused on helping to invest and build sustainable SME growth businesses across attractive, consumer-led sectors including Agribusiness, Financial Services, Healthcare & Pharma, Infrastructure, Transport, Retail and Tech/ Telecoms mainly on behalf of discerning institutions, development organisations and corporates looking for a mix of responsible investing, economic impact and social responsibility. Tokunboh is a Yale World Fellow, and a member of the inaugural class of the Aspen Institute’s Finance Leaders Fellowship. She sits on several boards and is the current chair of the African Private Equity and Venture Capital Association (AVCA). Her previous roles include Managing Director of Avante Capital Ltd where she led the first secondary listing of a Nigerian company on the Johannesburg Stock Exchange. Prior to Avante, she was the Nigeria Country Partner for Aureos Capital where she successfully raised funding to complete a US$50mn fundraising exercise for the Aureos West Africa Fund. Founded in 2007 by Tokunboh Ishmael and Jumoke Akinwunmi, Alitheia is a pioneering impact investing private equity firm based in Lagos State, Nigeria. They drive innovation by investing in businesses that use traditional and non-traditional channels to achieve social impact. Alitheia provides financial and non-financial support to unlock the value of high potential businesses that address the needs of underserved markets and the growing consumer segment. At the same time, represent truth and integrity in wealth creation for our investor market as well as create partnerships, relationships and networks that are leveraged for sourcing investable pipelines and co-investment opportunities. They are well regarded and respected as one of the few impact investing fund managers in West Africa. The Principals and Team members have a good reputation within the local and global investment industry and are active in several associations including AVCA, ANDE, 2X Challenge, and LAN.",
      funFact: "Holds 12 patents in educational technology solutions.",
      linkedin: "https://www.linkedin.com/company/alitheia-capital/",
    },
    // {
    //   name: "Mr Moyo Babalola",
    //   role: "Non-Executive Director",
    //   image: "/board/moyo-babalola.jpg",
    //   description:
    //     "Mr Moyo Babalola is an experienced investment professional with over 15 years of cumulative experience in private equity, management consulting and investment banking. He is a Partner at Alitheia Capital, a leading impact investing private equity firm based in Lagos, Nigeria.",
    //   expertise:
    //     "Expertise in private equity, management consulting and investment banking. My current role focuses on managing a private equity portfolio of growth companies and deploying private debt capital to small and medium enterprises in emerging and frontier markets. Our team's approach to strategic investments has advanced Alitheia's reputation as one of the leading private equity firms in Africa.",
    //   funFact: "",
    //   linkedin: "https://www.linkedin.com/in/moyo-babalola-b072ba2a7/",
    // },
  ];

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section
          id="who-we-are"
          className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        >
          {/* Background image with fade effect */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about/about-bg.jpg"
              alt="SKLD Office"
              fill
              priority
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div> */}
          </div>

          {/* Main Content */}
          <div className="relative z-10 px-6 pb-20 pt-24">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h1
                className="text-5xl lg:text-6xl font-medium mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Building Africa&apos;s Future,
                <br />
                One Solution At A Time
              </motion.h1>
              <motion.p
                className="font text-white font-bold text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                At SKLD our work goes beyond products — we're building
                sustainable supply chains, supporting communities, and creating
                long-term value for our partners.
              </motion.p>
            </div>

            {/* Mission & Vision Section - Now inside hero */}
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 sub-navbar-bg border border-gray-700 bg-black/80 backdrop-blur-sm"
                >
                  <h2 className="text-3xl font-medium mb-4">Mission</h2>
                  <p className="text-gray-300">
                    Making the most of our competencies while improving lives.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-8 sub-navbar-bg border border-gray-700 bg-black/80 backdrop-blur-sm"
                >
                  <h2 className="text-3xl font-medium mb-4">Vision</h2>
                  <p className="text-gray-300">
                    To be the preferred trading and manufacturing company in the
                    Middle East and Africa (MEA), providing innovative products
                    and services across multi-sectors by 2030.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          id="who-we-are"
          className="relative pt-24 pb-20 px-6 overflow-hidden min-h-[75vh] flex items-end"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/about/about-bg.jpg"
              alt="SKLD Office"
              fill
              priority
              className="w-full h-full object-cover"
            />  
           </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center w-full pb-8">
            <motion.h1
              className="text-5xl lg:text-6xl font-medium mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building Africa&apos;s Future,
              <br />
              One Solution At A Time
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At SKLD our work goes beyond products — we're building sustainable
              supply chains, supporting communities, and creating long-term
              value for our partners.
            </motion.p>
          </div>
        </section> */}
        {/* Mission & Vision - Touching bottom of hero section */}
        {/* <section className="relative px-6 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-8 sub-navbar-bg border border-gray-700 bg-black/80"
              >
                <h2 className="text-3xl font-medium mb-4">Mission</h2>
                <p className="text-gray-300">
                  Making the most of our competencies while improving lives.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-8 sub-navbar-bg border border-gray-700 bg-black/80"
              >
                <h2 className="text-3xl font-medium mb-4">Vision</h2>
                <p className="text-gray-300">
                  To be the preferred trading and manufacturing company in the
                  Middle East and Africa (MEA), providing innovative products
                  and services across multi-sectors by 2030.
                </p>
              </motion.div>
            </div>
          </div>
        </section> */}
        {/* Empowering Education Section */}
        <section className="pt-16 px-6 snap-start" id="our-story">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-medium mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Empowering Education
              <br />
              Through Innovation, Quality
              <br />& Reliability
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <Image
                  src="/about-us.jpg"
                  alt="Students in classroom"
                  width={600}
                  height={700}
                  className="w-full h-3/4 object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full flex flex-col"
              >
                <p className="text-gray-400 mb-6">
                  Established in 2000, we began as a single-source destination
                  for back-to-school supplies in Lagos, Nigeria. Over two
                  decades of unwavering commitment to delivering exceptional
                  value, we have expanded our retail network into the largest in
                  the country for all things back-to-school shopping. In
                  addition to educational supplies, we now offer a comprehensive
                  range of office and lifestyle products through multiple
                  channels including contracts, wholesale, retail, and online.
                </p>
                <p className="text-gray-400">
                  With the inclusion of office and lifestyle products, Skit
                  Store has evolved into a one-stop-shop not only for parents
                  but also professionals, college students, and anyone seeking a
                  diverse selection of office supplies, gadgets, travel gear,
                  fitness equipment, sleepwear, and personalized items.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Timeline Section - evenly spaced and responsive */}
        <section className="pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-50">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-medium">
                  We are not just suppliers
                  <br />
                  —we are builders of futures.
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-400">
                  What started as a dream to provide better learning
                  environments for Nigerian students has grown into a
                  multi-sectoral company impacting education, Humanitarian aid,
                  corporate, manufacturing and retail across MEA.
                </p>
              </motion.div>
            </div>

            <div className="mb-12 hidden md:block">
              <motion.div
                className="relative mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative h-10 mb-8">
                  {Array.from({ length: lineCount }).map((_, index) => (
                    <motion.div
                      key={index}
                      className={`absolute top-0 w-0.5 h-full ${
                        milestoneIndices.includes(index)
                          ? "bg-blue-600"
                          : "bg-gray-400"
                      }`}
                      style={{ left: `${(index / (lineCount - 1)) * 100}%` }}
                      whileHover={{
                        scaleY: 1.8,
                        backgroundColor: milestoneIndices.includes(index)
                          ? "#2563eb"
                          : "#6b7280",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}

                  {/* Milestones - always visible, larger on hover */}
                  <motion.div
                    className="absolute -top-20 left-0 text-left text-xl max-w-[100px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2000</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      First retail store in Onikan
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-20 left-[10%] text-center transform -translate-x-1/2 text-xl max-w-[120px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2002-2007</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Retail store launch in Ikeja and Victoria Island
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -top-20 left-[20%] text-center transform -translate-x-1/2 text-xl max-w-[130px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2008</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Opened 3rd retail outlet in Ikota, VGC/Ajah
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-30 left-[30%] text-center transform -translate-x-1/2 text-xl max-w-[120px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2009-2010</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Launch of Marcel Hughes uniforms, shoes and accessories.
                      Established HQ in Yaba.
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -top-20 left-[40%] text-center transform -translate-x-1/2 text-xl max-w-[120px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2012</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Abuja retail store launch
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-25 left-[50%] text-center transform -translate-x-1/2 text-xl max-w-[140px] mt-8 cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2015</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Lekki retail store launch. Launched E-commerce platform.
                      Commissioned Board of Directors.
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -top-30 left-[60%] text-center transform -translate-x-1/2 text-xl max-w-[120px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2016</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Commissioned Magodo Production facility. Magodo retail
                      store launch. V.I store shutdown.
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-38 left-[70%] text-center transform -translate-x-1/2 text-xl max-w-[120px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2018-2019</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Launched 1000sqm warehouse facility and 300sqm Production
                      facility. Surulere store launch. Partnership with Casio
                      and Qualatex.
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -top-35 left-[80%] text-center transform -translate-x-1/2 text-xl max-w-[120px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2020</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Business name change from School Kits Limited to SKLD
                      Integrated Services Limited. Changed School Kits shop to
                      Skit Stores.
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-25 left-[90%] text-center transform -translate-x-1/2 text-xl max-w-[120px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2021-2022</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Launch 3 retail stores in Lagos Surulere, Abuja Gwarimpa
                      and Port-harcourt
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute -top-45 right-0 text-right text-xl max-w-[120px] cursor-pointer group"
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <span className="font-semibold text-white">2023-2024</span>
                    <p className="text-xs text-gray-300 break-words whitespace-pre-wrap mt-1">
                      Launched Corporate Sales business unit. ISO 9001:2015
                      certification. Secured 1B Naira PO. Maiden Educational
                      supplies showcase event. Launch of Casio fx-9910NG
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="flex justify-end mt-48">
              <motion.button
                onClick={() => setShowHistory(!showHistory)}
                className="px-6 py-3 border-2 border-gray-600 text-white hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showHistory ? "Show Less" : "Show More"}
              </motion.button>
            </div>
          </div>
        </section>
        {/* Company History Section - Conditionally rendered */}
        <AnimatePresence>
          {showHistory && (
            <motion.section
              className="px-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="max-w-7xl mx-auto">
                {/* <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-medium mb-4">Company History</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Our company began with a simple vision: to bridge the gap between quality supplies and the
                    communities that need them most. What started as a modest family-owned venture quickly grew into a
                    trusted name in the sourcing and distribution of educational materials.
                  </p>
                </motion.div> */}

                <motion.div
                  className="bg-gray-950 p-8 border border-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-4 text-white leading-relaxed">
                    <h2 className="text-xl font-medium">Company History</h2>
                    <p>
                      Our company began with a simple vision: to bridge the gap
                      between quality supplies and the communities that need
                      them most. What started as a modest family-owned venture
                      quickly grew into a trusted name in the sourcing and
                      distribution of educational materials. In those early
                      years, we focused on building strong relationships with
                      local schools and institutions, earning a reputation for
                      reliability and consistency.
                    </p>
                    <p>
                      As demand increased, so did our ambition. By the early
                      2000s, we had expanded into retail and diversified our
                      offerings beyond education. Our portfolio began to include
                      lifestyle products, corporate essentials, and tailored
                      solutions for a wide range of clients. This growth was
                      fueled by our commitment to innovation, as we invested in
                      technology, logistics, and customer experience.
                    </p>
                    <p>
                      The next stage of our journey saw us take a bold step into
                      manufacturing. Recognizing the need for sustainable and
                      locally produced goods, we built a facility that allowed
                      us to control quality at every stage. This move not only
                      strengthened our supply chain but also created jobs and
                      opportunities within our community, reinforcing our
                      mission to deliver impact as well as value.
                    </p>
                    <p>
                      Our history would not be complete without highlighting our
                      work in the humanitarian space. Partnering with aid
                      agencies and government bodies, we became a vital part of
                      emergency response and large-scale distribution efforts.
                      From educational supplies to relief materials, our team
                      proved that efficiency and compassion could go hand in
                      hand.
                    </p>
                    <p>
                      Today, we stand as a leading sourcing company with a
                      presence across multiple sectors. While our operations
                      have evolved, our core values remain unchanged: a
                      dedication to excellence, a spirit of innovation, and a
                      genuine commitment to the people we serve. The journey
                      continues, and each chapter strengthens our belief that
                      business can be both impactful and transformative.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
        {/* The People Behind the Excellence */}
        <section id="our-team" className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-medium mb-4">
                The People Behind the Excellence
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                At SKLD, we believe that great results are built with great
                people. Our team brings together diverse expertise, innovative
                thinking, and a shared commitment to delivering value to our
                clients.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(member)}
                >
                  <div className="relative overflow-hidden bg-gray-900">
                    {/* Main image - always visible */}
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full aspect-[3/4] object-cover"
                    />

                    {/* Hover overlay with new design */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col">
                      {/* Small profile image in top left */}
                      <div className="w-16 h-16 overflow-hidden mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name and role */}
                      <div className="mb-4">
                        <h3 className="text-lg font-medium text-white">
                          {member.name}
                        </h3>
                        <p className="text-gray-300 text-sm">{member.role}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">
                        {member.description}
                      </p>

                      {/* Plus icon in bottom right */}
                      <div className="flex justify-end mt-4">
                        <motion.div
                          className="w-8 h-8 bg-white flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus className="w-4 h-4 text-black" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="board-of-directors" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-medium mb-4">
                Guiding SKLD
                <br />
                Towards a Future of Excellence
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our Board of Directors brings together industry leaders,
                strategic thinkers, and seasoned professionals who ensure SKLD's
                mission and vision are achieved. They provide governance,
                strategic oversight, and the wisdom that drives our continued
                success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(member)}
                >
                  <div className="relative overflow-hidden bg-gray-900">
                    {/* Main image - always visible */}
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full aspect-[3/4] object-cover"
                    />

                    {/* Hover overlay with new design */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 p-6 flex flex-col">
                      {/* Small profile image in top left */}
                      <div className="w-16 h-16 overflow-hidden mb-4">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name and role */}
                      <div className="mb-4">
                        <h3 className="text-lg font-medium text-white">
                          {member.name}
                        </h3>
                        <p className="text-gray-300 text-sm">{member.role}</p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed flex-1">
                        {member.description}
                      </p>

                      {/* Plus icon in bottom right */}
                      <div className="flex justify-end mt-4">
                        <motion.div
                          className="w-8 h-8 bg-white flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Plus className="w-4 h-4 text-black" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Our Partners Section */}
        {/* <PartnersCarousel /> */}

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-medium mb-6">
                Real Results.
                <br />
                Proven Impact.
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                We collaborate with top institutions, government agencies, and
                private organizations to deliver lasting impact in education,
                infrastructure, and garment production.
              </p>
            </motion.div>

            
          </div>
        </section> */}
      </main>
      <AboutNavbar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <Footer />

      <TeamModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

