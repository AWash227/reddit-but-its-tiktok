export const removeEncoding = str => {
  let fixedStr = str;
  while (fixedStr.includes("&amp;")) {
    fixedStr = fixedStr.replace("&amp;", "&");
  }
  return fixedStr;
};

export const getEmbedFromContent = (content = "") => {
  let startPos = content.indexOf("src=");
  let sliced = content.slice(startPos);
  let endPos = sliced.indexOf('"');
  sliced = sliced.slice(0, endPos);
  return sliced;
};

export const getMediaSrc = post => {
  switch (post.type) {
    case "VIDEO_EMBED":
      if (post.secure_media_embed.content) {
        return getEmbedFromContent(post.secure_media_embed.content);
      } else if (post.media_embed.content) {
        return getEmbedFromContent(post.media_embed.content);
      }
    case "VIDEO":
      if (post.preview.reddit_video_preview) {
        return post.preview.reddit_video_preview.fallback_url;
      } else if (post.secure_media) {
        if (post.secure_media.reddit_video) {
          return post.secure_media.reddit_video.fallback_url;
        }
      }
    case "IMAGE":
      if (post.preview.images[0].source.url) {
        return removeEncoding(post.preview.images[0].source.url);
      } else if (post.thumbnail) {
        return post.thumbnail;
      }
    default:
      return "No image sources found";
  }
};

export const getPostType = post => {
  if (post.media_embed.content || post.secure_media_embed.content) {
    return "VIDEO_EMBED";
  } else if (post.is_video) {
    return "VIDEO";
  } else if (post.preview) {
    if (post.preview.reddit_video_preview) {
      return "VIDEO";
    } else if (post.preview.images[0].source.url) {
      return "IMAGE";
    }
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
  if (post.preview) {
    if (post.preview.images[0].resolutions[0]) {
      return removeEncoding(post.preview.images[0].resolutions[0].url);
    } else if (post.thumbnail) {
      return removeEncoding(post.thumbnail);
    } else {
      return "There was no suitable image";
    }
  }
};

export const formatPost = post => {
  let formattedPost = { ...post };
  formattedPost.type = getPostType(post);
  formattedPost.media = getMediaSrc(formattedPost);
  formattedPost.thumbnail = getThumbnailSrc(formattedPost);
  return formattedPost;
};
