/*
Overview
For this kata we will be using the DVD Rental database.

You are working for a company that wants to reward its top 10 customers with a free gift. You have been asked to generate a simple report that returns the top 10 customers by total amount spent ordered from highest to lowest. Total number of payments has also been requested.

The query should output the following columns:

customer_id [int4]
email [varchar]
payments_count [int]
total_amount [float]
and has the following requirements:

only returns the 10 top customers, ordered by total amount spent from highest to lowest
Database Schema
*/

SELECT c.customer_id, c.email, COUNT(p.payment_id) AS payments_count, CAST(SUM(p.amount) AS FLOAT) AS total_amount
FROM customer AS c
JOIN payment AS p ON c.customer_id = p.customer_id
GROUP BY c.customer_id, c.email
ORDER BY total_amount DESC
LIMIT 10;