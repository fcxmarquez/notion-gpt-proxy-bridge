import axiosInstance from "@/utils/axiosNotionInstance";
import { config } from "@/config/config";

export class SearchService {
  async search(query: string, authorization: string) {
    const response = await axiosInstance.post(
      `${config.notionURLAPI}/search`,
      {
        query,
        sort: {
          direction: "ascending",
          timestamp: "last_edited_time",
        },
      },
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return response.data;
  }
}
