import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL } from "../../config";
import ArticleCard from "../ArticleCard";

const SubtopicArticleList = () => {
  const [pge_no, setPge_no] = useState(0);
  const [posts, setPosts] = useState([
    // More posts...
  ]);

  const subtopic_id = useParams().id;

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `${SERVER_URL}/api/blog/${subtopic_id}/getblogsbynew/${pge_no}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          const sortedBlogs = data.blogs.sort((a,b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
          setPosts([...posts, ...sortedBlogs]);
        } 
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [pge_no]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // Calculate the distance between the bottom of the page and the current scroll position
      const distanceToBottom =
        document.documentElement.offsetHeight -
        (window.innerHeight + window.scrollY);

      // Check if the user has reached the bottom of the page
      if (distanceToBottom <= 0) {
        setPge_no(pge_no + 1);
      }
    });
  }, []);

  return (
    <div className="w-full">
      <div className="md:mx-19 sm:mx-5">
        <div className=" mt-10 grid gap-y-14 justify-items-center">
          {posts.map((el) => {

            el._id = el.blog_id;
            return <ArticleCard post={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SubtopicArticleList;
