import { useEffect, useState } from "react";
import style from "./Footer.module.css";
import Codepen from "../SVGS/SocialMediaIcons/Codepen";
import Twitter from "../SVGS/SocialMediaIcons/Twitter";
import Instagram from "../SVGS/SocialMediaIcons/Instagram";
import Git from "../SVGS/SocialMediaIcons/Git";
import LinkedIn from "../SVGS/SocialMediaIcons/LinkedIn";
import Logo from "../SVGS/Logo/Logo";
import UpArrow from "../SVGS/UpArrow";
import Link from "next/link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 900) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className={style["footer-wrapper"]}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <div className={style["socialmeadia-icons-container"]}>
            <a
              href="https://github.com/Erhruday"
              target={"_blank"}
              rel="noreferrer"
              className={style.a}
            >
              <Git dynamicClass={`${style["socialmeadia-icon"]}`} />
            </a>
            <a
              href="https://www.instagram.com/h_r_u_d_a_y_.r_a_n_j_a_n/"
              target={"_blank"}
              rel="noreferrer"
              className={style.a}
            >
              <Instagram dynamicClass={`${style["socialmeadia-icon"]}`} />
            </a>
            <a
              href="https://www.linkedin.com/in/hrudayranjan"
              target={"_blank"}
              rel="noreferrer"
              className={style.a}
            >
              <LinkedIn dynamicClass={`${style["socialmeadia-icon"]}`} />
            </a>
            <a
              href="https://twitter.com/Er_hruday"
              target={"_blank"}
              rel="noreferrer"
              className={style.a}
            >
              <Twitter dynamicClass={`${style["socialmeadia-icon"]}`} />
            </a>
            <a
              href="https://codepen.io/Erhruday/pens/showcase"
              target={"_blank"}
              rel="noreferrer"
              className={style.a}
            >
              <Codepen dynamicClass={`${style["socialmeadia-icon"]}`} />
            </a>
          </div>
        </Box>
        <p className={style.description}>
          Designed & Built by&nbsp;
          <a
            href="https://www.linkedin.com/in/hrudayranjan"
            target={"_blank"}
            rel="noreferrer"
            className={style["name-link"]}
          >
            Hruday Ranjan&nbsp;
          </a>
        </p>
        <Link href={`/`}>
          {/* <a> */}
            <Logo dynamicClass={`${style["logo"]}`} />
          {/* </a> */}
        </Link>
      </Container>

      {showButton && (
        <button onClick={scrollToTop} className={style["back-to-top"]}>
          <UpArrow />
        </button>
      )}
    </div>
  );
}
