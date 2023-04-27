import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/authcontect";
import { useNavigate } from "react-router-dom";
import { db } from "../../database/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { NumtoMonth } from "../../pages/landing_page/landing_page";

import "./Userprofile.css";
import MiniArticleCard from "../cards/mini_article_card/mini_article_card";
import MiniArticleCardFirebase from "../cards/mini_article_card_firebase/mini_article_card_firebase";

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

  return (
    <div className="fields">
      <div className="userLeft">
        <img src={user?.photoURL} alt="Avatar" className="useravatar" />
        <p className="userkoname"> {user?.displayName}</p>
        <p className="writer-txt">Writer</p>
        <p className="profile-txt">Profile</p>
      </div>
      <div className="userRight">
        <div className="heading-contain">
          <h3 className="uploads-heading">My uploads</h3>
        </div>
        <div>
          {userUploads.map((article) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
