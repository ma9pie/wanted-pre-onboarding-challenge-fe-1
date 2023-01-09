import moon from "@/images/moon.svg";
import sun from "@/images/sun.svg";
import ThemeUtils from "@/utils/ThemeUtils";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const Theme = (props) => {
  const [theme, setTheme] = useState("Light");

  // 테마 변경
  const toggleTheme = () => {
    if (theme === "Dark") {
      ThemeUtils.setLight();
      setTheme("Light");
    } else {
      ThemeUtils.setDark();
      setTheme("Dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "Light") {
      ThemeUtils.setLight();
      setTheme("Light");
    } else {
      ThemeUtils.setDark();
      setTheme("Dark");
    }
  }, []);

  return (
    <Wrapper {...props} onClick={toggleTheme}>
      {theme === "Light" && (
        <Image src={sun} alt="theme_icon" width={30} height={30}></Image>
      )}
      {theme === "Dark" && (
        <Image src={moon} alt="theme_icon" width={30} height={30}></Image>
      )}
    </Wrapper>
  );
};

export default Theme;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  cursor: pointer;
`;
