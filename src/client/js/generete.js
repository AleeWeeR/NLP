import is_url from './checkURL'
let ARTICLE_URL = document.getElementById('article-url').value
// const GNERETATE_BTN = document.getElementById('generate')

function generate_sentiment(e) {
    e.preventDefault()
    if( is_url(ARTICLE_URL) === true ) {
        postData('http://localhost:8081/api', {url: ARTICLE_URL})
    }
    else{
        console.error('Something is wrong with your URL!')
    }
}

const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Got data -->', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export {generate_sentiment}