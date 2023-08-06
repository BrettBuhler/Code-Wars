/*
For this challenge you need to create a SELECT statement, this statement must have NULL handling, using COALESCE and NULLIF.

If name is an empty string, you must replace with '[product name not found]'.

If card_name is an empty string, you must replace with '[card name not found]'.

If no price is specified (i.e. price is NULL), or if the price is 50 or less, you must discard the row.

eusales table schema
id
name
price
card_name
card_number
transaction_date
resultant table schema
id
name
price (greater than 50.00)
card_name
card_number
transaction_date
NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
*/
select 
  id,
  coalesce(nullif(name,''), '[product name not found]') as name,
  price,
  coalesce(nullif(card_name,''), '[card name not found]') as card_name,
  card_number,
  transaction_date
from eusales
where price > 50;