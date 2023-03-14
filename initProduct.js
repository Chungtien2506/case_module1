let initProduct = [
    new Cars("m1.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m2.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m1.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m2.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m3.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m4.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m5.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m6.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m7.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m8.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m9.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m1.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m2.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m4.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m4.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m5.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m6.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m7.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m8.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),
    new Cars("m9.jpg", "Mercedes GLC 300 FL 2023", "3.000.000.000", "thanh toán"),

]

    function showInitProduct() {
        let content = "";
        for (let i = 0; i < initProduct.length; i++) {
            content += `<div class="product">
                        <img class="imgPro" src="${initProduct[i]._img}" alt="">       
                        <div class="productText">
                            <ul>
                                    <li class="proName">${initProduct[i]._name}</li>
                                    <li><span class="proPrice">${initProduct[i]._price}</span></li> 
                                    <li>
                                     <form  id="checkout-form" method="GET" action="giohang.html" target="_blank">
                                            <input type="hidden" name="imgPro" value="m1.jpg">
                                            <input type="hidden" name="proName" value="Mecxedec">
                                            <input type="hidden" name="proPrice" value="3.000.000.000">   
                                            <input type="submit" value="Thanh toán">                                                                                     
<!--                                    <button class="proCar" type="submit" >${initProduct[i]._addcar}</button>-->
                                         </form> 
                                     </li>        
                            </ul>
                        </div>
                    </div>`
        }
        document.getElementById("displayProduct").innerHTML = content;
    }

showInitProduct();