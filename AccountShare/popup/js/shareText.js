!(function () {
  "use strict";
  const e = window.log.bind("[ShareText]"),
    t = { mode: "gcm", ks: 256, ts: 128 },
    n = {
      getLink: function (t, n, s) {
        e("Request share link");
        const r = cryptography.randomkey(),
          a = this.encryptText(r, t || "");
        this.requestLink(
          this.getRequestData(a),
          (t) => {
            e("Success", t), n && n(this.getPasteURL(r, t.id));
          },
          (t) => {
            e("Error", t), s && s(t);
          }
        );
      },
      requestLink(e, t, n) {
        return (function (e, t, n, s) {
          return (function (e, t, n, s, r) {
            http({
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
                "Accept-Language": "en-US",
                "X-Requested-With": "JSONHttpRequest",
              },
              url: e,
              method: n,
              data: t,
              success: s,
              error: r,
            });
          })(e, t, "POST", n, s);
        })(
          "https://privatebin.net",
          e,
          (s) => {
            0 === (s = JSON.parse(s)).status
              ? t(s)
              : "Please wait 10 seconds between each post." === s.message
              ? setTimeout(() => this.requestLink(e, t, n), 1e4)
              : n(s);
          },
          (e) => n(e)
        );
      },
      getRequestData: function (e) {
        return [
          `data=${encodeURIComponent(e)}`,
          "expire=10min",
          "formatter=plaintext",
          "burnafterreading=1",
          "opendiscussion=0",
        ].join("&");
      },
      getPasteURL: function (e, t) {
        return `https://privatebin.net/?${t}#${e}`;
      },
      encryptText: function (e, n) {
        return cryptography.encrypt(e, this.compress(n), t);
      },
      compress: function (e) {
        return Base64.toBase64(RawDeflate.deflate(Base64.utob(e)));
      },
    };
  window.shareText = n;
})();
