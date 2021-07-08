// calculo de medidas del cuadrado
function cuadrado(){
    let m= document.getElementById("mcu").value;
    let a= m*2
    let p= m*4

    if(m>0){
        document.getElementById("acu").value=a.toFixed(2)+"Cm^2"
        document.getElementById("pcu").value=p.toFixed(2)+"Cm"
    }else{
        alert("inserte un numero valido")
    }

}
// calculo de medidas del triangulo
function triangulo(){
    const a =parseInt(document.getElementById("a").value);
    const b =parseInt(document.getElementById("b").value);
    const c =parseInt(document.getElementById("c").value);
    var tT =document.getElementById("tTriangulo").innerHTML;
    // equilatero
     if(a===b && b===c && c===a){
         let raiz= Math.sqrt(3)
         let h= (a*raiz)/4
         let ar= (h*a)/2
         let p= a*3
         document.getElementById("atr").value=ar.toFixed(2)+"Cm^2";
         document.getElementById("at").value=h.toFixed(2)+"Cm";
         document.getElementById("pt").value=p.toFixed(2)+"Cm";
         console.log(h)
        
        document.getElementById("tTriangulo").innerHTML="Es un triangulo equilatero"  
     }
     //isoceles
     else if(a===b && a!==c || b===c && b!==a || c===a && c!==b){
        let p=a+b+c;
             
        if(a===b && a!==c){
            let ar=(c/4)*Math.sqrt(4*(a*a)-(c*c))
            let h= 2*(ar/c)
            document.getElementById("at").value=h.toFixed(2)+"Cm";
            document.getElementById("atr").value=ar.toFixed(2)+"Cm^2";
        }
        else if(b===c && b!==a){
            let ar=(a/4)*Math.sqrt(4*(b*b)-(a*a))
            let h= 2*(ar/a)
            document.getElementById("at").value=h.toFixed(2)+"Cm";
            document.getElementById("atr").value=ar.toFixed(2)+"Cm^2";   
        }
        else if(c===a && c!==b){
            let ar=(b/4)*Math.sqrt(4*(a*a)-(b*b))
            let h=2*(ar/b)
            document.getElementById("at").value=h.toFixed(2)+"Cm";
            document.getElementById("atr").value=ar.toFixed(2)+"Cm^2";   
        }
        document.getElementById("pt").value=p.toFixed(2)+"Cm";
        document.getElementById("tTriangulo").innerHTML="Es un triangulo isoceles"
     }
     // escaleno
     else if(a!==b!==c){
         let p=a+b+c;
         let s= p/2
         let ar= Math.sqrt(s*(s-a)*(s-b)*(s-c))
         let h= (2/c)*ar
         document.getElementById("at").value=h.toFixed(2)+"Cm";
         document.getElementById("atr").value=ar.toFixed(2)+"Cm^2";   
         document.getElementById("pt").value=p.toFixed(2)+"Cm";
         document.getElementById("tTriangulo").innerHTML="Es un triangulo escaleno"
     }    
}
// calculo de medidas del circulo
function circulo(){
    let d= document.getElementById("mc").value;
    let PI= Math.PI
    let expd= Math.pow(d,2)
    let r= d/2
    let expr= Math.pow(r,2)
    let a= PI*expr
    let p= PI*expd

    if(d>0){
        document.getElementById("rc").value=r.toFixed(2)+"Cm"
        document.getElementById("ac").value=a.toFixed(2)+"Cm^2"
        document.getElementById("pc").value=p.toFixed(2)+"Cm"
    }else{
        alert("inserte un numero valido")
    }
}