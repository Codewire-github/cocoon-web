import React, { useEffect } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate, useParams } from "react-router-dom";
import { NumtoMonth } from "../../components/numtomonth";

import "./profile.css";
import MiniArticleCardFirebase from "../../components/cards/mini_article_card_firebase/mini_article_card_firebase";
import { EmptyCard } from "../../components/PaginatedArticleList";
import Nav from "../../components/nav/nav";

export default function WriterProfile({ articlesCollection }) {
  const user = useParams();
  const navigate = useNavigate();

  const userUploads = articlesCollection.filter(
    (article) => article.userID === user.uid
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
            <b>User's Profile</b>
          </p>
          <p className="userkoname"> {user.username}</p>
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
            <h3 className="uploads-heading">Uploads</h3>
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
                    likes={article.likes.length}
                    readTime={calculateReadTime(article.article_description)}
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