export function fetchData(args = 'posts') {
    let url = 'https://jdavenportoti.com/wp/wp-json/wp/v2/';
    url += args;
    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch(console.log);
}//end fetchData