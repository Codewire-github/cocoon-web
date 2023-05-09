import React, { useEffect } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import { NumtoMonth } from "../numtomonth";

import "./Userprofile.css";
import MiniArticleCardFirebase from "../cards/mini_article_card_firebase/mini_article_card_firebase";
import { EmptyCard } from "../PaginatedArticleList";
import { ArticlesCollection } from "../../database/article_collection";
import Nav from "../nav/nav";

export default function Profile({ articlesCollection }) {
  const navigate = useNavigate();

  const { user } = UserAuth();

  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, [user]);

  const userUploads = articlesCollection.filter(
    (article) => article.userID === user?.uid
  );

  let totalLikes = 0;
  for (let i = 0; i < userUploads.length; i++) {
    totalLikes += userUploads[i].likes.length;
  }

  const calculateReadTime = (text) => {
    //average wpm of an individual is 100.
    const wordsPerMinute = 100;
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <Nav bgColor="white" />
      <div className="fields">
        <div className="userIntro">
          <p className="profile-txt">
            <b>User Profile</b>
          </p>
          <img src={user?.photoURL} alt="Avatar" className="useravatar" />
          <p className="userkoname"> {user?.displayName}</p>
          <p className="writer-txt">Writer</p>
        </div>

        <div className="mid-contain">
          <div className="uploads-no">
            <p className="num">
              <b>
                {userUploads.length < 10
                  ? `0${userUploads.length}`
                  : userUploads.length}
              </b>
            </p>
            <p className="uploads-txt">Uploads</p>
          </div>
          <div className="likes-no">
            <p className="num">
              <b>{totalLikes < 10 ? `0${totalLikes}` : totalLikes}</b>
            </p>
            <p className="likes-txt">Likes</p>
          </div>
        </div>

        <div className="user-container">
          <div className="heading-contain">
            <h3 className="uploads-heading">My uploads</h3>
          </div>
          <div className="uploads-des">
            {userUploads.length === 0 ? (
              <EmptyCard message="You may want to upload an article?" />
            ) : (
              userUploads.map((article) => (
                <div key={article.id}>
                  <MiniArticleCardFirebase
                    linkid={article.id}
                    author={article.authorName}
                    authorImg={article.authorImgURL}
                    heading={article.title}
                    subheading={article.sub_description}
                    imgUrl={article.img_address}
                    date={`${NumtoMonth(article.published_date[1])} ${
                      article.published_date[0]
                    }, ${article.published_date[2]}`}
                    genre={article.genre}
<<<<<<< HEAD
                    likes={article.likes.length}
=======
                    readTime ={calculateReadTime(article.article_description)}
>>>>>>> 12e4c8f88504c6dcf9d3e7ecdb2831203f0765b4
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
