import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  useEffect(() => {
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyDthwLOhhTgIVIIFyp3Ff9w23wme80Gn8U"
        }
      }
    );
  }, [language, text]);

  return <div />;
};

export default Convert;
