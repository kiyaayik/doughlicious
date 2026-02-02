let currentLang = "id";

const langData = {
  id: {
    subtitle: "Pastry Segar Setiap Hari",
    productTitle: "Produk Favorit",
    d1: "Creamy dan Lembut",
    d2: "Manis dan Chewy",
    d3: "Renyah dan Gurih",
    d4: "Manis dan Creamy",
    d5: "Manis dan Lembut",
    d6: "Segar dan Renyah",
    order: "Pesan",
    message: "Halo, saya ingin memesan produk dari Doughlicious",
    footer: "📍 Bakery Kami • ☎ 0812-1962-4487",
  },
  en: {
    subtitle: "Fresh Pastry Every Day",
    productTitle: "Featured Products",
    d1: "Creamy and Soft",
    d2: "Sweet and Chewy",
    d3: "Crispy and Tasty",
    d4: "Sweet and Creamy",
    d5: "Sweet and Soft",
    d6: "Fresh and Crunchy",
    order: "Order",
    message: "Hello, I would like to order from Doughlicious",
    footer: "📍 Our Bakery • ☎ 0812-1962-4487",
  },
  it: {
    subtitle: "Pasticceria Fresca Ogni Giorno",
    productTitle: "Prodotti Preferiti",
    d1: "Cremoso e Morbido",
    d2: "Dolce e Gommoso",
    d3: "Croccante e Gustoso",
    d4: "Dolce e Cremoso",
    d5: "Dolce e Morbido",
    d6: "Fresco e Croccante",
    order: "Ordina",
    message: "Ciao, vorrei ordinare dalla Doughlicious",
    footer: "📍 La Nostra Pasticceria • ☎ 0812-1962-4487",
  },
};

function setLang(lang) {
  currentLang = lang;
  document.getElementById("subtitle").innerText = langData[lang].subtitle;
  document.getElementById("productTitle").innerText =
    langData[lang].productTitle;
  document.getElementById("d1").innerText = langData[lang].d1;
  document.getElementById("d2").innerText = langData[lang].d2;
  document.getElementById("d3").innerText = langData[lang].d3;
  document.getElementById("d4").innerText = langData[lang].d4;
  document.getElementById("d5").innerText = langData[lang].d5;
  document.getElementById("d6").innerText = langData[lang].d6;
  document.getElementById("b1").innerText = langData[lang].order;
  document.getElementById("b2").innerText = langData[lang].order;
  document.getElementById("b3").innerText = langData[lang].order;
  document.getElementById("b4").innerText = langData[lang].order;
  document.getElementById("b5").innerText = langData[lang].order;
  document.getElementById("b6").innerText = langData[lang].order;
  document.getElementById("footer").innerText = langData[lang].footer;
}

function order() {
  const phone = "6281219624487";
  const text = encodeURIComponent(langData[currentLang].message);
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
}
