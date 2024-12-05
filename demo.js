document.addEventListener('DOMContentLoaded', function() {
    const distributeur = document.getElementById('distributeur');
    const selection = document.getElementById('selection');
    const bonk = document.getElementById('bonk');
    const imgBonk = document.getElementById('img-bonk');
    const imgNezuko = document.getElementById('nezuko-img');
    const nezukoBubble = document.getElementById('nezuko-bubble');
    

    const BTN_0 = document.getElementById('btn-0');
    const BTN_1 = document.getElementById('btn-1');
    const BTN_2 = document.getElementById('btn-2');
    const BTN_3 = document.getElementById('btn-3');
    const BTN_4 = document.getElementById('btn-4');
    const BTN_5 = document.getElementById('btn-5');
    const BTN_6 = document.getElementById('btn-6');
    const BTN_7 = document.getElementById('btn-7');
    const BTN_8 = document.getElementById('btn-8');
    const BTN_9 = document.getElementById('btn-9');

    const BTN_RESET = document.getElementById('btn-reset');
    const BTN_VALID = document.getElementById('btn-valid');

    const stock_amanato = document.getElementById('stockAmanato');
    const stock_yokan = document.getElementById('stockYokan');
    const stock_daifuku = document.getElementById('stockDaifuku');
    const stock_dango = document.getElementById('stockDango');
    const stock_dorayaki = document.getElementById('stockDorayaki');
    const stock_mochi = document.getElementById('stockMochi');
    const stock_monaka = document.getElementById('stockMonaka');
    const stock_konpeito = document.getElementById('stockKonpeito');
    const stock_tayaki = document.getElementById('stockTayaki');

    let currentRequest = null;
    let timer = null;

    function getRandomPatisserie() {
        const available = [
            { id: '1', name: 'Amanatto', stock: stock_amanato },
            { id: '2', name: 'Yokan', stock: stock_yokan },
            { id: '3', name: 'Daifuku', stock: stock_daifuku },
            { id: '4', name: 'Dango', stock: stock_dango },
            { id: '5', name: 'Dorayaki', stock: stock_dorayaki },
            { id: '6', name: 'Mochi', stock: stock_mochi },
            { id: '7', name: 'Monaka', stock: stock_monaka },
            { id: '8', name: 'Konpeito', stock: stock_konpeito },
            { id: '9', name: 'Tayaki', stock: stock_tayaki }
        ].filter(item => parseInt(item.stock.innerText) > 0);

        if (available.length === 0) return null;
        return available[Math.floor(Math.random() * available.length)];
    }

    function setNezukoRequest() {
        const request = getRandomPatisserie();
        if (request === null) {
            nezukoBubble.innerText = "Toutes les pâtisseries sont épuisées !";
            return;
        }
        currentRequest = request.id;
        nezukoBubble.innerText = `Je veux un ${request.name} !`;
        imgNezuko.src = 'request.gif'; // Chemin de l'image Nezuko demandant une pâtisserie
        console.log(`Nezuko demande: ${request.name}`);
        startTimer(); // Démarrer le minuteur pour chaque nouvelle demande
    }

    function checkSelection() {
        clearTimeout(timer);
        console.log(`Sélection: ${selection.innerText}, Demande: ${currentRequest}`);
        if (selection.innerText === currentRequest) {
            imgNezuko.src = 'happy.gif'; // Chemin de l'image Nezuko contente
            console.log('Bonne sélection !');
        } else {
            imgNezuko.src = 'angry.gif'; // Chemin de l'image Nezuko fâchée
            console.log('Mauvaise sélection !');
        }
        setTimeout(() => {
            setNezukoRequest();
            selection.innerText = '';
        }, 3000);
    }

    function startTimer() {
        timer = setTimeout(() => {
            imgNezuko.src = 'angry.gif'; // Chemin de l'image Nezuko fâchée
            console.log('Temps écoulé, Nezuko est fâchée !');
            setTimeout(() => {
                setNezukoRequest();
                selection.innerText = '';
            }, 3000);
        }, 10000);
    }

    BTN_0.addEventListener("click", () => {
        selection.innerText += "0";
    });
    BTN_1.addEventListener("click", () => {
        selection.innerText += "1";
    });
    BTN_2.addEventListener("click", () => {
        selection.innerText += "2";
    });
    BTN_3.addEventListener("click", () => {
        selection.innerText += "3";
    });
    BTN_4.addEventListener("click", () => {
        selection.innerText += "4";
    });
    BTN_5.addEventListener("click", () => {
        selection.innerText += "5";
    });
    BTN_6.addEventListener("click", () => {
        selection.innerText += "6";
    });
    BTN_7.addEventListener("click", () => {
        selection.innerText += "7";
    });
    BTN_8.addEventListener("click", () => {
        selection.innerText += "8";
    });
    BTN_9.addEventListener("click", () => {
        selection.innerText += "9";
    });

    BTN_RESET.addEventListener("click", () => {
        selection.innerText = "";
    });

    BTN_VALID.addEventListener("click", () => {
        switch(selection.innerText) {
            case "1":
                if (parseInt(stock_amanato.innerText) > 0) {
                    imgBonk.src = "amanatto.png";
                    stock_amanato.innerText = parseInt(stock_amanato.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            case "2":
                if (parseInt(stock_yokan.innerText) > 0) {
                    imgBonk.src = "choco.png";
                    stock_yokan.innerText = parseInt(stock_yokan.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            case "3":
                if (parseInt(stock_daifuku.innerText) > 0) {
                    imgBonk.src = "daifuku.png";
                    stock_daifuku.innerText = parseInt(stock_daifuku.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            case "4":
                if (parseInt(stock_dango.innerText) > 0) {
                    imgBonk.src = "dango.png";
                    stock_dango.innerText = parseInt(stock_dango.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            case "5":
                if (parseInt(stock_dorayaki.innerText) > 0) {
                    imgBonk.src = "dorayaki.png";
                    stock_dorayaki.innerText = parseInt(stock_dorayaki.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            case "6":
                if (parseInt(stock_mochi.innerText) > 0) {
                    imgBonk.src = "mochi.png";
                    stock_mochi.innerText = parseInt(stock_mochi.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            case "7":
                if (parseInt(stock_monaka.innerText) > 0) {
                    imgBonk.src = "patisseriefleur.png";
                    stock_monaka.innerText = parseInt(stock_monaka.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            case "8":
                if (parseInt(stock_konpeito.innerText) > 0) {
                    imgBonk.src = "konpeito.png";
                    stock_konpeito.innerText = parseInt(stock_konpeito.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            case "9":
                if (parseInt(stock_tayaki.innerText) > 0) {
                    imgBonk.src = "tayiaki.png";
                    stock_tayaki.innerText = parseInt(stock_tayaki.innerText) - 1;
                } else {
                    selection.innerText = "NO STOCK";
                }
                break;
            default:
                selection.innerText = "ERROR";
                break;
        }

        checkSelection(); // Appel de la fonction de vérification de Nezuko

        setTimeout(() => {
            selection.innerText = "";
            imgBonk.src = "";
        }, 3000);
    });

    setNezukoRequest(); // Démarrer avec une demande de Nezuko
});
