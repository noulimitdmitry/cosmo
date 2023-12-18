import styles from "./Users.module.css";
import User from "./User/User";
import React from "react";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div className={styles.block}>
        <div className={styles.pagination}>
          {pages.map((p, index) => (
            <span
              id={index}
              className={props.currentPage == p && styles.modifided}
              onClick={() => props.onChangePage(p)}
            >
              {p}
            </span>
          ))}
        </div>
        {props.users.map((item, index, arr) => (
          <User
            className={styles.user}
            name={item.name}
            userId={item.id}
            uniqueUrlName={item.uniqueUrlName}
            photos={item.photos}
            status={item.status}
            followed={item.followed}
            clickFollow={props.follow}
            clickUnfollow={props.unfollow}
          />
        ))}
      </div>
    );
  }

export default Users;
