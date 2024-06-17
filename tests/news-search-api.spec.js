import { test, expect } from "@playwright/test";
import { NewsSearchAPI } from "../apis/news-search-api";

test("Get News Search API Request", async ({ request }) => {
  const newsSearchApi = new NewsSearchAPI("태풍");
  const response = await request.get(newsSearchApi.url, {
    headers: {
      "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
    },
  });

  const responseBody = await response.json();
  console.log(responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody.total).toEqual(expect.any(Number));
  expect(responseBody.start).toEqual(expect.any(Number));
  expect(responseBody.display).toEqual(expect.any(Number));
  expect(responseBody.items.length).toBe(responseBody.display);

  const index = 0;
  expect(responseBody.items[index].title).toEqual(expect.any(String));
  expect(responseBody.items[index].description).toEqual(expect.any(String));
});
