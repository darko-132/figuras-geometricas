// calculo de medidas del cuadrado
function cuadrado(){
    let m= document.getElementById("mcu").value;
    let a= m*2
    let p= m*4

    if(m>0){
        document.getElementById("acu").value=a.toFixed(2)
        document.getElementById("pcu").value=p.toFixed(2)
    }else{
        alert("inserte un numero valido")
    }

}
// calculo de medidas del triangulo
function triangulo(){
    let m= document.getElementById("mt").value;
    let raiz= Math.sqrt(3)
    let exp= Math.pow(m,2)
    let h= (m*raiz)/2
    let a= (exp*raiz)/4
    let p= m*3

    if(m>0){
        document.getElementById("at").value=h.toFixed(2)
        document.getElementById("atr").value=a.toFixed(2)
        document.getElementById("pt").value=p.toFixed(2)
    }else{
        alert("inserte un numero valido")
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
        document.getElementById("rc").value=r.toFixed(2)
        document.getElementById("ac").value=a.toFixed(2)
        document.getElementById("pc").value=p.toFixed(2)
    }else{
        alert("inserte un numero valido")
    }
}