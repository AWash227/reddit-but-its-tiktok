export const findImageSrc = post => {
  if (post.is_video) {
    if (post.secure_media) {
      if (post.secure_media.reddit_video) {
        return post.secure_media.reddit_video.fallback_url;
      }
    }
  } else if (post.preview) {
    if (post.preview.reddit_video_preview) {
      return post.preview.reddit_video_preview.fallback_url;
    } else if (post.preview.images[0].source.url) {
      let newPost = post.preview.images[0].source.url;
      newPost = newPost.replace("&amp;", "&");
      newPost = newPost.replace("&amp;", "&");
      return newPost;
    }
  } else if (post.media_embed.content) {
    return post.media_embed.content;
  } else if (post.secure_media) {
    if (post.secure_media.reddit_video) {
      return post.secure_media.reddit_video.fallback_url;
    }
  } else if (post.thumbnail) {
    return post.thumbnail;
  } else {
    return -1;
  }
};
export const postType = post => {
  if (post.is_video) {
    return "VIDEO";
  }
  if (post.preview) {
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

export const prettifyNumber = value => {
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

export const findLQImageSrc = post => {
  if (post.thumbnail) {
    return post.thumbnail;
  } else {
    return post.preview.images[0].resolutions[0].url;
  }
};
export const parseData = data => {
  const before = data.data.before;
  const after = data.data.after;
  const numPosts = data.data.dist;
  const posts = data.data.children.map(child => ({
    ...child.data,
    type: postType(child.data),
    image: findImageSrc(child.data),
    thumb: findLQImageSrc(child.data)
  }));

  return { before, after, numPosts, posts };
};

export default parseData;
