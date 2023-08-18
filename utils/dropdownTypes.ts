export type themeType =
  | "حديثة"
  | "بسيطة"
  | "احترافية"
  | "استوائية";

export const themes: themeType[] = [
  "حديثة",
  "بسيطة",
  "احترافية",
  "استوائية",
];

export type roomType =
  | "غرفة المعيشة"
  | "غرفة الطعام"
  | "مكتب"
  | "غرفة النوم"
  | "الحمام";

export const rooms: roomType[] = [
  "غرفة المعيشة",
  "غرفة الطعام",
  "مكتب",
  "غرفة النوم",
  "الحمام",
];

export const translateTheme = (theme: themeType) => {
  switch (theme) {
    case "حديثة":
      return "Modern";
    case "بسيطة":
      return "Minimalist";
    case "احترافية":
      return "Professional";
    case "استوائية":
      return "Tropical";
  }
}

export const translateRoom = (room: roomType) => {
  switch (room) {
    case "غرفة المعيشة":
      return "Living Room";
    case "غرفة الطعام":
      return "Dining Room";
    case "مكتب":
      return "Office";
    case "غرفة النوم":
      return "Bedroom";
    case "الحمام":
      return "Bathroom";
  }
}
