import { useState } from "react";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const onPostCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="container"> 
      <CreatePost onPostCreated={onPostCreated} />
      <hr />
      <PostList refresh={refresh} />
    </div>
  );
}

export default App;
