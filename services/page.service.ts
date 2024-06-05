import axiosInstance from "@/utils/axiosNotionInstance";
import { config } from "@/config/config";

export class PageService {
  async getPage(pageId: string, authorization: string) {
    const response = await axiosInstance.get(`${config.notionURLAPI}/pages/${pageId}`, {
      headers: {
        Authorization: authorization,
      },
    });
    return response.data;
  }

  async createPage(pageData: unknown, authorization: string) {
    const response = await axiosInstance.post(`${config.notionURLAPI}/pages`, pageData, {
      headers: {
        Authorization: authorization,
      },
    });
    return response.data;
  }
}
