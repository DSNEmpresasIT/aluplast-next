export enum InstagramPostMediaTypes {
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE',
  CAROUSEL = "CAROUSEL_ALBUM"
}

export interface CatalogData { 
  name: string;
  img?: string[];
  id?: string;
  specs?: Specs; 
  description?: string;
  filters: string[];
}

interface Specs {
  description?: {
    title: string;
    text: string;
  }[];
  minMeasures?: string;
  maxMeasures?: string;
  features?: string[];
}

export enum ProductFathersTypes {
  OPENERS_TYPES = 'aberturas',
  CLOSERS_TYPES = 'cerramientos',
  CS_TYPES = 'sistemas-complementarios',
  SERVICES_TYPES = 'servicios',
  SOLAR_CONTROL = 'control-solar',
  WINDOWS = 'vidrios',
  GARAGE_DOORS = 'puertas-garage',
  RESALES = 'reventas'
}

export enum TypeProduct {
  WINDOW_PRODUCT = 'ventanas',
  DOOR_PRODUCT = 'puertas',
}

export enum CatalogFiltersTypes {
  SEARCH = 'BY_SEARCH',
  PRODUCT_FILTER = 'BY_FILTER',
  IMG = 'BY_IMG'
}

export interface TexturesTypes {
  name: string;
  img: string;
}

export interface InstagramPost { 
  caption: string;
  id: string;
  media_type: InstagramPostMediaTypes; 
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url: string;
}

export interface FacebookPost {
  description: string;
  icon: string;
  comments: FacebookPostComments[];
  created_time: string;
  target: Target;
  image: FacebookPostImage;
  url: string;
}

export interface ImageUrl {
  id: string;
  url: string
}

export interface FacebookPostComments {
  created_time: string;
  message: string;
  from: {
    name: string;
    id: string;
    picture: {
      data: {
        height: number;
        is_silhouette: boolean;
        url: string;
        width: number;
      }
    }
  }
}

export interface FacebookPostImage {
  height: number;
  src: string;
  width: number;
}

export interface BlogContextState {
 keys: Keys | undefined;
 facebookPostDetail: FacebookPost | undefined;
 facebookPostData: FacebookPost[] | undefined;
}

export interface Keys {
  FACEBOOK_TOKEN: string;
  FACEBOOK_PAGE_ID: string;
}

export interface Target {
  id: string;
}

export interface ProjectDetail {
  _id: string;
  imageUrl: ImageUrl[];
  title: string;
  description: string;
  type: ProjectTypes;
  projectClient: string;
  project_date?: string;
}

export enum ProjectTypes {
  RESIDENCIAL = 'residencial',
  INSTITUCIONAL = 'institucional',
  EDIFICIOS = 'edificios',
  INTERIORISMO = 'interiorismo'
}

export interface SendEmailDto {
  fullName: string;
  from: string;
  subject: string;
  message: string;
}

