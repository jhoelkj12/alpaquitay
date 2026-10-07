'use strict';
const config = window.ALPAQUITAY;
const priceFormat = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' });
const validPhone = /^51\d{9}$/.test(config.whatsapp);
const whatsappURL = name => `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(name ? `Hola ALPAQUITAY, quisiera pedir ${name}. ¿Me confirman disponibilidad y precio?` : 'Hola ALPAQUITAY, quisiera consultar sobre el menú y los horarios de atención.')}`;
function configureWhatsApp(link, name) {
  if (validPhone) {
    link.href = whatsappURL(name);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.href = '#order-status';
    link.addEventListener('click', event => {
      event.preventDefault();
      const status = document.getElementById('order-status');
      status.hidden = false;
      status.textContent = 'Pronto podrás pedir por WhatsApp. El número de contacto aún está por confirmar.';
      status.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
    });
  }
}
config.products.forEach(product => {
  const card = document.createElement('article');
  card.className = 'product';
  const photo = document.createElement('div');
  photo.className = 'product-photo';
  const img = document.createElement('img');
  img.src = product.image;
  img.alt = `${product.name} · imagen referencial`;
  img.width = 640; img.height = 427; img.loading = 'lazy'; img.decoding = 'async';
  const label = document.createElement('span');
  label.className = 'product-label'; label.textContent = product.label;
  photo.append(img, label);
  const body = document.createElement('div'); body.className = 'product-body';
  const heading = document.createElement('h3'); heading.textContent = product.name;
  const description = document.createElement('p'); description.textContent = product.description;
  const price = document.createElement('strong'); price.className = 'price'; price.textContent = priceFormat.format(product.price);
  const link = document.createElement('a'); link.className = 'button product-order'; link.textContent = 'Pedir por WhatsApp';
  link.setAttribute('aria-label', `Pedir ${product.name} por WhatsApp`);
  configureWhatsApp(link, product.name);
  body.append(heading, description, price, link); card.append(photo, body);
  document.getElementById('products').append(card);
});
document.querySelectorAll('[data-whatsapp]').forEach(link => configureWhatsApp(link));
document.getElementById('address').textContent = config.address;
document.getElementById('hours').textContent = config.hours;
document.getElementById('phone').textContent = validPhone ? `+${config.whatsapp}` : '· Contacto por confirmar';
document.getElementById('year').textContent = new Date().getFullYear();
if (config.logo) {
  const logo = document.createElement('img'); logo.src = config.logo; logo.alt = 'ALPAQUITAY'; logo.className = 'logo';
  document.getElementById('brand-logo').replaceChildren(logo);
}
config.social.forEach(social => {
  if (!/^https:\/\//.test(social.url)) return;
  const link = document.createElement('a'); link.textContent = social.name; link.href = social.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
  document.getElementById('social-links').append(link);
});
