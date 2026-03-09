# PLACEHOLDERS & SETUP GUIDE - Ywis Beauty Website

Diese Datei enthält alle Platzhalter, die Sie mit Ihren Informationen ersetzen müssen.

## 📋 PLATZHALTER ÜBERSICHT

### 1. Unternehmensinformationen

**In ALLEN Dateien:**
```
PLACEHOLDER_OWNER
→ Ersetzen Sie mit: Name der Betreiberin (z.B. "Maria Müller")
```

```
PLACEHOLDER_STRASSE
→ Ersetzen Sie mit: Straße, Hausnummer und Stadt
   Beispiel: "Hauptstraße 42, 49661 Cloppenburg"
```

### 2. Kontaktdaten

**WhatsApp Nummer:**
```
PLACEHOLDER_WHATSAPP
→ Format: +49123456789 (mit Ländervorwahl, keine Leerzeichen/Bindestriche)
→ In Datei: index.html, leistungen.html, preise.html, galerie.html, about.html, kontakt.html, impressum.html
→ Wird auch in Links verwendet: https://wa.me/NUMMER
```

**Instagram:**
```
PLACEHOLDER_INSTAGRAM
→ Ersetzen Sie mit: Ihr Instagram Username OHNE das @
   Beispiel: "ywisbeauty.cloppenburg"
→ Links: https://instagram.com/ywisbeauty.cloppenburg
```

**TikTok:**
```
PLACEHOLDER_TIKTOK
→ Ersetzen Sie mit: Ihr TikTok Username OHNE das @
   Beispiel: "ywisbeauty"
→ Links: https://www.tiktok.com/@ywisbeauty
```

**Email (optional):**
```
PLACEHOLDER_EMAIL
→ Falls Sie E-Mail nutzen: Ihre E-Mail Adresse
→ Kann leer gelassen werden, wenn nicht verwendet
→ Nur in: impressum.html
```

### 3. Rechtliche Informationen

**Umsatzsteuer-ID:**
```
PLACEHOLDER_VAT_ID
→ Ihre Umsatzsteuer-Identifikationsnummer (falls vorhanden)
→ Falls nicht vorhanden, entfernen Sie einfach diese Sektion
→ Nur in: impressum.html
```

**Google Search Console Verification:**
```
PLACEHOLDER_GOOGLE_VERIFICATION
→ Sie erhalten diesen Code nach Registrierung in Google Search Console
→ Kann auch später hinzugefügt werden
→ In: index.html im <meta> Tag
```

## 🖼️ BILDER - ERFORDERLICHE DATEIEN

### Wichtigste Bilder (MUSS vorhanden sein)

```
/images/logo.png
- Mindestgröße: 200x200px
- Format: PNG (für Transparenz)
- Dateigröße: < 100KB
- Zweck: Logo in Navigation und Footer
- Tipp: Logo sollte quadratisch sein

/images/banner.jpg
- Größe: 1920x1080px oder größer
- Format: JPG
- Dateigröße: < 500KB
- Zweck: Hero-Section Hintergrundbild
- Tipp: Hochwertige Fotografie des Studios/Produktes

/images/favicon.png
- Größe: 32x32px oder 64x64px
- Format: PNG
- Dateigröße: < 20KB
- Zweck: Browser Tab Icon

/images/apple-touch-icon.png
- Größe: 180x180px
- Format: PNG
- Dateigröße: < 50KB
- Zweck: iOS Home Screen Icon
```

### Open Graph Bild (für Social Media Share)

```
/images/og-image.jpg
- Größe: 1200x630px (optimal)
- Format: JPG
- Dateigröße: < 200KB
- Zweck: Wenn Website auf Social Media geteilt wird
```

### Service-Seiten Bilder

```
/images/nageldesign-hero.jpg
- Größe: 800x600px
- Format: JPG
- Zweck: Bild auf Leistungen-Seite (Nageldesign)

/images/wimpern-lifting-hero.jpg
- Größe: 800x600px
- Format: JPG
- Zweck: Bild auf Leistungen-Seite (Wimpern Lifting)

/images/about-hero.jpg
- Größe: 800x600px
- Format: JPG
- Zweck: Bild auf Über-Mich Seite
```

### Galeriebilder

```
/images/gallery/nageldesign-1.jpg bis nageldesign-6.jpg
/images/gallery/wimpern-1.jpg bis wimpern-3.jpg

- Größe: Idealerweise 800x800px (quadratisch)
- Format: JPG
- Dateigröße: < 150KB pro Bild
- Zweck: Portfolio/Galerie-Anzeige
- Tipp: Portfolio-Fotos sollten professionell aussehen
```

## 🔍 DATEI-ÜBERSICHT - WELCHE PLATZHALTER WO

### index.html
- [ ] PLACEHOLDER_WHATSAPP (mehrfach)
- [ ] PLACEHOLDER_INSTAGRAM (mehrfach)
- [ ] PLACEHOLDER_TIKTOK (mehrfach)
- [ ] PLACEHOLDER_GOOGLE_VERIFICATION

### leistungen.html
- [ ] PLACEHOLDER_WHATSAPP

### preise.html
- [ ] PLACEHOLDER_WHATSAPP

### galerie.html
- [ ] PLACEHOLDER_WHATSAPP
- [ ] PLACEHOLDER_INSTAGRAM

### about.html
- [ ] PLACEHOLDER_WHATSAPP

### kontakt.html
- [ ] PLACEHOLDER_WHATSAPP (mehrfach)
- [ ] PLACEHOLDER_INSTAGRAM
- [ ] PLACEHOLDER_TIKTOK
- [ ] PLACEHOLDER_STRASSE

### impressum.html
- [ ] PLACEHOLDER_OWNER
- [ ] PLACEHOLDER_STRASSE
- [ ] PLACEHOLDER_WHATSAPP
- [ ] PLACEHOLDER_INSTAGRAM
- [ ] PLACEHOLDER_TIKTOK
- [ ] PLACEHOLDER_EMAIL
- [ ] PLACEHOLDER_VAT_ID

### datenschutz.html
(Keine Platzhalter, aber Kontakt-Info möglich)

## ✅ SCHRITT-FÜR-SCHRITT SETUP ANLEITUNG

### Schritt 1: Informationen sammeln
- [ ] Name der Betreiberin notieren
- [ ] Komplette Adresse kopieren
- [ ] WhatsApp Nummer bereit (Format: +49...)
- [ ] Instagram Username bereit
- [ ] TikTok Username bereit
- [ ] Email (optional) bereit
- [ ] USt-ID (optional) bereit

### Schritt 2: Bilder vorbereiten
- [ ] Logo als PNG speichern (200x200px)
- [ ] Banner-Foto (1920x1080px)
- [ ] Favicon erstellen (32x32px)
- [ ] Galeriebilder optimieren (800x800px)
- [ ] OG-Image für Social Media (1200x630px)

### Schritt 3: Bilder hochladen
- [ ] Bilder in `/images/` Verzeichnis kopieren
- [ ] Galeriebilder in `/images/gallery/` kopieren
- [ ] Dateinamen überprüfen (müssen exakt stimmen)

### Schritt 4: Platzhalter ersetzen
- [ ] Jede HTML-Datei öffnen
- [ ] STRG+H (Suchen & Ersetzen)
- [ ] Nacheinander alle PLACEHOLDER_ Vorkommen ersetzen
- [ ] Überprüfen, dass nichts mehr mit PLACEHOLDER_ beginnt

### Schritt 5: Links überprüfen
- [ ] WhatsApp Link klicken (https://wa.me/...)
- [ ] Instagram Link klicken
- [ ] TikTok Link klicken
- [ ] Alle Links führen zum richtigen Ziel

### Schritt 6: Google & Rechtliches
- [ ] Google Search Console Account erstellen
- [ ] Verification Code kopieren
- [ ] In index.html einfügen
- [ ] Google My Business erstellen
- [ ] Website dort registrieren

### Schritt 7: Testing
- [ ] Alle Seiten im Browser öffnen
- [ ] Mobile Responsiveness testen (F12 → Toggle Device Toolbar)
- [ ] Alle Buttons testen
- [ ] Alle Links überprüfen
- [ ] Bilder laden korrekt
- [ ] Texte sind leserlich

### Schritt 8: Hosting & Domain
- [ ] Domain registrieren
- [ ] Hosting Account erstellen
- [ ] Dateien hochladen (FTP)
- [ ] SSL Zertifikat aktivieren (HTTPS)
- [ ] DNS Records konfigurieren

## 📝 BEISPIEL PLATZHALTER-REPLACEMENTS

### Beispiel 1: WhatsApp Nummer
**Suchen:** `PLACEHOLDER_WHATSAPP`
**Ersetzen durch:** `+491234567890` (oder mit Tel: für Telefon)

### Beispiel 2: Instagram
**Suchen:** `PLACEHOLDER_INSTAGRAM`
**Ersetzen durch:** `ywisbeauty.cloppenburg`

### Beispiel 3: Name
**Suchen:** `PLACEHOLDER_OWNER`
**Ersetzen durch:** `Petra Schmidt`

### Beispiel 4: Adresse
**Suchen:** `PLACEHOLDER_STRASSE`
**Ersetzen durch:** `Hauptstraße 42, 49661 Cloppenburg`

## 🔧 FIND & REPLACE SHORTCUTS

### Windows / Linux / Mac
- **Suchen & Ersetzen öffnen:** STRG+H (Windows/Linux) oder CMD+Option+F (Mac)
- **Dateiübergreifend suchen:** STRG+SHIFT+F
- **Alle Vorkommen ersetzen:** "Replace All" Button

### In VS Code
1. STRG+H drücken
2. Im "Find" Feld eingeben: `PLACEHOLDER_WHATSAPP`
3. Im "Replace" Feld eingeben: `+491234567890`
4. "Replace All" klicken

## ⚠️ WICHTIGE HINWEISE

### Bitte beachten:
1. **WhatsApp Format:** Muss mit `+` und Ländervorwahl beginnen
   - Richtig: `+491234567890`
   - Falsch: `01234567890` oder `0 123 456789`

2. **Social Media Namen:** Ohne `@` am Anfang
   - Richtig: `ywisbeauty`
   - Falsch: `@ywisbeauty`

3. **Bilder Auflösung:** Je höher die Qualität, desto besser
   - Minimum: 800x600px
   - Ideal: 1920x1080px für Hero
   - Thumbnail: 800x800px

4. **Datei-Namen:** Müssen exakt stimmen
   - Wird gesucht: `/images/logo.png`
   - Datei muss sein: `logo.png` (nicht `Logo.png` oder `logo.jpg`)

5. **Umlaute:** Werden in Datei-Namen nicht empfohlen
   - Verwenden Sie: `nageldesign` statt `nägel`

## 🎯 HÄUFIGE FEHLER VERMEIDEN

❌ **Falsch:**
- Datei heißt `Logo.PNG`, HTML sucht `logo.png`
- WhatsApp Link: `https://wa.me/01234567890`
- Instagram: `https://instagram.com/@username`
- Platzhalter teilweise ersetzt

✅ **Richtig:**
- Datei heißt `logo.png` (klein, richtige Endung)
- WhatsApp Link: `https://wa.me/+491234567890`
- Instagram: `https://instagram.com/username`
- Alle Platzhalter konsequent ersetzt

## 📞 SCHNELLE CHECKLISTE

Vor dem Go-Live ALLE abhaken:

- [ ] Alle PLACEHOLDER_ Text ersetzt
- [ ] Alle Bilder vorhanden und richtig benannt
- [ ] WhatsApp, Instagram, TikTok Links getestet
- [ ] Website auf Mobile getestet
- [ ] Alle Seiten öffnen im Browser
- [ ] Impressum und Datenschutz überprüft
- [ ] Google Search Console vorbereitet
- [ ] HTTPS aktiviert
- [ ] Domain DNS funktioniert
- [ ] Performance getestet (PageSpeed Insights)
- [ ] SEO überprüft

## 🚀 FERTIG!

Sobald Sie alle Punkte abgehakt haben, ist Ihre Website ready to go! 🎉

---

**Letztes Update:** 7. März 2026
**Website Version:** 1.0
