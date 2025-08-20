import { fetchAPI } from "@/utils/fetch-api";
import { getBackendUrl } from "@/utils/get-backend-url";
import pageQuery from "@/utils/query";

export async function getPageData(slug?: string) {
  const path = "/api/pages";
  const baseUrl = getBackendUrl();
  const url = new URL(path, baseUrl);

  url.search = pageQuery(slug || 'home-page');

  return await fetchAPI(url.href, { method: "GET" });
}