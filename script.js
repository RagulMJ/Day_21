window.onload = function(){
    let x = document.createElement('div')
    x.setAttribute('id','div')
    document.body.appendChild(x)
        let count=10
        let first=(f)=>{
            setTimeout(() => {
            if(count>=1)
                {
            x.classList.add('container','col-sm-12','text-center','bg','font','mt-5')
            x.innerText=count
                }
            if(count==0){
                x.classList.add('container','col-sm-12','text-center','bg','fontdisp')
                x.innerText="Happy Independence Day"
                    }
                    count--
                    f(first)
                }, 1000)
                }
            let second=(f)=>{
                f(second)
                }
            first(second)
        }