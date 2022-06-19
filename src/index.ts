import axios from "axios";

export default class PietSmietApi {
  baseUrl: string;
  userAgent: string;
  integrity: string;
  headers: any;

  constructor(initConfig: initConfig) {
    this.baseUrl = "https://www.pietsmiet.de/api/v1/";
    this.userAgent = initConfig.userAgent;
    //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36";
    this.integrity = initConfig.integrity; //"3f3749c0";

    this.headers = {
      Accept: "application/json",
      "User-Agent": this.userAgent,
      "X-Origin-Integrity": this.integrity,
    };

    if (this.integrity == undefined || this.userAgent == undefined) {
      throw "No input for integrity or userAgent!";
    }
  }

  getVideos = async (requestConfig: contentRequest) => {
    await axios
      .get<any>(
        this.baseUrl +
          "videos?limit=" +
          requestConfig.limit +
          "&page=" +
          requestConfig.page +
          "&order=" +
          requestConfig.order,
        {
          headers: this.headers,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error during request!");
        console.log(error.response.data);
      });
  };

  getPlaylists = async (requestConfig: contentRequest) => {
    await axios
      .get<any>(
        this.baseUrl +
          "videos/playlists?limit=" +
          requestConfig.limit +
          "&page=" +
          requestConfig.page +
          "&order=" +
          requestConfig.order,
        {
          headers: this.headers,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error during request!");
        console.log(error.response.data);
      });
  };

  getClips = async (requestConfig: contentRequest) => {
    await axios
      .get<any>(
        this.baseUrl +
          "videos/clips?limit=" +
          requestConfig.limit +
          "&page=" +
          requestConfig.page +
          "&order=" +
          requestConfig.order,
        {
          headers: this.headers,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error during request!");
        console.log(error.response.data);
      });
  };

  getPodcasts = async (requestConfig: contentRequest) => {
    await axios
      .get<any>(
        this.baseUrl +
          "podcast/episodes?limit=" +
          requestConfig.limit +
          "&page=" +
          requestConfig.page +
          "&order=" +
          requestConfig.order,
        {
          headers: this.headers,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error during request!");
        console.log(error.response.data);
      });
  };

  getChannels = async (requestConfig: contentRequest) => {
    await axios
      .get<any>(
        this.baseUrl +
          "videos/channels?limit=" +
          requestConfig.limit +
          "&page=" +
          requestConfig.page +
          "&order=" +
          requestConfig.order,
        {
          headers: this.headers,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error during request!");
        console.log(error.response.data);
      });
  };

  getAuthors = async () => {
    await axios
      .get<any>(this.baseUrl + "videos/authors", {
        headers: {
          Accept: "application/json",
          "User-Agent": this.userAgent,
          "X-Origin-Integrity": this.integrity,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error during request!");
        console.log(error.response.data);
      });
  };

  getNews = async (requestConfig: contentRequest) => {
    await axios
      .get<any>(
        this.baseUrl +
          "news/articles?limit=" +
          requestConfig.limit +
          "&page=" +
          requestConfig.page +
          "&order=" +
          requestConfig.order,
        {
          headers: this.headers,
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log("error during request!");
        console.log(error.response.data);
      });
  };
}
