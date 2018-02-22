// ============================================================
// TItle
document.title = "UnlightSC Guide KOR";

// ============================================================
// Messages
var strMsg01 = "가로 해상도 900px 이상의 환경을 권장합니다.";

// ============================================================
// HOME and MENUs
var strHome = "대문";
var strToHome01 =
  '<a href="index.html"> \
    <h1>' +
      strHome +
  '  </h1> \
  </a>';
var strToHome02 =
  '<a href="../index.html"> \
    <h1>' +
      strHome +
  '  </h1> \
  </a>';
var strMenu01 = "기초";
var strMenu02 = "심화";
var strMenu03 = "참고";
var strToMenu01 =
  '<a href="MENU01/M100.html"> \
    <h2>' +
      strMenu01 +
    '</h2> \
  </a> \
  <a href="MENU02/M200.html"> \
    <h2>' +
        strMenu02 +
    '</h2> \
  </a> \
  <a href="MENU03/M300.html"> \
    <h2>' +
        strMenu03 +
    '</h2> \
  </a>';
var strToMenu02 =
  '<a href="../MENU01/M100.html"> \
    <h2>' +
      strMenu01 +
    '</h2> \
  </a> \
  <a href="../MENU02/M200.html"> \
    <h2>' +
        strMenu02 +
    '</h2> \
  </a> \
  <a href="../MENU03/M300.html"> \
    <h2>' +
        strMenu03 +
    '</h2> \
  </a>';

// ============================================================
// Common Codes
var strCommon01 =
  '<div id="NOTICE">' +
    strMsg01 +
  '</div> \
  <div id="HOME">' +
    strToHome01 +
  '</div> \
  <div id="MENU">' +
    strToMenu01 +
  '</div>';
var strCommon02 =
  '<div id="NOTICE">' +
    strMsg01 +
  '</div> \
  <div id="HOME">' +
    strToHome02 +
  '</div> \
  <div id="MENU">' +
    strToMenu02 +
  '</div>';

// ============================================================
// Common Function
function getSubmenu01(menu, list, kor, order, index)
{
  return '<a href="MENU0' + menu + '/' + list[order[index]] + '"> \
    <h3>' +
      kor[order[index]] +
  '  </h3> \
  </a>'
}
function getSubmenu02(list, kor, order, index)
{
  return '<a href="' + list[order[index]] + '"> \
    <h3>' +
      kor[order[index]] +
  '  </h3> \
  </a>'
}

// ============================================================
// Document 001~099
var listM000 =
{
  INFO : "M001.html",
  HELP : "M002.html",
};
var korM000 =
{
  INFO : "안내문",
  HELP : "도움말",
};
var orderM000 =
[
  "INFO",
  "HELP"
];
var strSub01 = "";
var strSub02 = "";
for(i = 0; i < orderM000.length; ++i)
{
  strSub01 += getSubmenu01(0, listM000, korM000, orderM000, i);
  strSub02 += getSubmenu02(listM000, korM000, orderM000, i);
}

// ============================================================
// Document 101~199
var listM100 =
{
  TUTORIAL : "M101.html",
  GLOSSARY : "M102.html",
  FAQnRULE : "M103.html",
  DARKROOM : "M104.html",
  DECKEDIT : "M105.html",
  COMPOSEnDISSOLUTION : "M106.html",
  STORE : "M107.html",
  AVATAR : "M108.html",
  LIBRARY : "M109.html"
};
var korM100 =
{
  TUTORIAL : "튜토리얼",
  GLOSSARY : "용어집",
  FAQnRULE : "FAQ & RULE",
  DARKROOM : "다크룸",
  DECKEDIT : "덱 편집",
  COMPOSEnDISSOLUTION : "합성 & 해체",
  STORE : "상점",
  AVATAR : "아바타",
  LIBRARY : "서재"
};
var orderM100 =
[
  "TUTORIAL",
  "GLOSSARY",
  "FAQnRULE",
  "DARKROOM",
  "DECKEDIT",
  "COMPOSEnDISSOLUTION",
  "STORE",
  "AVATAR",
  "LIBRARY"
];
var strSub03 = "";
for(i = 0; i < orderM100.length; ++i)
{
  strSub03 += getSubmenu02(listM100, korM100, orderM100, i);
}

// ============================================================
// Document 201~299
var listM200 =
{
  TEST : "M201.html"
};
var korM200 =
{
  TEST : "준비 중",
};
var orderM200 =
[
  "TEST"
];
var strSub04 = "";
for(i = 0; i < orderM200.length; ++i)
{
  strSub04 += getSubmenu02(listM200, korM200, orderM200, i);
}

// ============================================================
// Document 301~399
var listM300 =
{
  THANANG : "M301.html",
  NAMUWIKI : "M302.html",
  PALACHI : "M303.html"
};
var korM300 =
{
  THANANG : "동영상 가이드",
  NAMUWIKI : "나무위키",
  PALACHI : "블로그"
};
var orderM300 =
[
  "THANANG",
  "NAMUWIKI",
  "PALACHI"
];
var strSub05 = "";
for(i = 0; i < orderM300.length; ++i)
{
  strSub05 += getSubmenu02(listM300, korM300, orderM300, i);
}
