import React from "react";
import style from "./AdminNavBar.module.css";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function AdminNavBar() {
  return (
    <>
      <div className={style["nav-wrapper"]}>
        <div className={style["admin-logo-container"]}>
          <span>
            <AdminPanelSettingsIcon
              style={{ fontSize: "40px", marginRight: "5px", color: "#0a192f" }}
            />
          </span>
          Admin Dasboard
        </div>
        <button className={style["logout-btn"]} title="Logout">
          Logout
        </button>
      </div>
    </>
  );
}
