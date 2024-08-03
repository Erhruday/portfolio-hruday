import style from "./Portfolio.module.css";
import Link from "next/link";
import Project2 from "../../Common/SVGS/Projects/Project2";
import Project3 from "../../Common/SVGS/Projects/Project3";
// import { BASE_URL } from '../../../config';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NewsSVG from "../../Common/SVGS/Projects/NewsSVG";
import { convertToKebabCase } from "../../../Utilities";

export default function Portfolio({workLists}) {
  return (
    <div className={style["portfolio-wrapper"]}>
      <span className={style.bg}>Work</span>
      <Container maxWidth="md">
        <div style={{ width: "80%" }}>
          <h2 className={`${style[""]} stand-out`}>
            My&nbsp;Portfolio <span className={style["bar"]}></span>
          </h2>
        </div>

        {workLists.map((work, i) => {
          return (
            <Grid
              container
              spacing={3}
              key={i}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: `${i % 2 == 0 ? "row" : "row-reverse"}`,
                mt:8,
                mb:8
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={`/images/work/${convertToKebabCase(
                    work.projectName
                  )}.svg`}
                  className={style["project-img"]}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={7}
                className={style["portfolio-right-container"]}
              >
                <a
                  href={work.projectProdUrl}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <span className={style["portfolio-feature-project"]}>
                    Featured&nbsp;Project
                  </span>
                  <h4 className={style["portfolio-project-name"]}>
                    {work.projectName}
                  </h4>
                  <p>{work.projectDescription}</p>
                </a>
              </Grid>
            </Grid>
          );
        })}
       

        <Link href={`/work`}>
          <span className={`${style["porfolio-btn"]} btn`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            See&nbsp;More!
          </span>
        </Link>
      </Container>
    </div>
  );
}

