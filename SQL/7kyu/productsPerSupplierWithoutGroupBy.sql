/*
You are working with a database that contains information about various products supplied by different suppliers. The database has a table named products, which has the following schema:

id: (integer) - Primary key
supplier_id: (integer) – The unique identifier for each supplier.
product_name: (varchar) – The name of the product.
quantity: (integer) – The quantity of the product in stock.
Write a SQL query to find the total count of rows for each supplier, representing the total number of products (regardless of product name) for each supplier. Your query must not use the GROUP BY clause. But results should be exactly the same as in the query with Group By:

select supplier_id, count(id) as total_products
from products
group by supplier_id
order by supplier_id desc;
Your query must return exactly two columns:

supplier_id: The unique identifier for the supplier.
total_products: The total number of products for that supplier.
Result set should be ordered by supplier_id in descending order.
*/

select distinct p1.supplier_id,
    (select count(*) from products p2 where p2.supplier_id = p1.supplier_id) as total_orders
from products p1 order by supplier_id desc;