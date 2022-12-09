import React from "react";
import styles from "./ElasticCard.module.css";

const ElasticCard = ({ title, children, background, icon, footer }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.top}
        style={{
          background: background,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: background ? 136 : 40,
        }}
      >
        {icon && (
          <div style={{ color: background ? "white" : "black" }}>{icon}</div>
        )}
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{children}</div>
      </div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default ElasticCard;
