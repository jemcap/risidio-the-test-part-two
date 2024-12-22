import Form from "./components/Form/Form";
import PostList from "./components/Posts/PostList";

import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Blog Posts
      </h1>
      <Form />
      <PostList />
      <ToastContainer />
    </div>
  );
}

export default App;
