export type themeType =
  | "حديث"
  | "بسيط"
  | "شيك"
  | "هندي"
  | "مغربي"
  | "ياباني"
  | "بوهيمي"
  | "اسكندنافي"
  | "فرنسي"
  | "صناعي"
  | "مزرعة"
  | "ساحلي"
  | "ريفي"
  | "استوائي"
  | "متألق"
  | "تقليدي"
  | "انتقالي";

export const themes: themeType[] = [
  "حديث",
  "بسيط",
  "شيك",
  "هندي",
  "مغربي",
  "ياباني",
  "بوهيمي",
  "اسكندنافي",
  "فرنسي",
  "صناعي",
  "مزرعة",
  "ساحلي",
  "ريفي",
  "استوائي",
  "متألق",
  "تقليدي",
  "انتقالي",
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
    case "مغربي":
      return "Moroccan";
    case "ياباني":
      return "Japanese";
    case "بوهيمي":
      return "Bohemian";
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
    case "متألق":
      return "Glam";
    case "شيك":
      return "Shabby Chic";
    case "تقليدي":
      return "Traditional";
    case "انتقالي":
      return "Transitional";
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
