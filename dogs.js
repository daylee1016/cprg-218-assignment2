about.addEventListener('click',function(){
    console.log('Read about Tori and Dianne!');
    document.getElementById('img').src='images/logo.png';
    h2.innerHTML = "About T&D Studio";
    figcaption.innerHTML = "T&D is named after Dianne and her dog, Tori. Dianne painted wild animals before. After meeting Tori, she decided to paint for pets for pet parents to capture a special moment for both pet parents and their beloved furry friends."

})

tori.addEventListener('click',function(){
    console.log('Say Hi to Tori!');
    document.getElementById('img').src='images/tori.png';
    h2.innerHTML = "Meet Tori!";
    figcaption.innerHTML = "On April 18th, 2024, Dianne drew her dog Tori."

})

ponzu.addEventListener('click',function(){
    console.log('This is Ponzu, the Samoyed.');
    document.getElementById('img').src='images/Ponzu.png';
    h2.innerHTML = "Meet Ponzu!";
    figcaption.innerHTML = "On July 8th, 2024, Dianne drew Ponzu the Samoyed."

})

eddie.addEventListener('click',function(){
    console.log('Mini Schanuzer, Mr.Eddie');
    document.getElementById('img').src='images/Eddie.png';
    h2.innerHTML = "Meet Eddie!";
    figcaption.innerHTML = "On August 9th, 2024, Dianne drew Eddie the Mini Schanuzer."

})