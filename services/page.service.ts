import axiosInstance from "@/utils/axiosNotionInstance";
import { config } from "@/config/config";

export class PageService {
  async getPageChildrens(pageId: string, authorization: string) {
    const response = await axiosInstance.get(
      `${config.notionURLAPI}/blocks/${pageId}/children`,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return response.data;
  }

  async updatePage(pageId: string, updates: unknown, authorization: string) {
    const response = await axiosInstance.patch(
      `${config.notionURLAPI}/pages/${pageId}`,
      updates,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return response.data;
  }
}
