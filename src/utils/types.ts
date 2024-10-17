export interface Categories {
  id: number;
  created_at: string;
  is_active: boolean;
  deactivated_at: boolean;
  label: string;
  value: string;
  is_substance_active: null;
  childrens?: Categories[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  images: ImageUrl[]
  created_at: Date;
  stock?: number;
  code?: string;
  unid?: string;
  env?: number;
  product_features: {
    feature_text?: string;
    pdffiles?: ImageUrl;
    items?: {
      title: string;
      text: string;
    }[];
    specs: string[]
  }
}

export interface Project {
  id: number;
  _id?:number;
  active: boolean;
  title: string;
  description: string;
  project_client: string;
  project_date: string;
  imageUrl: ImageUrl[];
  project_type: ProjectType;
}

export interface ProjectType {
  id: number;
  label: string;
  value: string;
}

export interface CatalogData { 
  name: string;
  img?: string[];
  id?: string;
  specs?: Specs; 
  description?: string;
  pdfButton?: any;
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

export interface CartContextState {
  cart: CatalogData[];
}

export enum CartContextAcions {
  ADD_PRODUCT = 'ADD_PRODUCT_ACTION',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT_ACTION'
}

export enum InstagramPostMediaTypes {
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE',
  CAROUSEL = "CAROUSEL_ALBUM"
}

export enum ProductFathersTypes {
  OPENERS_TYPES = 'aberturas',
  CLOSERS_TYPES = 'cerramientos',
  CS_TYPES = 'sistemas-complementarios',
  SERVICES_TYPES = 'servicios',
  SOLAR_CONTROL = 'control-solar',
  WINDOWS = 'vidrios',
  GARAGE_DOORS = 'puertas-garaje',
  RESALES = 'reventas',
  FACHADAS = 'fachadas-y-lamas'
}

export enum TypeProduct {
  WINDOW_PRODUCT = 'ventanas',
  DOOR_PRODUCT = 'puertas',
  BAR_PRODDUCT = 'barandas',
  BATHROOM_PARTITION_PRODUCT = 'mampara-de-baño',
  RESALES_DOOR = 'puertas-placar',
  CURTAINS = 'cortinas'
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
