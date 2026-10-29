import {origin} from '../lib/site';
export default function sitemap(){return ['', '/servicos','/privacidade'].map(path=>({url:`${origin}${path}`,changeFrequency:'monthly' as const,priority:path===''?1:path==='/servicos'?0.9:0.6}))}
