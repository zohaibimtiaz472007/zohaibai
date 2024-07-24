import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import JoditEditor from "jodit-react"; // Make sure you have this import
import { addDoc, collection, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { fireDb, storage } from "../firebase/FirebaseConfig";

function CreateBlog() {
  const context = useContext(myContext);
  const { mode } = context;

  const [blogs, setBlogs] = useState({
    title: "",
    category: "",
    content: "",
    time: Timestamp.now(),
  });
  const [thumbnail, setThumbnail] = useState();

  const editor = useRef(null);
  const navigate = useNavigate();

  const addPost = async () => {
    if (
      blogs.title === "" ||
      blogs.category === "" ||
      blogs.content === "" ||
      !thumbnail
    ) {
      return toast.error("All fields are required");
    }
    uploadImage();
  };

  const uploadImage = () => {
    if (!thumbnail) return;
    const imageRef = ref(storage, `blogimage/${thumbnail.name}`);
    uploadBytes(imageRef, thumbnail).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const productRef = collection(fireDb, "blogPost");
        try {
          addDoc(productRef, {
            blogs,
            thumbnail: url,
            time: Timestamp.now(),
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
          });
          navigate("/admin");
          toast.success("Post Added Successfully");
        } catch (error) {
          toast.error(error.message);
          console.log(error);
        }
      });
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: "Start typing...",
    }),
    []
  );

  const createMarkup = (c) => {
    return { __html: c };
  };

  return (
    <div className="container mx-auto flex justify-center items-center max-w-5xl py-10 ">
      <div
        className="p-5"
        style={{
          background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
          borderBottom:
            mode === "dark"
              ? " 4px solid rgb(226, 232, 240)"
              : " 4px solid rgb(30, 41, 59)",
        }}
      >
        {/* Top Item  */}
        <div className="mb-2 flex justify-between">
          <div className="flex gap-2 items-center">
            {/* Dashboard Link  */}
            <Link to={"/dashboard"}>
              <BsFillArrowLeftCircleFill size={25} />
            </Link>

            {/* Text  */}
            <h4
              
              style={{
                color: mode === "dark" ? "white" : "black",
              }}
            >
              Create blog
            </h4>
          </div>
        </div>

        {/* main Content  */}
        <div className="mb-3">
          {/* Thumbnail  */}
          {thumbnail && (
            <img
              className="w-full rounded-md mb-3"
              src={URL.createObjectURL(thumbnail)}
              alt="thumbnail"
            />
          )}

          {/* Text  */}
          <h6
          
            color="blue-gray"
            className="mb-2 font-semibold"
            style={{ color: mode === "dark" ? "white" : "black" }}
          >
            Upload Thumbnail
          </h6>

          {/* First Thumbnail Input  */}
          <input
            type="file"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
            style={{
              background: mode === "dark" ? "#dcdde1" : "rgb(226, 232, 240)",
            }}
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>

        {/* Second Title Input */}
        <div className="mb-3">
          <input
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none placeholder-black"
            placeholder="Enter Your Title"
            style={{
              background: mode === "dark" ? "#dcdde1" : "rgb(226, 232, 240)",
            }}
            name="title"
            value={blogs.title}
            onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
          />
        </div>

        {/* Third Category Input  */}
        <div className="mb-3">
          <input
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md p-1.5 outline-none placeholder-black"
            placeholder="Enter Your Category"
            style={{
              background: mode === "dark" ? "#dcdde1" : "rgb(226, 232, 240)",
            }}
            name="category"
            value={blogs.category}
            onChange={(e) => setBlogs({ ...blogs, category: e.target.value })}
          />
        </div>

        {/* Editor  */}
        <JoditEditor
          ref={editor}
          value={blogs.content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setBlogs({ ...blogs, content: newContent })}
          onChange={(newContent) => {}}
        />

        {/* Submit Button  */}
        <button
          className="w-full mt-5 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold "
          onClick={addPost}
          style={{
            background:
              mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
            color: mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
          }}
        >
          Send
        </button>

        {/* Preview Section  */}
        <div className="">
          <h1 className="text-center mb-3 text-2xl">Preview</h1>
          <div className="content">
            <div
              className={`
                        [&>h1]:text-[32px] [&>h1]:font-bold [&>h1]:mb-2.5
                        ${mode === "dark" ? "[&>h1]:text-[#ff4d4d]" : "[&>h1]:text-black"}

                        [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5
                        ${mode === "dark" ? "[&>h2]:text-white" : "[&>h2]:text-black"}

                        [&>h3]:text-[18.72px] [&>h3]:font-bold [&>h3]:mb-2.5
                        ${mode === "dark" ? "[&>h3]:text-white" : "[&>h3]:text-black"}

                        [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5
                        ${mode === "dark" ? "[&>h4]:text-white" : "[&>h4]:text-black"}

                        [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5
                        ${mode === "dark" ? "[&>h5]:text-white" : "[&>h5]:text-black"}

                        [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5
                        ${mode === "dark" ? "[&>h6]:text-white" : "[&>h6]:text-black"}

                        [&>p]:text-[16px] [&>p]:mb-1.5
                        ${mode === "dark" ? "[&>p]:text-[#7efff5]" : "[&>p]:text-black"}

                        [&>ul]:list-disc [&>ul]:mb-2
                        ${mode === "dark" ? "[&>ul]:text-white" : "[&>ul]:text-black"}

                        [&>ol]:list-decimal [&>li]:mb-10
                        ${mode === "dark" ? "[&>ol]:text-white" : "[&>ol]:text-black"}

                        [&>li]:list-decimal [&>ol]:mb-2
                        ${mode === "dark" ? "[&>ol]:text-white" : "[&>ol]:text-black"}

                        [&>img]:rounded-lg
                        `}
              dangerouslySetInnerHTML={createMarkup(blogs.content)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
