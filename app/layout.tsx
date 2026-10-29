import type { Metadata } from 'next';
import './globals.css';
import { Shell } from './ui';
import { business, origin } from '../lib/site';
export const metadata:Metadata={metadataBase:new URL(origin),title:{default:'Glow Up Laser | Depilação e Spa Day em Alphaville e Osasco',template:'%s | Glow Up Laser'},description:'Depilação a laser, depilação a cera e Spa Day em Alphaville e Osasco. Conheça a Glow Up Laser e descubra um cuidado no seu ritmo.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><a className="skip" href="#conteudo">Pular para o conteúdo</a><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(business)}}/><Shell>{children}</Shell></body></html>}
