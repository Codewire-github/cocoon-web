import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import { db } from "../../database/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { NumtoMonth } from "../numtomonth";

import "./Userprofile.css";
import MiniArticleCardFirebase from "../cards/mini_article_card_firebase/mini_article_card_firebase";
import { EmptyCard } from "../PaginatedArticleList";

export default function Profile() {
  const navigate = useNavigate();

  const { logOut, user } = UserAuth();

  const [articles, setArticles] = useState([]);
  const articlesCollectionRef = collection(db, "articles");
  useEffect(() => {
    const getArticles = async () => {
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

  return (
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
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
