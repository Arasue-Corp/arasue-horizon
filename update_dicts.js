const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'src/i18n/dictionaries/en.json');
const esPath = path.join(__dirname, 'src/i18n/dictionaries/es.json');

const enDict = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const esDict = JSON.parse(fs.readFileSync(esPath, 'utf8'));

// Update EN
// HORIZON
enDict.corporate.newsroom = {
  title: "Newsroom",
  content: "Latest updates, press releases, and media resources from Arasue Horizon."
};
enDict.corporate.contact = {
  title: "Global Headquarters",
  content: "Partner with Arasue Horizon. Direct lines to our investment and PR teams."
};

// FORGE
enDict.forge.services_page = {
  title: "Engineered for Dominance",
  subtitle: "We don't just build websites. We build scalable systems that dominate your market.",
  scarcity: "Due to our high-touch process, we only onboard 3 new clients per quarter."
};
enDict.forge.portfolio_page = {
  title: "Our Work",
  subtitle: "Case studies of scalable digital products."
};
enDict.forge.pricing_page = {
  title: "Transparent, Scale-Ready Pricing",
  subtitle: "No hidden fees. Premium infrastructure packaged into predictable models.",
  anchoring_text: "While traditional agencies charge $50k+ upfront, our SaaS model guarantees zero technical debt for a fraction of the cost."
};
enDict.forge.contact_page = {
  title: "Start Your Build",
  subtitle: "Schedule a discovery session with our senior architects."
};

// MEDIA
enDict.media.work_page = {
  title: "Selected Campaigns",
  subtitle: "High-voltage content that shapes digital culture."
};
enDict.media.creators_page = {
  title: "The Roster",
  subtitle: "Our exclusive network of digital talent and producers."
};
enDict.media.contact_page = {
  title: "Collaborate",
  subtitle: "Ready to go viral? Let's talk strategy."
};

// LABS
enDict.labs.shop_page = {
  title: "The Apothecary",
  subtitle: "Limited-batch organic harvests. Taste the untouched nature."
};
enDict.labs.story_page = {
  title: "Our Origins",
  subtitle: "From deep forests to premium extracts. The journey of Arasue Labs."
};
enDict.labs.contact_page = {
  title: "Wholesale & Support",
  subtitle: "Reach out for bulk orders and premium partnerships."
};

// Update ES
// HORIZON
esDict.corporate.newsroom = {
  title: "Sala de Prensa",
  content: "Últimas noticias, comunicados y recursos de medios de Arasue Horizon."
};
esDict.corporate.contact = {
  title: "Sede Global",
  content: "Asóciate con Arasue Horizon. Línea directa con nuestros equipos de inversión y PR."
};

// FORGE
esDict.forge.services_page = {
  title: "Diseñados para Dominar",
  subtitle: "No solo creamos páginas web. Construimos sistemas escalables que dominan tu mercado.",
  scarcity: "Debido a nuestra alta exigencia de calidad, solo aceptamos 3 nuevos clientes por trimestre."
};
esDict.forge.portfolio_page = {
  title: "Nuestro Trabajo",
  subtitle: "Casos de estudio de productos digitales escalables."
};
esDict.forge.pricing_page = {
  title: "Precios Transparentes y Escalables",
  subtitle: "Sin costos ocultos. Infraestructura premium en modelos predecibles.",
  anchoring_text: "Mientras las agencias tradicionales cobran más de $50k USD por adelantado, nuestro modelo SaaS garantiza cero deuda técnica por una fracción del costo."
};
esDict.forge.contact_page = {
  title: "Inicia tu Proyecto",
  subtitle: "Agenda una sesión de descubrimiento con nuestros arquitectos senior."
};

// MEDIA
esDict.media.work_page = {
  title: "Campañas Destacadas",
  subtitle: "Contenido de alto voltaje que moldea la cultura digital."
};
esDict.media.creators_page = {
  title: "Nuestro Talento",
  subtitle: "Nuestra red exclusiva de talento digital y productores."
};
esDict.media.contact_page = {
  title: "Colabora con Nosotros",
  subtitle: "¿Listo para volverte viral? Hablemos de estrategia."
};

// LABS
esDict.labs.shop_page = {
  title: "La Botica",
  subtitle: "Cosechas orgánicas de lote limitado. Prueba la naturaleza intacta."
};
esDict.labs.story_page = {
  title: "Nuestros Orígenes",
  subtitle: "De bosques profundos a extractos premium. El viaje de Arasue Labs."
};
esDict.labs.contact_page = {
  title: "Mayoreo y Soporte",
  subtitle: "Contáctanos para pedidos por volumen y asociaciones premium."
};

fs.writeFileSync(enPath, JSON.stringify(enDict, null, 2));
fs.writeFileSync(esPath, JSON.stringify(esDict, null, 2));
console.log('Dictionaries updated successfully.');
