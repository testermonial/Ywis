# 🚀 QUICK START GUIDE - Ywis Beauty Website

## ⚡ 5 Minuten Setup

Schnelle Anleitung, um die Website zum Laufen zu bringen!

---

## SCHRITT 1: WICHTIGE DATEN ZUSAMMENTRAGEN (2 Min)

Sammeln Sie diese Informationen:

```
👤 Name:                  _________________
📱 WhatsApp:              +49_____________
📷 Instagram:             _________________
🎵 TikTok:                _________________
🏠 Adresse:               _________________
                          _________________
📧 Email (optional):      _________________
```

---

## SCHRITT 2: BILDER VORBEREITEN (2 Min)

**Diese Dateien MÜSSEN vorhanden sein:**

✅ **MUSS:**
- [ ] Logo (200x200px PNG) → `/images/logo.png`
- [ ] Banner (1920x1080px JPG) → `/images/banner.jpg`

✅ **SOLLTE:**
- [ ] Galerie Bilder → `/images/gallery/nageldesign-1.jpg` etc.
- [ ] Über-Mich Foto → `/images/about-hero.jpg`

**Falls keine Bilder vorhanden:**
→ Testen Sie erst mit Platzhaltern, ergänzen Sie später!

---

## SCHRITT 3: PLATZHALTER ERSETZEN (1 Min)

### Schnelle Methode in VS Code:

1. **STRG+H** drücken
2. **Suchen:** `PLACEHOLDER_WHATSAPP`
3. **Ersetzen:** `+491234567890` (Ihre Nummer!)
4. **Replace All** klicken

**Alle Platzhalter in dieser Reihenfolge ersetzen:**

```
1. PLACEHOLDER_WHATSAPP    → +491234567890
2. PLACEHOLDER_INSTAGRAM   → ywisbeauty
3. PLACEHOLDER_TIKTOK      → ywisbeauty
4. PLACEHOLDER_STRASSE     → Hauptstraße 42, 49661 Cloppenburg
5. PLACEHOLDER_OWNER       → Ihr Name
6. PLACEHOLDER_EMAIL       → (nur wenn vorhanden)
```

---

## SCHRITT 4: LINKS TESTEN (0.5 Min)

Öffnen Sie `index.html` im Browser und testen Sie:

- [ ] WhatsApp Button funktioniert
- [ ] Instagram Link funktioniert
- [ ] TikTok Link funktioniert
- [ ] Mobile Anzeige sieht gut aus (F12 → Toggle Device)

---

## SCHRITT 5: LIVE GEHEN (< 1 Min)

### Option A: GitHub Pages (Kostenlos & schnell)

1. GitHub Account erstellen
2. Neues Repository: `ywisbeauty` oder ähnlich
3. Alle Dateien hochladen
4. Settings → Pages → Main Branch → Save
5. Fertig! Website ist online auf: `https://username.github.io/ywisbeauty`

### Option B: Normales Hosting

1. Zu Ihrem Hosting (GoDaddy, Strato, etc.)
2. Alle Dateien via FTP hochladen
3. Domain konfigurieren
4. HTTPS aktivieren
5. Fertig!

---

## 🎨 DESIGN ANPASSEN

**Farben ändern?** (Optional)

Öffnen Sie `css/style.css` und suchen Sie:

```css
:root {
    --primary-color: #c9a5a0;      /* Rose - Ändern Sie diese */
    --secondary-color: #f5f2f0;    /* Cream - Oder diese */
    --accent-color: #d4a574;       /* Gold - Oder diese */
}
```

**Farben-Tricks:**
- https://colorpicker.com/ → Farbe auswählen → Hex Code kopieren
- Oder: `--primary-color: #FF6B6B;` für Rot
- Oder: `--primary-color: #9B59B6;` für Lila

---

## 📱 MOBIL-ANZEIGE TESTEN

**Sofort überprüfen:**
1. Website im Browser öffnen
2. **F12** drücken (Developer Tools)
3. **Oben links:** Toggle Device Toolbar klicken
4. Verschiedene Geräte testen (iPhone, Samsung, iPad)

**Alles sollte gut aussehen und lesbar sein!**

---

## 🔍 SEO-BOOST (Optional aber wichtig!)

Nachdem die Website live ist:

1. **Google Search Console:**
   - https://search.google.com/search-console
   - Website hinzufügen
   - Sitemap einreichen

2. **Google My Business:**
   - https://mybusiness.google.com
   - Profil erstellen
   - Alle Infos eintragen

3. **Social Media verlinken:**
   - Instagram Bio: Link zur Website
   - TikTok Bio: Link zur Website
   - WhatsApp Status: Link teilen

---

## ✅ FERTIG? CHECKLISTE

- [ ] Alle Platzhalter ersetzt
- [ ] Bilder sind vorhanden
- [ ] Links funktionieren
- [ ] Mobile sieht gut aus
- [ ] Website ist online
- [ ] Google Search Console konfiguriert

---

## 🎯 NÄCHSTE SCHRITTE

### Woche 1 (Nach Launch):
- [ ] Google Analytics einrichten (optional)
- [ ] Impressum/Datenschutz überprüfen
- [ ] Backups konfigurieren

### Woche 2-4:
- [ ] Instagram & TikTok mit Portfolio füttern
- [ ] Google My Business Reviews sammeln
- [ ] Performance überprüfen (Google PageSpeed)

### Monatlich:
- [ ] Website auf Fehler überprüfen
- [ ] Bilder/Texte aktualisieren
- [ ] Rankings überprüfen (Google Search Console)
- [ ] Backups durchführen

---

## ❓ HÄUFIGE FRAGEN

### F: Kann ich die Farben einfach ändern?
**A:** Ja! Öffnen Sie `css/style.css` und ändern Sie die Farben im `:root` Bereich.

### F: Wie viel kostet das Hosting?
**A:** GitHub Pages ist kostenlos. Normales Hosting: 2-10€/Monat.

### F: Wo bekomme ich eine Domain?
**A:** Bei GoDaddy, Strato, 1&1, etc. Kostet ca. 9-20€/Jahr.

### F: Kann ich die Website lokal testen?
**A:** Ja! Speichern Sie alles lokal und öffnen Sie `index.html` im Browser.

### F: Wie optimiere ich die Bilder?
**A:** Tools wie https://tinypng.com oder ImageOptim.

### F: Funktioniert die Website ohne JavaScript?
**A:** Ja! Alle wichtigen Funktionen funktionieren auch ohne JS.

---

## 🆘 PROBLEME LÖSEN

### Problem: Bilder werden nicht angezeigt
**Lösung:** 
- Überprüfen Sie, dass die Bilder in `/images/` sind
- Überprüfen Sie die exakten Dateinamen (Groß-/Kleinschreibung!)
- Öffnen Sie die Developer Tools (F12) und schauen Sie auf "Console"

### Problem: Links funktionieren nicht
**Lösung:**
- Überprüfen Sie, dass PLACEHOLDER_ ersetzt sind
- WhatsApp: Muss mit `+49` beginnen (mit Ländervorwahl)
- Instagram/TikTok: Darf kein `@` haben

### Problem: Mobile sieht komisch aus
**Lösung:**
- Hard Refresh: STRG+SHIFT+R (Windows) oder CMD+SHIFT+R (Mac)
- Cache leeren (F12 → Settings → Cache leeren)
- Verschiedene Browser testen

### Problem: Website ist sehr langsam
**Lösung:**
- Bilder optimieren (https://tinypng.com)
- PageSpeed Insights überprüfen (https://pagespeed.web.dev)
- Caching aktivieren (Hosting konfigurieren)

---

## 📞 WICHTIGE KONTAKTE

- **Google Support:** https://support.google.com
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **MDN Web Docs:** https://developer.mozilla.org (für Code-Hilfe)

---

## 🎉 HERZLICHEN GLÜCKWUNSCH!

Ihre professionelle Ywis Beauty Website ist online! 💅✨

**Nächster Schritt:** Teilen Sie den Link auf Ihren Social Media Kanälen! 📱

---

**Haben Sie Fragen?**
- Dokumentation: README.md
- Platzhalter: PLACEHOLDERS.md
- Code-Hilfe: Schauen Sie in die HTML/CSS/JS Kommentare

**Viel Erfolg mit Ihrer Website!** 🚀

---

Aktualisiert: 7. März 2026
