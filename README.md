# 🥞 Stack’d – Modern ételrendelő weboldal

A **Stack’d** egy modern, látványos és mobilbarát weboldal egy képzeletbeli étterem vagy ételkiszállító vállalkozás számára. A weboldal a Cloudflare Pages szolgáltatásán keresztül kerül automatikusan publikálásra minden `main` branch-be történő commit után.
<br><br>Az oldal megtekinthető [itt](https://stack-d.pages.dev/)
---

## 🚀 Fő funkciók

- ✅ Reszponzív, mobilbarát kialakítás
- ✅ Látványos kezdőlap és szekciók: **Rólunk**, **Menü**, **Házhozszállítás**, **Karrier**
- ✅ Smooth scroll és sticky navigáció
- ✅ Karrier űrlap valós idejű mezőellenőrzéssel
- ✅ Kosár funkció és checkout oldal
- ✅ Cloudflare Pages automatikus deploy Git integrációval

---

## 🛠️ Használt technológiák

- **HTML5**, **CSS3**, **JavaScript (ES6+)**
- **Bootstrap 5**
- **Cloudflare Pages** – ingyenes, gyors statikus hosztolás

---

## 🧱 Projekt felépítése

```plaintext
stack'd/
├── dist/                        ← Buildelt fájlok (Cloudflare Pages innen deployol)
│   ├── assets/                  ← Összefűzött CSS és JS
│   │   ├── index-xxxxx.css
│   │   └── index-xxxxx.js
│   ├── images/                  ← Képek (build után)
│   │   ├── cart.png
│   │   └── logo.png
│   ├── checkout.html            ← Fizetési oldal
│   ├── index.html               ← Kezdőlap
│   └── logo.png
│
├── public/                      ← Nyers képek, nyilvános állományok
│   └── images/
│       ├── cart.png
│       ├── burger.png
│       └── logo.png
│
├── src/                         ← Forráskód
│   ├── main.js                  ← Fő JavaScript logika
│   └── style.css                ← Stíluslap
│
├── .gitignore
├── index.html                  ← (Lehetséges nyers index.html)
├── checkout.html               ← (Lehetséges nyers checkout oldal)
├── package.json
├── package-lock.json
└── wrangler.toml               ← Cloudflare Pages konfiguráció
```
> ⚠️ A dist/ mappában lévő fájlokat tölti fel a Cloudflare Pages. Ne szerkeszd őket kézzel!

## 🔁 Automatikus deploy
A projekt úgy van beállítva, hogy minden main branch-be történő push után automatikusan deployolódik a Cloudflare Pages segítségével. <br><br>

Manuális deploy parancs (ha szükséges):
```
npx wrangler pages deploy dist --project-name=stack-d
```
---
## 🔧 Fejlesztés és Build
Lokális fejlesztés
  1. Klónozd a repót: <br>
  ```
git clone https://github.com/Barnabas05/stackd.git
cd stackd
```
  2. Telepítsd a szükséges függőségeket (ha van package.json): <br>
  ```
npm install
```
  3. Indítsd el lokálisan: <br>
```
npm run dev
```
  4. Build generálása: <br>
  ```
npm run build
```

