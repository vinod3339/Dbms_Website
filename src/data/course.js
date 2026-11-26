export const course = {
  institution: "GMRIT Deemed to be University",
  school: "School of Engineering",
  department: "Department of Computer Science and Engineering",
  degree: "B.Tech.",
  program: "Computer Science and Engineering",
  semester: "IV Semester",
  regulation: "Academic Regulation 2023",
  year: "2026–27",
  handoutDate: "20 June 2026",
  code: "23IT304",
  title: "Database Management Systems",
  ltpc: "3–0–0–3",
  credits: 3,
  lectureHours: 3,
  tutorialHours: 0,
  practicalHours: 0,
  totalHours: 48,
  instructor: "To be filled by the Department",
  coordinator: "To be filled by the Department",
  consultation: "Every Friday, 4:00 PM to 5:00 PM",
  consultationVenue: "Faculty Cabin 2",
  notices: "Department notice board",
  assessmentVenue: "Block-3",
  description:
    "Database Management Systems introduces the principles and practices used to organize, store, retrieve, and manage data. The course covers database fundamentals, data models, ER modelling, the relational model, relational algebra and calculus, SQL, integrity constraints, normalization, transaction management, concurrency control, recovery, indexing, and file organization.",
  industry:
    "These ideas are used in enterprise information systems, banking, e-commerce, healthcare, analytics platforms, and any application that needs shared, consistent data. The course supports programme outcomes on problem analysis, design of computing solutions, modern tools, and lifelong learning.",
  objectives: [
    "Introduce database concepts, database system architecture, data independence, and major data models.",
    "Develop the ability to represent real-world requirements using ER models and database design concepts.",
    "Explain relational database concepts, relational algebra, relational calculus, SQL, and integrity constraints.",
    "Apply normalization and schema refinement techniques to improve database design and reduce redundancy.",
    "Understand transaction processing, concurrency control, serializability, and database recovery mechanisms.",
    "Examine locking protocols, indexing methods, and file organization techniques for efficient data access.",
  ],
  outcomes: [
    {
      id: "CO1",
      text: "Explain the fundamental concepts of database and various data models.",
    },
    {
      id: "CO2",
      text: "Illustrate the Relational Algebra and integrity constraints for query execution.",
    },
    {
      id: "CO3",
      text: "Apply the relational database to formulate the SQL Commands.",
    },
    {
      id: "CO4",
      text: "Make use of Normalization to improve database design and schema refinement.",
    },
    {
      id: "CO5",
      text: "Analyze the concept of transaction management, recovery and serializability in databases.",
    },
    {
      id: "CO6",
      text: "Classify the concurrency control protocols, different types of data and indexing techniques.",
    },
  ],
  textbooks: [
    {
      id: "T1",
      citation:
        "Elmasri and Navathe, Fundamentals of Database Systems, Pearson Education, 7th Edition, 2016.",
    },
    {
      id: "T2",
      citation:
        "Silberschatz and Korth, Database System Concepts, McGraw Hill, 7th Edition, 2020.",
    },
  ],
  references: [
    {
      id: "R1",
      citation: "Soraya Sedkaoui, Data Analytics and Big Data, Wiley, 1st Edition, 2018.",
    },
    {
      id: "R2",
      citation:
        "Peter Rob and Carlos Coronel, Database Systems: Design, Implementation and Management, 9th Edition, 2010.",
    },
    {
      id: "R3",
      citation:
        "Raghurama Krishnan and Johannes Gehrke, Database Management Systems, Tata McGraw-Hill, 3rd Edition, 2003.",
    },
    {
      id: "R4",
      citation:
        "C. J. Date, An Introduction to Database Systems, Pearson Education, 8th Edition, 2006.",
    },
  ],
  web: [
    {
      id: "W1",
      label: "PostgreSQL documentation",
      href: "https://www.postgresql.org/docs/",
    },
    {
      id: "W2",
      label: "MySQL reference manual",
      href: "https://dev.mysql.com/doc/",
    },
  ],
  documents: [
    {
      label: "Course handout (Word)",
      href: "/materials/official/DBMS-Course-Handout-2026-27.docx",
    },
    {
      label: "Syllabus PDF",
      href: "/materials/official/DBMS-Syllabus.pdf",
    },
  ],
  assessment: [
    {
      component: "Continuous Assessment – 1",
      weight:
        "20% (80% of the first best + 20% of the second best marks), as recorded in the handout",
      when: "To be announced",
      venue: "Block-3",
    },
    {
      component: "Continuous Assessment – 2",
      weight: "As per Academic Regulation 2023",
      when: "To be announced",
      venue: "Block-3",
    },
    {
      component: "Open Book / Assignment Examination",
      weight: "As per Academic Regulation 2023",
      when: "To be announced",
      venue: "Block-3",
    },
    {
      component: "End Semester Examination",
      weight: "As per Academic Regulation 2023",
      when: "To be announced",
      venue: "Block-3",
    },
  ],
  programOutcomes: [
    ["PO1", "Engineering knowledge"],
    ["PO2", "Problem analysis"],
    ["PO3", "Design and development of solutions"],
    ["PO4", "Investigation of complex problems"],
    ["PO5", "Modern tool usage"],
    ["PO6", "The engineer and society"],
    ["PO7", "Environment and sustainability"],
    ["PO8", "Ethics"],
    ["PO9", "Individual and team work"],
    ["PO10", "Communication"],
    ["PO11", "Project management and finance"],
    ["PO12", "Lifelong learning"],
    ["PSO1", "Programme specific outcome 1"],
    ["PSO2", "Programme specific outcome 2"],
  ],
  mappingScale: "3 strongly linked · 2 moderately linked · 1 weakly linked · – no mapping",
};

export const coMatrix = {
  CO1: ["3", "1", "1", "–", "–", "–", "–", "–", "–", "–", "–", "2", "–", "2"],
  CO2: ["3", "2", "3", "–", "–", "–", "–", "–", "–", "2", "–", "2", "–", "2"],
  CO3: ["3", "3", "3", "–", "–", "–", "–", "–", "–", "2", "–", "2", "–", "2"],
  CO4: ["3", "3", "3", "–", "–", "–", "–", "–", "–", "2", "–", "2", "–", "3"],
  CO5: ["3", "2", "3", "–", "–", "–", "–", "–", "–", "2", "–", "2", "–", "3"],
  CO6: ["2", "1", "2", "–", "–", "–", "–", "–", "–", "2", "–", "2", "–", "3"],
};
