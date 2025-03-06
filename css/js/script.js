function showPage(pageId) {
    // Tüm sayfaları gizle
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // İstenen sayfayı göster
    document.getElementById(pageId).classList.add('active');
}
