import React from "react";
import "../index.scss";
import "tachyons";
import Display from "../components/Display";

export default {
  title: "Display",
  component: Display
};

export const FullImagePost = () => (
  <Display
    post={{
      type: "IMAGE",
      media:
        "https://preview.redd.it/6gv9pgn93to41.jpg?auto=webp&s=ad93aa1f16665a11688355848086dc93666dffd9",
      title:
        "Oh hell yeah, this is perhaps the best post in the history of posts, maybe... ever? \n You know how it is fit fam.",
      num_comments: 812,
      score: 12004,
      thumbnail:
        "https://preview.redd.it/g0ntijya7to41.jpg?auto=webp&s=9ba5bfa4e5304a8ef2a4b0ce04c73490388c1f01"
    }}
  />
);

export const FullGIFPost = () => (
  <Display
    post={{
      type: "VIDEO",
      media: "https://v.redd.it/5o4vbdghvro41/DASH_720?source=fallback",
      title: "OMG FNAF 19 is out guys!!!",
      thumbnail:
        "https://external-preview.redd.it/Hl2OZhOw1iRmbP-AS2HtIyCUE3pqmSLugG6HQnxLhBU.png?width=108&crop=smart&format=pjpg&auto=webp&s=6c1ffceaa2f25e55a1338b5d725fa47f31377d46",
      num_comments: 88,
      score: 3486
    }}
    autoplay
  />
);

export const FullVideoEmbedPost = () => (
  <Display
    post={{
      type: "VIDEO_EMBED",
      media:
        "https://www.youtube.com/embed/soYkEqDp760?feature=oembed&amp;enablejsapi=1; autoplay=1;",
      title: "How trolls on Reddit try to manipulate you",
      thumbnail:
        "https://external-preview.redd.it/mtqMZjmag7fCjUPCEhocdSaVMc41XgNEs8Cn-HQfWGw.jpg?width=108&crop=smart&auto=webp&s=e73b4da43c9754215f5a5e4650026a61bc5acd5e",
      num_comments: 27,
      score: 80
    }}
    autoplay
  />
);
