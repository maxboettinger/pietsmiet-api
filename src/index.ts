import axios from "axios";

export default class PietSmietApi {
  baseUrl: string;
  userAgent: string;
  integrity: string;
  headers: any;

  constructor(userAgent: string, integrity: string) {
    this.baseUrl = "https://www.pietsmiet.de/api/v1/";
    this.userAgent = userAgent;
    //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36";
    this.integrity = integrity; //"3f3749c0";

    this.headers = {
      Accept: "application/json",
      "User-Agent": this.userAgent,
      "X-Origin-Integrity": this.integrity,
    };
  }

  getVideos = async (requestConfig: contentRequest) => {
    const response = await axios.get<any>(
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
    );

    return response.data;
  };

  getPlaylists = async (requestConfig: contentRequest) => {
    const response = await axios.get<any>(
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
    );

    return response.data;
  };

  getClips = async (requestConfig: contentRequest) => {
    const response = await axios.get<any>(
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
    );

    return response.data;
  };

  getPodcasts = async (requestConfig: contentRequest) => {
    const response = await axios.get<any>(
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
    );

    return response.data;
  };

  getChannels = async (requestConfig: contentRequest) => {
    const response = await axios.get<any>(
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
    );

    return response.data;
  };

  getAuthors = async () => {
    const response = await axios.get<any>(this.baseUrl + "videos/authors", {
      headers: {
        Accept: "application/json",
        "User-Agent": this.userAgent,
        "X-Origin-Integrity": this.integrity,
      },
    });

    return response.data;
  };

  getNews = async (requestConfig: contentRequest) => {
    const response = await axios.get<any>(
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
    );

    return response.data;
  };
}
