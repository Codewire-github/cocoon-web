import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import { NumtoMonth } from "../numtomonth";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../database/firebase-config";
import "./Userprofile.css";
import MiniArticleCardFirebase from "../cards/mini_article_card_firebase/mini_article_card_firebase";
import { EmptyCard } from "../PaginatedArticleList";
import Nav from "../nav/nav";
import { CheckCurrentYear } from "../../pages/landing_page/landing_page";
export default function Profile({ articlesCollection }) {
  const navigate = useNavigate();

  const { user } = UserAuth();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesCollectionRef = collection(db, "articles");
      let data = await getDocs(articlesCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getArticles();
  }, []);
  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, [user]);

  const userUploads = articles.filter(
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
            <b>My Profile</b>
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
                    }${CheckCurrentYear(article.published_date[2])}`}
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
