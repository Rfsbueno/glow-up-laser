export const origin = 'https://www.glowuplaser.com.br';
export const whatsappNumber = '5511967300631';
export const whatsappLabel = '(11) 96730-0631';
export const whatsappUrl = (message = 'Olá! Gostaria de saber mais sobre os serviços da Glow Up Laser.') => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
export const units = [
 {id:'alphaville',name:'Alphaville',place:'Centro Comercial',street:'Calçada das Palmas, 61',detail:'1º Andar',city:'Barueri'},
 {id:'osasco',name:'Osasco',place:'Pátio Osasco Open Mall',street:'Av. Autonomista, 896',detail:'Torre 2 - Sala 1701',city:'Osasco'}
];
export const business = {'@context':'https://schema.org','@graph':[
 {'@type':'Organization','@id':`${origin}/#clinica`,name:'Glow Up Laser',url:origin,logo:`${origin}/images/logo-transparent.png`,telephone:'+55 11 96730-0631',areaServed:['Barueri','Osasco'],location:units.map(u=>({'@id':`${origin}/#unidade-${u.id}`}))},
 ...units.map(u=>({'@type':'BeautySalon','@id':`${origin}/#unidade-${u.id}`,name:`Glow Up Laser — ${u.name}`,url:`${origin}/#unidades`,telephone:'+55 11 96730-0631',parentOrganization:{'@id':`${origin}/#clinica`},address:{'@type':'PostalAddress',streetAddress:`${u.street}, ${u.detail} — ${u.place}`,addressLocality:u.city,addressRegion:'SP',addressCountry:'BR'},hasOfferCatalog:{'@type':'OfferCatalog',name:'Serviços',itemListElement:['Depilação a laser','Depilação a cera','Spa Day'].map(name=>({'@type':'Offer',itemOffered:{'@type':'Service',name}}))}}))
]};
export const services = [
 {id:'laser',number:'01',title:'Depilação a laser',tag:'LEVEZA PARA A SUA ROTINA',image:'laser',description:'Menos pelos, mais liberdade para viver a sua rotina. Um cuidado progressivo, que começa por entender a sua pele.',detail:'O laser atua nos folículos para reduzir o crescimento dos pelos ao longo de sessões. A indicação, os intervalos e a resposta ao tratamento variam conforme a pele, o pelo e a região. A avaliação profissional define o plano adequado para você.',points:['Avaliação individual antes de começar','Plano de sessões conforme a sua necessidade','Orientações de cuidado antes e depois']},
 {id:'cera',number:'02',title:'Depilação a cera',tag:'TOQUE SUAVE, CUIDADO PRÓXIMO',image:'bath',description:'Uma opção prática para a remoção dos pelos, com atenção à sensibilidade da sua pele e ao seu conforto.',detail:'A depilação a cera remove os pelos pela raiz. Converse com a equipe sobre a região desejada, a sensibilidade da sua pele e os cuidados necessários. Áreas atendidas, disponibilidade e valores são confirmados no atendimento.',points:['Escolha das regiões no atendimento','Atenção à sensibilidade da pele','Cuidados personalizados após a sessão']},
 {id:'spa',number:'03',title:'Spa Day',tag:'UM TEMPO INTEIRO PARA VOCÊ',image:'spa',description:'Desacelere. Faça uma pausa no ritmo do dia e abra espaço para uma experiência de bem-estar.',detail:'Um convite para colocar o autocuidado na agenda. Consulte a equipe para conhecer os rituais, a duração e as opções disponíveis para o seu Spa Day. A composição da experiência é confirmada no agendamento.',points:['Uma pausa dedicada ao bem-estar','Experiência combinada com a equipe','Rituais e duração sob consulta']}
];
