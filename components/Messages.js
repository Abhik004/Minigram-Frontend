import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import styles from '../styles/Messages.module.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

export const Messages = () => {
  const [messages, setMessages] = useState([]);

  const addNewMessage = () => {
    const newMessage = { name: "New User", username: "@newuser" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className={styles.messageContainer}>
      <div className={styles.heading}>Messages</div>
      <div className={styles.onlymessagecontainer}>
        <div className={styles.messages}>
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div className={styles.message} key={index}>
                <div>
                  <Avatar
                    className={styles.Icon}
                    alt={msg.name}
                    src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg"
                  />
                </div>
                <div className={styles.message_name}>
                  <div className={styles.Name}>{msg.name}</div>
                  <div className={styles.msg_id}>{msg.username}</div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noMessages}>No messages yet</div>
          )}
        </div>
      </div>
      {/* When AddCircleOutlineIcon is clicked, it adds a new message */}
      <div onClick={addNewMessage}>
        <AddCircleOutlineIcon className={styles.AddCircleIcon}></AddCircleOutlineIcon>
      </div>
      <div className={styles.recent_text}>Based on your Recent Activity</div>
      <div className={styles.search_text}>#users are searching for </div>
      <div className={styles.tag}>#ipl</div>
      <div className={styles.tag_image}>
        <Card>
          <CardMedia
            component="img"
            className={styles.img_tag}
            image="https://www.hindustantimes.com/ht-img/img/2023/04/01/1600x900/India-IPL-Cricket-42_1680351129390_1680351129390_1680351245063_1680351245063.jpg"
          />
        </Card>
      </div>
    </div>
  );
};
