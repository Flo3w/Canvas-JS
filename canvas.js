
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
let graphique = [14,8,24,13,6,12,14,16,11,18,3,20];
let slide = document.querySelector('#slider')


// xCarre(8);
//deuxCarres();
// miniMatrice();
// matrice(300,150);
// trace();
// arc();
// quatreArcs();
// slider();

// Graphique
histogram(graphique, "Liste de notes");
ligne(graphique, "Liste de notes");
//camembert(graphique, "Liste de notes");
clacos(graphique);


// Fonctions

// un certain nombre de carrés
function xCarre(x=1) {
    let largeur = 100;
    let marge = 10;
    
    for(let i=0; i<x; i++) {
        ctx.fillRect((largeur+marge)*i,100,100,100);
    }
}

// deux carrés centrés, un vide un plein
function deuxCarres() {
    ctx.strokeRect(190,200,200,200);
    ctx.fillRect(410,200,200,200);
}

// Cinq carré - au centre un gros carré d'une couleur et autour 4 carrés d'autres couleur en transparence
function cinqCarres() {
    let couleur1 = 'rgba(255,0,0,1)';
    let couleur2 = 'rgba(255,255,0,0.5)';
    let couleur3 = 'rgba(255,0,255,0.5)';
    let couleur4 = 'rgba(0,255,255,0.5)';
    let couleur5 = 'rgba(255,128,0,0.5)';

    ctx.fillStyle = couleur1;
    ctx.fillRect(250,150,300,300);
    ctx.fillStyle = couleur2;
    ctx.fillRect(150,50,200,200);
    ctx.fillStyle = couleur3;
    ctx.fillRect(450,50,200,200);
    ctx.fillStyle = couleur4;
    ctx.fillRect(150,350,200,200);
    ctx.fillStyle = couleur5;
    ctx.fillRect(450,350,200,200);
}

// On dessine des carrés à partir d'un tableau de valeur
function miniMatrice() {
    let monTableau = ['green','purple','red','lime','teal', 'pink','blue','orange','gold'];
    let largeur = 50;
    let marge = 2;
    let x=monTableau.length;
    let retour = 3;
    let y = 0;
    let cx = 0;
    
    for(let i=0; i<x; i++) {
        cx++;
        if(i%retour==0) {
            y = y+largeur+marge;
            cx = 1;
        }
        ctx.fillStyle = monTableau[i];
        ctx.fillRect(marge+(largeur+marge)*cx,y,largeur,largeur);
    }
}

// Meme chose qu'au dessus mais on va a la ligne tous les 13 valeurs
function matrice(originX,originY) {
        let monTableau = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,2,1,1,1,2,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let largeur = 20;
    let marge = 1;
    let x=monTableau.length;
    let retour = 13;
    let y = 0;
    let cx = 0;
    let couleur = ['white','red','blue'];
    
    for(let i=0; i<x; i++) {
        cx++;
        if(i%retour==0) {
            y = y+largeur+marge;
            cx = 1;
        }
        
        ctx.fillStyle = couleur[monTableau[i]];
        ctx.fillRect(originX+marge+(largeur+marge)*cx,originY+y,largeur,largeur);
    }
}

// creation d'un tracé
function trace() {
    // style de mes tracé
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth =3;
    // Première forme
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(300,100);
    ctx.lineTo(300,300);
    ctx.lineTo(500,300);
    ctx.lineTo(500,500);
    ctx.lineTo(100,500);
    ctx.closePath();
    // tracé de la première forme
    ctx.fill();
    ctx.stroke();
    // Deuxième forme
    ctx.beginPath();
    ctx.moveTo(250,150);
    ctx.lineTo(450,350);
    ctx.lineTo(250,350);
    ctx.closePath();
    // Tracé de la deuxième forme
    ctx.fill();
    ctx.stroke();

}

// Conversion des degrés en radian
function deg2rad(d) {
    let radian = Number(d)*(Math.PI/180);
    return radian;
}

// un arc de cercle
function arc() {
    ctx.beginPath();
    ctx.moveTo(300,300);
    ctx.arc(100,300,200,0,deg2rad(-90), true);
    ctx.lineTo(100,300);
    ctx.closePath();
    // tracé 
    ctx.stroke();
}

// 4 arcs de cercle
function quatreArcs() {
    ctx.beginPath();
    ctx.moveTo(650,250);
    ctx.arc(450,250,200,0,deg2rad(-90), true);
    ctx.lineTo(450,250);
    ctx.closePath();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(650,350);
    ctx.arc(450,350,200,0,deg2rad(90), false);
    ctx.lineTo(450,350);
    ctx.closePath();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(350,550);
    ctx.arc(350,350,200,deg2rad(90),deg2rad(180), false);
    ctx.lineTo(350,350);
    ctx.closePath();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(150,250);
    ctx.arc(350,250,200,deg2rad(180),deg2rad(270), false);
    ctx.lineTo(350,250);
    ctx.closePath();
    ctx.stroke();
}

// Cercle
function cercle(x,y,r,c='black') {
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arc(x,y,r,0,deg2rad(360));
    ctx.closePath();
    ctx.fillStyle = c;
    ctx.fill();
}

// Slider{
function slider() {
    slide.addEventListener('input', function() {
        console.log(slide.value);
        ctx.clearRect(0,0,800,600);
        for(let i=0; i<slide.value; i++) {
            let x = Math.floor(Math.random() * 800);
            let y = Math.floor(Math.random() * 600);
            let r = Math.floor(Math.random() * 30);
            let c = 'rgb('+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +')';
            
            cercle(x,y,r,c);
        }

    });
}


// Graphique
// affiche un histogramme à partir d'un tableau de valeur
function histogram(tableau, titre='') {
    let couleur = 'teal';
    let couleurTexte = 'red';
    let largeur = 30;
    let base = 350;
    let marge = 5;
    let coef = 10;
    let y = 100;
    ctx.font = '18px sans-serif';
    for(let i=0; i<tableau.length; i++) {
        let hauteur = tableau[i]*coef;
        ctx.fillStyle = couleur;
        ctx.fillRect(marge+(largeur+marge)*i,base-y,largeur, -hauteur);
        let tailleTexte = ctx.measureText(tableau[i]);
        let posX = (largeur - tailleTexte.width)/2;
        ctx.fillStyle = couleurTexte;
        ctx.fillText(tableau[i], posX+marge+(largeur+marge)*i,base-80);
    }
    // titre
    let largeGraph = tableau.length*(largeur+marge);
    let largeTitre = ctx.measureText(titre);
    let posXTitre = (largeGraph - largeTitre.width)/2;
    ctx.fillText(titre, posXTitre,base-55);
    
}

// Lignes brisées
function ligne(tableau, titre='') {
    let couleur = 'teal';
    let couleurTexte = 'red';
    let largeur = 30;
    let base = 350;
    let marge = 5;
    let coef = 10;
    let y = 100;
    ctx.font = '18px sans-serif';
    ctx.beginPath();
    ctx.lineWidth = 2;
    for(let i=0; i<tableau.length; i++) {
        let hauteur = tableau[i]*coef;
        ctx.strokeStyle = couleur;
        ctx.lineTo(300+marge+(largeur+marge)*i,base-y-hauteur);
        ctx.fillStyle = couleurTexte;
        ctx.fillText(tableau[i], 290+marge+(largeur+marge)*i,base-y-hauteur-10);
    }
    ctx.stroke();
    
    for(let i=0; i<tableau.length; i++) {
        let hauteur = tableau[i]*coef;
        cercle(300+marge+(largeur+marge)*i,base-y-hauteur,5, couleur);
        //let tailleTexte = ctx.measureText(tableau[i]);
        //let posX = (largeur - tailleTexte.width)/2;
        //ctx.fillStyle = couleurTexte;
        //ctx.fillText(tableau[i], posX+marge+(largeur+marge)*i,base-80);
    }
    
    
    
    // titre
    let largeGraph = tableau.length*(largeur+marge);
    let largeTitre = ctx.measureText(titre);
    let posXTitre = (largeGraph - largeTitre.width)/2;
    ctx.fillText(titre, 300+posXTitre,base-55);
}

// Camembert
function camembert(tableau, titre='') {
    let couleur = 'teal';
    let couleurTexte = 'red';
    let cX = 100;
    let cY = 100;
    let base = 540;
    let baseX = 50;
    let marge = 5;
    let coef = 10;
    let y = 100;
    let r = 130;
    let total = 0;
    let angleDebut = 0;
    let angleFin = 0;
    ctx.font = '18px sans-serif';
    //total
    for(let i=0; i<tableau.length; i++) {
        total += tableau[i];
    }
    
    for(let i=0; i<tableau.length; i++) {
        // angles
        ctx.beginPath();
        let prop = tableau[i]/total;
        angleDebut = angleFin;
        angleFin = angleDebut+(prop*deg2rad(360));
        console.log(angleDebut, angleFin);
        ctx.fillStyle = magicColor();
        ctx.moveTo(cX+baseX,base-cY);
        ctx.arc(cX+baseX,base-cY,r, angleDebut, angleFin);
        ctx.lineTo(cX+baseX,base-cY);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = magicColor();
        //ctx.fillText(tableau[i], baseX + (Math.cos(angleDebut)*r), base + (Math.sin(angleDebut)*r));
    }
    
    // titre
    /*
    let largeGraph = tableau.length*(largeur+marge);
    let largeTitre = ctx.measureText(titre);
    let posXTitre = (largeGraph - largeTitre.width)/2;
    ctx.fillText(titre, posXTitre,base-55);*/
}


// clacos
function clacos(tableau) {
    let x = 200;
    let y = 450;
    let r = 130;
    let angleDebut = 0;
    let angleFin = 0;
    let total = 0;
    // total
    for(let i=0; i<tableau.length; i++) {
        total += tableau[i];
    }
    
    console.log(total);
    for(let i=0; i<tableau.length; i++) {
        let prop = tableau[i]/total;
        angleDebut = angleFin;
        angleFin = angleDebut+deg2rad(360)*prop;
        
        ctx.fillStyle = magicColor();
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.arc(x,y,r,angleDebut,angleFin);
        ctx.lineTo(x,y);
        ctx.closePath();
        ctx.fill();
    }
}

// couleur au hasard
function magicColor() {
    return 'rgb('+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +','+ Math.floor(Math.random() * 255) +')';

}