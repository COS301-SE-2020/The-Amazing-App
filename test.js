// Creator: WebInspector 537.36

import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
  vus: 100,
  duration: "5m",
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
};

export default function main() {
  let response;

  group(
    "page_2 - https://the-amazing-app-website.herokuapp.com/login",
    function () {
      response = http.get(
        "https://the-amazing-app-website.herokuapp.com/login",
        {
          headers: {
            Host: "the-amazing-app-website.herokuapp.com",
            Connection: "keep-alive",
            "Upgrade-Insecure-Requests": "1",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-User": "?1",
            "Sec-Fetch-Dest": "document",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
          },
        }
      );

      response = http.get(
        "https://api.tiles.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css"
      );

      response = http.get(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.min.js"
      );

      response = http.get(
        "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.css"
      );

      response = http.get(
        "https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"
      );

      response = http.get(
        "https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"
      );

      response = http.get(
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
        {
          headers: {
            Origin: "https://the-amazing-app-website.herokuapp.com",
          },
        }
      );

      response = http.get(
        "https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      );

      response = http.get("https://code.jquery.com/jquery-3.1.1.min.js", {
        headers: {
          Origin: "https://the-amazing-app-website.herokuapp.com",
        },
      });

      response = http.get(
        "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
      );

      response = http.get(
        "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/themes/default/assets/fonts/icons.woff2",
        {
          headers: {
            Origin: "https://the-amazing-app-website.herokuapp.com",
          },
        }
      );

      response = http.post(
        "https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel?database=projects%2Fthe-amazing-app-77843%2Fdatabases%2F%28default%29&database=projects%252Fthe-amazing-app-77843%252Fdatabases%252F%28default%29&VER=8&RID=57674&CVER=22&X-HTTP-Session-Id=gsessionid&%24httpHeaders=X-Goog-Api-Client%3Agl-js%2F+fire%2F6.6.2%0D%0A&zx=jnz0bchrag10&t=1&%2524httpHeaders=X-Goog-Api-Client%253Agl-js%252F%2520fire%252F6.6.2%250D%250A",
        {
          count: "1",
          ofs: "0",
          req0___data__:
            "%7B%22database%22%3A%22projects%2Fthe-amazing-app-77843%2Fdatabases%2F(default)%22%2C%22addTarget%22%3A%7B%22query%22%3A%7B%22structuredQuery%22%3A%7B%22from%22%3A%5B%7B%22collectionId%22%3A%22Users%22%7D%5D%2C%22where%22%3A%7B%22fieldFilter%22%3A%7B%22field%22%3A%7B%22fieldPath%22%3A%22Email%22%7D%2C%22op%22%3A%22EQUAL%22%2C%22value%22%3A%7B%22stringValue%22%3A%22ndhlovutape%40gmail.com%22%7D%7D%7D%2C%22orderBy%22%3A%5B%7B%22field%22%3A%7B%22fieldPath%22%3A%22__name__%22%7D%2C%22direction%22%3A%22ASCENDING%22%7D%5D%7D%2C%22parent%22%3A%22projects%2Fthe-amazing-app-77843%2Fdatabases%2F(default)%2Fdocuments%22%7D%2C%22targetId%22%3A2%7D%7D",
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            accept: "*/*",
            origin: "https://the-amazing-app-website.herokuapp.com",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      response = http.post(
        "https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel?database=projects%2Fthe-amazing-app-77843%2Fdatabases%2F%28default%29&database=projects%252Fthe-amazing-app-77843%252Fdatabases%252F%28default%29&VER=8&gsessionid=yEBwNkdChJcRd6OyAtqKe5d5kO8eMrxu&SID=58WEGx9TJXtx_p5OeUeUqQ&RID=57675&AID=5&zx=plvm2mnc91ml&t=1",
        {
          count: "1",
          ofs: "1",
          req0___data__:
            "%7B%22database%22%3A%22projects%2Fthe-amazing-app-77843%2Fdatabases%2F(default)%22%2C%22removeTarget%22%3A2%7D",
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            accept: "*/*",
            origin: "https://the-amazing-app-website.herokuapp.com",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "en-US,en;q=0.9",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    }
  );

  // Automatically added sleep
  sleep(1);
}
