const BASEURL = "https://www.notion.so/api/v3/";

function request({
  endpoint,
  creds: { token },
  body,
}: {
  endpoint: string;
  creds: { token: string };
  body?: object;
}) {
  return window
    .fetch(`${BASEURL}${endpoint}`, {
      headers: {
        accept: "*/*",
        "accept-language": "en-US",
        "content-type": "application/json",
        cookie: `token_v2=${token};`,
      },
      body: JSON.stringify({
        ...body,
        limit: 50,
        cursor: { stack: [] },
        chunkNumber: 0,
        verticalColumns: false,
      }),
      method: "POST",
    })
    .then((response) => response.json())
    .catch((error: Error) => console.error(error));
}
export default request;
