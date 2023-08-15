/*
Write an SQL query to retrieve the total number of sales and total amount for each category for the previous week. The term "previous week" refers to the time period that begins on the Monday immediately preceding the current week and ends on the following Sunday. This time period is considered to be the last complete week that has passed.

Database Schema:

categories:

category_id (integer, primary key) - Unique identifier for the category.
category_name (varchar) - Name of the category (e.g., Electronics, Clothing).
products:

product_id (integer, primary key) - Unique identifier for the product.
category_id (integer, foreign key) - References the category_id in the categories table.
product_name (varchar) - Name of the product.
sales:

sale_id (integer, primary key) - Unique identifier for the sale.
product_id (integer, foreign key) - References the product_id in the products table.
sale_date (date) - The date when the sale occurred.
amount (integer) - The amount of the sale in currency.
Resultant Dataset:

category_name (text) - Name of the category.
total_products_sold (integer) - Count of sales within the previous week for the given category.
total_sales_amount (integer) - Total amount of sales within the previous week for the given category.
The results should be ordered by the count of sales in descending order, then by the total amount in descending order, and finally by the category name in ascending order.
*/

select category_name, count(sales.sale_id) as total_products_sold, sum(sales.amount) as total_sales_amount
from categories
join products on categories.category_id = products.category_id
join sales on products.product_id = sales.product_id
where sales.sale_date >= date_trunc('week', current_date - interval '1 week') + interval '1 day' - interval '1 week'
and sales.sale_date < date_trunc('week', current_date + interval '1 day')
group by
categories.category_name
order by
total_products_sold desc,
total_sales_amount desc,
categories.category_name asc;