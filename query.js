/*
    sampleData => restaurants =>  {??}
    Sorts data by hamburger in BK
    {borough: "Brooklyn", cuisine: "Hamburgers"}
*/

/*
1. Database  :   sample_airbnb Database -> listingsAndReviews
1. Desc      :   select the table where url = "" 
1. Query     :   {listing_url:"https://www.airbnb.com/rooms/10006546"}
*/

/*
2. Database  :   sample_airbnb Database -> listingsAndReviews
2. Desc      :   select the listing using "OR" Operator
2. Query     :   { $or:  [{ property_type : "House" }, { bed_type : "Real Bed" }] }
*/

/*
3. Database  :   sample_airbnb Database -> listingsAndReviews
3. Desc      :   select the listing using "AND" Operator
3. Query     :   { $and: [{ name: "Ribeira Charming Duplex" },  { cancellation_policy: "moderate" } ] }
*/

/*
4. Database  :   sample_analytics -> accounts
4. Desc      :   select the listing using "NOR"  Operator
4. Query     :   { $nor: [{ limit: 9000 },  { products: { $size: 2 } } ]  } 
*/

/*
5. Database  :   sample_analytics -> accounts
5. Desc      :   select the listing using "NOT" and "AND" Operator
5. Query     :   { $and: [{ limit: { $not: { $eq: 9000 } } },{ products: { $not: { $size: 2 } } } ]}
*/

/*
6. Database  :   sample_analytics -> customers
6. Desc      :   select the listing using "EQ" Operator
6. Query     :   { username: { $eq: "fmiller" }}
*/

/*
7. Database  :   sample_analytics -> customers
7. Desc      :   select the listing using "NE" Operator
7. Query     :   { username: { $ne: "fmiller" }}
*/

/*
8. Database  :   sample_mflix -> embedded_movies
8. Desc      :   select the listing using "GT" and "LT" Operator
8. Query     :  { runtime: { $gt: 200, $lt: 300 }}
*/

/*
9. Database  :   sample_restaurants -> restaurants
9. Desc      :   select the listing using "IN" Operator
9. Query     :   { cuisine: { $in: ["American", "Bakery"] } }
*/

/*
10. Database  :   sample_weatherdata -> data
10. Desc      :   select the listing using "NIN"
10. Query     :   { sections: { $nin: [{ "type": "Type1" }, { "type": "Type2" }] }}
*/

