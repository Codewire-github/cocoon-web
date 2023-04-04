import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { OptionButton } from "../../components/custom-components/customButtons";
import "./newArticlePage.css";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../database/firebase-config";

function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="editor-main-wrap">
      <NewArticleNavBar />
      <input type="text" placeholder="Title" className="heading-input" />
      <textarea
        placeholder="Write your subheading..."
        className="subheading-input"
      ></textarea>
      <Tiptap />
    </div>
  );
}

export default NewArticlePage;

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<h2>Tell your story...</h2>",
  });

  return (
    <>
      <div className="text-editor-wrap">
        <MenuBar editor={editor} />
        <EditorContent className="content" editor={editor} />
      </div>
      <HTMLOutput editor={editor} />
    </>
  );
};

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div style={{ padding: "0.5rem 0rem", marginBottom: "0.5rem" }}>
      <OptionButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : "is-inactive"}
      >
        <i className="fas fa-bold"></i>
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : "is-inactive"}
      >
        <i className="fas fa-italic"></i>
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : "is-inactive"}
      >
        <i className="fas fa-strikethrough"></i>
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : "is-inactive"}
      >
        <i className="fas fa-code"></i>
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : "is-inactive"}
      >
        <i className="fas fa-file-code"></i>
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : "is-inactive"}
      >
        <i className="fas fa-list-ul"></i>
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : "is-inactive"}
      >
        <i className="fas fa-list-ol"></i>
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : "is-inactive"}
      >
        <i className="fas fa-quote-right"></i>
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive("heading", { level: 1 }) ? "is-active" : "is-inactive"
        }
      >
        h1
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </OptionButton>

      <OptionButton
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        <i className="fas fa-broom"></i>
      </OptionButton>
    </div>
  );
};

const HTMLOutput = ({ editor }) => {
  let html;
  return (
    <div style={{ width: "800px" }}>
      <h1>HTML output</h1>
      {html}
    </div>
  );
};

export function getData(htmlText) {
  return htmlText;
}

const NewArticleNavBar = () => {
  return (
    <div className="nav-bar-container">
      <Link to="/" exact>
        <h2>The cocoon</h2>
      </Link>
      <button className="publish-btn">Publish</button>
    </div>
  );
};
