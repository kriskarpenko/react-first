import { useEffect } from "react";

// import { useEffect } from "react";
// function translate() {
//   fetch(
//     "https://api-free.deepl.com/v2/translate?text=Hello,%20Kristina&target_lang=ES",
//     {
//       mode: "no-cors",
//       method: "POST",
//       headers: {
//         xxxxx: "yyyyyyyy",
//         Authorization: "DeepL-Auth-Key 308583fd-d467-0336-3fc6-f2ab5416956a:fx",
//         // "Content-Type": "application/x-www-form-urlencoded",

//         "Content-Type": "application/json",
//       },
//       // body: JSON.stringify({ text: "Hello World!", target_lang: "DE" }),
//     }
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

const Translate = () => {
  useEffect(() => {
    async function fetchData() {
      const query = "text=hello&target_lang=DE";
      const url = "https://api-free.deepl.com/v2/translate" + "?" + query;
      const body = {};
      const options = {
        mode: "no-cors",
        method: "POST",

        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
          Authorization:
            "DeepL-Auth-Key 308583fd-d467-0336-3fc6-f2ab5416956a:fx",
        },
        body: JSON.stringify(body),
      };

      console.log("options", options);
      const res = await fetch(url, options);
      const data = await res.json();
      console.log("fetch is working", data);
    }
    fetchData();
  }, []);

  return <div>Translate</div>;
};

export default Translate;
