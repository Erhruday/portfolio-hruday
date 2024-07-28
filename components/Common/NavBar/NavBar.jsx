import { useState } from "react";
import style from "./NavBar.module.css";
import Link from "next/link";
import Git from "../SVGS/SocialMediaIcons/Git";
import Instagram from "../SVGS/SocialMediaIcons/Instagram";
import LinkedIn from "../SVGS/SocialMediaIcons/LinkedIn";
import Twitter from "../SVGS/SocialMediaIcons/Twitter";
import Codepen from "../SVGS/SocialMediaIcons/Codepen";
import LargeLogo from "../SVGS/Logo/LargeLogo";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function NavBar() {
  const [navbarExpandIsToggle, setNavbarExpandIsToggle] = useState(false);
  return (
    <div className={style["navbar-wrapper"]}>
      <Grid container sx={{ pr: 5, pl: { xs: 2, sm: 5 }, mt: 3 }}>
        <Grid
          item
          xs={1}
          sx={{ display: { xs: "block", sm: "none", md: "none" } }}
        >
          {navbarExpandIsToggle ? (
            <img
              src={`/images/cross-line.svg`}
              alt="cross"
              className={style["navbar-three-line"]}
              onClick={() => setNavbarExpandIsToggle(false)}
            />
          ) : (
            <img
              src={`/images/three-line.svg`}
              alt="logo"
              className={style["navbar-three-line"]}
              onClick={() => setNavbarExpandIsToggle(true)}
            />
          )}
        </Grid>
        <Grid
          item
          xs={10}
          sm={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          <Link href={`/`}>
            {/* <a> */}
              <LargeLogo />
            {/* </a> */}
          </Link>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{ display: { xs: "none", sm: "block", md: "block" } }}
        >
          <ul
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <li className={style["nav-li"]}>
              <Link href={`/about`}>
                About
              </Link>
            </li>
            <li className={style["nav-li"]}>
              <Link href={`/experience`}>
                Experience
              </Link>
            </li>
            <li className={style["nav-li"]}>
              <Link href={`/work`}>
                Work
              </Link>
            </li>
            <li className={style["nav-li"]}>
              <Link href={`/contact`}>
                Contact
              </Link>
            </li>
            {/* <li className={style["nav-li"]}>
              <Link href={`/blog`}>
                Blog
              </Link>
            </li> */}
          </ul>
        </Grid>
        <Grid
          item
          xs={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href={`/images/resume-hruday.pdf`} download="resume-hruday">
            <button className={style["btn-resume"]}>Resume</button>
          </a>
        </Grid>
      </Grid>
      <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
        {navbarExpandIsToggle && (
          <div className={style["nav-menu-smaller-screen"]}>
            <ul>
              <li className={style["navli-smaller-screen"]}>
                <Link href={`/about`}>
                  About
                </Link>
              </li>
              <li className={style["navli-smaller-screen"]}>
                <Link href={`/experience`}>
                  Experience
                </Link>
              </li>
              <li className={style["navli-smaller-screen"]}>
                <Link href={`/work`}>
                  Work
                </Link>
              </li>
              <li className={style["navli-smaller-screen"]}>
                <Link href={`/contact`}>
                  Contact
                </Link>
              </li>
              {/* <li className={style["navli-smaller-screen"]}>
                <Link href={`/blog`}>
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
        )}
      </Box>

      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <div className={style["socialmeadia-icons-container"]}>
          <Link
            href="https://github.com/Erhruday/Hello-World"
            target={"_blank"}
            rel="noreferrer"
            className={style.a}
          >
            {/* <img src={`${BASE_URL}/images/github.svg`} alt="git-logo" className={style['logo']} /> */}
            <Git dynamicClass={`${style["logo"]}`} />
          </Link>
          <Link
            href="https://www.instagram.com/h_r_u_d_a_y_.r_a_n_j_a_n/"
            target={"_blank"}
            rel="noreferrer"
            className={style.a}
          >
            <Instagram dynamicClass={`${style["logo"]}`} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hrudayranjan"
            target={"_blank"}
            rel="noreferrer"
            className={style.a}
          >
            <LinkedIn dynamicClass={`${style["logo"]}`} />
          </Link>
          <Link
            href="https://twitter.com/Er_hruday"
            target={"_blank"}
            rel="noreferrer"
            className={style.a}
          >
            <Twitter dynamicClass={`${style["logo"]}`} />
          </Link>
          <Link
            href="https://codepen.io/Erhruday/pens/showcase"
            target={"_blank"}
            rel="noreferrer"
            className={style.a}
          >
            <Codepen dynamicClass={`${style["logo"]}`} />
          </Link>
        </div>
        <div className={style["left-bar"]}></div>
        <p className={style.email}>
          <a
            href="mailto: hrudayranjan8@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            hrudayranajan8@gmail.com
          </a>
        </p>
        <div className={style["right-bar"]}></div>
      </Box>
    </div>
  );
}
