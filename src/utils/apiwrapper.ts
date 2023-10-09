import { APIResponse, APIRequestContext } from '@playwright/test';
export type useridType = { userId: number; id: number; title: string; completed: boolean };
class restRequest {
  constructor(private context: APIRequestContext) {}

  public async getUserid(id: string): Promise<useridType> {
    const response: APIResponse = await this.context!.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
    );
    const userid: useridType = await response.json();
    return userid;
  }
}
export const RestRequest = (context: APIRequestContext) => new restRequest(context);
