import test from 'node:test';
import assert from 'node:assert/strict';
import {services,pricing,optionsFor,priceLabel,business} from './data.js';
test('all price records have unique IDs and valid service references',()=>{assert.equal(new Set(pricing.map(p=>p.id)).size,pricing.length);for(const p of pricing){assert.ok(services.some(s=>s.id===p.serviceId));assert.ok(p.price>0);}});
test('body and deep tissue durations preserve supplied prices',()=>{assert.deepEqual(optionsFor('body').map(p=>[p.duration,p.price,p.deepTissuePrice]),[[30,40,45],[60,60,70],[90,90,100],[120,120,130]]);assert.deepEqual(optionsFor('deep').map(p=>p.price),[45,70,100,130]);});
test('quick massage stays separate from chair and body',()=>{assert.deepEqual(optionsFor('quick').map(p=>[p.duration,p.price]),[[10,13],[15,20],[20,25],[30,35]]);assert.equal(optionsFor('chair').length,2);});
test('all beauty price lists and add-on qualifiers are present',()=>{assert.equal(optionsFor('mani').length,15);assert.equal(optionsFor('pedi').length,9);assert.equal(optionsFor('wax').length,17);assert.equal(priceLabel(optionsFor('stone')[0]),'+$10');assert.equal(priceLabel(optionsFor('mani').find(p=>p.name==='UV Gel New Set')),'From $80');});
test('calls and bookings use the supplied business number',()=>{assert.equal(business.phone.replace(/\D/g,''),'263781533476');assert.equal(business.whatsapp.replace(/\D/g,''),'263781533476');assert.equal(business.bookingEndpoint,'');});
