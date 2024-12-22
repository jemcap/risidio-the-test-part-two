import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFetchPosts } from "../../features/posts/postSlice";

import { fetchPosts } from "../../features/posts/postSlice";
import type { RootState, AppDispatch } from "../../store/store";
import SinglePost from "./SinglePost";

const PostList: React.FC = () => {
  const posts = useSelector(selectFetchPosts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const sortedPosts = [...posts].sort((a, b) => b.userId - a.userId);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <ul className="space-y-6">
          {sortedPosts.map(({ userId, id, title, body }) => (
            <li
              key={id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <SinglePost userId={userId} title={title} description={body} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
