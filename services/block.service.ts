import axiosInstance from "@/utils/axiosNotionInstance";
import { config } from "@/config/config";

export class BlockService {
  async getBlock(blockId: string, authorization: string) {
    const response = await axiosInstance.get(`${config.notionURLAPI}/blocks/${blockId}`, {
      headers: {
        Authorization: authorization,
      },
    });
    return response.data;
  }

  async getBlockChildren(pageId: string, authorization: string) {
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

  async updateBlock(blockId: string, updates: unknown, authorization: string) {
    const response = await axiosInstance.patch(
      `${config.notionURLAPI}/blocks/${blockId}`,
      updates,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return response.data;
  }

  async appendBlockChildren(blockId: string, children: unknown, authorization: string) {
    const response = await axiosInstance.patch(
      `${config.notionURLAPI}/blocks/${blockId}/children`,
      children,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return response.data;
  }

  async deleteBlock(blockId: string, authorization: string) {
    const response = await axiosInstance.delete(
      `${config.notionURLAPI}/blocks/${blockId}`,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );
    return response.data;
  }
}
