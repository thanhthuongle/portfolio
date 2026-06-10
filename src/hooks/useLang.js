import { useTranslation } from 'react-i18next';

/**
 * Trả về hàm `pick` để lấy giá trị song ngữ từ object { vi, en }.
 * Dùng cho dữ liệu trong src/data/*.js.
 *
 *   const { pick, lang } = useLang();
 *   pick(profile.title) // -> chuỗi theo ngôn ngữ hiện tại
 */
export function useLang() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('vi') ? 'vi' : 'en';
  const pick = (value) => {
    if (value == null) return '';
    if (typeof value === 'object') return value[lang] ?? value.en ?? '';
    return value;
  };
  return { pick, lang };
}
