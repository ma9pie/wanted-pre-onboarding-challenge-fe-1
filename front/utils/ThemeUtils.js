const ThemeUtils = () => {};

// 라이트 모드
ThemeUtils.setLight = () => {
  document.documentElement.setAttribute("data-theme", "Light");
  localStorage.setItem("theme", "Light");
};
// 다크 모드
ThemeUtils.setDark = () => {
  document.documentElement.setAttribute("data-theme", "Dark");
  localStorage.setItem("theme", "Dark");
};

export default ThemeUtils;
