/**
 * Utility to calculate Academic Year (Session) based on July to June calendar.
 * - July 1 to December 31 of Year Y => Session Y-(Y+1) (e.g. August 2024 => 2024-2025)
 * - January 1 to June 30 of Year Y => Session (Y-1)-Y (e.g. February 2025 => 2024-2025)
 */
export const ACADEMIC_YEAR_OPTIONS = [
  "2026-2027",
  "2025-2026",
  "2024-2025",
  "2023-2024",
] as const;

export type AcademicYearOption = (typeof ACADEMIC_YEAR_OPTIONS)[number];

export function getAcademicYear(
  dateOrText?: string,
  calendarYear?: number
): string {
  const str = (dateOrText || "").toLowerCase();

  // 1. ISO format like "2026-07-25" or "2025/03/15" or "2024-12-14"
  const dateIso = str.match(/\b(\d{4})[-/](\d{1,2})[-/](\d{1,2})\b/);
  if (dateIso) {
    const y = parseInt(dateIso[1], 10);
    const m = parseInt(dateIso[2], 10);
    // Academic Year starts in July (m >= 7) and ends in June (m < 7)
    return m >= 7 ? `${y}-${y + 1}` : `${y - 1}-${y}`;
  }

  // 2. Dotted or slashed format like "29.01.2024" or "19/08/2024" or "02.09.2025" or "02.04.26"
  const dateDotted = str.match(/\b(\d{1,2})[.-/](\d{1,2})[.-/](\d{2,4})\b/);
  if (dateDotted) {
    const m = parseInt(dateDotted[2], 10);
    let y = parseInt(dateDotted[3], 10);
    if (y < 100) y += 2000;
    // Academic Year starts in July (m >= 7) and ends in June (m < 7)
    return m >= 7 ? `${y}-${y + 1}` : `${y - 1}-${y}`;
  }

  // 3. Named months and standard abbreviations
  const months = [
    { name: "january", m: 1 },
    { name: "february", m: 2 },
    { name: "march", m: 3 },
    { name: "april", m: 4 },
    { name: "may", m: 5 },
    { name: "june", m: 6 },
    { name: "july", m: 7 },
    { name: "august", m: 8 },
    { name: "september", m: 9 },
    { name: "october", m: 10 },
    { name: "november", m: 11 },
    { name: "december", m: 12 },
    { name: "jan", m: 1 },
    { name: "feb", m: 2 },
    { name: "mar", m: 3 },
    { name: "apr", m: 4 },
    { name: "jun", m: 6 },
    { name: "jul", m: 7 },
    { name: "aug", m: 8 },
    { name: "sep", m: 9 },
    { name: "oct", m: 10 },
    { name: "nov", m: 11 },
    { name: "dec", m: 12 },
  ];

  // 3A. Month name then year nearby: e.g. "July 25th-26th, 2024", "July 2024", "1st May, 2025"
  for (const mn of months) {
    const m1 = str.match(new RegExp(`\\b${mn.name}\\b.{0,45}?(20\\d{2})\\b`, "i"));
    if (m1) {
      const y = parseInt(m1[1], 10);
      return mn.m >= 7 ? `${y}-${y + 1}` : `${y - 1}-${y}`;
    }

    // 3B. Year nearby then month name: e.g. "2024 ... Dec", "2024 ... July", "2025 ... February"
    const m2 = str.match(new RegExp(`\\b(20\\d{2})\\b.{0,45}?\\b${mn.name}\\b`, "i"));
    if (m2) {
      const y = parseInt(m2[1], 10);
      return mn.m >= 7 ? `${y}-${y + 1}` : `${y - 1}-${y}`;
    }
  }

  // 4. Known departmental conference events where month was omitted from journal abbreviation
  const confEvents: Array<{ pattern: RegExp; m: number; y: number }> = [
    { pattern: /\bicaca[-–—\s]+2024\b/i, m: 2, y: 2024 },     // Feb 2024 => 2023-2024
    { pattern: /\bhuman[-–—\s]+2024\b/i, m: 3, y: 2024 },     // Mar 2024 => 2023-2024
    { pattern: /\bichcsc[-–—\s]+2024\b/i, m: 7, y: 2024 },    // Jul 2024 => 2024-2025
    { pattern: /\braor[sb]a[-–—\s]+2024\b/i, m: 7, y: 2024 }, // Jul 2024 => 2024-2025
    { pattern: /\bra{1,2}isa[-–—\s]+2024\b/i, m: 12, y: 2024 }, // Dec 2024 => 2024-2025
    { pattern: /\bsswc[-–—\s]+2024\b/i, m: 11, y: 2024 },     // Nov 2024 => 2024-2025
    { pattern: /\birtm[-–—\s]+2024\b/i, m: 12, y: 2024 },     // Dec 2024 => 2024-2025
    { pattern: /\bisacc\b/i, m: 2, y: 2025 },                // Feb 2025 => 2024-2025
    { pattern: /\bwin\s*6\.0\b/i, m: 2, y: 2025 },           // Feb 2025 => 2024-2025
    { pattern: /\bicaec?ct\b/i, m: 1, y: 2025 },             // Jan 2025 => 2024-2025
    { pattern: /\braicc[ia]t?\b/i, m: 4, y: 2025 },          // Apr 2025 => 2024-2025
    { pattern: /\bcicba\b/i, m: 7, y: 2025 },                // Jul 2025 => 2025-2026
    { pattern: /\bicaiet\b/i, m: 8, y: 2025 },               // Aug 2025 => 2025-2026
  ];
  for (const conf of confEvents) {
    if (conf.pattern.test(str)) {
      return conf.m >= 7 ? `${conf.y}-${conf.y + 1}` : `${conf.y - 1}-${conf.y}`;
    }
  }

  // 5. Month name anywhere in string with calendarYear or year found in string
  for (const mn of months) {
    if (new RegExp(`\\b${mn.name}\\b`, "i").test(str)) {
      const yearMatch = str.match(/\b(20\d{2})\b/);
      const y = yearMatch ? parseInt(yearMatch[1], 10) : calendarYear;
      if (y) {
        return mn.m >= 7 ? `${y}-${y + 1}` : `${y - 1}-${y}`;
      }
    }
  }

  // 6. Fallback using year found in string or calendarYear
  const yearMatch = str.match(/\b(20\d{2})\b/);
  const y = yearMatch ? parseInt(yearMatch[1], 10) : calendarYear;
  if (y) {
    if (y === 2026) return "2025-2026";
    if (y === 2025) return "2024-2025";
    if (y === 2024) return "2024-2025";
    return `${y - 1}-${y}`;
  }

  return "2024-2025";
}
