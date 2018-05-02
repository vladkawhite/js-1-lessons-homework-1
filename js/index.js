   let  a = parseInt(prompt('Enter a: ')),
        b = parseInt(prompt('Enter b: ')),
        c = parseInt(prompt('Enter c: ')),
        result1 = null,
        result2 = null;
    
    let myFunc = function(a, b, c){
        
        if(a === 0){
            alert('Error a = 0');
        }
        
        if(Math.pow(b, 2) - (4 * a * c) < 0){
            alert('Error')
        }
        
        else{
            result1 = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/(2 * a);
            result2 = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/(2 * a);
        }
    }
    
    myFunc(a, b, c)
    document.write('x1 is: ' + result1 + '<br>' + 'x2 is: ' + result2)
;