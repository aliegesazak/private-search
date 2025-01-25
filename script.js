document.addEventListener('DOMContentLoaded', function() {
    // Arama Türü Seçenekleri
    const docTypeOptions = [
        { value: 'pdf', text: 'PDF (Portable Document Format, Adobe Reader)' },
        { value: 'docx', text: 'DOCX (Microsoft Word Document)' },
        { value: 'xls', text: 'XLS (Microsoft Excel Spreadsheet)' },
        { value: 'ppt', text: 'PPT (Microsoft PowerPoint Presentation)' },
        { value: 'txt', text: 'TXT (Plain Text, Any Text Editor)' },
        { value: 'jpg', text: 'JPG (JPEG Image, Image Viewer)' },
        { value: 'png', text: 'PNG (Portable Network Graphics, Image Viewer)' },
        { value: 'mp4', text: 'MP4 (Video File, Video Player)' },
        { value: 'mp3', text: 'MP3 (Audio File, Music Player)' },
        { value: 'zip', text: 'ZIP (Compressed File, File Manager)' },
        { value: 'rar', text: 'RAR (Compressed File, WinRAR, 7zip)' },
        { value: 'exe', text: 'EXE (Executable File, Windows)' },
        { value: 'apk', text: 'APK (Android Application Package)' },
        { value: 'iso', text: 'ISO (Disk Image, Virtual Drive Software)' },
        { value: 'csv', text: 'CSV (Comma-Separated Values, Spreadsheet Software)' },
        { value: 'json', text: 'JSON (JavaScript Object Notation, Text Editor)' },
        { value: 'flv', text: 'FLV (Flash Video, Video Player)' },
        { value: 'm4a', text: 'M4A (Audio File, iTunes, Music Player)' },
        { value: 'mov', text: 'MOV (QuickTime Video, Video Player)' },
        { value: 'wmv', text: 'WMV (Windows Media Video, Windows Media Player)' },
        { value: 'svg', text: 'SVG (Scalable Vector Graphics, Web Browser)' },
        { value: 'bmp', text: 'BMP (Bitmap Image, Image Viewer)' },
        { value: 'tiff', text: 'TIFF (Tagged Image File Format, Image Editor)' },
        { value: 'psd', text: 'PSD (Adobe Photoshop Document)' },
        { value: 'ai', text: 'AI (Adobe Illustrator File)' },
        { value: 'indd', text: 'INDD (Adobe InDesign Document)' },
        { value: 'webm', text: 'WEBM (Video File, Web Browser)' },
        { value: 'mpg', text: 'MPG (MPEG Video, Video Player)' },
        { value: 'epub', text: 'EPUB (Electronic Publication, eBook Reader)' },
        { value: 'pdfa', text: 'PDF/A (PDF for Archiving, PDF Reader)' },
        { value: 'rtf', text: 'RTF (Rich Text Format, Word Processor)' },
        { value: 'chm', text: 'CHM (Compiled HTML Help, Windows Help Viewer)' },
        { value: 'md', text: 'MD (Markdown, Text Editor)' },
        { value: 'yml', text: 'YML (YAML Configuration File, Text Editor)' },
        { value: 'pages', text: 'PAGES (Apple Pages Document)' },
        { value: 'pub', text: 'PUB (Microsoft Publisher Document)' },
        { value: 'odt', text: 'ODT (OpenDocument Text, OpenOffice, LibreOffice)' },
        { value: 'odf', text: 'ODF (OpenDocument Format, OpenOffice, LibreOffice)' },
        { value: 'tar', text: 'TAR (Tape Archive, Archive Manager)' },
        { value: 'gz', text: 'GZ (Gzip, Compressed File)' },
        { value: 'xz', text: 'XZ (XZ Compressed Archive, Compression Tool)' },
        { value: '7z', text: '7Z (7-Zip Compressed File, 7-Zip)' },
        { value: 'mobi', text: 'MOBI (Mobipocket eBook, eBook Reader)' },
        { value: 'cbz', text: 'CBZ (Comic Book Zip Archive, Comic Reader)' },
        { value: 'tar.gz', text: 'TAR.GZ (Compressed Archive, Archive Manager)' },
        { value: 'dmg', text: 'DMG (Disk Image, MacOS)' },
        { value: 'vmdk', text: 'VMDK (Virtual Machine Disk, VMware)' },
        { value: 'vdi', text: 'VDI (VirtualBox Disk Image, VirtualBox)' },
        { value: 'img', text: 'IMG (Disk Image, Disk Image Tools)' },
        { value: 'bak', text: 'BAK (Backup File, Various Programs)' },
        { value: 'db', text: 'DB (Database File, Database Software)' },
        { value: 'sql', text: 'SQL (Structured Query Language File, Database Management)' },
        { value: 'tar.bz2', text: 'TAR.BZ2 (Compressed Archive, Archive Manager)' },
        { value: 'tar.xz', text: 'TAR.XZ (Compressed Archive, Archive Manager)' },
        { value: 'jar', text: 'JAR (Java Archive, Java Runtime Environment)' },
        { value: 'html', text: 'HTML (HyperText Markup Language, Web Browser)' },
        { value: 'css', text: 'CSS (Cascading Style Sheets, Web Browser)' },
        { value: 'xlsm', text: 'XLSM (Microsoft Excel Macro-Enabled File)' },
        { value: 'pptx', text: 'PPTX (Microsoft PowerPoint Presentation)' },
        { value: 'ai', text: 'AI (Adobe Illustrator, Vector Graphics)' },
        { value: 'java', text: 'JAVA (Java Source Code File, Java Compiler)' },
        { value: 'py', text: 'PY (Python Script, Python Interpreter)' },
        { value: 'js', text: 'JS (JavaScript File, Web Browser)' },
        { value: 'php', text: 'PHP (PHP Script, PHP Interpreter)' },
        { value: 'c', text: 'C (C Source Code, C Compiler)' },
        { value: 'cpp', text: 'CPP (C++ Source Code, C++ Compiler)' },
        { value: 'sh', text: 'SH (Shell Script, Shell Interpreter)' }
    ];

    // Site Türleri Seçenekleri
    const siteTypeOptions = [
        { value: 'edu.tr', text: 'Türk Üniversiteleri' },
        { value: 'edu', text: 'Dünya Üniversiteleri' },
        { value: 'ac.uk', text: 'Birleşik Krallık Üniversiteleri' },
        { value: 'edu.ca', text: 'Kanada Üniversiteleri' },
        { value: 'blog', text: 'Blog Siteleri' },
        { value: 'org', text: 'Kâr Amacı Gütmeyen Siteler' },
        { value: 'com', text: 'Kişisel ve Ticari Siteler' },
        { value: 'gov', text: 'Hükümet Siteleri' },
        { value: 'news', text: 'Haber Siteleri' },
        { value: 'wikipedia.org', text: 'Vikipedi' },
        { value: 'archive.org', text: 'Archive.org' },
        { value: 'youtube.com', text: 'YouTube' },
        { value: 'medium.com', text: 'Medium' },
        { value: 'reddit.com', text: 'Reddit' },
        { value: 'github.com', text: 'GitHub' },
        { value: 'stackexchange.com', text: 'Stack Exchange' },
        { value: 'tumblr.com', text: 'Tumblr' },
        { value: 'wordpress.com', text: 'WordPress' },
        { value: 'blogspot.com', text: 'Blogger' },
        { value: 'vimeo.com', text: 'Vimeo' },
        { value: 'pinterest.com', text: 'Pinterest' },
        { value: 'twitter.com', text: 'Twitter' },
        { value: 'facebook.com', text: 'Facebook' },
        { value: 'linkedin.com', text: 'LinkedIn' },
        { value: 'instagram.com', text: 'Instagram' },
        { value: 'flickr.com', text: 'Flickr' },
        { value: 'soundcloud.com', text: 'SoundCloud' },
        { value: 'twitch.tv', text: 'Twitch' }
    ];

    // Dil Seçenekleri
    const languageOptions = [
        { value: 'tr', text: 'Türkçe' },
        { value: 'en', text: 'İngilizce' },
        { value: 'fr', text: 'Fransızca' },
        { value: 'ru', text: 'Rusça' },
        { value: 'es', text: 'İspanyolca' },
        { value: 'de', text: 'Almanca' },
        { value: 'it', text: 'İtalyanca' },
        { value: 'pt', text: 'Portekizce' },
        { value: 'zh', text: 'Çince' },
        { value: 'ja', text: 'Japonca' },
        { value: 'ko', text: 'Korece' },
        { value: 'ar', text: 'Arapça' },
        { value: 'nl', text: 'Flemenkçe' },
        { value: 'sv', text: 'İsveççe' },
        { value: 'da', text: 'Danca' },
        { value: 'fi', text: 'Fince' },
        { value: 'pl', text: 'Lehçe' },
        { value: 'cs', text: 'Çekçe' },
        { value: 'hi', text: 'Hintçe' }
    ];

    // Add options to the selects
    function populateSelect(selectId, options) {
        const selectElement = document.getElementById(selectId);
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            selectElement.appendChild(optionElement);
        });
    }

    // Populate all selects
    populateSelect('docType', docTypeOptions);
    populateSelect('siteType', siteTypeOptions);
    populateSelect('language', languageOptions);
});

function ozelArama() {
    let query = document.getElementById('searchQuery').value;
    let docType = document.getElementById('docType').value;
    let siteType = document.getElementById('siteType').value;
    let language = document.getElementById('language').value;

    let dork = `"${query}"`;
    if (docType) dork += ` filetype:${docType}`;
    if (siteType) dork += ` site:${siteType}`;
    if (language) dork += ` hl:${language}`;

    window.open(`https://www.google.com/search?q=${encodeURIComponent(dork)}`);
    document.getElementById('searchQuery').value = "";
}