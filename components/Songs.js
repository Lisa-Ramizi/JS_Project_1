export function Songs(songs) {
    let songs_html = '<div class="row">';
    songs.forEach(song => {
        const artistName = song.artist.name || song.artist; // Handle different API response structures
        const encodedArtist = encodeURIComponent(artistName);
        const encodedTrack = encodeURIComponent(song.name);

        songs_html += ` 
            <div class="card mb-2 ms-3 mb-4 p-0 position-relative" style="max-width: 420px;" id="song-cards">
                <div class="row g-0">
                    <div class="col-md-2 p-0 chart-img-container">
                        <img src="assets/images/chart-img.jpg" class="img-fluid chart-img" alt="song img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body p-0">
                            <h5 class="card-title mb-1 mt-2"><i class="pe-2 bi bi-file-earmark-music"></i>${song.name}</h5>
                            <p class="card-text mb-2"><i class="pe-2 bi bi-person-circle"></i>${artistName}</p>
                        </div>
                    </div>
                    <div class="col-md-2 d-flex flex-column justify-content-end align-items-center mb-2">
                        <a href="Song.html?artist=${encodedArtist}&track=${encodedTrack}" class="btn btn-secondary btn-sm"><i class="bi bi-play-fill"></i></a>
                    </div>
                </div>
            </div>`;
    });

    songs_html += '</div>';
    return songs_html;
}
