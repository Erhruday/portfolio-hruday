import React from "react";
import Dialog from "@mui/material/Dialog";
import style from "./PostEditorModal.module.css";
import DialogContent from "@mui/material/DialogContent";

export default function PostEditorModal({ openModal, setOpenModal }) {
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Dialog
      maxWidth="lg"
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={openModal}
      //   style={{ padding: "20px" }}
    >
      <DialogContent dividers>
        <div className={style["text-field-container"]}>
          <label htmlFor="postTitle">Title</label>
          <input type="text" name="postTitle" id="postTitle" width={100} />
          <label htmlFor="postMetaDesc">Meta Description</label>
          <input
            type="text"
            name="postMetaDesc"
            id="postMetaDesc"
            width={100}
          />
          <label htmlFor="postContent">Content</label>
          <textarea
            name="postContent"
            id="postContent"
            cols="150"
            rows="10"
            style={{
              resize: "vertical",
            }}
          ></textarea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
