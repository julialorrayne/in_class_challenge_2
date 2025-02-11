//task 1
let products = [
    {name: 'laptop', price: 1200, category: 'electronics'},
    {name: 'phone', price: 800, category: 'electronics'},
    {name: 'desk chair', price: 150,  category: 'furniture'},
    {name: 'notebook', price: 5, category: 'stationery'},
    {name: 'headphones', price: 100, category: 'electronics'}
];

function getProductsByCategory(products,category){
    return products.filter(product => product.category === category);
    }

console.log(getProductsByCategory(products, 'electronics'));

//task 2

//unction getProductNames(products) {
   // return products.map(product => product.name);

function applyDiscount(products,discount_rate){
    return products.map (product => ({
        ...product,
        price: product.price - (product.price * discount_rate)
    }   

    ) )
}

console.log(applyDiscount(products, 0.1));


//other example with spread operator
function sum3(x,y,z){
    return x+y+z
}

let numbers = [1,2,3];

console.log(sum3(...numbers));

//task 3

let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales){

    return sales.reduce((total,sale)=> total + sale, 0)
}

console.log(calculateTotalRevenue(sales));

//task 4

let employee = {
    name: 'John Doe',
    salary: 50000,
    position: 'Manager'
}

console.log(employee); //first time to see no change

function updateSalary(employee, percentageIncrease){
    employee.salary += employee.salary * percentageIncrease

};

console.log(updateSalary(employee, 0.1));

console.log(employee); //second time to see the change worked
