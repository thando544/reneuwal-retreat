export const business = {
 name: 'Renewal Retreat', subtitle: 'Relaxation Lounge', tagline: 'Relax • Restore • Renew',
 phone: '+263 78 153 3476', whatsapp: '+263 78 153 3476', email: '', address: '', hours: '', directionsUrl: '',
 socials: { instagram: '', facebook: '' }, bookingEndpoint: '',
};
const photo = (id, width=1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
export const images = {
 hero: '/images/massage.jpg',
 massage: '/images/massage.jpg',
 spa: '/images/spa.jpg',
 facial: photo('photo-1570172619644-dfd03ed5d881'),
 nails: photo('photo-1604654894610-df63bc536371'),
 oils: photo('photo-1608571423902-eed4a5ad8108'),
};
const treatments = [
 ['body','Massage Therapy','Massage','Unwind with a flowing, full-body massage tailored to your comfort.','massage'],
 ['deep','Deep Tissue Massage','Massage','Focused pressure and thoughtful attention where you need it most.','massage'],
 ['couples','Couples Massage','Massage','Share a peaceful escape and a little time together.','spa'],
 ['four','Four Hands Massage','Massage','Two therapists working in harmony for an immersive experience.','massage'],
 ['combo','Combo Massage','Massage','The best of both: a relaxing body and foot massage.','spa'],
 ['foot','Foot Massage','Massage','A well-deserved moment of care for tired feet.','spa'],
 ['chair','Chair Massage','Massage','A short pause to ease everyday tension.','massage'],
 ['stone','Hot Stone Treatment','Wellness','Gentle warmth to complement your chosen massage.','spa'],
 ['facial','Facial Treatment','Beauty','Thoughtful care to leave your skin feeling refreshed.','facial'],
 ['scrub','Body Scrub','Wellness','A gentle exfoliating ritual for soft, refreshed skin.','oils'],
 ['wrap','Body Wrap','Wellness','Settle into a comforting, nourishing body ritual.','spa'],
 ['wax','Waxing','Beauty','Professional grooming with care and attention to your comfort.','facial'],
 ['mani','Manicure','Nails','Beautifully cared-for hands, down to the smallest detail.','nails'],
 ['pedi','Pedicure','Nails','Refresh your feet with attentive care and a polished finish.','nails'],
 ['aroma','Aromatherapy','Wellness','Slow down with delicate scents and a calming atmosphere.','oils'],
 ['steam','Steam Therapy','Wellness','A warm, quiet moment to relax and reset.','spa'],
 ['quick','Quick Massage','Massage','Make room for a restorative pause in your day.','massage'],
];
export const services = treatments.map(([id,name,category,description,img],i)=>({id,name,category,description,image:images[img],featured:[0,8,12,14].includes(i),bookable:true,duration:null,price:null,deepTissuePrice:null,addOnPrice:null}));
export const pricing=[];
const add=(serviceId,name,duration,price,deepTissuePrice=null,extra={})=>pricing.push({id:`${serviceId}-${pricing.length}`,category:serviceId,serviceId,name,description:'',duration,price,deepTissuePrice,addOnPrice:null,image:services.find(s=>s.id===serviceId).image,featured:false,bookable:true,...extra});
[[30,40,45],[60,60,70],[90,90,100],[120,120,130]].forEach(([d,p,t])=>add('body','Body Massage',d,p,t));
[[60,120,140],[90,180,200]].forEach(([d,p,t])=>{add('couples','Couples Massage',d,p,t,{premiumLabel:'Four hands'});add('four','Four Hands Massage',d,t);});
[[60,50,60],[90,80,90]].forEach(([d,p,t])=>add('combo','Combo Massage',d,p,t,{description:`${d/2} minutes body + ${d/2} minutes foot`}));
[[30,25],[60,40]].forEach(([d,p])=>add('foot','Foot Massage',d,p));
[[15,18],[25,25]].forEach(([d,p])=>add('chair','Chair Massage',d,p));
add('stone','Hot Stone Add-On',null,10,null,{addOnPrice:10});
const rows=(id,items)=>items.forEach(([name,price,qualifier])=>add(id,name,null,price,null,{qualifier:qualifier||'',...(qualifier==='+'?{addOnPrice:price}:{})}));
rows('mani',[['Regular Manicure',13],['French Manicure',18],['Paraffin Manicure',18],['Polish Change',10],['Kid’s Manicure',10],['Gel Manicure',30],['French Gel',37],['Powder Gel Manicure',40],['French Powder Gel Manicure',52],['Powder Gel Tip Set',55],['UV Gel New Set',80,'from'],['UV Gel Fill-ins',50,'from'],['French on top of UV Gel',10,'+'],['Permanent French',15,'+'],['Spa Manicure',35]]);
rows('pedi',[['Basic Pedicure',29],['Regular Pedicure',39],['Special Pedicure',55],['Spa Pedicure',69],['Lady’s Spa Pedicure',90],['Spa Jelly',7,'+'],['French',8,'+'],['Callus',10,'+'],['Update to Gel Polish',15,'+']]);
rows('wax',[['Eyebrows',10],['Lip',8],['Chin',10,'from'],['Side of Face',10,'from'],['Regular Bikini Wax',25],['Brazilian Bikini Wax',50],['Under Arms',20],['Lower Arms',20],['Upper Arms',25],['Full Arms',45],['Lower Leg',25],['Upper Leg',30],['Half Leg',25],['Full Leg',50],['Chest',30],['Back',50],['Shoulder',20]]);
[[10,13],[15,20],[20,25],[30,35]].forEach(([d,p])=>add('quick','Quick Massage',d,p));
export function optionsFor(id){return id==='deep'?pricing.filter(p=>p.serviceId==='body').map(p=>({...p,price:p.deepTissuePrice,name:'Deep Tissue Massage'})):pricing.filter(p=>p.serviceId===id);}
export function priceLabel(p){return `${p.addOnPrice?'+':p.qualifier==='from'?'From ':''}$${p.price}`;}
export const gallery = [
 ['Massage','A moment of release',images.massage],['Spa','Your quiet sanctuary',images.hero],['Beauty','Care for your skin',images.facial],['Nails','The finishing touches',images.nails],['Wellness','A little everyday ritual',images.oils],['Spa','Space to slow down',images.spa],
].map(([category,title,image])=>({category,title,image}));
