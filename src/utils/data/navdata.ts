import { PAGES_PATH } from "../pages";
import { ProductFathersTypes } from "../types";

export interface NavData {
  label: string;
  link: string | PAGES_PATH;
  query?: {
    queryName: string;
    query: string;
  };
  subPages?: NavData[];
}

export const navData:NavData[] = [
  {
    label: 'Catálogo',
    link: PAGES_PATH.CATALOG_PATH,
    subPages: [
      {
        label: 'Aberturas',
        link: PAGES_PATH.CATALOG_PATH,
        query: {
          queryName: 'categoria',
          query: ProductFathersTypes.OPENERS_TYPES
        }
      },
      {
        label: 'Sistemas complementarios',
        link: PAGES_PATH.CATALOG_PATH,
        query: {
          queryName: 'categoria',
          query: ProductFathersTypes.CS_TYPES
        }
      },
      {
        label: 'Fachadas y lamas',
        link: PAGES_PATH.CATALOG_PATH,
        query: {
          queryName: 'categoria',
          query: ProductFathersTypes.FACHADAS
        }
      },
      {
        label: 'Portones garaje',
        link: PAGES_PATH.CATALOG_PATH,
        query: {
          queryName: 'categoria',
          query: ProductFathersTypes.GARAGE_DOORS
        }
      },
      {
        label: 'Vidrios',
        link: PAGES_PATH.CATALOG_PATH,
        query: {
          queryName: 'categoria',
          query: ProductFathersTypes.WINDOWS
        }
      },
      {
        label: 'Control solar',
        link: PAGES_PATH.CATALOG_PATH,
        query: {
          queryName: 'categoria',
          query: ProductFathersTypes.SOLAR_CONTROL
        }
      },
      {
        label: 'Reventa',
        link: PAGES_PATH.CATALOG_PATH,
        query: {
          queryName: 'categoria',
          query: ProductFathersTypes.RESALES
        }
      },
      {
        label: 'Texturas',
        link: PAGES_PATH.TEXTURES
      },
    ]
  },
  {
    label: 'Servicios',
    link: PAGES_PATH.SERVICES
  },
  {
    label: 'Noticias',
    link: PAGES_PATH.NEWS_PATH
  },
  {
    label: 'Proyectos',
    link: PAGES_PATH.SOME_PROJECTS
  },
  {
    label: 'Contacto',
    link: PAGES_PATH.CONTACT_PATH
  },
]