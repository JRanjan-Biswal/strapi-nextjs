import { fetchAPI } from "@/utils/fetch-api";
import { getBackendUrl } from "@/utils/get-backend-url";
import pageQuery from "@/utils/query";

export async function getPageData(slug: string = "home-page") {
  
  let pathSetter = slug.length > 1 ? `${slug[slug.length-2]}s` : "pages";

  const path = `/api/${pathSetter}`;
  const baseUrl = getBackendUrl();
  const url = new URL(path, baseUrl);

  url.search = pageQuery(slug || 'home-page');

  return await fetchAPI(url.href, { method: "GET" });
}