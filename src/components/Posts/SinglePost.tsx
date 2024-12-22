import React from "react";

type PostProps = {
  userId: number;
  title: string;
  description: string;
};

const SinglePost = ({ userId, title, description }: PostProps) => {
  return (
    <div className="flex flex-col gap-8">
      <small>User ID: {userId}</small>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SinglePost;
