type Data = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
  };
  slug: string;
  parent: number;
};

function createApiUrl(pageId: string | number): string {
  let BASEURL = `http://localhost/wp-json/wp/v2/pages/`;
  return `${BASEURL}${pageId}`;
}

export async function getData(pageId: string | number) {
  let tempParentId = 0;
  let breadTreeElements: any = [];
  let dataUrl = createApiUrl(pageId);
  let responseData = await fetch(dataUrl);
  const data: any = (await responseData.json()) as any;
  breadTreeElements.push({
    breadText: data.title.rendered,
    url: data.slug,
  });
  tempParentId = data.parent;

  while (tempParentId !== 0) {
    let dataUrl = createApiUrl(tempParentId);
    let responseData = await fetch(dataUrl);
    const tempReturnData: any = (await responseData.json()) as any;
    breadTreeElements.push({
      breadText: tempReturnData.title.rendered,
      url: tempReturnData.slug,
    });
    tempParentId = tempReturnData.parent;
  }

  return { data, breadTreeElements };
}
