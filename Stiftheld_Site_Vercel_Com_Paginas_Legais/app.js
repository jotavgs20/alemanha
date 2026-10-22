"use strict";
const config = window.STIFTHELD_CONFIG || {};
const isWebUrl = value => { try { return ["http:", "https:"].includes(new URL(value, window.location.href).protocol); } catch { return false; } };
document.querySelectorAll("[data-checkout]").forEach(link => {
  if (config.checkoutUrl && isWebUrl(config.checkoutUrl)) link.href = config.checkoutUrl;
});
document.querySelectorAll("[data-legal]").forEach(link => {
  const url = config.legal?.[link.dataset.legal];
  if (url && (isWebUrl(url) || /^(impressum|datenschutz|agb)\.html$/.test(url))) link.href = url;
  else { link.removeAttribute("href"); link.setAttribute("aria-disabled", "true"); }
});
