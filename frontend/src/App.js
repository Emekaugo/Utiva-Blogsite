import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <div className="App">
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/my-blogs" element={<UserBlogs />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
