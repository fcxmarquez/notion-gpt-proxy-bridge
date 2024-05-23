import axiosInstance from "@/utils/axiosNotionInstance";

export class PageService {
  async getPage(pageId: string, authorization: string) {
    const response = await axiosInstance.get(
      `https://api.notion.com/v1/pages/${pageId}`,
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
      `https://api.notion.com/v1/pages/${pageId}`,
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
