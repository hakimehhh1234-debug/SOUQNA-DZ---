// SOUQNA DZ | سوقنا

function changeLanguage(language) {
    document.documentElement.lang = language;

    if (language === "ar") {
        document.documentElement.dir = "rtl";
        document.getElementById("welcome").textContent = "مرحباً بك في سوقنا";
        document.getElementById("subtitle").textContent = "كل الأسواق في مكان واحد";
    } else {
        document.documentElement.dir = "ltr";
        document.getElementById("welcome").textContent = "Welcome to SOUQNA DZ";
        document.getElementById("subtitle").textContent = "All Markets in One Place";
    }
}
