import style from "./Contact.module.css";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { BASE_URL } from "../../../config/config";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function Contact() {
  const formRef = useRef(null);

  const formOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    let seralizedFormData = {};
    formData.forEach((value, key) => {
      seralizedFormData[key] = value;
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(seralizedFormData),
    };
    fetch(`${BASE_URL}/api/contact`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (res.status === 200) {
          alert("Form Submitted");
        }
      });
  };
  return (
    <div className={style["contact-wrapper"]} id="contact-form">
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              pr: { md: 8 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 className={`${style["contact-heading"]} stand-out`}>
              Get In Touch
            </h2>
            <p className={style.description}>
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ mt: { xs: 2 } }}>
            <form
              // onSubmit={(e) => formOnSubmit(e)}
              ref={formRef}
              action="https://formspree.io/f/mrgdzeoe"
              method="POST"
            >
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <input
                    type="text"
                    name="userName"
                    placeholder="Name"
                    required="required"
                    // pattern="^\S+$"
                    className={style.inputbox}
                  />
                </Grid>
                <Grid item xs={6}>
                  <input
                    type="text"
                    className={style.inputbox}
                    placeholder="Email"
                    name="userEmail"
                    required="required"
                    pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    name="subject"
                    className={style.inputbox}
                    placeholder="Subject"
                    required="required"
                  />
                </Grid>
                <Grid item xs={12}>
                  <textarea
                    type="text"
                    rows="5"
                    name="message"
                    className={style.inputbox}
                    placeholder="Message..."
                    required="required"
                    pattern="[A-Za-z0-9]{1,20}"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    type="submit"
                    className="btn"
                    style={{ float: "right" }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Send&nbsp;Message!
                  </button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
