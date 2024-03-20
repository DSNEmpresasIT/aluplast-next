import axios from "axios";
import { InstagramPost } from "@/utils/types";

const url:string = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp,thumbnail_url&access_token=`;

export async function getInstagramImages(token: string, next?: string) {
  try {
    const data = await axios.get(`${next ?? url+token}`)

    const filteredData = data.data.data.filter(
      (photo:any) => photo.media_type === 'IMAGE' || photo.media_type === "CAROUSEL_ALBUM" 
    );

    return {
      images: filteredData,
      next: data.data.paging.next
    };
  } catch (error) {
    // @ts-ignore
    throw new Error(error?.message)
  }
}


export async function getInstagramPosts(token: string) {
  try {
    const dataFetched = await fetch(`${url}${token}`)
    const dataParsed = (await dataFetched.json()).data;

    return dataParsed;
  }
   catch (error) {
      throw new Error();
  }
}

export async function getInstagramVideos (token: string): Promise<InstagramPost[]> {
  try {
    const dataFetched = await fetch(`${url}${token}`)
    const dataParsed = (await dataFetched.json()).data;

    return dataParsed.filter((data:any) => data.media_type === 'VIDEO');
  } catch (error) {
    console.log(error)
    throw new Error();
  }
}

export async function getTheLastInstagramVideo (token: string): Promise<InstagramPost> {
  try {
    return (await getInstagramVideos(token))[0];
  } catch (error) {
    // @ts-ignore
    throw new Error(error.message)
  }
}
