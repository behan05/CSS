

function promise() {
    return new Promise((resolve, reject) => {

        // sent request on given url.
        const requestUrl = "https://api.github.com/users/behan05";
        const xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                const data = JSON.parse(this.responseText);
                resolve(data);
                // console.log(data);

            }
            // reject("Error: something went wrong! try to debug.")

        }
        xhr.send();
    })
}

function fetchAndInsertData() {
    const data = promise();
    data.then((response) => {

        function render(element, root) {
            const createImg = document.createElement(element.tag);
            for (const prop in element.props) {
                createImg.setAttribute(prop, element.props[prop]);
            }
            root.appendChild(createImg);
        }
        const createElement = {
            tag: "img",
            props: {
                src: response.avatar_url,
                alt: "userImage",
                title: "this is feted image from gitHub"
            }
        }
        const root = document.querySelector('.imgbox');
        render(createElement, root);

        const name = document.querySelector('#name');
        name.innerHTML = response.name;

        const bio = document.querySelector('#bio')
        bio.innerHTML = response.bio;
    })

}
fetchAndInsertData()

