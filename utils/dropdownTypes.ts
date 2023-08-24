export type themeType =
  | "حديث"
  | "بسيط"
  | "شيك"
  | "هندي"
  | "ياباني"
  | "اسكندنافي"
  | "فرنسي"
  | "مزرعة"
  | "ساحلي"
  | "ريفي"
  | "استوائي";

export const themes: themeType[] = [
  "حديث",
  "بسيط",
  "شيك",
  "هندي",
  "ياباني",
  "اسكندنافي",
  "فرنسي",
  "مزرعة",
  "ساحلي",
  "استوائي",
];

export type roomType =
  | "غرفة المعيشة"
  | "غرفة الطعام"
  | "مكتب"
  | "غرفة النوم"
  | "الحمام"
  | "المطبخ";

export const rooms: roomType[] = [
  "غرفة المعيشة",
  "غرفة الطعام",
  "مكتب",
  "غرفة النوم",
  "الحمام",
  "المطبخ",
];

export const translateTheme = (theme: themeType) => {
  switch (theme) {
    case "حديث":
      return "Modern";
    case "بسيط":
      return "Minimalist";
    case "استوائي":
      return "Tropical";
    case "هندي":
      return "Indian";
    case "ياباني":
      return "Japanese";
    case "اسكندنافي":
      return "Scandinavian";
    case "مزرعة":
      return "Farmhouse";
    case "ساحلي":
      return "Coastal";
    case "ريفي":
      return "Rustic";
    case "فرنسي":
      return "French Country";
    case "شيك":
      return "Shabby Chic";
  }
};

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
    case "المطبخ":
      return "Kitchen";
  }
};
