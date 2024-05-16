import { FaImage } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
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
      description: "Get images from Unsplash",
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
};

export const BASE_URL = "https://api.thexapi.xyz";
