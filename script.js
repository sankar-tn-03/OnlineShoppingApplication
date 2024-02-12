var cart_no = 1 ;
var s="";
var total=0;
function HomeController()
{
    start.scrollIntoView({
        behavior:'smooth'
    });
}

function PerformAction()
{
    var value = document.getElementById('dropdown').value;
    console.log(value);
    if(value == 'option1')
    {
        FurnitureController();
    }
    else if(value == 'option2')
    {
        GroceryController();
    }
    else if(value == 'option3')
    {
        ClothesController();
    }

}

function FurnitureController()
{
    furniture.scrollIntoView({
        behavior:'smooth'
    });
}

function ClothesController()
{
    Clothes.scrollIntoView({
        behavior:'smooth'
    });
}

function GroceryController()
{
    Grocery.scrollIntoView({
        behavior:'smooth'
    });
}

function NavigateToHome()
{
    window.location.href='Home.html';
}

function NavigateToContact()
{
    window.location.href='Contact.html';
}

function NavigateToCart()
{
    window.location.href='Cart.html';
}

function NavigateToLogin()
{
    window.location.href='index.html';
}

function addToCart(name,price)
{
    total+=price;
    s+=name+" with price $"+price+" added to cart successfully!";
    window.location.href='Cart.html';
}
 