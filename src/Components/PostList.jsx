import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import Wellcommassage from "./Wellcommassage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFeching] = useState(false);

  // useEffect(() => {
  //   setFeching(true);
  //   const controller = new AbortController();
  //   const singnal = controller.singnal;

  //   fetch("https://dummyjson.com/posts", { singnal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFeching(false);
  //     });

  //   return () => {
  //     console.log("clean Up useEfects");
  //     controller.abort();
  //   };
  // }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Wellcommassage />}
      {!fetching && postList.map((post) => <Post post={post} />)}
    </>
  );
};

export default PostList;
