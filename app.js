function encryption() {
    let text = document.getElementById('userInput').value;
    // alert(text);
    let result = '';
    // for - это цикл. Мы его создали,
    // чтобы перебрать все символы в тексте юзера.
    for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    if (text[i] === 'а') {
    result += 'ака'
    } else if (text[i] === 'е') {
    result += 'еке';
    } else if (text[i] === 'и') {
    result += 'ики';
    } else if (text[i] === 'о') {
    result += 'око';
    } else if (text[i] === 'у') {
    result += 'упу';
    } else if (text[i] === 'ы') {
    result += 'ыкы';
    } else if (text[i] === 'ю') {
    result += 'юлю';
    } else if (text[i] === 'э') {
    result += 'экэ';
    } else if (text[i] === 'я') {
    result += 'яся';
    } else {
    result += text[i];
    }
    }
    document.getElementById('output').innerText = result;
    }
    