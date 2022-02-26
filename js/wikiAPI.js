const getJSONP = (url, success) => {
    const ud = `_${+new Date()}`;
    const script = document.createElement('script');
    window[ud] = (data) => {
      document.head.removeChild(script);
      success(data);
    };
    script.src = url.replace('callback=?', `callback=${ud}`);
    document.head.appendChild(script);
  };
  
  const getArticleWithTitle = (title, success) => {
    // let url = '//en.wikipedia.org/w/api.php?';
    let url = 'https://intersectionalai.miraheze.org/w/api.php?'
    url += 'action=parse';
    url += '&format=json';
    url += '&prop=text';
    url += `&page=${title}`;
    url += '&disableeditsection=true';
    url += '&callback=?';
    // url += '&centralauth-token=${TOKEN}'; // MAYBE???
  
    getJSONP(url, (data) => {
      const content = data.parse.text['*'];
      console.log(content);
      const wrap = document.createElement('div');
      wrap.innerHTML = `<h1>${title}</h1>${content}`;
      success(wrap);
    });
  };

  let getAuth = (token, success) => {
    let auth = "04778e7e109fadf0b63b86afa3a7c7064e2a3"

  } 