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

        var data  = {};
        data.product_id = product_id;
        data.numb = numb;
        // data.product_price = product_price;
        var csrf_token = $('#form_buy_product [name="csrfmiddlewaretoken"]').val();
        data["csrfmiddlewaretoken"] = csrf_token;
        var url = form.attr("action");
        console.log(data);
        $.ajax({
                   url: url,
                   type: "POST",
                   data: data,
                   cache: true,
                   success: function (data) {
                       console.log("OK");
                       console.log(data.products_total_nmb);
                       if (data.products_total_nmb){
                            $('#basket_total_nmb').text("("+data.products_total_nmb+")");
                            console.log(data.products);
                            $('#table-basket tbody').html("");
                            $.each(data.products, function(k, v){
                                $('#table-basket').append('<tr><td>'+v.product_name+'</ td><td>'+v.numb+' шт.</td><td> по '+v.price_per_item+' руб.</ td>');
                            });
                       // console.log(data.products_total_nmb);
                       // if (data.products_total_nmb || data.products_total_nmb == 0){
                       //    $('#basket_total_nmb').text("("+data.products_total_nmb+")");
                       //     console.log(data.products);
                       //     $('.basket-items ul').html("");
                       //     $.each(data.products, function(k, v){
                       //        $('.basket-items ul').append('<li>'+ v.name+', ' + v.nmb + 'шт. ' + 'по ' + v.price_per_item + 'грн  ' +
                       //            '<a class="delete-item" href="" data-product_id="'+v.id+'">x</a>'+
                       //            '</li>');
                       //     });
                        };

                   },
                   error: function(){
                       console.log("error");
                   },

        });
//+'<a class="delete-item" href="#">X</a>'+'</td></ tr>'
    });


    // function reshowBasket(e){
    //     e.preventDefault();
    //
    //     $('.dropdown-menu').addClass('show');
    // };
    //
    // $(document).on('click', '.delete-item', function(e) {
    //     e.preventDefault();
    //     $(this).closest('tr').remove();
    //     reshowBasket();
    // });
});
