
export const makePost = function (url, body) {
    fetch(url, {
      method: "POST",
 
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
      body: body,
    }).catch(function (error) {
      console.log("Request failed", error);
    });
  };
  

  export const setActivity = function (x, y, z) {
    let norm = Math.sqrt(x * x + y * y + z * z);
    if (norm > 0.5) return "Moving";
    else return "Still";
  };