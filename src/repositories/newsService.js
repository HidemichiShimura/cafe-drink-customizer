import { getQueryParams } from "utils/helper";

/**
 * Returns the sum of a and b
 * @param {object} queryObj
 * @returns {object} newsContent
 */
const fetchNews = async (queryObj) => {
  const queryPrameters = getQueryParams(queryObj);

  const res = await fetch(`aaaaa/news-feeds?${queryPrameters}`)
    .then((res) => {
      return res.json();
    })
    .catch((_) => {
      throw new Error("Error with news feed fetching");
    });

  if (res.status !== "ok") {
    throw new Error("Error with news feed fetching");
  }

  return res;
};

const fetchNewsContent = async (queryObj) => {
  const queryPrameters = getQueryParams(queryObj);

  const res = await fetch(`aaaaa/news-feeds/content?${queryPrameters}`)
    .then((res) => {
      return res.json();
    })
    .catch((_) => {
      throw new Error("Error with news content fetching");
    });

  if (res.status !== "ok") {
    throw new Error("Error with news feed fetching");
  }

  return res;
};

export const newsImpl = {
  fetchNews,
  fetchNewsContent,
};
