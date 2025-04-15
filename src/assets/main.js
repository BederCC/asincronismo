const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCgYbIhrqw-oPN6BbisA4IfA&filter=videos_latest&hl=en&gl=US';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ebaecc44f5mshe5b955c13803802p17ff2ejsn0aa493069405',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () =>{
    try{
        const videos = await fetchData(API);
        let view = `
        ${videos.contents
            .filter(content => content.type === "video") // Filtra solo los contenidos que sean videos
            .map(video => `
                <div class="group bg-gray-100 rounded-lg shadow overflow-hidden">
                    <img src="${video.video?.thumbnails?.[0]?.url}" alt="Thumbnail" class="w-full h-48 object-cover group-hover:opacity-75">
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-gray-800">${video.video?.title || 'Título no disponible'}</h3>
                        <p class="text-gray-600 mt-2">${video.video?.publishedTimeText || 'Fecha desconocida'} - ${video.video?.stats?.views || 0} views</p>
                    </div>
                </div>
            `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch(error) {
        console.log(error);
        const message = document.createElement('p');
        message.textContent = error;
        content.appendChild(message);
    }
})();





