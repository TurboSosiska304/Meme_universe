document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('meme-title').value;
    const description = document.getElementById('meme-description').value;
    const tags = document.getElementById('meme-tags').value.split(',').map(tag => tag.trim());
    const imageFile = document.getElementById('meme-image').files[0];

    if (!title || !description || !imageFile) {
        alert('Заполните все поля!');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const meme = {
            title,
            description,
            tags,
            image: e.target.result
        };

        // Сохраняем мем в localStorage (в реальном проекте нужно отправлять на сервер)
        const memes = JSON.parse(localStorage.getItem('memes')) || [];
        memes.push(meme);
        localStorage.setItem('memes', JSON.stringify(memes));

        alert('Мем успешно загружен!');
        window.location.href = '#home';
    };

    reader.readAsDataURL(imageFile);
});
