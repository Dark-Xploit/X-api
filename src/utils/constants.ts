export const api = [
  {
    name: "Image",
    key: "image",
  },
  {
    name: "Video",
    key: "video",
  },
  {
    name: "Ai",
    key: "ai",
  },
  {
    name: "Anime",
    key: "anime",
  },
  {
    name: "OsINT",
    key: "osint",
  },
  {
    name: "Downloaders",
    key: "downloaders",
  },
  {
    name: "News",
    key: "news",
  },
  {
    name: "Search",
    key: "search",
  },
  {
    name: "Email",
    key: "email",
  },
  {
    name: "Cryptocurrency",
    key: "cryptocurrency",
  },
  {
    name: "Weather",
    key: "weather",
  },
  {
    name: "Finance",
    key: "finance",
  },
  {
    name: "Programming",
    key: "programming",
  },
  {
    name: "Tools",
    key: "tools",
  },
  {
    name: "Social",
    key: "social",
  },
  {
    name: "Security",
    key: "security",
  },
  {
    name: "Other",
    key: "other",
  },
];

interface Parameter {
  [key: string]: string;
}
interface Service {
  name: string;
  description: string;
  method: string;
  endpoint: string;
  parameters: Parameter;
  url?: string;
}
interface Services {
  [key: string]: Service[];
}

export const services: Services = {
  image: [
    {
      name: "Pexels",
      description: "Get images from Pexels",
      method: "GET",
      endpoint: "/api/v1/pexel/image/",
      parameters: {
        query: "string",
        per_page: "number",
      },
      url: "/api/v1/pexel/image/?query=cat&per_page=10",
    },
  ],
  video: [
    {
      name: "Pexels",
      description: "Get videos from Pexels",
      method: "GET",
      endpoint: "/api/v1/pexel/video/",
      parameters: {
        query: "string",
        per_page: "number",
      },
      url: "/api/v1/pexel/video/?query=cat&per_page=10",
    },
  ],
  search: [
    {
      name: "Github User",
      description: "Search for a github user",
      method: "GET",
      endpoint: "/api/v1/search/github/users",
      parameters: {
        username: "string",
      },
      url: "/api/v1/search/github/users?username=Neeraj-x0",
    },
    {
      name: "Youtube",
      description: "Search for a youtube video",
      method: "GET",
      endpoint: "/api/v1/search/youtube",
      parameters: {
        query: "string",
        limit: "number",
      },
      url: "/api/v1/search/youtube?query=X-Asena&limit=10",
    },
  ],
  downloaders: [
    {
      name: "Instagram",
      description: "Download Instagram Post/Reels",
      method: "GET",
      endpoint: "/api/v1/download/instagram",
      parameters: {
        url: "string",
      },
      url: "/api/v1/download/instagram?url=https://www.instagram.com/p/C6nCwuiIODs/",
    },
    {
      name: "Youtube Audio",
      description: "Download Youtube Audio",
      method: "GET",
      endpoint: "/api/v1/download/youtube/audio",
      parameters: {
        url: "string",
      },
      url: "/api/v1/download/youtube/audio?url=https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      name: "Youtube Video",
      description: "Download Youtube Video",
      method: "GET",
      endpoint: "/api/v1/download/youtube/video",
      parameters: {
        url: "string",
      },
      url: "/api/v1/download/youtube/video?url=https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      name: "Youtube",
      description: "Search and download youtube audio/video",
      method: "GET",
      endpoint: "/api/v1/download/youtube",
      parameters: {
        query: "string",
        type: "string",
      },
      url: "/api/v1/download/youtube?query=Believer&type=audio",
    },
    {
      name: "Xvideos",
      description: "Download Xvideos Video",
      method: "GET",
      endpoint: "/api/v1/download/xvideos",
      parameters: {
        url: "string",
      },
      url: "/api/v1/download/xvideos?url=https://www.xvideos.com/video12345678/xxx",
    },
  ],
};

export const BASE_URL = "https://api.thexapi.xyz";
