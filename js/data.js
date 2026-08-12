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
    // Badge kecil berwarna di card foto Hero, di bawah nama.
    experienceBadge: "3+ Years Experience",
    // Logo untuk navbar — otomatis ganti sesuai tema terang/gelap.
    // Taruh 2 file di assets/image/ dengan nama ini: logo untuk dipakai di atas
    // background TERANG (logoLight) dan untuk background GELAP (logoDark).
    logoLight: "assets/image/logo-light.png",
    logoDark: "assets/image/logo-dark.png",
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
    // Dipakai di section About — ringkas & konkret, tanpa melebih-lebihkan.
    about:
      "Putri fixes broken workflows, not just builds dashboards — a 15-day report became 5 days at PT Jasa Angkasa Semesta, and a DMAIC-based collection strategy lifted repayment rates 50% at Astra Welab. She's done this across airport operations, fintech, FMCG, and retail, and now mentors junior analysts at Dealls.",
  },

  // Angka ringkasan yang tampil sebagai "stat tiles" di bagian About.
  stats: [
    { value: "3+", label: "Years of Experience" },
    { value: "15+", label: "Dashboards Managed" },
    { value: "10+", label: "Portfolio" },
  ],

  experience: [
    {
      role: "Data Analyst",
      company: "PT Jasa Angkasa Semesta",
      location: "Soekarno Hatta Airport",
      period: "Sep 2025 – Present",
      current: true,
      bullets: [
        "Cut Operational Monthly Report preparation time by 66% (from 15 to 5 days) by rebuilding data models and running data literacy workshops.",
        "Manage 15 operational dashboards across Cargo Handling, Ground Handling, SLA Airlines, and Company Product Services, presenting findings to key stakeholders.",
      ],
    },
    {
      role: "Analytics Specialist | Corporate Account Management",
      company: "Astra Welab Digital Arta",
      location: "Jakarta Selatan",
      period: "Feb 2025 – Sep 2025",
      bullets: [
        "Designed operational and executive dashboards using SQL, turning data analysis into actionable insights for account management.",
        "Built customer profiling and predictive payment-propensity models to forecast repayment timelines and inform collection strategy.",
      ],
    },
    {
      role: "Super Mentor Data Analyst & Business Intelligence",
      company: "Dealls",
      location: "Remote",
      period: "Nov 2024 – Jan 2026",
      bullets: [
        "Mentored aspiring data analysts with structured learning roadmaps and personalized guidance on practical BI skills.",
      ],
    },
    {
      role: "Business Intelligence Developer",
      company: "Dimensi Dua Dinamika",
      location: "Jakarta Selatan",
      period: "May 2024 – Nov 2024",
      bullets: [
        "Supported end-to-end data engineering for an LSP system, architecting database solutions and data integrity controls.",
        "Delivered reliable Tableau and Sisense dashboards through rigorous data cleaning, transformation, and quality checks.",
      ],
    },
    {
      role: "Area Data Analyst",
      company: "Danone Indonesia (Waters)",
      location: "Purwokerto",
      period: "August 2023 – Feb 2024",
      bullets: [
        "Drove data-driven strategies that increased customer retention by 10% across the Central Java region.",
        "Built KPI, Volume Performance, and Outlet Monitoring dashboards using Excel and Power Query for real-time management insight.",
      ],
    },
    {
      role: "Data Scientist",
      company: "PT Erajaya Swasembada",
      location: "Jakarta, Indonesia",
      period: "Feb 2023 – Jun 2023",
      bullets: [
        "Ran A/B tests and competitor analysis across iBox, JD Sport, and Eraspace to optimize marketing campaign performance.",
        "Built an Online-to-Offline (O2O) monitoring dashboard in Looker, tracking the customer journey from ad impression to in-store conversion.",
      ],
    },
  ],

  // Project paling baru ditaruh paling atas.
  // `category` harus salah satu dari: "Dashboard", "Research Analyst", "Automation & Data Engineering".
  // `image`       -> path ke screenshot project (assets/image/projects/namafile.png). Kosongkan "" kalau belum ada.
  // `confidential`-> true = tampil blur + label "Confidential" (dipakai untuk data milik perusahaan yang belum boleh ditampilkan).
  //                  false = tampil normal (dipakai untuk project yang sudah boleh ditampilkan/publik).
  // `link`    -> URL live/publik dari dashboard-nya (mis. Tableau Public). Muncul sebagai "View Live Dashboard".
  // `docUrl`  -> path ke file dokumentasi (PDF) di assets/. Muncul sebagai "View Documentation".
  projects: [
    {
      title: "Operational Monthly Report Dashboard",
      org: "PT Jasa Angkasa Semesta",
      date: "June 2026",
      category: "Dashboard",
      description:
        "Centralized Power BI platform consolidating Ground and Cargo Handling KPIs, cutting monthly report prep time by 66% (15 days to 5) with AI-powered summaries for faster executive review.",
      tags: ["Power BI", "Microsoft Fabric", "DAX", "Executive Reporting"],
      link: "",
      docUrl: "",
      image: "assets/image/dashboard_operational_monthly_jas.png",
      confidential: false,
    },
    {
      title: "Customer Profiling & Collection Strategy Optimization",
      org: "Astra Welab Digital Arta",
      date: "March 2026",
      category: "Research Analyst",
      description:
        "DMAIC-based collection strategy using SQL to build risk-tiering and payment-propensity segmentation, driving a 50% uplift in repayment rates.",
      tags: ["SQL", "DMAIC", "Segmentation", "Dashboard"],
      link: "",
      docUrl: "assets/Mapping%20Distribution%20Assignment.pdf",
      image: "",
      confidential: false,
    },
    {
      title: "Budget Control and Realization Monitoring Dashboard",
      org: "Bank Indonesia Purwokerto",
      date: "January 2026",
      category: "Dashboard",
      description:
        "Budget control and realization monitoring dashboard built directly in spreadsheet, pulling live data from the company's ERP system to track budget allocation and realization.",
      tags: ["Spreadsheet", "ERP Integration", "Dashboard"],
      link: "",
      docUrl: "",
      image: "assets/image/budget%20monitoring%20BI%20Purwokerto.png",
      confidential: true,
    },
    {
      title: "Assignment Automation For Desk Collection",
      org: "Astra Welab Digital Arta",
      date: "April 2025",
      category: "Automation & Data Engineering",
      description:
        "Python automation in Jupyter Notebook that compiles and emails the Desk Collection team's daily dataset automatically, eliminating a 30-minute manual task.",
      tags: ["Python", "Jupyter Notebook", "Automation"],
      link: "",
      docUrl: "assets/Assignment%20Automation.pdf",
      image: "",
      confidential: false,
    },
    {
      title: "Retail Superstore Performance Dashboard",
      org: "Personal Project",
      date: "April 2024",
      category: "Dashboard",
      description:
        "Interactive Tableau dashboard analyzing $2M+ in Superstore sales with LOD calculations and dynamic parameters to surface underperforming regions and margin opportunities.",
      tags: ["Tableau", "LOD Calculations", "Data Visualization"],
      link: "https://public.tableau.com/app/profile/putri.asih.puji.lestari/viz/SampleSuperstore_17188715859720/CustomerAnalysis",
      docUrl: "",
      image: "assets/image/Retail%20Sales%20Performance.png",
      confidential: false,
    },
    {
      title: "Sales Dashboard",
      org: "PT ABX",
      date: "",
      category: "Dashboard",
      description:
        "Sales performance dashboard for PT ABX, with data cleansing handled in spreadsheet before visualization in Looker Studio.",
      tags: ["Looker Studio", "Spreadsheet", "Data Cleaning"],
      link: "https://datastudio.google.com/reporting/0e94b92d-c2b9-451d-b8b9-4a6bba57959f/page/OemtD",
      docUrl: "",
      image: "",
      confidential: false,
    },
    {
      title: "Sales Force Effectiveness",
      org: "Personal Project",
      date: "",
      category: "Dashboard",
      description:
        "Tracks sales team performance and identifies which warehouse operates most effectively across regions.",
      tags: ["Looker Studio", "Sales Analytics"],
      link: "https://datastudio.google.com/reporting/c1907495-fd56-4bed-a882-3766a5fca8e1/page/DzaZD",
      docUrl: "",
      image: "",
      confidential: false,
    },
    {
      title: "Volume Monitoring",
      org: "Personal Project",
      date: "",
      category: "Dashboard",
      description:
        "Monitors FMCG distributor sales volume against target, total achievement, and best estimate for the current month.",
      tags: ["Looker Studio", "FMCG", "Sales Forecasting"],
      link: "https://datastudio.google.com/u/0/reporting/531fcc73-e298-4c6e-8ec2-686e0846f94c/page/p_2kr0e4dr9c",
      docUrl: "",
      image: "",
      confidential: false,
    },
    {
      title: "Complaint Monitoring Dashboard",
      org: "Personal Project",
      date: "",
      category: "Dashboard",
      description:
        "Tracks and visualizes customer complaint volume and resolution trends.",
      tags: ["Tableau"],
      link: "https://public.tableau.com/app/profile/putri.asih.puji.lestari/viz/ComplaintMonitoringDashboard/Dashboard1",
      docUrl: "",
      image: "",
      confidential: false,
    },
  ],

  // Skill yang paling mau ditonjolkan — tampil sebagai baris "Most Expertise"
  // di atas grid skills biasa, supaya tidak tenggelam di antara tag lain.
  coreSkills: ["Power BI", "Tableau", "Google Data Studio", "SQL", "Excel"],

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
      period: "2019 – 2024",
      detail: "Current IPK: 3.52 / 4.00",
      logo: "assets/image/ump.png",
    },
  ],

  // `image`   -> path ke badge/gambar sertifikat di assets/image/ (mis. "assets/image/cert-bnsp.png").
  // `certUrl` -> link ke sertifikat asli (Credly, Drive, dst). Kosongkan "" kalau belum ada —
  //              tulisan "View Certificate" otomatis nonaktif sampai link-nya diisi.
  certifications: [
    { name: "Database Administrator", issuer: "BNSP", date: "January 2024", image: "assets/image/certification_bnsp_31012024.png", certUrl: "" },
    { name: "Database Migration Engineer", issuer: "Udemy Academy", date: "July 2024", image: "assets/image/certification_database%20migration%20engineer_24072024.png", certUrl: "" },
    { name: "Microsoft Power BI", issuer: "Maven Analytics", date: "July 2024", image: "assets/image/certification_Microsoft%20Power%20BI%20by%20Maven_29072024.png", certUrl: "" },
    { name: "Data Analytics Essential", issuer: "CISCO", date: "August 2024", image: "assets/image/certification_cisco%2008082024.png", certUrl: "" },
    { name: "Database Advance Course", issuer: "ITBOX", date: "September 2024", image: "assets/image/certification_itbox_23092024.png", certUrl: "" },
    { name: "SQL Advance Level", issuer: "HackerRank", date: "October 2024", image: "assets/image/certification_sql_advanced_12102024.png", certUrl: "" },
    { name: "Business Intelligence Professional", issuer: "Google", date: "January 2025", image: "assets/image/certification_Google%20BI%20Profesional_16012025.png", certUrl: "" },
    { name: "Microsoft Power BI Data Analyst", issuer: "Coursera", date: "November 2025", image: "assets/image/certification_Microsoft%20Power%20BI%20Data%20Analyst_09112025.png", certUrl: "" },
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

  // Sekarang pakai layout & style yang sama seperti Education (logo + card).
  // `logo` -> path ke logo organisasi di assets/image/ (mis. "assets/image/logo_genbi.png").
  organizations: [
    {
      role: "General Secretary",
      org: "Generasi Baru Bank Indonesia (GenBI)",
      period: "Jun 2022 – Jun 2023",
      description:
        "Built a documentation system that cut support requests by 15% and strengthened stakeholder cooperation by 15%.",
      logo: "assets/image/logo_genbi.png",
    },
    {
      role: "Business Capital Funding",
      org: "The Executive Student Board of Engineering and Science",
      period: "Aug 2020 – Sep 2021",
      description:
        "Helped grow student-run business partnerships, driving a 15% increase in sales volume.",
      logo: "assets/image/logo_bem.jpg",
    },
  ],
};
