import React from "react";

const ClickTracking = (props) => {
  const moduleClicked = () => {
    if (props.module === 'Overview') {
      return 'Overview';
    }

    if (props.module === 'Questions & Answers') {
      return 'Questions & Answers';
    }

    return 'Reviews'
  }

  const globalClickTracker = (event) => {
    let element = event.target;
    let time = new Date();
    let module = moduleClicked();
    console.log({
      element,
      time,
      module
    })
  };

  return (
    <div>
      <div onClick={globalClickTracker}>
        {props.children}
      </div>
    </div>
  )
};

export default ClickTracking;