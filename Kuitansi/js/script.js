let BtnSubmit = document.getElementById('btnSubmit');

let carts = [];

function submitHandler(){
    let id;
    if(carts.length === 0){
        id = 1;
    }else{
        id = carts[carts.length - 1].id + 1;
    }
    let namaValue = document.getElementById('nama').value;
    let barangValue = document.getElementById('barang').value;
    let hargaValue = document.getElementById('harga').value;

    let tempObj = {
        id,
        barang: barangValue,
        harga: +hargaValue
    }
    document.getElementById('namaCart').innerHTML = namaValue;
    carts.push(tempObj);
    getCarts();
}

function getCarts(){
    let tBody = document.getElementById('tBody');
    tBody.innerHTML = '';

    carts.forEach(cart => {
        tBody.innerHTML += 
        `<tr>
        <td>${cart.id}</td>
        <td>${cart.barang}</td>
        <td>${cart.harga}</td>
        </tr>`
    })
}

let BtnPrint = document.getElementById('btnPrint')

BtnSubmit.addEventListener('click',submitHandler);

function printHandler(){
    document.querySelector('.form-box').style.display = 'none';
    BtnPrint.style.display = 'none';
    window.print();
}

BtnPrint.addEventListener('click', printHandler);