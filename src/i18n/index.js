import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import vi from './vi.json';
import en from './en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
    },
    fallbackLng: 'en',
    supportedLngs: ['vi', 'en'],
    interpolation: { escapeValue: false },
    detection: {
      // Chỉ đọc/ghi từ localStorage để F5 giữ đúng ngôn ngữ đã chọn;
      // lần đầu chưa có lưu sẽ rơi về fallbackLng ('en').
      order: ['localStorage'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
  });

// Đồng bộ thuộc tính lang của thẻ <html>
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;
