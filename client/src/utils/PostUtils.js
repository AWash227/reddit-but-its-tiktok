export const getMediaSrc = post => {
  switch (post.type) {
    case "VIDEO":
      if (post.secure_media) {
        if (post.secure_media.reddit_video) {
          return post.secure_media.reddit_video;
        } else if (post.preview.reddit_video_preview) {
          return post.preview.reddit_video_preview.fallback_url;
        }
      }
    case "IMAGE":
      if (post.preview.images[0].source.url) {
        let src = post.preview.images[0].source.url;
        while (src.includes("&amp;")) {
          src = src.replace("&amp;", "&");
        }
        return src;
      } else if (post.thumbnail) {
        return post.thumbnail;
      }
    default:
      return "No image sources found";
  }
};

export const getPostType = post => {
  if (post.is_video) {
    return "VIDEO";
  } else if (post.preview) {
    if (post.preview.reddit_video_preview) {
      return "VIDEO";
    } else if (post.preview.images[0].source.url) {
      return "IMAGE";
    }
  } else if (post.media_embed.content) {
    return "VIDEO_EMBED";
  } else if (post.secure_media) {
    if (post.secure_media.reddit_video) {
      return "VIDEO";
    }
  } else {
    return "TEXT";
  }
};
export const numToString = value => {
  var suffixes = ["", "k", "m", "b", "t"];
  var suffixNum = Math.floor(("" + value).length / 3);
  var shortValue = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(4)
  );
  if (shortValue % 1 != 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

export const getThumbnailSrc = post => {
  if (post.type === "IMAGE") {
    if (post.thumbnail) {
      return post.thumbnail;
    } else {
      return post.preview.images[0].resolutions[0].url;
    }
  } else {
    return "Post is not of type: 'Image'";
  }
};

export const formatPost = post => {
  let formattedPost = { ...post };
  formattedPost.type = getPostType(post);
  formattedPost.media = getMediaSrc(formattedPost);
  formattedPost.thumbnail = getThumbnailSrc(formattedPost);
  return formattedPost;
};
