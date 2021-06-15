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
    let element = event.target.outerHTML;
    let time = '6/14/21';
    let widget = moduleClicked();
    let form = {
      element,
      time,
      widget
    }
    console.log('form', form)

     fetch ('/api/interactions', {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form)
     })
     .catch((err) => console.log("err", err));
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