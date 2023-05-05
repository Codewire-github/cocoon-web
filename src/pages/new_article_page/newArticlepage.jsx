import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { OptionButton } from "../../components/custom-components/customButtons";
import "./newArticlePage.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authcontect";
import { addDoc, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import React, { useCallback } from "react";
import { db } from "../../database/firebase-config";
import GenreSelector from "../../components/genre-selector/genreselector";
import BgColorSelector from "../../components/bgcolorselector/bgcolorselector";

let json;
function NewArticlePage() {
  const { user } = UserAuth();
  const [newuid, setUID] = useState("");
  const [newauthorName, setAuthorName] = useState("");
  const [newauthorImg, setAuthorImg] = useState("");
  const [newtitle, setTitle] = useState("");
  const [newgenre, setGenre] = useState("");
  const [newSubdescription, setSubDescription] = useState("");
  const [newdescription, setDescription] = useState("");
  const [newday, setDay] = useState();
  const [newMonth, setMonth] = useState();
  const [newYear, setYear] = useState();
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [imgURL, setImgURL] = useState("");
  const [imgAlt, setImgAlt] = useState("");
  const [newimgURL, setNewImgURL] = useState(
    "https://images.unsplash.com/photo-1681969377369-6d68f2b6b6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
  );
  const [showOverlay, setShowOverlay] = useState(false);
  const articlesCollectionRef = collection(db, "articles");
  const Current = new Date();
  const CurrentDay = Current.getDate();
  const CurrentMonth = Current.getMonth() + 1;
  const CurrentYear = Current.getFullYear();
  const publishNewArticle = async (event) => {
    await event.preventDefault();
    await addDoc(articlesCollectionRef, {
      authorName: newauthorName,
      userID: newuid,
      authorImgURL: newauthorImg,
      title: newtitle,
      genre: newgenre,
      sub_description: newSubdescription,
      img_address: newimgURL,
      img_alt: imgAlt,
      bgcolor: backgroundColor,
      published_date: [newday, newMonth, newYear],
      article_description: newdescription,
      likes: [],
    });

    navigate("/");
  };
  const handlePostConfirm = () => {
    setDay(CurrentDay);
    setMonth(CurrentMonth);
    setYear(CurrentYear);
    setAuthorName(user?.displayName);
    setDescription(json);
    setUID(user?.uid);
    setAuthorImg(user?.photoURL);
  };

  const handleBackgroundColor = (value) => {
    setBackgroundColor(value);
  };

  const handleGenreSelect = (value) => {
    setGenre(value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);
  return (
    <form onSubmit={publishNewArticle}>
      <div className="editor-main-wrap" style={{}}>
        <div className="nav-bar-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2
              style={{
                textTransform: "uppercase",
                fontFamily: "Landasans",
                fontSize: "45px",
              }}
            >
              The cocoon
            </h2>
          </Link>
          <span
            className="publish-btn"
            onClick={() => {
              setShowOverlay(true);
              handlePostConfirm();
            }}
            style={{
              backgroundColor: `${
                backgroundColor === "white" ? "black" : backgroundColor
              }`,
              color: `${
                backgroundColor === "white" ||
                backgroundColor === "rgb(82 0 255)"
                  ? "white"
                  : "black"
              }`,
            }}
          >
            Publish
          </span>
        </div>
        <div className="editor-content">
          <section
            className="additional-option-container"
            style={{ backgroundColor: `${backgroundColor}` }}
          >
            <section className="img-selector">
              <span className="image-address-input">
                <input
                  type="text"
                  placeholder="Enter image address for your article "
                  className="imgurl-textwrap"
                  onChange={(e) => setImgURL(e.target.value)}
                />
                <button
                  style={{
                    backgroundColor: "black",
                    padding: "8px 13px",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => setNewImgURL(imgURL)}
                >
                  <i
                    className="fas fa-chevron-right"
                    style={{ color: "white", fontSize: "25px" }}
                  ></i>
                </button>
              </span>
              <div>
                <img
                  src={newimgURL}
                  alt="article-img"
                  className="article-img"
                />
              </div>
              <input
                type="text"
                maxLength="60"
                placeholder="Write a short description about the image...(eg. source)"
                onChange={(e) => setImgAlt(e.target.value)}
                className="article-img-alt-input"
              />
            </section>
            <section style={{ display: "flex", flexDirection: "row" }}>
              <BgColorSelector bgColorVal={handleBackgroundColor} />
              <GenreSelector
                handleGenreOption={handleGenreSelect}
                current_item={newgenre}
              />
            </section>
          </section>
          <section>
            <textarea
              placeholder="Title"
              className="heading-input"
              maxLength="90"
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></textarea>
            <textarea
              placeholder="Write your subheading..."
              className="subheading-input"
              maxLength="220"
              required
              onChange={(e) => {
                setSubDescription(e.target.value);
              }}
            ></textarea>
            <Tiptap />
          </section>
        </div>
        {showOverlay === true && (
          <div className="overlay-main-container">
            <div className="overlay-wrap">
              <h2 style={{ color: "black" }}>
                Are you sure you want to publish your article?
              </h2>
              <p style={{ color: "grey" }}>
                <b>Why should you write?</b> Because creating something that
                didn't exist before is as close to magic as you'll ever get.
              </p>
              <section className="overlay-footer">
                <span
                  className="overlay-btn"
                  onClick={() => setShowOverlay(false)}
                  style={{
                    backgroundColor: "none",
                    color: "grey",
                  }}
                >
                  Cancel
                </span>
                <button
                  type="submit"
                  className="overlay-btn"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Confirm
                </button>
              </section>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default NewArticlePage;

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<h2>Tell your story... </h2>",
    onUpdate: ({ editor }) => {
      json = editor.getHTML();
      // send the content to an API here
    },
  });
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }
  return (
    <>
      <div className="text-editor-wrap">
        <MenuBar editor={editor} />
        <EditorContent className="content" editor={editor} required />
      </div>
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

const PublishConfirmOverlay = ({ openOverlay }) => {
  return (
    <div className="overlay-main-container">
      <div
        className="overlay-container"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "2rem 1.5rem",
        }}
      >
        <h2 style={{ color: "black" }}>
          Are you sure you want to publish your article?
        </h2>
        <section className="overlay-footer">
          <button
            type="submit"
            className="overlay-btn"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Confirm
          </button>
          <button
            className="overlay-btn"
            onClick={() => openOverlay(false)}
            style={{
              backgroundColor: "red",
              color: "white",
            }}
          >
            Cancel
          </button>
        </section>
      </div>
    </div>
  );
};
