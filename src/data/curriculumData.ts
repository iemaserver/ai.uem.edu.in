export interface CourseItem {
  slNo: string;
  courseType: string;
  code: string;
  name: string;
  lecture: string;
  tutorial: string;
  practical: string;
  sessional: string;
  credits: string;
  category: 'Theory Papers' | 'Practical Papers' | 'Sessional Papers' | 'Mandatory Requirements';
}

export interface SemesterStructure {
  semester: number;
  title: string;
  courses: CourseItem[];
}

export interface ProfessionalElectiveItem {
  id: string;
  semester: string;
  trackAI: string;
  trackDS: string;
}

export interface OpenElectiveItem {
  id: string;
  semester: string;
  option1: string;
  option2: string;
}

export interface BatchCurriculum {
  batch: string;
  label: string;
  department: string;
  institution: string;
  branch: string;
  semesters: SemesterStructure[];
  professionalElectives?: ProfessionalElectiveItem[];
  openElectives?: OpenElectiveItem[];
}

export const batch2025_2029: BatchCurriculum = {
  "batch": "2025-2029",
  "label": "Batch 2025–2029 (Latest Curriculum Scheme)",
  "department": "Computer Science & Engineering (Artificial Intelligence)",
  "institution": "Institute of Engineering & Management / University of Engineering & Management",
  "branch": "IT, CSE & Allied Branches",
  "semesters": [
    {
      "semester": 1,
      "title": "Semester I (First year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSM101",
          "name": "Mathematics - I (Calculus & Linear Algebra)",
          "lecture": "3",
          "tutorial": "1",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Basic Science course",
          "code": "BSPH101",
          "name": "Engineering Physics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Engineering Science Course",
          "code": "ESEE101",
          "name": "Basic Electrical & Electronics Engineering",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Engineering Science Course",
          "code": "ESCS101",
          "name": "Programming for Problem Solving (C Programming)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSPH191",
          "name": "Engineering Physics Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESEE191",
          "name": "Basic Electrical & Electronics Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Engineering Science Course",
          "code": "ESCS191",
          "name": "Programming for Problem Solving Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Engineering Science Course",
          "code": "ESME191",
          "name": "Workshop / Manufacturing Practices Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Mandatory Course",
          "code": "INDUCTION",
          "name": "Student Induction Program (3 Weeks)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 2,
      "title": "Semester II (First year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSM201",
          "name": "Mathematics - II (Differential Equations & Complex Analysis)",
          "lecture": "3",
          "tutorial": "1",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Basic Science course",
          "code": "BSCH201",
          "name": "Engineering Chemistry",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Humanities & Social Sciences",
          "code": "HSMC201",
          "name": "English for Professional Communication",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS201",
          "name": "Python Programming & Data Structures Primer",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSCH291",
          "name": "Engineering Chemistry Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESED291",
          "name": "Engineering Graphics & Computer Drafting",
          "lecture": "1",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "2.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Humanities & Social Sciences",
          "code": "HSMC291",
          "name": "Language & Professional Communication Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS291",
          "name": "Python Programming Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Mandatory Course",
          "code": "MCC271",
          "name": "Environmental Sciences",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 3,
      "title": "Semester III (Second year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Engineering ScienceCourse",
          "code": "ESC301",
          "name": "Analog Electronic Circuits",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESC302",
          "name": "Digital Electronics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS301",
          "name": "Data structure & Algorithms",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Basic Science course",
          "code": "BSM301",
          "name": "Mathematics - III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Humanities & Social Sciences including Management courses",
          "code": "HSMCS301",
          "name": "Humanities - I (Principles of Management)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities & Social Sciences including Management courses",
          "code": "ESEP301",
          "name": "Essential Studies for Engineering Professionals - III",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Engineering Science Course",
          "code": "ESC391",
          "name": "Analog Electronic Circuits Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS391",
          "name": "Data structure & Algorithms Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "EngineeringScienceCourse",
          "code": "ESC392",
          "name": "Digital Electronics Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Courses",
          "code": "PCCCS381",
          "name": "IT Workshop",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "4",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Innovative Project",
          "code": "PRJCS381",
          "name": "Innovative Project – I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra CurricularActivities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements(Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Courses (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry andForeign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 4,
      "title": "Semester IV (Second year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS401",
          "name": "Discrete Mathematics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS402",
          "name": "ComputerOrganization & Architecture",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS403",
          "name": "Artificial Intelligence &Machine Learning",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "ProfessionalCore Courses",
          "code": "PCCCS404",
          "name": "Design & Analysisof Algorithms",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional Core Courses",
          "code": "PCCCS405",
          "name": "AdvancedProgramming (OOP)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities &Social Sciences including Managementcourses",
          "code": "HSMCS471",
          "name": "Management 1 (Finance & Accounting)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "7",
          "courseType": "Humanities&Social Sciences including Managementcourses",
          "code": "ESEP401",
          "name": "Essential Studies for Engineering Professionals - IV",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "8",
          "courseType": "Mandatory Courses",
          "code": "MCC471",
          "name": "Sustainability, Climate Actions & EnvironmentalSciences",
          "lecture": "1",
          "tutorial": "-",
          "practical": "(Field Project)",
          "sessional": "-",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Courses",
          "code": "PCCCS492",
          "name": "Computer Organization & ArchitectureLaboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS493",
          "name": "ArtificialIntelligence & Machine Learning Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS494",
          "name": "Design & Analysis of AlgorithmsLaboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS495",
          "name": "Advanced Programming(OOP) Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "InnovativeProject",
          "code": "PRJCS481",
          "name": "Innovative Project– II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Course",
          "code": "PCCCS481",
          "name": "Data Analytics",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra CurricularActivities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements(Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive OpenOnline Courses (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "IFC",
          "code": "IFC",
          "name": "Industry andForeign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 5,
      "title": "Semester V (Third year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "EngineeringScience Course",
          "code": "ESC501",
          "name": "Signals & Systems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS501",
          "name": "DatabaseManagementSystems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS502",
          "name": "Theory of Computations",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS503",
          "name": "Operating Systems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional Core Courses",
          "code": "PCCCS504",
          "name": "Software Engineering and Project Management",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "ESEP501",
          "name": "Essential Studies for Engineering Professionals - V",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "7",
          "courseType": "Mandatory Course",
          "code": "MCC571",
          "name": "Constitution of India",
          "lecture": "1",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Courses",
          "code": "PCCCS591",
          "name": "DatabaseManagement Systems Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS593",
          "name": "OperatingSystems Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS594",
          "name": "Software Engineering and Project Management",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Innovative Project",
          "code": "PRJCS581",
          "name": "Innovative Project – III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Course",
          "code": "PCCCS581",
          "name": "Quantum Computing",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "4",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Course",
          "code": "PCCCS582",
          "name": "Neural Network & Deep Learning",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "4",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry andForeignCertification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 6,
      "title": "Semester VI (Third year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS601",
          "name": "Computer Networks",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional ElectiveCourses",
          "code": "PECCS601",
          "name": "Introductory Cyber Security",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional ElectiveCourses",
          "code": "PECS602",
          "name": "Elective-I",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Elective Courses",
          "code": "PECS603",
          "name": "Elective-II",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS602",
          "name": "Cloud Computing & IoT",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "ESEP601",
          "name": "Essential Studies for Engineering Professionals - VI",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS691",
          "name": "ComputerNetworks Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Elective Courses",
          "code": "PECCS691",
          "name": "Introductory Cyber Security Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS692",
          "name": "Cloud Computing & IoT Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Project",
          "code": "PRJCS681",
          "name": "Project – I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "6",
          "credits": "3",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Course",
          "code": "PCCCS681",
          "name": "Generative and Agentic AI",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "4",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open OnlineCourse (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification(Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 7,
      "title": "Semester VII (Fourth year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS701",
          "name": "Compiler Design",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "ProfessionalElective Courses",
          "code": "PECS701",
          "name": "Elective-III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Open Elective Courses",
          "code": "OECS701",
          "name": "Open Elective-I",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "ESEP701",
          "name": "Essential Studies for Engineering Professionals - VII",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS791",
          "name": "Compiler Design Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Innovative Project",
          "code": "PRJCS781",
          "name": "Project – II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "12",
          "credits": "6",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Internship",
          "code": "INP781",
          "name": "Internship - I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification(Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 8,
      "title": "Semester VIII (Fourth year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Elective Courses",
          "code": "PECS801",
          "name": "Elective-IV",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Open Elective Courses",
          "code": "OECS801",
          "name": "Open Elective-II",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Open Elective Courses",
          "code": "OECS802",
          "name": "Open Elective-III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Humanities & Social Sciences includingManagement course",
          "code": "ESEP801",
          "name": "Essential Studies for Engineering Professionals - VIII",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Project",
          "code": "PRJCS881",
          "name": "Project – III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "12",
          "credits": "6",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Grand Viva",
          "code": "PCCS881",
          "name": "Grand Viva-Voce",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Internship",
          "code": "INP881",
          "name": "Internship - II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & ExtraCurricularActivities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "4",
          "courseType": "Skill Activity Report",
          "code": "SAR",
          "name": "Skill ActivityReport/Skills as Additional Requirement",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        }
      ]
    }
  ],
  "professionalElectives": [
    {
      "id": "PE-1",
      "semester": "Sem-6",
      "trackAI": "Soft Computing (PECS602B)",
      "trackDS": "Data Science using Python (PECS602K)"
    },
    {
      "id": "PE-2",
      "semester": "Sem-6",
      "trackAI": "Natural Language Processing (PECS603B)",
      "trackDS": "Cognitive Computing / ServiceNow System Administrator (PECS603E) / (PEC603)"
    },
    {
      "id": "PE-3",
      "semester": "Sem-7",
      "trackAI": "Warehousing and Business Intelligence (PECS701B)",
      "trackDS": "Big Data Computing (PECS701N)"
    },
    {
      "id": "PE-4",
      "semester": "Sem-8",
      "trackAI": "Advanced AI (PECS801B)",
      "trackDS": "Social Media Analytics (PECS801J)"
    }
  ],
  "openElectives": [
    {
      "id": "OE-1",
      "semester": "Sem-7",
      "option1": "Enterprise System (OECS701A)",
      "option2": "Economic Policies in India (OECS701B)"
    },
    {
      "id": "OE-2",
      "semester": "Sem-8",
      "option1": "Soft Skills and Interpersonal Communication (OECS801A)",
      "option2": "History of Science and Engineering (OECS801B)"
    },
    {
      "id": "OE-3",
      "semester": "Sem-8",
      "option1": "Cyber Law and IPR (OECS802A)",
      "option2": "Introduction to Philosophical Thoughts (OECS802B)"
    }
  ]
};

export const batch2024_2028: BatchCurriculum = {
  "batch": "2024-2028",
  "label": "Batch 2024–2028 (Revised Curriculum Scheme)",
  "department": "Computer Science & Engineering (Artificial Intelligence)",
  "institution": "Institute of Engineering & Management / University of Engineering & Management",
  "branch": "IT, CSE & Allied Branches",
  "semesters": [
    {
      "semester": 1,
      "title": "Semester I (First year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSM101",
          "name": "Mathematics - I (Calculus & Linear Algebra)",
          "lecture": "3",
          "tutorial": "1",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Basic Science course",
          "code": "BSPH101",
          "name": "Engineering Physics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Engineering Science Course",
          "code": "ESEE101",
          "name": "Basic Electrical & Electronics Engineering",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Engineering Science Course",
          "code": "ESCS101",
          "name": "Programming for Problem Solving (C Programming)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSPH191",
          "name": "Engineering Physics Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESEE191",
          "name": "Basic Electrical & Electronics Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Engineering Science Course",
          "code": "ESCS191",
          "name": "Programming for Problem Solving Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Engineering Science Course",
          "code": "ESME191",
          "name": "Workshop / Manufacturing Practices Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Mandatory Course",
          "code": "INDUCTION",
          "name": "Student Induction Program (3 Weeks)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 2,
      "title": "Semester II (First year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSM201",
          "name": "Mathematics - II (Differential Equations & Complex Analysis)",
          "lecture": "3",
          "tutorial": "1",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Basic Science course",
          "code": "BSCH201",
          "name": "Engineering Chemistry",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Humanities & Social Sciences",
          "code": "HSMC201",
          "name": "English for Professional Communication",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS201",
          "name": "Python Programming & Data Structures Primer",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSCH291",
          "name": "Engineering Chemistry Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESED291",
          "name": "Engineering Graphics & Computer Drafting",
          "lecture": "1",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "2.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Humanities & Social Sciences",
          "code": "HSMC291",
          "name": "Language & Professional Communication Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS291",
          "name": "Python Programming Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Mandatory Course",
          "code": "MCC271",
          "name": "Environmental Sciences",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 3,
      "title": "Semester III (Second year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Engineering ScienceCourse",
          "code": "ESC301",
          "name": "Analog Electronic Circuits",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESC302",
          "name": "Digital Electronics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS301",
          "name": "Data structure & Algorithms",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Basic Science course",
          "code": "BSM301",
          "name": "Mathematics - III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Humanities & Social Sciences including Management courses",
          "code": "HSMCS301",
          "name": "Humanities - I (Principles of Management)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities & Social Sciences including Management courses",
          "code": "ESP301",
          "name": "Essential Studies for Professionals - III",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0.5",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Engineering Science Course",
          "code": "ESC391",
          "name": "Analog Electronic Circuits Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS391",
          "name": "Data structure & Algorithms Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "EngineeringScienceCourse",
          "code": "ESC392",
          "name": "Digital Electronics Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Humanities& Social Sciences includingManagement courses",
          "code": "SDP381",
          "name": "Skill Development for Professionals - III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "0.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS381",
          "name": "IT Workshop",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "4",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Innovative Project",
          "code": "PRJCS381",
          "name": "Innovative Project – I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Courses (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry andForeign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 4,
      "title": "Semester IV (Second year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS401",
          "name": "Discrete Mathematics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS402",
          "name": "ComputerOrganization & Architecture",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS403",
          "name": "Artificial Intelligence &Machine Learning",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "ProfessionalCore Courses",
          "code": "PCCCS404",
          "name": "Design & Analysisof Algorithms",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional Core Courses",
          "code": "PCCCS405",
          "name": "AdvancedProgramming (OOP)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities &Social Sciences including Managementcourses",
          "code": "HSMCS471",
          "name": "Management 1 (Finance & Accounting)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "7",
          "courseType": "Humanities&Social Sciences including Managementcourses",
          "code": "ESP401",
          "name": "Essential Studies for Professionals - IV",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0.5",
          "category": "Theory Papers"
        },
        {
          "slNo": "8",
          "courseType": "Mandatory Courses",
          "code": "MCC471",
          "name": "Sustainability, Climate Actions & EnvironmentalSciences",
          "lecture": "1",
          "tutorial": "-",
          "practical": "(Field Project)",
          "sessional": "-",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Courses",
          "code": "PCCCS492",
          "name": "Computer Organization & ArchitectureLaboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS493",
          "name": "ArtificialIntelligence & Machine Learning Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS494",
          "name": "Design & Analysis of AlgorithmsLaboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS495",
          "name": "Advanced Programming(OOP) Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Humanities &Social Sciences including Managementcourses",
          "code": "SDP481",
          "name": "Skill Development for Professionals - IV",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "0.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "InnovativeProject",
          "code": "PRJCS481",
          "name": "Innovative Project– II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Course",
          "code": "PCCCS481",
          "name": "Data Analytics",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive OpenOnline Courses (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "IFC",
          "code": "IFC",
          "name": "Industry andForeign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 5,
      "title": "Semester V (Third year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "EngineeringScience Course",
          "code": "ESC501",
          "name": "Signals & Systems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS501",
          "name": "DatabaseManagementSystems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS502",
          "name": "Theory of Computations",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS503",
          "name": "Operating Systems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional Core Courses",
          "code": "PCCCS504",
          "name": "Software Engineering and Project Management",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "ESEP501",
          "name": "Essential Studies for Engineering Professionals - V",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "7",
          "courseType": "Mandatory Course",
          "code": "MCC571",
          "name": "Constitution of India",
          "lecture": "1",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Courses",
          "code": "PCCCS591",
          "name": "DatabaseManagement Systems Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS593",
          "name": "OperatingSystems Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS594",
          "name": "Software Engineering and Project Management",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Innovative Project",
          "code": "PRJCS581",
          "name": "Innovative Project – III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Course",
          "code": "PCCCS581",
          "name": "Quantum Computing",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "4",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Course",
          "code": "PCCCS582",
          "name": "Neural Network & Deep Learning",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "4",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry andForeignCertification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 6,
      "title": "Semester VI (Third year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS601",
          "name": "Computer Networks",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional ElectiveCourses",
          "code": "PECCS601",
          "name": "Introductory Cyber Security",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional ElectiveCourses",
          "code": "PECS602",
          "name": "Elective-I",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Elective Courses",
          "code": "PECS603",
          "name": "Elective-II",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS602",
          "name": "Cloud Computing & IoT",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "ESEP601",
          "name": "Essential Studies for Engineering Professionals - VI",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS691",
          "name": "ComputerNetworks Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Elective Courses",
          "code": "PECCS691",
          "name": "Introductory Cyber Security Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS692",
          "name": "Cloud Computing & IoT Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Project",
          "code": "PRJCS681",
          "name": "Project – I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "6",
          "credits": "3",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Course",
          "code": "PCCCS681",
          "name": "Generative and Agentic AI",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "4",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open OnlineCourse (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification(Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 7,
      "title": "Semester VII (Fourth year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS701",
          "name": "Compiler Design",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "ProfessionalElective Courses",
          "code": "PECS701",
          "name": "Elective-III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Open Elective Courses",
          "code": "OECS701",
          "name": "Open Elective-I",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "ESEP701",
          "name": "Essential Studies for Engineering Professionals - VII",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS791",
          "name": "Compiler Design Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Innovative Project",
          "code": "PRJCS781",
          "name": "Project – II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "12",
          "credits": "6",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Internship",
          "code": "INP781",
          "name": "Internship - I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification(Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 8,
      "title": "Semester VIII (Fourth year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Elective Courses",
          "code": "PECS801",
          "name": "Elective-IV",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Open Elective Courses",
          "code": "OECS801",
          "name": "Open Elective-II",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Open Elective Courses",
          "code": "OECS802",
          "name": "Open Elective-III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Humanities & Social Sciences includingManagement course",
          "code": "ESEP801",
          "name": "Essential Studies for Engineering Professionals - VIII",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Project",
          "code": "PRJCS881",
          "name": "Project – III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "12",
          "credits": "6",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Grand Viva",
          "code": "PCCS881",
          "name": "Grand Viva-Voce",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Internship",
          "code": "INP881",
          "name": "Internship - II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "4",
          "courseType": "Skill Activity Report",
          "code": "SAR",
          "name": "Skill ActivityReport/Skills as Additional Requirement",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        }
      ]
    }
  ],
  "professionalElectives": [
    {
      "id": "PE-1",
      "semester": "Sem-6",
      "trackAI": "Soft Computing (PECS602B)",
      "trackDS": "Data Science using Python (PECS602K)"
    },
    {
      "id": "PE-2",
      "semester": "Sem-6",
      "trackAI": "Natural Language Processing (PECS603B)",
      "trackDS": "Cognitive Computing / ServiceNow System Administrator (PECS603E) / (PEC603)"
    },
    {
      "id": "PE-3",
      "semester": "Sem-7",
      "trackAI": "Warehousing and Business Intelligence (PECS701B)",
      "trackDS": "Big Data Computing (PECS701N)"
    },
    {
      "id": "PE-4",
      "semester": "Sem-8",
      "trackAI": "Advanced AI (PECS801B)",
      "trackDS": "Social Media Analytics (PECS801J)"
    }
  ],
  "openElectives": [
    {
      "id": "OE-1",
      "semester": "Sem-7",
      "option1": "Enterprise System (OECS701A)",
      "option2": "Economic Policies in India (OECS701B)"
    },
    {
      "id": "OE-2",
      "semester": "Sem-8",
      "option1": "Soft Skills and Interpersonal Communication (OECS801A)",
      "option2": "History of Science and Engineering (OECS801B)"
    },
    {
      "id": "OE-3",
      "semester": "Sem-8",
      "option1": "Cyber Law and IPR (OECS802A)",
      "option2": "Introduction to Philosophical Thoughts (OECS802B)"
    }
  ]
};

export const batch2023_2027: BatchCurriculum = {
  "batch": "2023-2027",
  "label": "Batch 2023–2027 (Course Curriculum Scheme)",
  "department": "Computer Science & Engineering (Artificial Intelligence)",
  "institution": "Institute of Engineering & Management / University of Engineering & Management",
  "branch": "IT, CSE & Allied Branches",
  "semesters": [
    {
      "semester": 1,
      "title": "Semester I (First year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSM101",
          "name": "Mathematics - I (Calculus & Linear Algebra)",
          "lecture": "3",
          "tutorial": "1",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Basic Science course",
          "code": "BSPH101",
          "name": "Engineering Physics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Engineering Science Course",
          "code": "ESEE101",
          "name": "Basic Electrical & Electronics Engineering",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Engineering Science Course",
          "code": "ESCS101",
          "name": "Programming for Problem Solving (C Programming)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSPH191",
          "name": "Engineering Physics Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESEE191",
          "name": "Basic Electrical & Electronics Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Engineering Science Course",
          "code": "ESCS191",
          "name": "Programming for Problem Solving Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Engineering Science Course",
          "code": "ESME191",
          "name": "Workshop / Manufacturing Practices Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Mandatory Course",
          "code": "INDUCTION",
          "name": "Student Induction Program (3 Weeks)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 2,
      "title": "Semester II (First year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSM201",
          "name": "Mathematics - II (Differential Equations & Complex Analysis)",
          "lecture": "3",
          "tutorial": "1",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Basic Science course",
          "code": "BSCH201",
          "name": "Engineering Chemistry",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Humanities & Social Sciences",
          "code": "HSMC201",
          "name": "English for Professional Communication",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS201",
          "name": "Python Programming & Data Structures Primer",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Basic Science course",
          "code": "BSCH291",
          "name": "Engineering Chemistry Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "1.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESED291",
          "name": "Engineering Graphics & Computer Drafting",
          "lecture": "1",
          "tutorial": "0",
          "practical": "3",
          "sessional": "0",
          "credits": "2.5",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Humanities & Social Sciences",
          "code": "HSMC291",
          "name": "Language & Professional Communication Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS291",
          "name": "Python Programming Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Mandatory Course",
          "code": "MCC271",
          "name": "Environmental Sciences",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 3,
      "title": "Semester III (Second year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Engineering ScienceCourse",
          "code": "ESC301",
          "name": "Analog Electronic Circuits",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Engineering Science Course",
          "code": "ESC302",
          "name": "Digital Electronics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS301",
          "name": "Data structure & Algorithms",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS372",
          "name": "IT Workshop (MATLAB)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Basic Science course",
          "code": "BSM301",
          "name": "Mathematics - III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities & Social Sciences including Management courses",
          "code": "HSMCS301",
          "name": "Humanities - I (Principles of Management)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "7",
          "courseType": "Humanities & Social Sciences including Management courses",
          "code": "ESP301",
          "name": "Essential Studies for Professionals - III",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0.5",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Engineering Science Course",
          "code": "ESC391",
          "name": "Analog Electronic Circuits Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS391",
          "name": "Data structure & Algorithms Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "EngineeringScienceCourse",
          "code": "ESC392",
          "name": "Digital Electronics Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Humanities& Social Sciences includingManagement courses",
          "code": "SDP381",
          "name": "Skill Development for Professionals - III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "0.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Innovative Project",
          "code": "PRJCS381",
          "name": "Innovative Project – I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Courses (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry andForeign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 4,
      "title": "Semester IV (Second year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS401",
          "name": "Discrete Mathematics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS402",
          "name": "ComputerOrganization & Architecture",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS403",
          "name": "Artificial Intelligence &Machine Learning",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "ProfessionalCore Courses",
          "code": "PCCCS404",
          "name": "Design & Analysisof Algorithms",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional Core Courses",
          "code": "PCCCS405",
          "name": "AdvancedProgramming (OOP)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities &Social Sciences including Managementcourses",
          "code": "HSMCS471",
          "name": "Management 1 (Finance & Accounting)",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "7",
          "courseType": "Humanities&Social Sciences including Managementcourses",
          "code": "ESP401",
          "name": "Essential Studies for Professionals - IV",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0.5",
          "category": "Theory Papers"
        },
        {
          "slNo": "8",
          "courseType": "Mandatory Courses",
          "code": "MCC471",
          "name": "Sustainability, Climate Actions & EnvironmentalSciences",
          "lecture": "1",
          "tutorial": "-",
          "practical": "(Field Project)",
          "sessional": "-",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Courses",
          "code": "PCCCS492",
          "name": "Computer Organization & ArchitectureLaboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS493",
          "name": "ArtificialIntelligence & Machine Learning Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS494",
          "name": "Design & Analysis of AlgorithmsLaboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS495",
          "name": "Advanced Programming(OOP) Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "1",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Humanities &Social Sciences including Managementcourses",
          "code": "SDP481",
          "name": "Skill Development for Professionals - IV",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "0.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "InnovativeProject",
          "code": "PRJCS481",
          "name": "Innovative Project– II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Course",
          "code": "PCCCS481",
          "name": "Data Analytics",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive OpenOnline Courses (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "IFC",
          "code": "IFC",
          "name": "Industry andForeign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 5,
      "title": "Semester V (Third year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "EngineeringScience Course",
          "code": "ESC501",
          "name": "Signals & Systems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS501",
          "name": "DatabaseManagementSystems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS502",
          "name": "Theory of Computations",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Core Courses",
          "code": "PCCCS503",
          "name": "Operating Systems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional Core Courses",
          "code": "PCCCS504",
          "name": "Software Engineering",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Professional Core Course",
          "code": "PCCCS575",
          "name": "Neural Network & Deep Learning",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "7",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "ESPCS501",
          "name": "Essential Studies for Professionals (CS) – V",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0.5",
          "category": "Theory Papers"
        },
        {
          "slNo": "8",
          "courseType": "Mandatory Course",
          "code": "MCC571",
          "name": "Constitution of India",
          "lecture": "1",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Courses",
          "code": "PCCCS591",
          "name": "DatabaseManagement Systems Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Core Courses",
          "code": "PCCCS593",
          "name": "OperatingSystems Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Courses",
          "code": "PCCCS594",
          "name": "Software Engineering Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "SDP581",
          "name": "Skill Development for Professionals - V",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "0.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "InnovativeProject",
          "code": "PRJCS581",
          "name": "InnovativeProject – III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Course",
          "code": "PCCCS581",
          "name": "Quantum Computing",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "1",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry andForeignCertification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 6,
      "title": "Semester VI (Third year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS601",
          "name": "Computer Networks",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional ElectiveCourses",
          "code": "PECCS601",
          "name": "Introductory Cyber Security",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional ElectiveCourses",
          "code": "PECS602",
          "name": "Elective-I",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Professional Elective Courses",
          "code": "PECS603",
          "name": "Elective-II",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS602",
          "name": "Cloud Computing & IoT",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "6",
          "courseType": "Humanities & Social Sciences includingManagement course",
          "code": "ESPCS601",
          "name": "Essential Studies for Professionals – VI (CS)",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0.5",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS691",
          "name": "ComputerNetworks Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Professional Elective Courses",
          "code": "PECCS691",
          "name": "Introductory Cyber Security Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional CoreCourses",
          "code": "PCCCS692",
          "name": "Cloud Computing & IoT Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Humanities & Social Sciences including Managementcourse",
          "code": "SDP681",
          "name": "Skill Development for Professionals - VI",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "0.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Project",
          "code": "PRJCS681",
          "name": "Project – I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "6",
          "credits": "3",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Professional Core Course",
          "code": "PCCS681",
          "name": "Generative AI",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "3",
          "credits": "1.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "4",
          "courseType": "Humanities &Social Sciences including Management course",
          "code": "HSMCS682",
          "name": "Humanities - II (Industrial Project Management)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "3",
          "credits": "1.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open OnlineCourse (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification(Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 7,
      "title": "Semester VII (Fourth year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS701",
          "name": "Compiler Design",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "ProfessionalElective Courses",
          "code": "PECS701",
          "name": "Elective-III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Open Elective Courses",
          "code": "OECS701",
          "name": "Open Elective-I",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "ESPCS701",
          "name": "Essential Studies for Professionals – VII (CS)",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0.5",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Professional Core Course",
          "code": "PCCCS791",
          "name": "Compiler Design Laboratory",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "1",
          "courseType": "Humanities &Social Sciences including Managementcourse",
          "code": "SDP781",
          "name": "Skill Development forProfessionals - VII",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "0.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Innovative Project",
          "code": "PRJCS781",
          "name": "Project – II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "12",
          "credits": "6",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Internship",
          "code": "INP781",
          "name": "Internship - I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification(Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        }
      ]
    },
    {
      "semester": 8,
      "title": "Semester VIII (Fourth year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Professional Elective Courses",
          "code": "PECS801",
          "name": "Elective-IV",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Open Elective Courses",
          "code": "OECS801",
          "name": "Open Elective-II",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Open Elective Courses",
          "code": "OECS802",
          "name": "Open Elective-III",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Humanities & Social Sciences includingManagement course",
          "code": "ESP801",
          "name": "Essential Studies for Professionals – VIII",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0.5",
          "category": "Theory Papers"
        },
        {
          "slNo": "1",
          "courseType": "Humanities & Social Sciences including Management course",
          "code": "SDP881",
          "name": "Skill Development forProfessionals - VIII",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "2",
          "credits": "0.5",
          "category": "Sessional Papers"
        },
        {
          "slNo": "2",
          "courseType": "Project",
          "code": "PRJCS881",
          "name": "Project – III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "12",
          "credits": "6",
          "category": "Sessional Papers"
        },
        {
          "slNo": "3",
          "courseType": "Grand Viva",
          "code": "PCCS881",
          "name": "Grand Viva-Voce",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Sessional Papers"
        },
        {
          "slNo": "4",
          "courseType": "Internship",
          "code": "INP881",
          "name": "Internship - II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Sessional Papers"
        },
        {
          "slNo": "1",
          "courseType": "Co-curricular & Extra Curricular Activities",
          "code": "MAR",
          "name": "Mandatory Additional Requirements (Score)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "2",
          "courseType": "Honours",
          "code": "MOOCs",
          "name": "Massive Open Online Course (Credit)",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "3",
          "courseType": "Certification",
          "code": "IFC",
          "name": "Industry and Foreign Certification (Count)",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "0",
          "category": "Mandatory Requirements"
        },
        {
          "slNo": "4",
          "courseType": "Skill Activity Report",
          "code": "SAR",
          "name": "Skill ActivityReport/Skills as Additional Requirement",
          "lecture": "-",
          "tutorial": "-",
          "practical": "-",
          "sessional": "-",
          "credits": "-",
          "category": "Mandatory Requirements"
        }
      ]
    }
  ],
  "professionalElectives": [
    {
      "id": "PE-1",
      "semester": "Sem-6",
      "trackAI": "Soft Computing (PECS602B)",
      "trackDS": "Data Science using Python (PECS602K)"
    },
    {
      "id": "PE-2",
      "semester": "Sem-6",
      "trackAI": "Natural Language Processing (PECS603B)",
      "trackDS": "Cognitive Computing / ServiceNow System Administrator (PECS603E) / (PEC603)"
    },
    {
      "id": "PE-3",
      "semester": "Sem-7",
      "trackAI": "Warehousing and Business Intelligence (PECS701B)",
      "trackDS": "Big Data Computing (PECS701N)"
    },
    {
      "id": "PE-4",
      "semester": "Sem-8",
      "trackAI": "Advanced AI (PECS801B)",
      "trackDS": "Social Media Analytics (PECS801J)"
    }
  ],
  "openElectives": [
    {
      "id": "OE-1",
      "semester": "Sem-7",
      "option1": "Enterprise System (OECS701A)",
      "option2": "Economic Policies in India (OECS701B)"
    },
    {
      "id": "OE-2",
      "semester": "Sem-8",
      "option1": "Soft Skills and Interpersonal Communication (OECS801A)",
      "option2": "History of Science and Engineering (OECS801B)"
    },
    {
      "id": "OE-3",
      "semester": "Sem-8",
      "option1": "Cyber Law and IPR (OECS802A)",
      "option2": "Introduction to Philosophical Thoughts (OECS802B)"
    }
  ]
};

export const batch2021_2025: BatchCurriculum = {
  "batch": "2021-2025",
  "label": "Batch 2021–2025 (Foundation Scheme)",
  "department": "Computer Science & Engineering (Artificial Intelligence)",
  "institution": "Institute of Engineering & Management / University of Engineering & Management",
  "branch": "CSE (Artificial Intelligence)",
  "semesters": [
    {
      "semester": 1,
      "title": "Semester I (First year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Theory Core Course",
          "code": "CS101",
          "name": "Introduction to Programming",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Theory Core Course",
          "code": "MA101",
          "name": "Engineering Mathematics I",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Theory Core Course",
          "code": "PH101",
          "name": "Engineering Physics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Practical Lab",
          "code": "CS102",
          "name": "Programming Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "5",
          "courseType": "Theory Core Course",
          "code": "EE101",
          "name": "Basic Electrical Engineering",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        }
      ]
    },
    {
      "semester": 2,
      "title": "Semester II (First year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Theory Core Course",
          "code": "CS201",
          "name": "Data Structures",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Theory Core Course",
          "code": "MA201",
          "name": "Engineering Mathematics II",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Theory Core Course",
          "code": "CS202",
          "name": "Digital Logic Design",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Practical Lab",
          "code": "CS203",
          "name": "Data Structures Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "5",
          "courseType": "Theory Core Course",
          "code": "HS201",
          "name": "Professional Communication",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        }
      ]
    },
    {
      "semester": 3,
      "title": "Semester III (Second year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Theory Core Course",
          "code": "CS301",
          "name": "Algorithms",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Theory Core Course",
          "code": "CS302",
          "name": "Discrete Mathematics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Theory Core Course",
          "code": "CS303",
          "name": "Computer Organization",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Theory Core Course",
          "code": "AI301",
          "name": "Introduction to AI",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Practical Lab",
          "code": "CS304",
          "name": "Algorithms Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        }
      ]
    },
    {
      "semester": 4,
      "title": "Semester IV (Second year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Theory Core Course",
          "code": "CS401",
          "name": "Operating Systems",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Theory Core Course",
          "code": "CS402",
          "name": "Database Systems",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Theory Core Course",
          "code": "AI401",
          "name": "Machine Learning",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Theory Core Course",
          "code": "AI402",
          "name": "Probability & Statistics for AI",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Practical Lab",
          "code": "AI403",
          "name": "ML Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        }
      ]
    },
    {
      "semester": 5,
      "title": "Semester V (Third year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Theory Core Course",
          "code": "CS501",
          "name": "Computer Networks",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Theory Core Course",
          "code": "AI501",
          "name": "Deep Learning",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Theory Core Course",
          "code": "AI502",
          "name": "Natural Language Processing",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Practical Lab",
          "code": "AI503",
          "name": "Deep Learning Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "5",
          "courseType": "Elective Course",
          "code": "CS502",
          "name": "Elective I",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        }
      ]
    },
    {
      "semester": 6,
      "title": "Semester VI (Third year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Theory Core Course",
          "code": "AI601",
          "name": "Computer Vision",
          "lecture": "4",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "4",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Theory Core Course",
          "code": "AI602",
          "name": "Reinforcement Learning",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Theory Core Course",
          "code": "AI603",
          "name": "Big Data Analytics",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Practical Lab",
          "code": "AI604",
          "name": "CV & RL Lab",
          "lecture": "0",
          "tutorial": "0",
          "practical": "2",
          "sessional": "0",
          "credits": "2",
          "category": "Practical Papers"
        },
        {
          "slNo": "5",
          "courseType": "Elective Course",
          "code": "CS602",
          "name": "Elective II",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        }
      ]
    },
    {
      "semester": 7,
      "title": "Semester VII (Fourth year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Theory Core Course",
          "code": "AI701",
          "name": "Generative AI",
          "lecture": "3",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "2",
          "courseType": "Theory Core Course",
          "code": "AI702",
          "name": "AI Ethics & Safety",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Elective Course",
          "code": "CS701",
          "name": "Elective III",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "4",
          "courseType": "Elective Course",
          "code": "CS702",
          "name": "Elective IV",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        },
        {
          "slNo": "5",
          "courseType": "Practical Lab",
          "code": "AI703",
          "name": "Mini Project",
          "lecture": "0",
          "tutorial": "0",
          "practical": "4",
          "sessional": "0",
          "credits": "4",
          "category": "Practical Papers"
        }
      ]
    },
    {
      "semester": 8,
      "title": "Semester VIII (Fourth year)",
      "courses": [
        {
          "slNo": "1",
          "courseType": "Practical Lab",
          "code": "AI801",
          "name": "Major Project / Thesis",
          "lecture": "0",
          "tutorial": "0",
          "practical": "12",
          "sessional": "0",
          "credits": "12",
          "category": "Practical Papers"
        },
        {
          "slNo": "2",
          "courseType": "Theory Core Course",
          "code": "AI802",
          "name": "Seminar",
          "lecture": "2",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "2",
          "category": "Theory Papers"
        },
        {
          "slNo": "3",
          "courseType": "Elective Course",
          "code": "CS801",
          "name": "Elective V",
          "lecture": "0",
          "tutorial": "0",
          "practical": "0",
          "sessional": "0",
          "credits": "3",
          "category": "Theory Papers"
        }
      ]
    }
  ]
};

export const curriculumBatches: BatchCurriculum[] = [
  batch2025_2029,
  batch2024_2028,
  batch2023_2027,
  batch2021_2025,
];
