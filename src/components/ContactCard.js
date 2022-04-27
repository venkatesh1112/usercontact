import React from "react";
import "./ContactCard.css";
import { useState, useEffect } from "react";

const ContactCard = (props) => {
  const [users, setUser] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=100");
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setUser(userData);
    })();
  }, []);

  const toggle = (key) => {
    if (selected === key) {
      return setSelected(null);
    }

    setSelected(key);
  };

  return (
    <div>
      {users
        .filter((user) => user.name.first[0] === props.letter)
        .map((user, index) => (
          <div className="card-container">
            <div className="card">
              <div className="card__name" onClick={() => toggle(index)}>
                <div>
                  {user.name.first} {user.name.last}
                </div>
                <span>{selected === index ? "X" : ""}</span>
              </div>
              <div
                className={
                  selected === index ? "card-content show" : "card-content"
                }
              >
                <div className="card__photo">
                  <img
                    src={user.picture.medium}
                    alt=""
                    className="card__image"
                  />
                </div>
                <div className="card_details">
                  <div className="flex__box">
                    <div className="flex__box-width">Email</div>
                    <div className="flex__box-width">{user.email}</div>
                  </div>
                  <div className="flex__box">
                    <div className="flex__box-width">Phone Number</div>
                    <div className="flex__box-width">{user.phone}</div>
                  </div>
                  <div className="flex__box">
                    <div className="flex__box-width">Street</div>
                    <div className="flex__box-width">
                      {user.location.street.name}
                    </div>
                  </div>
                  <div className="flex__box">
                    <div className="flex__box-width">Location</div>
                    <div className="flex__box-width">{user.location.city}</div>
                  </div>
                  <div className="flex__box">
                    <div className="flex__box-width">Postcode</div>
                    <div className="flex__box-width">
                      {user.location.postcode}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ContactCard;
