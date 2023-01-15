import React, { useEffect, useState } from "react";
import AdminNavBar from "../../components/admin/AdminNavBar/AdminNavBar";
import PostList from "../../components/admin/PostList/PostList";

export default function Index() {
  const [postData, setPostData] = useState([]);
  async function getData() {
    const apiUrl = `/api/posts`;
    const response = await fetch(apiUrl);
    const res = await response.json();
    // console.log(res.results, "DATA");
    setPostData(res.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <AdminNavBar />
      <PostList postData={postData} />
    </div>
  );
}

// export const getStaticProps = async () => {
//     const res = await fetch(`/api/posts`);
//     const data = await res.json();
//     return {
//         props: {
//             data
//         }
//     };
// };
