export async function getCustomPostApi(
  typeName: string,
  categoryName: string,
  categoryNum: number,
) {
  let serviceDataURL = `http://localhost/wp-json/wp/v2/${typeName}?${categoryName}=${categoryNum}`;
  const responseData = await fetch(serviceDataURL);
  const data = await responseData.json();
  return data;
}
