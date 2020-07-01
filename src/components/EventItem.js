import React from "react";
import styles, { ArowUpWrapper } from "../styles";
import { LifeListWrapper } from "../styles";

const EventItem = (props) => {
  return (
    <div>
      <LifeListWrapper key={props.event.id}>
        <h3>{props.event.Date}</h3>
        <p>{props.event.Event}</p>
        <p>{props.event.Details}</p>

        {/* شلون اصغر اللست بدون مارجن */}
      </LifeListWrapper>
      <div style={styles.arrowBottom}></div>
    </div>
  );
};
export default EventItem;
