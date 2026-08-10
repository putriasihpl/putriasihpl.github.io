/**
 * ============================================================================
 *  PORTFOLIO CONTENT — EDIT THIS FILE ONLY
 * ============================================================================
 *  Semua teks yang tampil di portofolio (profil, pengalaman, project, skill,
 *  pendidikan, sertifikasi, organisasi) disimpan di sini sebagai data.
 *  index.html dan js/main.js TIDAK perlu diubah untuk update konten biasa.
 *
 *  Cara nambah project baru:
 *    1. Copy salah satu object di dalam array `projects` di bawah.
 *    2. Ganti isinya, taruh di urutan paling atas (paling baru).
 *    3. Simpan file ini, refresh browser / push ke GitHub.
 *
 *  Cara nambah pengalaman kerja baru: sama, tapi di array `experience`.
 * ============================================================================
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Putri Asih Puji Lestari",
    title: "Data Analyst",
    tagline: "Business Intelligence & Dashboard Development",
    location: "Jakarta, Indonesia",
    email: "putriasihpujilestari@gmail.com",
    phone: "082242994021",
    phoneHref: "+6282242994021",
    // Dipakai untuk badge kecil di atas heading di Hero.
    badge: "Turning Data Into Insight",
    // Heading besar (H1) di Hero — kalimat value-proposition, bukan nama (nama tampil di bawah foto).
    headline: "Business intelligence and data analytics portfolio.",
    // TODO: ganti "#" dengan URL asli akun kamu.
    links: {
      linkedin: "https://www.linkedin.com/in/putriasihpl/",
      github: "#",
      portfolioShowcase:
        "https://mavenshowcase.com/profile/28e1c350-3071-70a0-1f5d-bceab872004f",
    },
    // Taruh file CV kamu di folder assets/ dengan nama ini agar tombol "Download CV" berfungsi.
    resumeFile: "assets/Putri_Asih_Puji_Lestari_Resume.pdf",
    // Satu kalimat pendek yang tampil di Hero, di bawah nama.
    heroLine:
      "I build dashboards, automate reporting, and turn messy data into decisions executives actually act on.",
    summary:
      "Mid–Senior Data Analyst professional based in Jakarta, Indonesia, with expertise in transforming complex data into objective, data-driven insights that empower executive decision-making. Skilled in data analytics, dashboard development, reporting automation, and business intelligence using SQL, Power BI, Tableau, Looker, Excel, and Python to deliver actionable recommendations aligned with business objectives.",
    // Dipakai di section About — sengaja beda dari `summary` di atas (yang dipakai di Hero)
    // supaya orang yang scroll lewat Hero tetap dapat informasi baru, bukan kalimat yang diulang.
    about:
      "Most of Putri's work starts with a workflow that's quietly broken — a monthly report that takes 15 days to prepare, a manual allocation process eating 30 minutes every morning — and ends with that workflow redesigned, not just visualized. That process-first lens turned a routine Power BI migration at PT Jasa Angkasa Semesta into a 66% cut in reporting time, and a DMAIC-based collection strategy at Astra Welab into a 50% uplift in repayment rates. She's carried that lens across airport operations, fintech, FMCG, and retail, and now mentors aspiring analysts at Dealls on building the same habit.",
  },

  // Angka ringkasan yang tampil sebagai "stat tiles" di bagian About.
  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "15+", label: "Dashboards Managed" },
    { value: "66%", label: "Faster Monthly Reporting" },
    { value: "500+", label: "Portfolios Automated / Cycle" },
  ],

  experience: [
    {
      role: "Data Analyst",
      company: "PT Jasa Angkasa Semesta",
      location: "Soekarno Hatta Airport",
      period: "Oct 2025 – Present",
      current: true,
      bullets: [
        "Led cross department dashboard development using Power BI and project management for migration and redevelopment initiatives in the Microsoft Fabric environment, prioritising workload and steering change management activities to ensure seamless rollout, delivering high impact data visualisation for executive decision making.",
        "Implemented process improvement and problem solving techniques to cut Operational Monthly Report preparation time by 66% (from 15 to 5 days), significantly enhancing data reporting efficiency by rebuilding data models and conducting data literacy workshops, resulting in increased stakeholder adoption and improved decision-making quality.",
        "Developed Google Apps Script-based operational input systems in Google Sheets, leveraging advanced spreadsheet logic and automation to streamline data entry and validation workflows.",
        "Managed and maintained 15 operational dashboards covering Cargo Handling, Ground Handling, SLA Airlines, Company Product Services, GSE Serviceability and Weekly or Monthly performance reports, communicating findings and delivering presentations to key stakeholders to drive data driven decisions.",
        "Authored comprehensive technical documentation and user guides for the Microsoft Fabric dashboard migration, streamlining onboarding for cross-functional teams.",
        "Implemented robust data quality protocols for manual reporting workflows, consolidating regional inputs into a centralized repository while performing rigorous data type verification to prevent transformation failures.",
        "Proactively adapted to evolving technical requirements by cleansing and transforming complex datasets during system migrations, ensuring data integrity and validation throughout the transition to new cloud-based environments.",
        "Integrated AI-powered summaries into monthly performance dashboards to synthesize complex KPI data from Ground and Cargo Handling, enabling rapid, data-backed decision making for senior leadership.",
      ],
    },
    {
      role: "Analytics Specialist | Corporate Account Management",
      company: "Astra Welab Digital Arta",
      location: "Jakarta Selatan",
      period: "Feb 2025 – Sep 2025",
      bullets: [
        "Designed and engineered operational and executive dashboards using SQL, performing data analysis and data visualisation to deliver actionable insights, thereby developing robust dashboard solutions.",
        "Built Python-based automation for daily desk collection task assignments.",
        "Created automated data integration workflows from BigQuery to Google Spreadsheet.",
        "Developed and executed recurring monthly strategies prioritized by specific data requirements and management decisions to optimize account management and business performance.",
        "Facilitated direct stakeholder management by presenting field reports and performance metrics to executive leadership, translating complex business needs into actionable data driven initiatives.",
        "Executed high-impact customer profiling analysis that provided a comprehensive overview of customer data, enabling leadership to prioritize key segments and accelerate strategic initiative implementation.",
        "Collaborated with cross functional teams to identify business requirements and communicate data driven solutions that addressed specific operational bottlenecks.",
        "Analyzed complex customer behavior patterns and created predictive profiles to forecast payment timelines, directly informing strategic business decisions and risk management.",
        "Managed external vendor relationships for a WhatsApp Blast application, overseeing budget allocation, coordinating meetings, and facilitating direct communication with vendor PICs to ensure seamless service delivery and alignment with business requirements.",
      ],
    },
    {
      role: "Super Mentor Data Analyst & Business Intelligence",
      company: "Dealls",
      location: "Remote",
      period: "Nov 2024 – Jan 2026",
      bullets: [
        "Mentored aspiring data professionals by providing personalized guidance.",
        "Designed structured learning roadmaps and recommended practical resources.",
      ],
    },
    {
      role: "Business Intelligence Developer",
      company: "Dimensi Dua Dinamika",
      location: "Jakarta Selatan",
      period: "May 2024 – Nov 2024",
      bullets: [
        "Supported the data engineering of an end to end LSP system, architecting database solutions and establishing data integrity controls and quality assessment processes.",
        "Explored, evaluated, and analyzed various BI and IT solutions.",
        "Performed data cleaning, transformation, and visualisation, implementing data quality assessment and integrity checks to guarantee reliable outputs for Tableau and Sisense dashboards.",
        "Contributed to solution architecture by designing the data flow and integration layer for the LSP system, aligning technical components with business requirements.",
        "Supported the development, evaluation, and ongoing dataset maintenance for multiple operational systems, ensuring high standards of data consistency, completeness, and accuracy.",
        "Developed and enforced data governance documentation and standardized workflows to ensure compliance with company and regulatory requirements across all data management activities.",
      ],
    },
    {
      role: "Area Data Analyst",
      company: "Danone Indonesia (Waters)",
      location: "Purwokerto",
      period: "August 2023 – Feb 2024",
      bullets: [
        "Contributed to data-driven strategies that resulted in a 10% increase in customer retention.",
        "Created and implemented multiple dashboard development projects including KPI Dashboard, Volume Waters Performance, and Active and Register Outlet Monitoring, delivering data visualisation that provided real-time insights to management.",
        "Leveraged Excel with Power Query to consolidate, transform, and validate regional operational datasets, streamlining data preparation for dashboard reporting and ad-hoc analysis.",
        "Collaborated closely with the Area Sales Manager to monitor and support the Sales team's performance across the Central Java region, using data insights to guide field strategy and outlet coverage.",
        "Coordinated with the Distributor Manager during dashboard development to improve data validation and ensure the accuracy and reliability of reported figures.",
      ],
    },
    {
      role: "Data Scientist",
      company: "PT Erajaya Swasembada",
      location: "Jakarta, Indonesia",
      period: "Feb 2023 – Jun 2023",
      bullets: [
        "Performed comprehensive competitor analysis to navigate intense market competition in pop-up and email marketing campaigns, leveraging market trends and competitor strategies to drive more effective campaign execution.",
        "Conducted A/B testing and analyzed customer data from iBox, JD Sport, and Eraspace to increase customer engagement and optimize marketing performance.",
        "Improved the Online to Offline (O2O) Monitoring dashboard for Erajaya using Looker, pulling data from Salesforce to track the customer journey from ad impressions to conversion.",
        "Identified customers who completed offline purchases as a result of website advertising, enabling real-time performance tracking and providing valuable insights for strategic decision-making.",
        "Gained foundational Marketing expertise as part of the role, while also being a member of the CRO (Conversion Rate Optimization) team.",
      ],
    },
  ],

  // Project paling baru ditaruh paling atas.
  // `category` harus salah satu dari: "Dashboard", "Research Analyst", "Automation & Data Engineering".
  projects: [
    {
      title: "Operational Monthly Report Dashboard",
      org: "PT Jasa Angkasa Semesta",
      date: "June 2026",
      category: "Dashboard",
      description:
        "Developed a centralized Power BI reporting platform consolidating operational performance across Ground Handling and Cargo Handling business units, covering KPIs for each respective line of business, and reducing monthly report preparation time to the BOD by 66% (from 15 days to 5 days). Integrated company-wide KPIs and executive reporting requirements to support monthly reviews by Business Unit leaders, BOD, and the Holding Company. Enhanced the dashboard with AI-powered analytics that transform operational data into strategic business insights, enabling faster performance evaluation and data-driven decision-making across management levels.",
      tags: ["Power BI", "Microsoft Fabric", "DAX", "Executive Reporting"],
      link: "",
    },
    {
      title: "Customer Profiling & Collection Strategy Optimization",
      org: "Astra Welab Digital Arta",
      date: "March 2026",
      category: "Research Analyst",
      description:
        "Led a data-driven collection strategy optimization using the DMAIC methodology, analyzing customer profiles and repayment behavior with SQL to build risk-tiering and payment propensity segmentation models. Presented recommendations via executive dashboard to senior management and BOD, the strategy was implemented in the March cycle, driving a 50% uplift in repayment rates.",
      tags: ["SQL", "DMAIC", "Segmentation", "Dashboard"],
      link: "",
    },
    {
      title: "Budget Control and Realization Monitoring Dashboard",
      org: "Bank Indonesia Purwokerto",
      date: "January 2026",
      category: "Automation & Data Engineering",
      description:
        "Designed and deployed an end to end automated pipeline using BigQuery SQL and Python to analyze customer payment patterns and optimize monthly Desk Collection assignments across 500+ portfolios per cycle, reducing manual allocation time by 90% and enabling data driven collection strategies that scaled seamlessly across growing account portfolios.",
      tags: ["BigQuery", "Python", "Automation", "SQL"],
      link: "",
    },
    {
      title: "Assignment Automation For Desk Collection",
      org: "Astra Welab Digital Arta",
      date: "April 2025",
      category: "Automation & Data Engineering",
      description:
        "Built a Python-based automation in Jupyter Notebook, scheduled to run automatically each morning, reducing the manual 30-minute daily data preparation process for the Desk Collection team by 100% through automatically compiling and emailing the required dataset.",
      tags: ["Python", "Jupyter Notebook", "Automation"],
      link: "",
    },
    {
      title: "Retail Superstore Performance Dashboard",
      org: "Personal Project",
      date: "April 2024",
      category: "Dashboard",
      description:
        "Designed and built an interactive Tableau dashboard using the Superstore dataset to analyze $2M+ in sales, profitability trends, customer segments, and product category performance. Leveraged advanced Tableau features including LOD (Level of Detail) calculations and dynamic parameters to create flexible KPI monitoring, trend analysis, and regional performance visualizations, enabling stakeholders to identify underperforming regions, optimize profit margins, and make data driven inventory and marketing decisions.",
      tags: ["Tableau", "LOD Calculations", "Data Visualization"],
      link: "",
    },
  ],

  // Toolkit inti yang paling mau ditonjolkan — tampil sebagai baris terpisah
  // di atas grid skills biasa, supaya tidak tenggelam di antara 30+ tag lain.
  coreSkills: ["Power BI", "DAX", "SQL / T-SQL", "Python", "Tableau", "Google BigQuery"],

  skills: [
    {
      category: "Data Analytics & BI Tools",
      items: [
        "Power BI",
        "DAX",
        "Power Query",
        "Tableau",
        "Looker",
        "Sisense",
        "Google Data Studio",
        "SPSS",
        "Excel",
        "Google Colab",
        "Jupyter Notebook",
        "Microsoft Fabric",
        "Google Sheets",
        "Predictive Analytics",
        "A/B Testing",
      ],
    },
    {
      category: "Programming & Scripting",
      items: ["Python", "T-SQL", "Google BigQuery", "MySQL", "PostgreSQL", "SQL Server"],
    },
    {
      category: "Data Management & Automation",
      items: [
        "Airflow",
        "Hadoop",
        "Hive",
        "Big Data Processing",
        "Data Cleaning & Transformation",
        "Data Scheduling",
        "Google Apps Script",
        "Data Governance",
        "Data Quality Assessment",
      ],
    },
    {
      category: "CRM, Marketing & Analytics Platforms",
      items: ["Salesforce", "Google Analytics", "Microsoft Office 365"],
    },
    {
      category: "Soft Skills",
      items: [
        "Analytical Thinking",
        "Problem Solving",
        "Collaboration",
        "Communication",
        "Leadership",
        "Marketing Strategy",
        "Teamwork",
        "Stakeholder Management",
        "Change Management",
      ],
    },
  ],

  // `logo` -> path ke logo kampus di assets/image/ (mis. "assets/image/ump.png").
  // Kosongkan "" kalau belum ada gambarnya — otomatis dipakaikan ikon default.
  education: [
    {
      school: "Muhammadiyah University of Purwokerto",
      location: "Purwokerto, Central Java, Indonesia",
      degree: "Informatics Engineering",
      period: "2024",
      detail: "Current IPK: 3.52 / 4.00",
      logo: "assets/image/ump.png",
    },
  ],

  // `image` -> path ke badge/logo sertifikasi di assets/certifications/ (mis. "assets/certifications/power-bi.png").
  // Kosongkan "" kalau belum ada gambarnya — otomatis dipakaikan ikon sertifikat default.
  certifications: [
    { name: "Microsoft Power BI Data Analyst", issuer: "Coursera", image: "" },
    { name: "Business Intelligence Professional", issuer: "Google", image: "" },
    { name: "Data Analyst Essential", issuer: "CISCO", image: "" },
    { name: "Data Administrator", issuer: "BNSP", image: "" },
    { name: "Hacker Rank Advance (SQL)", issuer: "HackerRank", image: "" },
  ],

  // Section "Clients & Testimonials" hanya muncul di halaman kalau array ini terisi.
  // Isi satu object per client, semuanya wajib ada supaya testimoninya kredibel:
  //   logo      -> path ke file logo di assets/ (mis. "assets/clients/acme.png")
  //   name      -> nama client / perusahaan
  //   project   -> project apa yang dikerjakan
  //   date      -> "Month Year", format sama seperti di atas
  //   quote     -> kutipan testimoni asli dari orang yang terlibat di project itu
  //   author    -> nama orang yang memberi testimoni
  //   role      -> jabatan/peran orang itu di project tersebut
  // Contoh:
  // {
  //   logo: "assets/clients/acme.png",
  //   name: "PT Acme Sejahtera",
  //   project: "Sales Performance Dashboard",
  //   date: "July 2026",
  //   quote: "Dashboard yang dibuat Putri langsung kami pakai untuk rapat mingguan BOD.",
  //   author: "Budi Santoso",
  //   role: "Operations Director, PT Acme Sejahtera",
  // },
  clients: [],

  organizations: [
    {
      role: "General Secretary",
      org: "Generasi Baru Bank Indonesia (GenBI)",
      period: "Jun 2022 – Jun 2023",
      bullets: [
        "Formulated a documentation system that increased accessibility by 20%, leading to a 15% reduction in support requests.",
        "Delivered concise meeting overviews, boosting satisfaction.",
        "Cultivated connections with stakeholders, resulting in a 15% rise in cooperation.",
        "Coordinated team endeavors to achieve objectives within schedule and budget constraints.",
      ],
    },
    {
      role: "Business Capital Funding",
      org: "The Executive Student Board of Engineering and Science",
      period: "Aug 2020 – Sep 2021",
      bullets: [
        "Collaborated with the first party to sell consumer goods at more affordable prices, resulting in a 15% increase in sales volume.",
        "Participated as a member of Dana Usaha and played a crucial role in establishing partnerships to enhance the accessibility and visibility of student-run businesses.",
      ],
    },
  ],
};
