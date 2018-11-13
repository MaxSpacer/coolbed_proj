$(document).ready(function() {
    var form = $('#form_buy_product');
    console.log(form);
    form.on('submit', function(e){
        e.preventDefault();
        var numb = $('#in-buy-product').val();
        console.log(numb);
        var in_buy_btn = $('#in-buy-btn');
        var product_name = in_buy_btn.data("product_name");
        var product_id = in_buy_btn.data("product_id");
        var product_price = in_buy_btn.data("product_price");
        console.log(product_name);
        console.log(product_id);
        console.log(product_price);

        $('#table-basket').append('<tr><td>'+product_name+'</ td><td>'+numb+'</td><td>'+product_price+'</ td><td>'+'<a class="delete-item" href="#">X</a>'+'</td></ tr>');

    });

    $(document).on('click', '.delete-item', function(e) {
        e.preventDefault();
        $(this).closest('tr').remove();
        reshowBasket(e);
    });
});
