
/*1.En knapp som återställer allt till originalutseendet *************************************************************************/
    //återställ knappen
    let btns = document.querySelectorAll('button');
    let reset= btns[2];
    reset.innerText='RESET';
        //Sätt en event listener på reset-knappen
    reset.addEventListener('click', resetAll)    
    
    //sätt event listener för första knappen
    let knapp1=btns[0];
    knapp1.addEventListener('click', function(event){
        changeRandom();
        changeH2inArt2()       
    });
    
    function resetAll(){
        //3.- reset art1 till white
        let art1= document.querySelector ('.art-1')
        art1.style.backgroundColor='white';
        //4.- reset h2 
        let h2 =document.querySelector('.art-2 h2');
        h2.innerText='Sinus Hoodie';
        //4.- reset paragraph2
        let paragraph2=document.querySelector('.art-2 p');
        paragraph2.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque sint quaerat consequatur laudantium!'
        //3.- reset den försvannande h3 och p 
        let h3 =document.querySelector('.art-1 h3');
        let paragraph1=document.querySelector('.art-1 p');
        h3.style.color='#000000'
        paragraph1.style.color='#000000'
        //4. - korigera texten i ('.art-1 h2')
        let h2Art1 =document.querySelector('.art-1 h2');
        h2Art1.innerHTML=`Sinus Hoodie`
        h2Art1.style.fontSize='24px'
        //2. - foto2 är tilbacka
        let img2= figure2.firstElementChild;
        img2.setAttribute('src','img/hoodie-fire.png');
        img2.style.width='80%';
        //5. - färg på knapp 2 är tillbacka
        knapp2.style.backgroundColor='#222222';  
        //6. - icon bag, som var removed är tilbacka 
        iconBag!=true;
        if (iconBag){                                 
        let iconBag = document.createElement('img');
        let navAlla= document.querySelectorAll('header a');
        navAlla[2].insertAdjacentElement('afterend',iconBag);
        iconBag.setAttribute('src',"img/icon-bag.svg");
        iconBag.setAttribute('alt',"cart");   
        }
    
        //7. - remove lista av Distributors i footer
        if(sectionFooter.children[3]){
            sectionFooter.children[3].remove();
        }
            
    }
    
    /* 4. Ändra text på minst ett element-(h2 i art-2), (p i art-2), (h2 i art-1)  ************************************************************************/
    function changeH2inArt2(){
        let h2 =document.querySelector('.art-2 h2');
        let paragraph2=document.querySelector('.art-2 p');
        h2.innerText='Sinus Hoodie in Fire'; 
        paragraph2.textContent='Högsta kvalitet och stor rabatt.Enkel och säker betalning. Fler än 2500 märken. 100 dagars returrätt. Gratis frakt och retur. Sveriges favoritmärken. Trygg e-handel. Hemleverans.'
        let h2Art1 =document.querySelector('.art-1 h2');
        h2Art1.innerHTML=`Sinus Hoodie <br> Trycka på button för att välja färg på din hoodie`;
        h2Art1.style.fontSize='18px';
    }
    
    /* 3. ändrar art-1 backgrfärg till Random och (h3 i art-1), (p i art-1) till random för att försvinna **************************************************/
    
    function changeRandom(){
        const newColor =makeRandColor();
        let art1=document.querySelector('.art-1');
        let h3 =document.querySelector('.art-1 h3');
        let paragraph1=document.querySelector('.art-1 p');
        art1.style.backgroundColor=newColor;
        h3.style.color=newColor;
        paragraph1.style.color=newColor;
    }
    
     //en function, som ändrar färg random-  rgb(random(def område från 0 till 255), random (0-255), random (0-255))
    
    const makeRandColor=()=>{
        const r=Math.floor(Math.random()*255);
        const g=Math.floor(Math.random()*255);
        const b=Math.floor(Math.random()*255);
        return `rgb(${r},${g}, ${b})`;
    }
    
    
    /* 2. Byt ut minst ett foto *****************************************************************************************************************/
    //sätt event listener på andra figure
    let figure2=document.querySelector('.art-2 figure');
    
    figure2.addEventListener('mouseover', function(event){
        //traversing till img2
        let img2= figure2.firstElementChild;
        img2.setAttribute('src','https://images.unsplash.com/photo-1583239527279-b5e8a74266ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
        img2.style.width='100%';
        img2.style.height='233px';
               
    });    
    
    /* 5. Ändra färg på minst en knapp  ***********************************************************************************************************/
    //sätt event listener för andra knappen
    let knapp2=btns[1];
    knapp2.addEventListener('dblclick', function(event){
        const newColor =makeRandColor();
        knapp2.style.backgroundColor=newColor;  
    });
    
    /*6. Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen) ************************************************/
    let logoImage = document.querySelector('header img');
    let iconBag = document.querySelector('nav img');
    logoImage.addEventListener('mouseenter', function(e){                
        if (iconBag){
        iconBag.remove();
    }
    })
    
    
    /*7.Lägg till en lista var som helst i DOMen med  flera li element och varje li element ska ha en synlig border ********************************/
    var sectionFooter=document.querySelector('footer section');
    let contactDistributors=sectionFooter.firstElementChild.lastElementChild;
    
    contactDistributors.addEventListener('click', function(e){
    let lastArticleFooter=document.createElement('ul');            
    lastArticleFooter.textContent='Distributors';
    sectionFooter.children[2].insertAdjacentElement('afterend',lastArticleFooter);
            for(let i=0; i<4; i++){
                var listStader=document.createElement('li');
                listStader.innerText = `#${i}`;
                var allListStader=lastArticleFooter.appendChild(listStader)  
                allListStader.innerText = `#${i}`;
            }
    let stader=['Malmö', 'Helsingborg', 'Halmstad','Göteborg']
    let allList=lastArticleFooter.children;  
            for(let i=0; i<stader.length; i++){
                allList[i].innerText = stader[i];
            } 
      //style på UL
      lastArticleFooter.style.fontSize='1.17em';
      lastArticleFooter.style.marginBlockStart='1em';
      lastArticleFooter.style.marginBlockEnd='1em'; 
      lastArticleFooter.style.fontWeight='bold';
      lastArticleFooter.style.fontFamily='Open Sans';
        
      //style på li med synlig border
    for(let i=0; i<4; i++){      
        allList[i].style.color ='rgba(0,0,0, .8)';
        allList[i].style.listStyle ='none';
        allList[i].style.fontSize ='16px';
        allList[i].style.fontWeight ='normal';
        allList[i].style.border ='2px solid rgb(244, 182, 10)';
    } 
    })
    
    
    
    
    
    
    