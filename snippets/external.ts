/* eslint-disable no-console */

// #region snippet
// Inside ./snippets/external.ts
export function emptyArray<T>(length: number) {
  return Array.from<T>({ length });
}
// #endregion snippet

export function sayHello() {
  console.log("Hello from snippets/external.ts");
}

import { ref } from "vue";

export function useNumberTranslation() {
  const englishToArabic = ref({
    "0": "٠",
    "1": "١",
    "2": "٢",
    "3": "٣",
    "4": "٤",
    "5": "٥",
    "6": "٦",
    "7": "٧",
    "8": "٨",
    "9": "٩",
  });

  const convertNumbers = (text: string): string => {
    return text.replace(
      /[0-9]/g,
      (match) => englishToArabic.value[match] || match
    );
  };

  return {
    convertNumbers,
  };
}
