import axiosInstance from "@/utils/axiosNotionInstance";
import { config } from "@/config/config";

export class SearchService {
  async search(pageData: unknown, authorization: string) {
    const response = await axiosInstance.post(`${config.notionURLAPI}/search`, pageData, {
      headers: {
        Authorization: authorization,
      },
    });
    return response.data;
  }
}
