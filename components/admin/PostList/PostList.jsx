import React, { useState } from "react";
import style from "./PostList.module.css";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import PostEditorModal from "../PostEditorModal/PostEditorModal";

export default function PostList({ postData }) {
  const [openModal, setOpenModal] = useState(false);
  // console.log(postData, "POSTS");
  const editOnClick = (id) => {
    // console.log(id, "POST ID");
    setOpenModal(true);
  };
  return (
    <div className={style["wrapper"]}>
      <div className={style["left-menu"]}>
        <div className={style["menu-list"]}>Posts</div>
        <div className={style["menu-list"]}>Products</div>
        <div className={style["menu-list"]}>Review</div>
      </div>
      <div className={style["right-container"]}>
        <h2>Post List</h2>
        <table className={style["post-data-table"]}>
          <thead>
            <tr className={style["t-head"]}>
              <th>Post Id</th>
              <th>Title</th>
              <th>Created Time</th>
              <th>Slug </th>
              <th>Tags</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {postData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.tittle}</td>
                <td>{item.created_time}</td>
                <td>{item.slug}</td>
                <td>{item.tags}</td>
                <td>
                  <span
                    title="Edit Post"
                    className={style["edit-icon"]}
                    onClick={() => editOnClick(item.id)}
                  >
                    <EditRoundedIcon />
                  </span>
                  <span title="Delete Post" className={style["delete-icon"]}>
                    <DeleteIcon />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PostEditorModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
}
