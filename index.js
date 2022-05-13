function showRate() {

    let health = parseInt(document.querySelector(`input[type="radio"][name=food]:checked`).value);
    let exercise = parseInt(document.querySelector(`input[type="radio"][name=exercise]:checked`).value);
    let eHealth = parseInt(document.querySelector(`input[type="radio"][name=eHealth]:checked`).value);
    let smoking = parseInt(document.querySelector(`input[type="radio"][name=smoking]:checked`).value);
    let sleep = parseInt(document.querySelector(`input[type="radio"][name=sleep]:checked`).value);
    let alcohol = parseInt(document.querySelector(`input[type="radio"][name=alcohol]:checked`).value);
    let age = parseInt(document.getElementById('age').value);
    let weight = parseInt(document.getElementById('weight').value);
    let waist = parseInt(document.getElementById('waist_in').value);
    let height = parseInt(document.getElementById('ht').value);

    weight = weight / 0.45359237;
    var waistPoints = Math.round( ( 11 - ( Math.abs( ( waist / height ) - .45 ) * 60 ) ) * 100 ) / 100;
    console.log(weight);
    console.log(waistPoints);

    var newbmivalue = Math.round((weight * 703) / (height * height));
    var scoreTotal = Math.round((sleep + exercise + alcohol + smoking + health + eHealth + newbmivalue + waistPoints + age)*10) / 10;

    var scoreRisk = Math.round((100 - scoreTotal)*10)/10 + 36;
    let noRisk = 100 - scoreRisk;

    let result = "";
    result += `
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Health Score Generator</span>
                </a>
                <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center"></nav>
            </div>
        </header>
        <section class="text-gray-400 body-font bg-gray-900">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white" id="">According to your health score, you have a ${scoreRisk}% risk of developing a lifestyle related disease such as heart disease, cancer, or diabetes.</h1>
                    <p  class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white mt-4">Your BMI is ${newbmivalue}</p> 
                </div>
            <a href="index.html" class="button"></a>
            <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-4 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKLQjlcIA855hhPOfJWWgktPz2rfqE3ma7BA&usqp=CAU">
            <div class="text-center lg:w-2/3 w-full" id="result"></div>
            </div>
            </section>
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onclick="location.href='index.html';">Go to Home Page</button>
            <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="button" onclick="window.close()">Discard</button>
            </div>
        </section>
    `
    document.getElementById('result').innerHTML = result
    document.getElementById('content').style.display = 'none'

}
