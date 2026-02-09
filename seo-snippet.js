// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.belkorart.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.belkorart.com/","title_tag":"Maine Art & Impressionist Paintings | BelKor Art","meta_description":"New England art by Wendy Korjeff Bellows in Boothbay, Maine. Impressionist land and sea paintings, seascapes for sale, and still life art from the Cape School of Art tradition."},{"page_url":"https://www.belkorart.com/portfolios","title_tag":"Maine Art Portfolios & New England Art | BelKor Art","meta_description":"Browse impressionist Maine art portfolios by Wendy Korjeff Bellows. Land and sea paintings, landscape paintings, seascapes for sale, and still life art inspired by New England."},{"page_url":"https://www.belkorart.com/land-sea-grid-portfolio","title_tag":"Land and Sea Paintings & Seascapes | BelKor Art","meta_description":"Land and sea paintings and New England seascapes for sale by Maine artist Wendy Korjeff Bellows. Impressionist landscape paintings capturing coastal light and atmosphere."},{"page_url":"https://www.belkorart.com/still-studies-grid-portfolio","title_tag":"Still Life Art & Impressionist Paintings | BelKor Art","meta_description":"Still life art and impressionist studies by Maine artist Wendy Korjeff Bellows. Explore small works and studies that capture light, color, and form in the Cape School of Art style."},{"page_url":"https://www.belkorart.com/etc-grid-portfolio","title_tag":"New England Art & Maine Impressionism | BelKor Art","meta_description":"Explore New England art by Wendy Korjeff Bellows, including figurative works and experiments. Impressionist paintings influenced by the Cape School of Art in coastal Maine."},{"page_url":"https://www.belkorart.com/about","title_tag":"Maine Art & Cape School of Art Artist | BelKor Art","meta_description":"Learn about Maine artist Wendy Korjeff Bellows. Impressionist paintings rooted in the Cape School of Art tradition, featuring New England landscape paintings and seascapes."},{"page_url":"https://www.belkorart.com/contact","title_tag":"Maine Art & Boothbay Art Contact | BelKor Art","meta_description":"Contact Maine artist Wendy Korjeff Bellows of BelKor Art in Boothbay. Inquire about impressionist land and sea paintings, seascapes for sale, and still life art commissions."}],"keywords":["Maine Art","Impressionist Paintings","Boothbay Art","Land and Sea Paintings","New England Art","Landscape Paintings","Seascapes for Sale","Still Life Art","Wendy Korjeff Bellows","Cape School of Art"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "VisualArtsEvent",
  "@id": "https://www.belkorart.com/#home",
  "name": "BELKOR ART – Impressionist Paintings by Wendy Korjeff Bellows",
  "url": "https://www.belkorart.com/",
  "description": "Oil paintings in the tradition of the American Impressionists by Boothbay, Maine artist Wendy Korjeff Bellows. Portfolios include land and seascapes, still lifes and studies, and other works. Maine art for sale featuring New England landscapes and seascapes.",
  "image": [
    "https://static.wixstatic.com/media/2248bf_114cf6e33ecc41b6974b462ce0b7172e~mv2.jpg/v1/fill/w_198,h_275,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc150%20Cape%20cedar_JPG.jpg",
    "https://static.wixstatic.com/media/2248bf_128108fd329c43d0b0f40ac1b17aa313~mv2.jpg/v1/fill/w_230,h_221,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc296%20crab%20apples_JPG.jpg",
    "https://static.wixstatic.com/media/2248bf_95fa3897bfb3436d925cb47a4448de65~mv2.jpg/v1/fill/w_282,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc294%20tomatoes_JPG.jpg",
    "https://static.wixstatic.com/media/2248bf_f8ecc113c6124800bbb880d41deef3f1~mv2.jpg/v1/crop/x_0,y_44,w_691,h_871/fill/w_237,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc284%20RDC%20bite_JPG.jpg",
    "https://static.wixstatic.com/media/2248bf_9831a91427c4497ab249f2667141c5f1~mv2.jpg/v1/fill/w_331,h_233,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc402%20WHbr%20sunset.jpg",
    "https://static.wixstatic.com/media/2248bf_21e70e092f3944688fd15e019f2daa8a~mv2.jpg/v1/fill/w_306,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc383b%20Floribunda.jpg",
    "https://static.wixstatic.com/media/2248bf_7b995b7b2df24eaa8b5087aadfd163ad~mv2.jpg/v1/crop/x_20,y_0,w_508,h_720/fill/w_220,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc426C%202.jpg",
    "https://static.wixstatic.com/media/2248bf_84710f3804af496ea43e17662fd27e78~mv2.jpg/v1/fill/w_282,h_221,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc087%20woody_JPG.jpg",
    "https://static.wixstatic.com/media/2248bf_f9d2e83b5b724a86b5670a26f3f64d1e~mv2.jpg/v1/fill/w_255,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sc225%20Dot%20in%20sun_JPG.jpg",
    "https://static.wixstatic.com/media/2248bf_e3305f5cab5647bda1d6d93c22849ff0~mv2.jpg/v1/fit/w_2500,h_1330,al_c/2248bf_e3305f5cab5647bda1d6d93c22849ff0~mv2.jpg"
  ],
  "inLanguage": "en",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "startDate": "2026-02-01",
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.belkorart.com/"
  },
  "performer": {
    "@type": "Person",
    "name": "Wendy Korjeff Bellows",
    "jobTitle": "Painter",
    "description": "Boothbay, Maine artist creating oil paintings in the tradition of the American Impressionists, inspired by Henry Hensche and the Cape School of Art.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boothbay",
      "addressRegion": "ME",
      "addressCountry": "US"
    },
    "telephone": "+1-207-633-3809",
    "email": "mailto:wendybelkor@gmail.com"
  },
  "organizer": {
    "@type": "Organization",
    "name": "BELKOR ART",
    "url": "https://www.belkorart.com/",
    "email": "mailto:wendybelkor@gmail.com",
    "telephone": "+1-207-633-3809",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boothbay",
      "addressRegion": "ME",
      "addressCountry": "US"
    }
  },
  "about": [
    "Maine art for sale",
    "New England art",
    "Cape School of Art",
    "Impressionist paintings",
    "Boothbay Region art",
    "landscapes",
    "seascapes",
    "still life paintings",
    "plein air painting"
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://www.belkorart.com/contact",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD"
  },
  "potentialAction": {
    "@type": "ViewAction",
    "target": "https://www.belkorart.com/portfolios"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
