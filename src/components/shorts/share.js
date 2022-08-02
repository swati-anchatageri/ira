import React from "react";
import Facebook from "react-icons";
import { ShareButton } from "react-custom-share";

const Share = props => {
  const shareButtonProps = {
    url: "https://github.com/greglobinski/react-custom-share",
    network: "Facebook",
    text: "Give it a try - react-custom-share component",
    longtext:
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
  };

  return <ShareButton {...shareButtonProps}>
    <Facebook />
  </ShareButton>;
};

export default Share;

