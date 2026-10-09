import { describe, it, expect } from "vitest";
import {
  curriculum,
  academicCalendar,
  publications,
  annexures,
  placementStats,
  faculty,
  galleryImages,
  researchHighlights,
  fundedProjects,
  patents,
  events,
  achievements,
  phdScholars,
  notices,
} from "@/data/departmentData";
import { getAcademicYear, ACADEMIC_YEAR_OPTIONS } from "@/lib/academicYear";
import {
  batch2025_2029,
  batch2024_2028,
  batch2023_2027,
  curriculumBatches,
} from "@/data/curriculumData";
import { academicsSubSections } from "@/components/academics/AcademicsSubNav";

describe("Department Data Integrity", () => {
  it("should have all 8 semesters defined with courses and credits in B.Tech curriculum", () => {
    expect(curriculum.btech).toHaveLength(8);
    curriculum.btech.forEach((sem) => {
      expect(sem.courses.length).toBeGreaterThan(0);
      sem.courses.forEach((c) => {
        expect(c.code).toBeTruthy();
        expect(c.name).toBeTruthy();
        expect(c.credits).toBeGreaterThan(0);
      });
    });
  });

  it("should have valid academic calendar events", () => {
    expect(academicCalendar.length).toBeGreaterThan(0);
    academicCalendar.forEach((event) => {
      expect(event.event).toBeTruthy();
      expect(event.date).toBeTruthy();
      expect(["semester", "holiday", "exam"]).toContain(event.type);
    });
  });

  it("should have unique compound IDs when combining publications and annexures", () => {
    const pubIds = publications.map((p) => `pub-${p.id}`);
    const annexIds = annexures.map((a) => `annex-${a.id}`);
    const combined = [...pubIds, ...annexIds];
    const uniqueSet = new Set(combined);

    expect(uniqueSet.size).toBe(combined.length);
  });

  it("should have complete placement statistics", () => {
    expect(placementStats.length).toBeGreaterThan(0);
    const stat = placementStats[0];
    expect(stat.totalStudents).toBeGreaterThan(0);
    expect(stat.eligibleStudents).toBeGreaterThan(0);
    expect(stat.studentsPlaced).toBeGreaterThan(0);
    expect(stat.placementPercentage).toBeGreaterThan(0);
  });

  it("should have valid faculty entries", () => {
    expect(faculty.length).toBeGreaterThan(0);
    faculty.forEach((f) => {
      expect(f.id).toBeTruthy();
      expect(f.name).toBeTruthy();
      expect(f.email).toContain("@");
    });
  });

  it("should have valid gallery images with recognized categories", () => {
    const validCategories = ["labs", "events", "students", "campus", "faculty"];
    galleryImages.forEach((img) => {
      expect(img.id).toBeGreaterThan(0);
      expect(img.title).toBeTruthy();
      expect(validCategories).toContain(img.category);
    });
  });

  it("should ensure all PIs in researchHighlights and fundedProjects have valid academic titles (Prof. or Dr.)", () => {
    researchHighlights.forEach((rh) => {
      expect(rh.pi.startsWith("Prof.") || rh.pi.startsWith("Dr.")).toBe(true);
    });
    fundedProjects.forEach((fp) => {
      expect(fp.pi.startsWith("Prof.") || fp.pi.startsWith("Dr.")).toBe(true);
    });
  });

  it("should format Sudipta Sahana with Prof. (Dr.) in faculty, but plain name without prefix in publications", () => {
    const hod = faculty.find((f) => f.id === "Sudipta Sahana");
    expect(hod).toBeDefined();
    expect(hod?.name).toBe("Prof. (Dr.) Sudipta Sahana");

    publications.forEach((pub) => {
      pub.authors.forEach((author) => {
        if (author.includes("Sahana")) {
          expect(author).toBe("Sudipta Sahana");
        }
      });
    });
  });

  it("should ensure publication and annexure author names never contain Prof. or Dr. prefixes", () => {
    const titlePrefixRegex = /^(Prof\.?|Dr\.?)\s+/i;
    publications.forEach((pub) => {
      pub.authors.forEach((author) => {
        expect(titlePrefixRegex.test(author)).toBe(false);
      });
    });
    annexures.forEach((annex) => {
      annex.authors.forEach((author) => {
        expect(titlePrefixRegex.test(author)).toBe(false);
      });
    });

    const kishanPub = publications.find((p) =>
      p.title.includes("Device-Adaptable Responsive Web App")
    );
    expect(kishanPub).toBeDefined();
    expect(kishanPub?.authors).toEqual(["Kishan Singh", "Matangini Chattopadhyay"]);
    expect(kishanPub?.year).toBe(2026);
    expect(kishanPub?.type).toBe("conference");
    expect(kishanPub?.doi).toBe("https://doi.org/10.1007/978-3-032-19690-3_20");
    expect(getAcademicYear(kishanPub?.journal, kishanPub?.year)).toBe("2025-2026");
  });

  it("should calculate July to June academic years accurately, ending in June and starting in July", () => {
    // July start boundary tests (new academic year starts in July)
    expect(getAcademicYear("2024-07-01")).toBe("2024-2025");
    expect(getAcademicYear("2025-07-01")).toBe("2025-2026");
    expect(getAcademicYear("2026-07-01")).toBe("2026-2027");

    // June end boundary tests (academic year ends in June)
    expect(getAcademicYear("2024-06-30")).toBe("2023-2024");
    expect(getAcademicYear("2025-06-30")).toBe("2024-2025");
    expect(getAcademicYear("2026-06-30")).toBe("2025-2026");

    // Dotted / slashed format tests
    expect(getAcademicYear("17.02.2024", 2024)).toBe("2023-2024");
    expect(getAcademicYear("24.08.2024", 2024)).toBe("2024-2025");
    expect(getAcademicYear("24.03.2025", 2025)).toBe("2024-2025");
    expect(getAcademicYear("23/07/2025", 2025)).toBe("2025-2026");
    expect(getAcademicYear("02.09.2025", 2025)).toBe("2025-2026");
    expect(getAcademicYear("02.03.2026", 2026)).toBe("2025-2026");
    expect(getAcademicYear("02.03.2027", 2027)).toBe("2026-2027");
    expect(getAcademicYear("02.03.2030", 2030)).toBe("2029-2030");

    // Natural text and conference dates
    expect(getAcademicYear("July 25th-26th, 2024", 2024)).toBe("2024-2025");
    expect(getAcademicYear("February 21st-22nd, 2025", 2025)).toBe("2024-2025");
    expect(getAcademicYear("ICAEMT 2024 19 th and 20 th Dec", 2024)).toBe("2024-2025");
    expect(getAcademicYear("3rd International Conference on Advanced Computing and Applications (ICACA-2024)", 2024)).toBe("2023-2024");
    expect(getAcademicYear("Doctoral Symposium on Human Centered Computing, 2024 (HUMAN – 2024)", 2024)).toBe("2023-2024");
    expect(getAcademicYear("July 2025", 2025)).toBe("2025-2026");
    expect(getAcademicYear("August 2025", 2025)).toBe("2025-2026");

    // ISO date format tests
    expect(getAcademicYear("2026-07-25")).toBe("2026-2027");
    expect(getAcademicYear("2026-02-28")).toBe("2025-2026");
    expect(getAcademicYear("2025-10-20")).toBe("2025-2026");
    expect(getAcademicYear("2025-01-29")).toBe("2024-2025");
    expect(getAcademicYear("2024-07-25")).toBe("2024-2025");

    expect(ACADEMIC_YEAR_OPTIONS).toContain("2026-2027");
    expect(ACADEMIC_YEAR_OPTIONS).toContain("2025-2026");
    expect(ACADEMIC_YEAR_OPTIONS).toContain("2024-2025");
    expect(ACADEMIC_YEAR_OPTIONS).toContain("2023-2024");
  });

  it("should have valid year fields and single grant dates in fundedProjects and patents", () => {
    const fpYears = fundedProjects.map((p) => p.year);
    const patentYears = patents.map((p) => p.year);

    expect(fpYears).toContain(2024);
    expect(fpYears).toContain(2025);
    expect(fpYears).toContain(2026);
    expect(patentYears).toContain(2026);

    expect(fundedProjects.length).toBe(49);
    fundedProjects.forEach((p) => {
      expect(p.year).toBeGreaterThanOrEqual(2020);
      expect(["ongoing", "completed"]).toContain(p.status);
      // All internal projects must have single grant date (DD.MM.YYYY)
      expect(p.duration).toMatch(/^\d{2}\.\d{2}\.\d{4}$/);
      const ay = getAcademicYear(p.duration, p.year);
      expect(ACADEMIC_YEAR_OPTIONS as readonly string[]).toContain(ay);
    });

    // Verify projects 40 to 43 have year 2026 and duration 02.03.2026
    [40, 41, 42, 43].forEach((id) => {
      const proj = fundedProjects.find((p) => p.id === id);
      expect(proj).toBeDefined();
      expect(proj?.year).toBe(2026);
      expect(proj?.duration).toBe("02.03.2026");
      expect(getAcademicYear(proj?.duration, proj?.year)).toBe("2025-2026");
    });

    const completedInternal = fundedProjects.filter(
      (p) => p.agency === "Internal" && p.status === "completed"
    );
    expect(completedInternal.length).toBe(17);

    const ongoingInternal = fundedProjects.filter(
      (p) => p.agency === "Internal" && p.status === "ongoing"
    );
    expect(ongoingInternal.length).toBe(32);
    ongoingInternal.forEach((p) => {
      expect(p.amount.startsWith("₹")).toBe(true);
      expect(p.year).toBeGreaterThanOrEqual(2025);
    });

    // Verify sample new projects
    const cropMind = fundedProjects.find((p) => p.title.includes("CropMind"));
    expect(cropMind).toBeDefined();
    expect(cropMind?.duration).toBe("02.03.2026");

    const thrust = fundedProjects.find((p) => p.title.includes("Thrust-Assisted"));
    expect(thrust).toBeDefined();
    expect(thrust?.duration).toBe("02.04.2026");

    patents.forEach((p) => {
      expect(p.year).toBeGreaterThanOrEqual(2020);
      expect(["Filed", "Published", "Granted"]).toContain(p.status);
    });

    expect(patents.length).toBe(12);
    const patent12 = patents.find((p) => p.id === 12);
    expect(patent12).toBeDefined();
    expect(patent12?.inventors).toBe("Dr. Moumita Chakraborty");
    expect(patent12?.applicationNo).toBe("466951-001");
    expect(patent12?.date).toBe("23/07/2025");
    expect(patent12?.year).toBe(2025);
    expect(patent12?.status).toBe("Granted");
    expect(getAcademicYear(patent12?.date || patent12?.applicationNo, patent12?.year)).toBe("2025-2026");
  });

  it("should have valid events with dates mappable to academic years", () => {
    expect(events.length).toBeGreaterThan(0);
    events.forEach((e) => {
      expect(e.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      const ay = getAcademicYear(e.date);
      expect(ACADEMIC_YEAR_OPTIONS as readonly string[]).toContain(ay);
    });

    const raaisa4 = events.find((e) => e.title === "RAAISA 4.0");
    expect(raaisa4).toBeDefined();
    expect(raaisa4?.date).toBe("2026-12-14");
    expect(raaisa4?.endDate).toBe("2026-12-15");
    expect(raaisa4?.type).toBe("Conference");
  });

  it("should have student achievements ordered new to old with valid dates and academic years", () => {
    expect(achievements.studentAchievements.length).toBeGreaterThan(0);
    const dates = achievements.studentAchievements.map((a) => a.date);
    
    // All achievements have valid ISO date
    dates.forEach((d) => {
      expect(d).toBeDefined();
      expect(d).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    // Check sorted new to old (chronologically descending)
    for (let i = 0; i < dates.length - 1; i++) {
      const current = new Date(dates[i]!).getTime();
      const next = new Date(dates[i + 1]!).getTime();
      expect(current).toBeGreaterThanOrEqual(next);
    }
  });

  it("should have valid 2025-2029 batch curriculum structure across all 8 semesters", () => {
    expect(batch2025_2029.semesters).toHaveLength(8);
    batch2025_2029.semesters.forEach((sem) => {
      expect(sem.courses.length).toBeGreaterThan(0);
      sem.courses.forEach((c) => {
        expect(c.code).toBeTruthy();
        expect(c.name).toBeTruthy();
        expect(c.category).toBeTruthy();
        expect(["Theory Papers", "Practical Papers", "Sessional Papers", "Mandatory Requirements"]).toContain(c.category);
      });
    });

    // Verify professional electives and tracks
    expect(batch2025_2029.professionalElectives).toBeDefined();
    expect(batch2025_2029.professionalElectives?.length).toBe(4);
    batch2025_2029.professionalElectives?.forEach((pe) => {
      expect(pe.trackAI).toBeTruthy();
      expect(pe.trackDS).toBeTruthy();
    });

    // Verify open electives
    expect(batch2025_2029.openElectives).toBeDefined();
    expect(batch2025_2029.openElectives?.length).toBe(3);

    // Verify batch dropdown options
    expect(curriculumBatches.length).toBe(4);
    expect(curriculumBatches.map((b) => b.batch)).toEqual([
      "2025-2029",
      "2024-2028",
      "2023-2027",
      "2021-2025",
    ]);
  });

  it("should have valid 2024-2028 and 2023-2027 batch curriculum structures across all 8 semesters", () => {
    [batch2024_2028, batch2023_2027].forEach((batch) => {
      expect(batch.semesters).toHaveLength(8);
      batch.semesters.forEach((sem) => {
        expect(sem.courses.length).toBeGreaterThan(0);
        sem.courses.forEach((c) => {
          expect(c.code).toBeTruthy();
          expect(c.name).toBeTruthy();
          expect(c.category).toBeTruthy();
          expect([
            "Theory Papers",
            "Practical Papers",
            "Sessional Papers",
            "Mandatory Requirements",
          ]).toContain(c.category);
        });
      });

      // Verify electives
      expect(batch.professionalElectives).toBeDefined();
      expect(batch.professionalElectives?.length).toBe(4);
      batch.professionalElectives?.forEach((pe) => {
        expect(pe.trackAI).toBeTruthy();
        expect(pe.trackDS).toBeTruthy();
      });

      expect(batch.openElectives).toBeDefined();
      expect(batch.openElectives?.length).toBe(3);
    });
  });

  it("should define academic subsections with expected titles and valid routes", () => {
    expect(academicsSubSections).toHaveLength(3);
    const routes = academicsSubSections.map((s) => s.href);
    expect(routes).toContain("/academics/programs");
    expect(routes).toContain("/academics/curriculum");
    expect(routes).toContain("/academics/calendar");
    academicsSubSections.forEach((s) => {
      expect(s.title).toBeTruthy();
      expect(s.desc).toBeTruthy();
      expect(s.icon).toBeDefined();
    });
  });

  it("should have valid Ph.D. scholars and not include Sudipa", () => {
    expect(phdScholars.length).toBeGreaterThan(0);
    const scholarNames = phdScholars.map((s) => s.name.toLowerCase());
    expect(scholarNames.some((n) => n.includes("sudipa"))).toBe(false);
    phdScholars.forEach((s) => {
      expect(s.id).toBeGreaterThan(0);
      expect(s.name).toBeTruthy();
      expect(s.supervisor).toBeTruthy();
      expect(s.enrolmentNumber).toBeTruthy();
      expect(["ongoing", "awarded"]).toContain(s.status);
    });
  });

  it("should have valid notices with the 7 latest notices prioritized as important", () => {
    expect(notices).toHaveLength(17);
    const top7 = notices.slice(0, 7);
    expect(top7.every((n) => n.isImportant)).toBe(true);

    const practicalNotice = notices.find((n) => n.id === 1);
    expect(practicalNotice?.title).toContain("Even Semester 2026 - 2027 Term - I Practical/Sessional Examination Schedule");
    expect(practicalNotice?.category).toBe("exam");
    expect(practicalNotice?.publishedDate).toBe("2026-09-18");

    const oddExamNotice = notices.find((n) => n.id === 2);
    expect(oddExamNotice?.title).toContain("Odd Semester 2026 - 2027 Term - I Examination Schedule");
    expect(oddExamNotice?.category).toBe("exam");
    expect(oddExamNotice?.publishedDate).toBe("2026-09-07");

    const projectExamNotice = notices.find((n) => n.id === 3);
    expect(projectExamNotice?.title).toContain("Innovative Project – I (PRJCS381), Innovative Project – III (PRJCS581)");
    expect(projectExamNotice?.category).toBe("exam");
    expect(projectExamNotice?.publishedDate).toBe("2026-09-07");

    const libraryNotice = notices.find((n) => n.id === 4);
    expect(libraryNotice?.title).toContain("Library: The Library remains open 24x7x365");
    expect(libraryNotice?.category).toBe("general");
    expect(libraryNotice?.publishedDate).toBe("2026-08-05");

    const nptelNotice = notices.find((n) => n.id === 5);
    expect(nptelNotice?.title).toContain("NPTEL Set 1 course enrollment for Jul–Dec 2026 is extended to August 3, 2026");
    expect(nptelNotice?.category).toBe("exam");
    expect(nptelNotice?.publishedDate).toBe("2026-07-29");

    const visionNotice = notices.find((n) => n.id === 6);
    expect(visionNotice?.title).toContain("Vision 2030");
    expect(visionNotice?.category).toBe("circular");
    expect(visionNotice?.publishedDate).toBe("2026-07-20");

    const grantNotice = notices.find((n) => n.id === 7);
    expect(grantNotice?.title).toContain("Grant-in-Aid");
    expect(grantNotice?.category).toBe("circular");
    expect(grantNotice?.publishedDate).toBe("2026-07-20");
  });
});
