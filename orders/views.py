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


    new_product = ProductinBasket.objects.create(pb_session_key=session_key, pb_product_id=product_id, pb_qty=numb)
    products_total_nmb = ProductinBasket.objects.filter(pb_session_key=session_key, pb_is_active=True).count()
    return_dict["products_total_nmb"] = products_total_nmb
    return JsonResponse(return_dict)
