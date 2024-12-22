import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/posts/postSlice";
import type { AppDispatch } from "../../store/store";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";

const Form: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [userId, setUserId] = useState<number>(11);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!body.trim() || !title.trim()) {
      toast.warning("Please fill in all fields", { position: "top-center" });
      return;
    }

    try {
      await dispatch(createPost({ userId, title, body }));
      setTitle("");
      setBody("");
      toast.success("Post added successfully", { position: "top-center" });
      setUserId(userId + 1);
    } catch (error) {
      toast.error("Failed to add post", { position: "top-center" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-200 h-[600px] flex flex-col justify-center items-center"
    >
      <div className="w-full flex flex-col gap-4 max-w-xs mx-auto  ">
        <h1 className="text-3xl font-bold">Add a new Post</h1>
        <FormInput
          label="Title"
          type="text"
          name="title"
          value={title}
          handleChange={(e) => setTitle(String(e.target.value))}
        />
        <FormTextArea
          label="Description"
          name="description"
          value={body}
          handleChange={(e) => setBody(String(e.target.value))}
        />
        <button
          type="submit"
          aria-label="Submit Post Button"
          className="btn btn-primary"
        >
          Add Post
        </button>
      </div>
    </form>
  );
};

export default Form;
