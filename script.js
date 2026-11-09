
document.getElementById("saveContact").addEventListener("click", function () {

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:峰村;悟;;;",
    "FN:峰村 悟",
    "ORG:CLUB PROUD",
    "TEL;TYPE=CELL:08090973835",
    "TEL;TYPE=CELL:07074633263",
    "TEL;TYPE=WORK:0486445444",
    "EMAIL:satotin0512@icloud.com",
    "ADR;TYPE=WORK:;;仲町1-50 福田産業ビル2F;さいたま市大宮区;埼玉県;;日本",
    "URL:https://www.instagram.com/satotin0516/",
    "END:VCARD"
  ].join("\r\n");

  const blob = new Blob(
    [vcard],
    { type: "text/vcard;charset=utf-8" }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "峰村悟.vcf";

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  setTimeout(function () {
    URL.revokeObjectURL(url);
  }, 60000);
});
