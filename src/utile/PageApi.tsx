import { IP } from './IPadress';

export interface BreadTreeElement {
  breadText: string;
  url: string;
}

interface GetElement<D> {
  data: D;
  breadTreeElements: BreadTreeElement[];
}

function createApiUrl(pageId: string | number): string {
  let BASEURL = `${IP}/wp-json/wp/v2/pages/`;
  return `${BASEURL}${pageId}`;
}

export async function getData<T>(
  pageId: string | number,
): Promise<GetElement<T>> {
  let tempParentId = 0;
  let breadTreeElements: BreadTreeElement[] = [];
  let dataUrl = createApiUrl(pageId);
  let responseData = await fetch(dataUrl);
  const data = (await responseData.json()) as any;
  breadTreeElements.push({
    breadText: data.title.rendered,
    url: data.slug,
  });
  tempParentId = data.parent;

  while (tempParentId !== 0) {
    let dataUrl = createApiUrl(tempParentId);
    let responseData = await fetch(dataUrl);
    const tempReturnData = (await responseData.json()) as any;
    breadTreeElements.push({
      breadText: tempReturnData.title.rendered,
      url: tempReturnData.slug,
    });
    tempParentId = tempReturnData.parent;
  }
  breadTreeElements.reverse();
  const state = (await { data, breadTreeElements }) as GetElement<T>;
  return state;
}
