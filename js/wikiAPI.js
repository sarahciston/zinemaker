
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
  
let getArticleWithTitle = (title, success) => {
    //make title a button param input from somewhere on the wiki itself
    // title = 'Tactics'
    console.log(title)
    let url = 'https://intersectionalai.miraheze.org/w/api.php?'
    url += 'action=parse';
    url += '&format=json';
    url += '&prop=text';
    url += `&page=${title}`; // replace with the button data
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
