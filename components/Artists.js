export function Artists(artists) {
    let artists_html = '<div class="row">';
    
    artists.forEach(artist => {
        const encodedArtist = encodeURIComponent(artist.name);

        artists_html += `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="assets/images/artist-img.jpg" alt="artist image" class="card-img-top artist-img" style=width:100%>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${artist.name}</h5>
                        <p class="card-text mb-1">Listeners: ${artist.listeners}</p>
                        <p class="card-text mb-1">Playcount: ${artist.playcount}</p>
                        <div class="mt-auto">
                            <a href="Artist.html?artist=${encodedArtist}" class="btn btn-primary btn-sm float-end">Read More!</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    artists_html += '</div>';
    return artists_html;
}
