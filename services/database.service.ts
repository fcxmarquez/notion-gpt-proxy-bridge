import axiosInstance from "@/utils/axiosNotionInstance";
import { config } from "@/config/config";

export class DatabaseService {
  async getDatabase(databaseId: string, authorization: string) {
    const response = await axiosInstance.get(
      `${config.notionURLAPI}/databases/${databaseId}`,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return response.data;
  }
}
