import axios from "axios";

export default class PietSmietApi {
  baseUrl: string;
  userAgent: string;
  integrity: string;
  headers: any;

  constructor(initConfig: initConfig) {
    this.baseUrl = "https://www.pietsmiet.de/api/v1/";
    this.userAgent = initConfig.userAgent;
    this.integrity = initConfig.integrity;

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
    return new Promise((resolve, reject) => {
      axios
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
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  };

  getPlaylists = async (requestConfig: contentRequest) => {
    return new Promise((resolve, reject) => {
      axios
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
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  };

  getClips = async (requestConfig: contentRequest) => {
    return new Promise((resolve, reject) => {
      axios
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
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  };

  getPodcasts = async (requestConfig: contentRequest) => {
    return new Promise((resolve, reject) => {
      axios
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
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  };

  getChannels = async (requestConfig: contentRequest) => {
    return new Promise((resolve, reject) => {
      axios
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
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  };

  getAuthors = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get<any>(this.baseUrl + "videos/authors", {
          headers: {
            Accept: "application/json",
            "User-Agent": this.userAgent,
            "X-Origin-Integrity": this.integrity,
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  };

  getNews = async (requestConfig: contentRequest) => {
    return new Promise((resolve, reject) => {
      axios
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
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  };
}
