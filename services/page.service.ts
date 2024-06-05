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
}
