import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import Quill from "quill";

const RichTextEditor = () => {
  const { quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          [{ align: [] }],
          ["blockquote", "code-block"],
          ["link", "image", "video"],
          ["clean"],
        ],
      },
      imageResize: {
        parchment: Quill.import("parchment"),
        modules: ["Resize", "DisplaySize"],
      },
    },
  });

  return (
    <div className="w-full gap-4 pb-12">
      <div className="h-full rounded-2xl">
        <div ref={quillRef} />
      </div>
    </div>
  );
};

export default RichTextEditor;
