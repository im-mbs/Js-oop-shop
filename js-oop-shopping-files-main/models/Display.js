class Display{
    constructor(parent , products){
        this.parent = parent;
        this.products = products;
        this.parent.addEventListener("click" , this)
    }

    productImg(data){
        const {image , alt} = data;
        const imgJSX = `<img src=${image} alt=${alt}>`

        return imgJSX;
    }
}

export default Display;