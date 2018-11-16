from django.http import JsonResponse
from .models import ProductinBasket
def basket_adding(request):
    return_dict = dict()
    session_key = request.session.session_key
    print(request.POST)
    data = request.POST
    product_id = data.get("product_id")
    numb = data.get("numb")
    # price = data.get("product_price")


    new_product, created = ProductinBasket.objects.get_or_create(pb_session_key=session_key, pb_product_id=product_id, pb_is_active=True, defaults={"pb_qty": numb})
    if not created:
        print ("not created")
        new_product.pb_qty += int(numb)
        new_product.save(force_update=True)




    products_in_basket = ProductinBasket.objects.filter(pb_session_key=session_key, pb_is_active=True)

    products_total_nmb = products_in_basket.count()
    return_dict["products_total_nmb"] = products_total_nmb

    return_dict["products"] = list()
    for item in  products_in_basket:
        product_dict = dict()
        product_dict["id"] = item.id
        product_dict["product_name"] = item.pb_product.name
        product_dict["price_per_item"] = item.pb_price_per_item
        product_dict["numb"] = item.pb_qty
        return_dict["products"].append(product_dict)

    return JsonResponse(return_dict)
